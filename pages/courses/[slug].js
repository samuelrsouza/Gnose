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
    const amount = web3.utils.toWei("1", "ether")
      const pay = await contract.methods.withdraw(amount, {from: account.data})
      console.log(pay) 
  }

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
      <div className="place-items-center content-center">
      
      { !isLocked &&
      <Button
        locked = {isLocked}
        className={"px-3 mt-2 mb-4"}
        onClick= {withdraw}
      >
        Receber Recompensa
      </ Button>
      }
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