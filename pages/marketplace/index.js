import { CourseCard, CourseList } from "@components/ui/course"
import { BaseLayout } from "@components/ui/layout"
import { getAllCourses } from "@content/courses/fetcher"
import { useOwnedCourses, useWalletInfo } from "@components/hooks/web3"
import { Button, Loader } from "@components/ui/common"
import { OrderModal } from "@components/ui/order"
import { useState } from "react"
import { MarketHeader } from "@components/ui/marketplace"
import { useWeb3 } from "@components/providers"
import { networks } from "truffle-config"
  

export default function Marketplace({courses}) {
  const { web3, contract, requireInstall } = useWeb3()
  const { hasConnectedWallet, isConnecting, account } = useWalletInfo()
  const [selectedCourse, setSelectedCourse] = useState(null)
  const { ownedCourses } = useOwnedCourses(courses, account.data)


  const purchaseCourse = async order =>{
    const hexCourseId = web3.utils.utf8ToHex(selectedCourse.id)

    const value = web3.utils.toWei(String(order.price))

    try {
      const result = await contract.methods.purchaseCourse(hexCourseId).send({from: account.data, value})
      console.log(result)
    } catch (error) {
      console.log("Não foi possível efetuar a compra.")
    }
  }

  return (
    <>
      <div className="py-4">
      <MarketHeader />
      </div>
      <CourseList
        courses={courses}
      >
      {course =>
        <CourseCard
          key={course.id}
          course={course}
          disabled = {!hasConnectedWallet}
          Footer={() => {

            if(requireInstall){
              return(
                <Button
                  disabled = {true}
                  variant="green">
                    Instale o Metamask
                </Button>
              )
            }

            if(isConnecting) {
              return(
                <Button
                  disabled = {true}
                  variant="green">
                    <Loader size="sm"/>
                </Button>
              )
            }

            if(!ownedCourses.hasInitialResponse){
              return(
                <div style={{height: "50px"}}></div>
              )
            }

            const owned = ownedCourses.lookup[course.id]

            if(owned) {
              return(
                <>
                  <Button
                    className=" text-center ml-6 justify-items-stretch"
                    disabled={true}
                    variant="green">
                    Já comprado
                  </Button>
                </>
              )
            }

            return(
              <Button
                className=" text-center ml-6 justify-items-stretch "
                onClick={() => setSelectedCourse(course)}
                disabled = {!hasConnectedWallet}
                variant="green">
                  Comprar
              </Button>
            )
          }
          }
        />
      }
      </CourseList>
      { selectedCourse &&
        <OrderModal
          course={selectedCourse}
          onSubmit= {purchaseCourse}
          onClose={() => setSelectedCourse(null)}
        />
      }
    </>
  )
}

export function getStaticProps() {
  const { data } = getAllCourses()
  return {
    props: {
      courses: data
    }
  }
}

Marketplace.Layout = BaseLayout