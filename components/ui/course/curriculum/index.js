

import Link from "next/link"




const statusClass = "px-2 inline-flex text-xs leading-5 font-semibold rounded-full"

export default function Curriculum({locked, courseState, item}){
    return (
        <section className="max-w-5xl mx-auto">
          <div className="flex flex-col">
            <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Conteúdos
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Status
                        </th>
                        <th scope="col" className="relative px-6 py-3">
                          <span className="sr-only">Editar</span>
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      { item.map((item) =>
                        <tr key={item}>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center">
                              <div className="ml-4">
                                <div className="text-md font-medium text-gray-900">
                                  {item}
                                </div>
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span 
                              className={
                                locked ? 
                                  `bg-red-100 text-red-800 ${statusClass}` :
                                  `bg-green-100 text-green-800 ${statusClass}`
                                  }
                                >
                              { locked ? "Bloqueado": "Desbloqueado" }
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                          { 
                            locked ?
                            <>
                              { courseState == "desativado" &&
                                <Link legacyBehavior href="/marketplace">
                                  <a
                                    className="text-indigo-700 hover:text-indigo-900">
                                    Tenha acesso
                                  </a>
                                </Link>
                              }
                              { courseState === "comprado" &&
                                <div>
                                  <a
                                    className="text-yellow-500 hover:text-yellow-900">
                                      Aguardando Aprovação
                                  </a>
                                </div>
                              }
                            </> :
                            <Link legacyBehavior href="/aprenda">
                              <a
                                className="text-indigo-700 hover:text-indigo-900">
                                Iniciar
                              </a>
                            </Link>                
                          }
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}