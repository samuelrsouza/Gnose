









import { useAdmin, useManagedCourses } from "@components/hooks/web3";
import { useWeb3 } from "@components/providers";
import { Button, Message } from "@components/ui/common";
import { CourseFilter, ManagedCourseCard } from "@components/ui/course";
import { BaseLayout } from "@components/ui/layout";
import { MarketHeader, MarketHeaderNoBar } from "@components/ui/marketplace";
import { normalizeOwnedCourse } from "@utils/normalize";
import { useEffect, useState, useCallback } from "react";

// const AddressInput = ({accountLoad}) => {
//   return (
//     <div className="flex mr-2 relative rounded-md">
//       <input
//         value={accountToAdd}
//         onChange={({target: {value}}) => setAccountToAdd(value)}
//         type="text"
//         name="studentAddress"
//         id="studentAddress"
//         className="w-96 focus:ring-indigo-500 shadow-md focus:border-indigo-500 block pl-7 p-4 sm:text-sm border-gray-300 rounded-md"
//         placeholder="Digite a Carteira do Aluno..." />
//       <Button
//         onClick={() => {
//           accountLoad(accountToAdd)
//         }}
//       >
//         Adicionar Carteira
//       </Button>      
//     </div>
//   )
// }

// const SkillInput = ({skillLoad}) => {
//   const [ skillToAdd, setSkillToAdd ] = useState("")

//   return (
//     <div className="flex mr-2 relative rounded-md">
//     <input
//             value={skillToAdd}
//             onChange={({target: {value}}) => setSkillToAdd(value)}
//             type="text"
//             name="studentSkill"
//             id="studentSkill"
//             className="w-96 focus:ring-indigo-500 shadow-md focus:border-indigo-500 block pl-7 p-4 sm:text-sm border-gray-300 rounded-md"
//             placeholder="Digite a Habilidade do Aluno..." />

//           <Button
//             onClick={() => {
//               skillLoad(skillToAdd)
//             }}
//           >
//             Adicionar Habilidade
//           </Button>
//           </div>
//     )
//   }

export default function ManagedCourses() {
  
  // const [ proofedOwnership, setProofedOwnership ] = useState({})
  // const [ searchedCourse, setSearchedCourse ] = useState(null)
  const [ filters, setFilters ] = useState({state: "todos"})
  const { web3, contract } = useWeb3()
  const { account } = useAdmin({redirectTo: "/marketplace"})
  const { managedCourses } = useManagedCourses(account)


  // const verifyCourse = (email, {hash, proof}) => {
  //   if (!email) {
  //     return
  //   }

  //   const emailHash = web3.utils.sha3(email)
  //   const proofToCheck = web3.utils.soliditySha3(
  //     { type: "bytes32", value: emailHash },
  //     { type: "bytes32", value: hash }
  //   )

  //   proofToCheck === proof ?
  //     setProofedOwnership({
  //       ...proofedOwnership,
  //       [hash]: true
  //     }) :
  //     setProofedOwnership({
  //       ...proofedOwnership,
  //       [hash]: false
  //     })
  // }

  const addStudent =  async () =>{

    var accountToAdd = document.getElementById('studentAddress').value;
    var skillToAdd = document.getElementById('studentSkill').value;

    const load = await contract.methods.addSkill(accountToAdd, skillToAdd);
    console.log(load)

  }

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

  // const deactivateCourse = async courseHash => {
  //   changeState(courseHash, "deactivateCourse")
  // }


  const addFund = async () => {
    const deposit = await contract.methods.addFunds().send({value: web3.utils.toWei("0.0043217479618327", "ether"),from: account.data});
    console.log(deposit) 
  }
  //86.0937



  // const searchCourse = async hash => {
  //   const re = /[0-9A-Fa-f]{6}/g;

  //   if(hash && hash.length === 66 && re.test(hash)) {
  //     const course = await contract.methods.getCourseByHash(hash).call()

  //     if (course.owner !== "0x0000000000000000000000000000000000000000") {
  //       const normalized = normalizeOwnedCourse(web3)({hash}, course)
  //       setSearchedCourse(normalized)
  //       return
  //     }
  //   }

  //   setSearchedCourse(null)
  // }

  const renderCard = (course, isSearched) => {
    return (
      <ManagedCourseCard
        key={course.ownedCourseId}
        isSearched={isSearched}
        course={course}
      >
        {/* { proofedOwnership[course.hash] &&
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
        } */}
        { course.state === "comprado" &&
          <div className="mt-2 place-items-center content-center">
            <Button
              onClick={() => activateCourse(course.hash)}
              variant="green"
              className="button is-primary ml-13">
              Ativar
            </Button>
            <div className="flex mr-2 relative rounded-md">
          <form name ="subscribe" id="subscribe_frm" action="#">
            <div className="w-96 focus:ring-indigo-500 shadow-md focus:border-indigo-500 block pl-7 p-4 sm:text-sm border-gray-300 rounded-md">
              Endereço do Aluno: <input type="text" name="address" id="studentAddress" />
            </div>
            <div className="w-96 focus:ring-indigo-500 shadow-md focus:border-indigo-500 block pl-7 p-4 sm:text-sm border-gray-300 rounded-md">
              Habilidade desenvolvida: <input type="text" name="skill" id="studentSkill" />
            </div>
          <Button
              onClick={addStudent}
              className="button is-primary ml-10">
                Enviar Skill
            </Button>
          </form> 
        </div>
            {/* <Button
              onClick={() => deactivateCourse(course.hash)}
              variant="red"
              className="button is-primary ml-10 mt-6">
              Desativar
            </Button> */}
            {/* <Button
                onClick={withdraw}
                className="button is-primary ml-10">
                  Realizar tranferência
            </Button> */}
            <Button
                onClick={addFund}
                className="button is-primary ml-10">
                  Adicionar fundos ao contrato
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
        // onSearchSubmit={searchCourse}
      />
      <section className="grid grid-cols-1">
        {/* { searchedCourse &&
          <div>
            <h1 className="text-2xl font-bold p-5">Pesquisar</h1>
            { renderCard(searchedCourse, true) }
          </div>
        } */}
        <h1 className="text-2xl font-bold p-5">Todos os Cursos</h1>
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
