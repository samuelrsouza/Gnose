import { useAccount, useOwnedCourse } from "@components/hooks/web3";
import { useWeb3 } from "@components/providers";
import { Button, Modal } from "@components/ui/common";
import { CourseHero, Curriculum, Keypoints } from "@components/ui/course";


import { BaseLayout } from "@components/ui/layout";
import { getAllCourses } from "@content/courses/fetcher";

export default function Course({course}) {
  const { account } = useAccount()
  const { ownedCourse } = useOwnedCourse(course, account.data)
  const { web3, contract, isLoading } = useWeb3()
  const courseState = ownedCourse.data?.state

  const isLocked = !courseState || courseState === "comprado" || courseState === "desativado"

  const withdraw = async () => {
    const withdrawAmount = web3.utils.toWei("0.0044217479618327")
    const recieve = await contract.methods.withdraw(withdrawAmount).send({from: account.data});
      console.log(recieve) 
  }

//84.31
//84.51
  return (
    <>
      {/* {course.title} */}
      <div className="py-4 ">
      <CourseHero
          hasOwner={!!ownedCourse.data}
          title={course.title}
          description={course.description}
          image={course.coverImage}
          skill={course.skill}
        />
      </div>
      <Keypoints 
        points = {course.wsl}/>
      <Curriculum
        item ={ course.lec}
        isLoading = {isLoading}
        locked = {isLocked}
        courseState = {courseState}
      />
      <Modal />
      
      <div className="container mx-auto px-6">
        <div className="mt-5 flex flex-col items-center">
          <div className="py-2"></div>
      { !isLocked &&
      <Button
        locked = {isLocked}
        className={"mt-3 flex items-center mb-4 "}
        onClick= {withdraw}
      >
        Receber Recompensa
      </ Button>
      }
          </div>
        </div>
    </>
  )
}

export function getStaticPaths() {
  const { data } = getAllCourses()

  return {
    paths: data.map(c => ({
      params: {
        slug: c.slug
      }
    })),
    fallback: false
  }
}


export function getStaticProps({params}) {
  const { data } = getAllCourses()
  const course = data.filter(c => c.slug === params.slug)[0]

  return {
    props: {
      course
    }
  }
}

Course.Layout = BaseLayout