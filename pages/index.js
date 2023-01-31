
import { Button, Hero } from "@components/ui/common"
import { CourseCard, CourseList } from "@components/ui/course"
import { BaseLayout } from "@components/ui/layout"
import { getAllCourses } from "@content/courses/fetcher"
import GnosePlace from "./gnose"

export default function Home({courses}) {


  return (

    
    <>
    <div className="bg-hero bg-no-repeat bg-cover bg-center bg-fixed">
      <Hero />
      <GnosePlace/>
        {/* <CourseList
          courses={courses}
        >
          {course => <CourseCard key={course.id} course={course}/>}
        </CourseList>  */}
      </div>
    </>
  )
}

export function getStaticProps() {
  const { data } = getAllCourses()
  
  return{
    props: {
      courses: data
    }
  }
}

Home.Layout = BaseLayout