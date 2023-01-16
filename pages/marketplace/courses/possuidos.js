





import { useAccount, useOwnedCourses } from "@components/hooks/web3";
import { useWeb3 } from "@components/providers";
import { Button, Message } from "@components/ui/common";
import { OwnedCourseCard } from "@components/ui/course";
import { BaseLayout } from "@components/ui/layout";
import { MarketHeader } from "@components/ui/marketplace";
import { getAllCourses } from "@content/courses/fetcher";
import Link from "next/link";
import { useRouter } from "next/router";

export default function OwnedCourses({courses}) {
  const { account } = useAccount()
  const { requireInstall } = useWeb3()
  const { ownedCourses } = useOwnedCourses(courses, account.data)
  const router = useRouter()

  return (
    <>
      {/* { JSON.stringify(ownedCourses.data) } */}
      <div className="py-4">
        <MarketHeader />
      </div>
      <section className="grid grid-cols-1">
        { ownedCourses.isEmpty &&
        <div>
          <Message type="danger">
            <div>Não há módulos na sua conta</div>
            <Link legacyBehavior href={"/marketplace"}>
              <a className="font-normal hover:underline ">
                <i> Compre um no marketplace</i>
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
        {ownedCourses.data?.map(course =>
          <OwnedCourseCard
            key={course.id}
            course={course}
            >

            <Button onClick={() => router.push(`/courses/${course.slug}`)}>
              Comece agora!
            </Button>
            {/* <Link legacyBehavior href={`/marketplace`}>      
              <a href="#" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10">
                Comece agora
              </a>
            </Link> */}
          </OwnedCourseCard>
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

OwnedCourses.Layout = BaseLayout