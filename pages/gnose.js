import { BaseLayout } from "@components/ui/layout";


export default function GnosePlace() {
    return(
        <>
          <section className=" text-indigo-900">
            <div className="max-w-screen-5xl px-4 py-16 sm:px-6 lg:px-3">
                <div className="max-w-ms">
                    <h2 className="text-3xl ml-14 mt-2 font-bold justify-items-center">Entenda como funciona</h2> 
                </div>

                <div className="mt-6 grid sm:justify-items-center pt-5 grid-cols-1 gap-8 md:mt-16 md:grid-cols-2 md:gap-12 lg:grid-cols-3">
                <div className="flex items-start p-6 rounded-lg shadow-lg bg-white max-w-sm">
                    <span className="flex-shrink-0 rounded-lg bg-indigo-500 p-4">
                    <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="check-circle" className="w-7 h-7" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                        <path fill="currentColor" d="M256 8C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm0 48c110.532 0 200 89.451 200 200 0 110.532-89.451 200-200 200-110.532 0-200-89.451-200-200 0-110.532 89.451-200 200-200m140.204 130.267l-22.536-22.718c-4.667-4.705-12.265-4.736-16.97-.068L215.346 303.697l-59.792-60.277c-4.667-4.705-12.265-4.736-16.97-.069l-22.719 22.536c-4.705 4.667-4.736 12.265-.068 16.971l90.781 91.516c4.667 4.705 12.265 4.736 16.97.068l172.589-171.204c4.704-4.668 4.734-12.266.067-16.971z"></path>
                    </svg>
                    </span>

                    <div className="ml-4">
                    <h2 className="text-lg font-bold">Tenha uma conta no Metamask.</h2>

                    <p className="mt-1 text-md text-black-300">
                        Caso você não tenha instalado, instale o Metamask no seu navegador e conecte-se à sua conta.                 
                    </p>
                    </div>
                </div>

                <div className="flex items-start p-6 rounded-lg shadow-lg bg-white max-w-sm">
                    <span className="flex-shrink-0 rounded-lg bg-indigo-500 shadow-md p-4">
                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="brain" className="w-7 h-7" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                        <path fill="currentColor" d="M208 0c-29.9 0-54.7 20.5-61.8 48.2-.8 0-1.4-.2-2.2-.2-35.3 0-64 28.7-64 64 0 4.8.6 9.5 1.7 14C52.5 138 32 166.6 32 200c0 12.6 3.2 24.3 8.3 34.9C16.3 248.7 0 274.3 0 304c0 33.3 20.4 61.9 49.4 73.9-.9 4.6-1.4 9.3-1.4 14.1 0 39.8 32.2 72 72 72 4.1 0 8.1-.5 12-1.2 9.6 28.5 36.2 49.2 68 49.2 39.8 0 72-32.2 72-72V64c0-35.3-28.7-64-64-64zm368 304c0-29.7-16.3-55.3-40.3-69.1 5.2-10.6 8.3-22.3 8.3-34.9 0-33.4-20.5-62-49.7-74 1-4.5 1.7-9.2 1.7-14 0-35.3-28.7-64-64-64-.8 0-1.5.2-2.2.2C422.7 20.5 397.9 0 368 0c-35.3 0-64 28.6-64 64v376c0 39.8 32.2 72 72 72 31.8 0 58.4-20.7 68-49.2 3.9.7 7.9 1.2 12 1.2 39.8 0 72-32.2 72-72 0-4.8-.5-9.5-1.4-14.1 29-12 49.4-40.6 49.4-73.9z"></path>
                    </svg>
                    </span>

                    <div className="ml-4">
                    <h2 className="text-lg font-bold">Conhecimento Retornável.</h2>
                    <p className="mt-1 text-md text-black-900">
                        A cada módulo comprado você receberá uma recompensa no valor relativo à sua compra.
                    </p>
                    </div>
                </div>

                <div className="flex items-start p-6 rounded-lg shadow-lg bg-white max-w-sm">
                    <span className="flex-shrink-0 rounded-lg bg-indigo-500 p-4">
                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="certificate" className="w-7 h-7" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                        <path fill="currentColor" d="M458.622 255.92l45.985-45.005c13.708-12.977 7.316-36.039-10.664-40.339l-62.65-15.99 17.661-62.015c4.991-17.838-11.829-34.663-29.661-29.671l-61.994 17.667-15.984-62.671C337.085.197 313.765-6.276 300.99 7.228L256 53.57 211.011 7.229c-12.63-13.351-36.047-7.234-40.325 10.668l-15.984 62.671-61.995-17.667C74.87 57.907 58.056 74.738 63.046 92.572l17.661 62.015-62.65 15.99C.069 174.878-6.31 197.944 7.392 210.915l45.985 45.005-45.985 45.004c-13.708 12.977-7.316 36.039 10.664 40.339l62.65 15.99-17.661 62.015c-4.991 17.838 11.829 34.663 29.661 29.671l61.994-17.667 15.984 62.671c4.439 18.575 27.696 24.018 40.325 10.668L256 458.61l44.989 46.001c12.5 13.488 35.987 7.486 40.325-10.668l15.984-62.671 61.994 17.667c17.836 4.994 34.651-11.837 29.661-29.671l-17.661-62.015 62.65-15.99c17.987-4.302 24.366-27.367 10.664-40.339l-45.984-45.004z"></path>
                    </svg>
                    </span>
                    <div className="ml-4">
                    <h2 className="text-lg font-bold">Ganhe Distintivos.</h2>

                    <p className="mt-1 text-md text-black-900">
                        A cada módulo você receberá um distintivo relacionado à habilidade desenvolvida durante seu aprendizado.
                    </p>
                    </div>
                </div>

                <div className="flex items-start p-6 rounded-lg shadow-lg bg-white max-w-sm">
                    <span className="flex-shrink-0 rounded-lg bg-indigo-500 p-4">
                    <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="arrow-alt-circle-up" className="w-7 h-7" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                        <path fill="currentColor" d="M256 504c137 0 248-111 248-248S393 8 256 8 8 119 8 256s111 248 248 248zm0-448c110.5 0 200 89.5 200 200s-89.5 200-200 200S56 366.5 56 256 145.5 56 256 56zm20 328h-40c-6.6 0-12-5.4-12-12V256h-67c-10.7 0-16-12.9-8.5-20.5l99-99c4.7-4.7 12.3-4.7 17 0l99 99c7.6 7.6 2.2 20.5-8.5 20.5h-67v116c0 6.6-5.4 12-12 12z"></path>
                    </svg>
                    </span>
                    <div className="ml-4">
                    <h2 className="text-lg font-bold">Compre mais Módulos.</h2>

                    <p className="mt-1 text-md text-black-900">
                        Adquira mais conhecimento por meio das recompenas.
                    </p>
                    </div>
                </div>

                <div className="flex items-start p-6 rounded-lg shadow-lg bg-white max-w-sm">
                    <span className="flex-shrink-0 rounded-lg bg-indigo-500 p-4">
                    <svg
                        className="h-8 w-8"
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
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
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

                <div className="flex items-start p-6 rounded-lg shadow-lg bg-white max-w-sm">
                    <span className="flex-shrink-0 rounded-lg bg-indigo-500 p-4">
                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="archive" className="w-7 h-7" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                        <path fill="currentColor" d="M32 448c0 17.7 14.3 32 32 32h384c17.7 0 32-14.3 32-32V160H32v288zm160-212c0-6.6 5.4-12 12-12h104c6.6 0 12 5.4 12 12v8c0 6.6-5.4 12-12 12H204c-6.6 0-12-5.4-12-12v-8zM480 32H32C14.3 32 0 46.3 0 64v48c0 8.8 7.2 16 16 16h480c8.8 0 16-7.2 16-16V64c0-17.7-14.3-32-32-32z"></path>
                    </svg>
                    </span>

                    <div className="ml-4">
                    <h2 className="text-lg font-bold">Seus Registros na Blockchain.</h2>

                    <p className="mt-1 text-md text-black-900">
                        Todas as Habilidades adquiridas serão armazenadas na Blockchain.
                    </p>
                    </div>
                </div>
                </div>
            </div>
            <a className="text-sm" href="http://www.freepik.com">Image Background Designed by starline / Freepik</a>
            </section>
        </>
    )
}


GnosePlace.Layout = BaseLayout