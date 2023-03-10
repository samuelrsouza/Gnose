







import Course from "@pages/courses/[slug]"
import Image from "next/image"
import Link from "next/link"






export default function Hero({title,description,image, skill, hasOwner, link}){
    return (
        <section>
          <div className="bg-white">
            <div className="max-w-7xl mx-auto">
              <div className="relative z-10 pb-8 bg-white px-6 w-full flex flex-wrap items-center justify-between">
                <main className="mt-10 mb-4 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
                  <div className="rounded-2xl bg-gradient-to-r from-green-300 via-indigo-900 to-purple-500 p-1 shadow-xl">
                    <div className="block rounded-xl bg-white p-6 sm:p-8">
                    <div className="sm:text-center mb-t lg:text-center">             
                      <h1 className="text-6xl font-bold mb-8">
                        <span className="block xl:inline">
                          {title.substring(0, title.length)}
                        </span>
                      </h1>
                      <p className="mt-4 text-3l font-medium  text-indigo-900 sm:mt-5 sm:flex sm:justify-center md:mt-5 md:text-xl lg:mx-0">
                        {description}
                      </p>
                        <div className="mt-4 mb-6 py-5 mr-3 text-xl font-medium text-black-600 flex items-center justify-center md:mt-5 md:text-xl lg:mx-0">
                          <p>
                          Habilidade a ser desenvolvida:
                          </p>
                          <a className="green py-2 ml-3 px-4 mr-5 rounded-full shadow-sm font-sm sm:justify-center bg-indigo-300 text-purple-700">
                            {skill}
                          </a>
                        </div>
                        {hasOwner &&
                          <div className="mt-5 sm:mt-8 sm:justify-center lg:justify-start">
                            <div className="text-lg inline-block mb-5 p-4 py-3 green rounded-full font-bold bg-green-300 text-green-700">
                              Voc?? possui esse curso!
                            </div>
                        </div>
                        }
                      </div>
                    </div>
                  </div>
                </main>
              </div>
            </div>
            <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
            {/* <Image
              class="max-w-full h-auto rounded-full"
              src={image}
              alt={title}
              layout = "fill"
           /> */}
            </div>
            
          </div>
        </section>
    )
}