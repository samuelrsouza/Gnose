

import Link from "next/link"

import { Fragment, useState } from "react";
import { Accordion, AccordionHeader, AccordionBody,} from "@material-tailwind/react";
 


const statusClass = "px-2 inline-flex text-xs leading-5 font-semibold rounded-full"


export default function Curriculum({locked, courseState, item, video}){

    const [open, setOpen] = useState(1);
   
    const handleOpen = (value) => {
      setOpen(open === value ? 0 : value);
    };
  
    return (
        <section className="max-w-5xl justify-center mx-auto">
          <div className="flex flex-col justify-center justify-items-center">
            <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                  <table className="min-w-full divide-y divide-gray-200 bg-gray-50" >
                    <thead className="bg-gray-100">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                          Conteúdos
                        </th>
                        {/* <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Acesso
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Andamento
                        </th> */}
                        {/* <th scope="col" className="relative px-6 py-3">
                          <span className="sr-only">Editar</span>
                        </th> */}
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200 justify-items-center">
                      { item.map((item) =>
                        <tr key={item}>
                            <td className="px-6 py-5 justify-center sm:justify-items-center">
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
                                <Fragment>
                                  <Accordion  open={open === 0}>
                                    <AccordionHeader onClick={() => handleOpen(1)}>                               
                                      <td className="px-6 py-4 justify-center justify-items-center">
                                        {item}                               
                                      </td>
                                    </AccordionHeader>
                                    <AccordionBody className="ml-5">
                                    <iframe width="560" height="315" 
                                      src="https://youtu.be/BIhxq1ZszY4"
                                      title="YouTube video player" 
                                      frameborder="0" 
                                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                                      allowfullscreen>
                                    </iframe>
                                    </AccordionBody>     
                                  </Accordion>
                                  <div>
                                    <div className="flex items-center mt-10 mb-4">
                                        <input id="default-checkbox" type="checkbox" value="" className="w-4 h-4 text-indigo-900 bg-gray-100 border-gray-300 rounded focus:ring-indigo-900 dark:focus:ring-indigo-900 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                                        <label htmlFor="default-checkbox" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-400">Concluído</label>
                                    </div>
                                  </div>
                                </Fragment>
                                
                              // <Link legacyBehavior href="/aprenda">
                              //   <a
                              //     className="text-indigo-700 hover:text-indigo-900">
                              //     Acessar
                              //   </a>
                              // </Link>     
                                         
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