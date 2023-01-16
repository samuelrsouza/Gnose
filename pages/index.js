
import { Button, Hero } from "@components/ui/common"
import { BaseLayout } from "@components/ui/layout"
import { getAllCourses } from "@content/courses/fetcher"

export default function Home({courses}) {


  return (
    <>
      <Hero />
        <div className={"max-w-4xl mx-auto py-16 px-14 sm:px-6 lg:px-8"}>
          <h1 className={`font-sans font-bold text-4xl md:text-5xl lg:text-8xl text-center leading-snug text-gray-800`}>
              o Token do Conhecimento
          </h1>
            <div className={`max-w-xl mx-auto`}>
                <p className={`mt-10 text-gray-500 text-center text-xl lg:text-3xl`}>
                Ganhe tokens por comprar os módulos e assim, para que consiga continuar seu aprendizado comprando mais conteúdos.
                </p>
            </div>
              <div className={`mt-10 flex justify-center items-center w-full mx-auto`}>
                  <span className={`mx-2`}>GNOSE COIN</span>
              </div>
          </div>
            <div className={`flex justify-center w-full`}>
                <div className={`mt-4 w-full`}>
                    <p className={`font-mono uppercase text-center font-medium text-sm text-gray-600`}>Um projeto de Gamificação</p>
                    <div className={`flex items-center justify-center mx-auto flex-wrap`}>
                    </div>
                </div>
            </div>

      {/* <CourseList
        courses={courses}
      >
        {course => <CourseCard key={course.id} course={course}/>}
        </CourseList> */}
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