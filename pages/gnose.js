import { BaseLayout } from "@components/ui/layout";


export default function GnosePlace() {
    return(
        <>
          <section className=" text-indigo-900">
            <div className="max-w-screen-xl px-4 py-16 sm:px-6 lg:px-3">
                <div className="max-w-ms">
                <h2 className="text-3xl font-bold sm:text-4xl">Entenda como funciona</h2>

                <p className="mt-4 text-2xl text-black-900">
                    Antes de começar, verifique se você possui acesso aos módulos disponíveis através de seu professor. 
                </p>
                </div>

                <div
                className="mt-8 grid grid-cols-1 gap-8 md:mt-16 md:grid-cols-2 md:gap-12 lg:grid-cols-3"
                >
                <div className="flex items-start">
                    <span className="flex-shrink-0 rounded-lg bg-indigo-500 p-4">
                    <svg
                        className="h-5 w-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
                        <path
                        d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                        ></path>
                        <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                        ></path>
                    </svg>
                    </span>

                    <div className="ml-4">
                    <h2 className="text-lg font-bold">Tenha uma conta no Metamask.</h2>

                    <p className="mt-1 text-md text-black-300">
                        Caso você não tenha instalado, instale o Metamask no seu navegador e conecte-se à sua conta.                 
                    </p>
                    </div>
                </div>

                <div className="flex items-start">
                    <span className="flex-shrink-0 rounded-lg bg-indigo-500 shadow-md p-4">
                    <svg
                        className="h-5 w-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
                        <path
                        d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                        ></path>
                        <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                        ></path>
                    </svg>
                    </span>

                    <div className="ml-4">
                    <h2 className="text-lg font-bold">Conhecimento Retornável.</h2>

                    <p className="mt-1 text-md text-black-900">
                        A cada módulo comprado você receberá uma recompensa no valor relativo à sua compra.
                    </p>
                    </div>
                </div>

                <div className="flex items-start">
                    <span className="flex-shrink-0 rounded-lg bg-indigo-500 p-4">
                    <svg
                        className="h-5 w-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
                        <path
                        d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                        ></path>
                        <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                        ></path>
                    </svg>
                    </span>

                    <div className="ml-4">
                    <h2 className="text-lg font-bold">Ganhe Distintivos.</h2>

                    <p className="mt-1 text-md text-black-900">
                        A cada módulo você receberá um distintivo relacionado à habilidade desenvolvida durante seu aprendizado.
                    </p>
                    </div>
                </div>

                <div className="flex items-start">
                    <span className="flex-shrink-0 rounded-lg bg-indigo-500 p-4">
                    <svg
                        className="h-5 w-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
                        <path
                        d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                        ></path>
                        <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                        ></path>
                    </svg>
                    </span>

                    <div className="ml-4">
                    <h2 className="text-lg font-bold">Compre mais Módulos.</h2>

                    <p className="mt-1 text-md text-black-900">
                        Adquira mais conhecimento por meio das recompenas.
                    </p>
                    </div>
                </div>

                <div className="flex items-start">
                    <span className="flex-shrink-0 rounded-lg bg-indigo-500 p-4">
                    <svg
                        className="h-5 w-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
                        <path
                        d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                        ></path>
                        <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                        ></path>
                    </svg>
                    </span>

                    <div className="ml-4">
                    <h2 className="text-lg font-bold">Trilhe sua Jornada.</h2>

                    <p className="mt-1 text-md text-black-900">
                        Através dos distintivos, acompanhe seu percurso para definir seu foco nas aprendizagens.
                    </p>
                    </div>
                </div>

                <div className="flex items-start">
                    <span className="flex-shrink-0 rounded-lg bg-indigo-500 p-4">
                    <svg
                        className="h-5 w-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
                        <path
                        d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                        ></path>
                        <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                        ></path>
                    </svg>
                    </span>

                    <div className="ml-4">
                    <h2 className="text-lg font-bold">Forneça seu endereço de email ao professor.</h2>

                    <p className="mt-1 text-md text-black-900">
                        Para que o módulo seja verificado, é necessário que seu tutor tenha conhecimento do e-mail utilizado na compra.
                    </p>
                    </div>
                </div>
                </div>
            </div>
            </section>
        </>
    )
}


GnosePlace.Layout = BaseLayout