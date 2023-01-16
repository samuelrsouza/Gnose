





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
  const { requireInstall } = useWeb3()
  const { ownedCourses } = useOwnedCourses(courses, account.data)
  const { ownedCourse } = useOwnedCourse(course, account.data)

  const router = useRouter()
  const courseState = ownedCourse.data?.state

  const isLocked = !courseState || courseState === "comprado" || courseState === "desativado"

  return (
    <>
      {/* { JSON.stringify(ownedCourses.data) } */}
      <div className="py-4 text-left text-4xl px-2 font-bold">
        Minhas Habilidades
      </div>
      <section className="grid sm:justify-center sm:grid-cols-3">
        { ownedCourses.isEmpty &&
        <div>
          <Message type="danger">
            <div>Não há habilidades desenvolvidas ou que serão desenvolvidas</div>
            <Link legacyBehavior href={"/marketplace"}>
              <a className="font-normal hover:underline ">
                <i> Incremente seu portfolio no Marketplace</i>
              </a>
            </Link>
          </Message>
        </div>
        }
        { account.isEmpty &&
        <div>
          <Message type="danger">
            <div>Conecte-se ao Metamask</div>
          </Message>
        </div>
        }
        { requireInstall &&
        <div>
          <Message type="danger">
            <div>Instale o Metamask</div>
          </Message>
        </div>
        }
        { isLocked && 
        ownedCourses.data?.map(course =>
          <PortfolioCard
            course={course}
            badge={course.badge}
            >
          </PortfolioCard>
          )}
        
      </section>
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