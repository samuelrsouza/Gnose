





import { useAccount, useOwnedCourse, useOwnedCourses } from "@components/hooks/web3";
import { useWeb3 } from "@components/providers";
import { Button, Message } from "@components/ui/common";
import { OwnedCourseCard } from "@components/ui/course";
import PortfolioCard from "@components/ui/course/card/PortfolioCard";
import { BaseLayout } from "@components/ui/layout";
import { MarketHeader } from "@components/ui/marketplace";
import { getAllCourses } from "@content/courses/fetcher";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Portfolio({courses, course}) {
  const { account } = useAccount()
  const { ownedCourses } = useOwnedCourses(courses, account.data)
  const { ownedCourse } = useOwnedCourse(course, account.data)

  const router = useRouter()
  const courseState = ownedCourse.data?.state

  const isntLocked = courseState === "ativo"

  return (
    <>
    <div className="sm:justify-items-center mr-10">
      <div className="py-4 text-center text-4xl px-2 font-bold">
        Minhas Habilidades
      </div>
      <section className="">
        { ownedCourses.isEmpty &&
        <div className="mr-10 py-3 ml-5">
          <Message type="danger">
            <div>Não há habilidades desenvolvidas ou que serão desenvolvidas</div>
            <Link legacyBehavior href={"/marketplace"}>
              <a className="font-normal hover:underline ">
                <i> Incremente seu portfolio em Conteúdos</i>
              </a>
            </Link>
          </Message>
        </div>
        }
        <div className="grid justify-items-center sm:grid-cols-3"> 
        { !isntLocked &&
          ownedCourses.data?.map(course =>
          <PortfolioCard
            locked = {isntLocked}
            course={course}
            badge={course.badge}
            >
          </PortfolioCard>
          )}
        </div>
      </section>
      </div>
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

Portfolio.Layout = BaseLayout