import Image from "next/image"
import Link from "next/link"

export default function Card({course, disabled, Footer}) {
  return (
    <div
      className="bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl ml-10">
      
      <article className="rounded-xl bg-white p-6 ring ring-indigo-50 sm:p-8">
        <div className="flex items-start">
          <div
            className="hidden sm:grid sm:h-20 sm:w-20 sm:shrink-0 sm:place-content-center sm:rounded-full sm:border-2 sm:border-indigo-500"
            aria-hidden="true"
          >
            <div className="flex items-center gap-1">
              <span className="h-8 w-0.5 rounded-full bg-indigo-500"></span>
              <span className="h-6 w-0.5 rounded-full bg-indigo-500"></span>
              <span className="h-10 w-0.5 rounded-full bg-indigo-500"></span>
              <span className="h-6 w-0.5 rounded-full bg-indigo-500"></span>
              <span className="h-8 w-0.5 rounded-full bg-indigo-500"></span>
            </div>
          </div>

          <div className="sm:ml-8">
            <strong
              className="rounded border border-indigo-500 bg-indigo-500 px-3 py-1.5 text-[10px] font-medium text-white"
            >
              {course.type}
            </strong>

            <h3 className="mt-4 text-lg font-medium sm:text-xl">
              <Link href={`/courses/${course.slug}`}
                className="h-12 block mt-1 text-sm sm:text-lg leading-tight font-medium text-black hover:underline">
                {course.title}
              </Link>
            </h3>

            <p class="mt-1 text-sm text-gray-700">
              {course.description}
            </p>

            <div className="mt-4 sm:flex sm:items-center sm:gap-2">
              <div className="flex items-center text-gray-500">
              <svg className="h-5 w-5" viewBox="0 0 24 24" 
                fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g id="SVGRepo_bgCarrier" stroke-width="0">
                    </g>
                    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round">
                      </g><g id="SVGRepo_iconCarrier"> 
                      <path d="M10.75 2.44995C11.45
                       1.85995 12.58 1.85995 13.26 2.44995L14.84 3.79995C15.14
                        4.04995 15.71 4.25995 16.11 4.25995H17.81C18.87 4.25995 19.74 5.12995 19.74
                         6.18995V7.88995C19.74 8.28995 19.95 8.84995 20.2 9.14995L21.55 10.7299C22.14
                          11.4299 22.14 12.5599 21.55 13.2399L20.2 14.8199C19.95 15.1199 19.74 15.6799
                           19.74 16.0799V17.7799C19.74 18.8399 18.87 19.7099 17.81 19.7099H16.11C15.71
                            19.7099 15.15 19.9199 14.85 20.1699L13.27 21.5199C12.57 22.1099 11.44 22.1099
                             10.76 21.5199L9.18001 20.1699C8.88001 19.9199 8.31 19.7099 7.92 19.7099H6.17C5.11
                              19.7099 4.24 18.8399 4.24 17.7799V16.0699C4.24 15.6799 4.04 15.1099 3.79 14.8199L2.44
                               13.2299C1.86 12.5399 1.86 11.4199 2.44 10.7299L3.79 9.13995C4.04 8.83995 4.24 8.27995
                                4.24 7.88995V6.19995C4.24 5.13995 5.11 4.26995 6.17 4.26995H7.9C8.3 4.26995 8.86 4.05995
                                 9.16 3.80995L10.75 2.44995Z" stroke="#292D32" stroke-width="1.5" stroke-linecap="round"
                                  stroke-linejoin="round"></path> <path d="M8.5 15.9401L12 8.06006L15.5 15.9401" stroke="#292D32"
                                   stroke-width="1.5" stroke-linejoin="bevel"></path> <path d="M13.75 13.3101H10.25" stroke="#292D32"
                                    stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                <p className="ml-1 text-xs font-medium">Habilidade: {course.skill}</p>
              </div>

              <span className="hidden sm:block" aria-hidden="true">&middot;</span>

              <p className="mt-2 text-xs font-medium text-gray-500 sm:mt-0">
                ID do Curso: {course.id}
              </p>
            </div>
            { Footer &&
              <div className="mt-4">
                <Footer />
              </div>
            }
          </div>
        </div>
      </article>


      {/* <div className="h-full">
        <div className="p-8 pb-4 flex-2 tracking-wider">
          <div
            className="text-xs text-indigo-900 uppercase font-bold tracking-wider">
            {course.type}
          </div>
          <Link href={`/courses/${course.slug}`}
              className="h-12 block mt-1 text-sm sm:text-lg leading-tight font-medium text-black hover:underline">
              {course.title}
          </Link>
          <p
            className="mt-2 text-sm sm:text-base text-slate-600">
            {course.description}
          </p>
          { Footer &&
          <div className="mt-4">
            <Footer />
          </div>
          }
        </div>
      </div> */}
    </div>
  )
}