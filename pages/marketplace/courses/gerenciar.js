










import { useAdmin, useManagedCourses } from "@components/hooks/web3";
import { useWeb3 } from "@components/providers";
import { Button, Message } from "@components/ui/common";
import { CourseFilter, ManagedCourseCard } from "@components/ui/course";
import { BaseLayout } from "@components/ui/layout";
import { MarketHeader, MarketHeaderNoBar } from "@components/ui/marketplace";
import { normalizeOwnedCourse } from "@utils/normalize";
import { useEffect, useState } from "react";

const VerificationInput = ({onVerify}) => {
  const [ email, setEmail ] = useState("")

  return (
    <div className="flex mr-2 relative rounded-md">
      <input
        value={email}
        onChange={({target: {value}}) => setEmail(value)}
        type="text"
        name="account"
        id="account"
        className="w-96 focus:ring-indigo-500 shadow-md focus:border-indigo-500 block pl-7 p-4 sm:text-sm border-gray-300 rounded-md"
        placeholder="0x2341ab..." />
      <Button
        onClick={() => {
          onVerify(email)
        }}
      >
        Verificar
      </Button>
    </div>
  )
}

export default function ManagedCourses() {
  const [ proofedOwnership, setProofedOwnership ] = useState({})
  const [ searchedCourse, setSearchedCourse ] = useState(null)
  const [ filters, setFilters ] = useState({state: "todos"})
  const { web3, contract } = useWeb3()
  const { account } = useAdmin({redirectTo: "/marketplace"})
  const { managedCourses } = useManagedCourses(account)


  const verifyCourse = (email, {hash, proof}) => {
    if(!email){
      return null
    }
    const emailHash = web3.utils.sha3(email)
    //hash do email + hash do curso = comprovante
    const proofToCheck = web3.utils.soliditySha3(
      {type: "bytes32", value:emailHash},
      {type: "bytes32", value:hash} 
      )

      proofToCheck === proof ?
        setProofedOwnership({
          ...proofedOwnership,
          [hash]: true
        }) :
      setProofedOwnership({
          ...proofedOwnership,
          [hash]: false
        })
  }


// SALDO ANTES DA TRANSAÇÃO -> 85,233893735999999996

// TAXA GAS 133009 * VALOR DO GAS 20000000000 -> 2660180000000000 WEI -> 0,00266018 ETH DE TAXAS

// GAS + VALOR ENVIADO = 0,00266018 + 1 -> 1,00266018

// APÓS A TX -> 84,231233556
// APÓS A TX PELO TRUFFLE CONSOLE -> 84,231233556 NO TERMINAL
//             85,231233556

  const changeState = async (courseHash, method) => {
    try {
      await contract.methods[method](courseHash).send({from:account.data})
    } catch (e) {
      console.error(e.message)
    }
  }

  const activateCourse = async courseHash => {
    changeState(courseHash, "activateCourse")
  }

  const deactivateCourse = async courseHash => {
    changeState(courseHash, "deactivateCourse")
  }

  const searchCourse = async hash => {
    const re = /[0-9A-Fa-f]{6}/g;

    if(hash && hash.length === 66 && re.test(hash)) {
      const course = await contract.methods.getCourseByHash(hash).call()

      if (course.owner !== "0x0000000000000000000000000000000000000000") {
        const normalized = normalizeOwnedCourse(web3)({hash}, course)
        setSearchedCourse(normalized)
        return
      }
    }

    setSearchedCourse(null)
  }

  const renderCard = (course, isSearched) => {
    return (
      <ManagedCourseCard
        key={course.ownedCourseId}
        isSearched={isSearched}
        course={course}
      >
        <VerificationInput
          onVerify={email => {
            verifyCourse(email, {
              hash: course.hash,
              proof: course.proof
            })
          }}
        />
        { proofedOwnership[course.hash] &&
          <div className="mt-2">
            <Message>
              Verificado!
            </Message>
          </div>
        }
        { proofedOwnership[course.hash] === false &&
          <div className="mt-2">
            <Message type="danger">
              Nada Consta!
            </Message>
          </div>
        }
        { course.state === "comprado" &&
          <div className="mt-2">
            <Button
              onClick={() => activateCourse(course.hash)}
              variant="green">
              Ativar
            </Button>
            <Button
              onClick={() => deactivateCourse(course.hash)}
              variant="red">
              Desativar
            </Button>
          </div>
        }
      </ManagedCourseCard>
    )
  }

  const filterCourses = 
      managedCourses.data?.filter((course) => {
        if(filters.state === "todos"){
          return true
        }
        return course.state === filters.state
      }).map(course => renderCard(course))

  return (
    <>
      <MarketHeaderNoBar />
      <CourseFilter
        onFilterSelect={(value) => setFilters({state: value})}
        onSearchSubmit={searchCourse}
      />
      <section className="grid grid-cols-1">
        { searchedCourse &&
          <div>
            <h1 className="text-2xl font-bold p-5">Pesquisar</h1>
            { renderCard(searchedCourse, true) }
          </div>
        }
        <h1 className="text-2xl font-bold p-5">Todos os Conteúdos</h1>
        { filterCourses }
        { filterCourses?.length === 0 &&
          <Message type="danger"> 
            Não há registros
          </Message>
        }
      </section>
    </>
  )
}

ManagedCourses.Layout = BaseLayout
