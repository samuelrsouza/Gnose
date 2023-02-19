









import { useAdmin, useManagedCourses } from "@components/hooks/web3";
import { useWeb3 } from "@components/providers";
import { Button, Message } from "@components/ui/common";
import { CourseFilter, ManagedCourseCard } from "@components/ui/course";
import { BaseLayout } from "@components/ui/layout";
import { MarketHeader, MarketHeaderNoBar } from "@components/ui/marketplace";
import { normalizeOwnedCourse } from "@utils/normalize";
import { useEffect, useState, useCallback } from "react";


export default function ManagedCourses() {
  
  const [ filters, setFilters ] = useState({state: "todos"})
  const { web3, contract } = useWeb3()
  const { account } = useAdmin({redirectTo: "/marketplace"})
  const { managedCourses } = useManagedCourses(account)


  const addStudent =  async () =>{

    const accountToAdd = document.getElementById('address').value
    const skillToAdd = document.getElementById('skill').value 

    const setStudent = await contract.methods.addSkill(accountToAdd, skillToAdd).send({from:account.data})
    
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

  const addFund = async () => {
    const deposit = await contract.methods.addFunds().send({value: web3.utils.toWei("0.004", "ether"),from: account.data});
    console.log(deposit) 
  }

  const renderCard = (course, isSearched) => {
    return (
      <ManagedCourseCard
        key={course.ownedCourseId}
        isSearched={isSearched}
        course={course}
      >
        { course.state === "comprado" &&
        <div className="grid sm:justify-center">
          <Button
            onClick={() => activateCourse(course.hash)}
            variant="green"
            className="button is-primary mb-4">
            Ativar
          </Button>
            <div className="items-start mt-3 mb-4 grid sm:justify-center relative rounded-md">
              <div className="w-full max-w-xs">
                <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                  <div className="mb-4">
                    <label className="block text-gray-500 text-sm font-bold mb-2">
                      Endereço do Aluno
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="address" type="address" placeholder="0x23Af..."/>
                  </div>
                  <div className="mb-6">
                    <label className="block text-gray-500 text-sm font-bold mb-2">
                      Habilidade do Módulo
                    </label>
                    <input className="shadow appearance-none border border-black-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="skill" type="skill" placeholder="Verifique a Habilidade"/>
                  </div>
                  <div className="flex items-center justify-between">
                    <Button
                      onClick={addStudent}
                      variant="purple"
                      className="button is-primary ml-13">
                      Adicionar Habilidade
                    </Button>
                  </div>
                </form>
              </div>
            </div>
            <Button
                onClick={addFund}
                className="button is-primary">
                  Adicionar fundos ao contrato
            </Button>
          </div>
        // </div>
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
      />
      <section className="grid grid-cols-1">
        <h1 className="text-2xl font-bold mr-10 p-6 ">Todos os Cursos</h1>
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
