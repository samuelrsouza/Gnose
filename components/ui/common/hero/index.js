import Link from "next/link";







export default function Hero() {

    return (
      <section className="lg:2/6 text-center my-28">
        <div className="text-6xl font-semibold text-gray-900 leading-none">
          Gnose Place
        </div>
        <div className="mt-6 text-xl font-light text-true-gray-500 antialiased">
          Tenha acesso ilimitado ao conhecimento.
        </div>
        <div className="mt-5 sm:mt-3 flex text-center">
          <div className="rounded-md shadow">
            <Link legacyBehavior href={`/marketplace`}>      
                <a href="/marketplace" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-xl font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10">
                Comece agora
                </a>
            </Link>
          </div>
        </div>
      </section>
      
    )
  }