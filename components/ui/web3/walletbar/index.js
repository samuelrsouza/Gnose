import { useWalletInfo } from "@components/hooks/web3"
import { useWeb3 } from "@components/providers"
import { Button } from "@components/ui/common"
import { useEffect } from "react"










export default function WalletBar() {
  const { requireInstall } = useWeb3() 
  const {account, network} = useWalletInfo()
  
  return (
    <section className="text-white bg-indigo-600 rounded-lg">
      <div className="p-8 py-5">
        <h1 className="text-2xl">Olá, {account.data} </h1>
        <h2 className="subtitle mb-5 xs:text-xl">Comece sua jornada agora!</h2>
        <div className="flex justify-between items-center">
          <div className="sm:flex sm:justify-center lg:justify-start">
            <div className="rounded-md shadow">
              <a href="/gnose" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-black bg-white hover:bg-gray-100 md:py-4 md:text-lg md:px-10">
                Conheça a Gnose
              </a>
            </div>
          </div>
          <div>
          { network.hasInitialResponse && !network.isSupported &&
                <div className="bg-red-400 p-5 rounded-lg">
                  <div>
                    É necessário utilizar a rede {` `}
                    <strong className="text-2xl">
                      {network.target}
                    </strong>
                  </div>
                </div>
              }
              { requireInstall &&
                <div className="bg-yellow-500 p-4 rounded-lg">
                  Não foi possível se conectar a rede. Instale o Metamask!
                </ div>  
              }
              { network.data &&
                <div className="py-3">
                  <span>Atualmente na rede </span>
                  <strong className="text-2xl">{network.data}</strong>
                </div>
              }
            </div>
          </div>
        </div>
      </section>
     )
}