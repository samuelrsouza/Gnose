import { useWalletInfo } from "@components/hooks/web3"
import { useWeb3 } from "@components/providers"
import { Button } from "@components/ui/common"
import { useEffect } from "react"










export default function WalletBar() {
  const { requireInstall } = useWeb3() 
  const {account, network} = useWalletInfo()
  
  return (
    <section className="text-black flex flex-wrap justify-center space-x-2">
      <div className="p-8 py-5 px-4">
        <h1 className="text-2xl px-5 py-5 rounded-full border border-gray-300 text-gray-500 font-semibold flex align-center w-max cursor-pointer active:bg-gray-300 transition duration-300 ease">Conta Conectada: {account.data} </h1>
        <div className="grid justify-items-stretch">
          <div>
          { network.hasInitialResponse && !network.isSupported &&
                <div className="bg-red-400 text-lg text-center p-5 mt-10 rounded-lg">
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
                <div className="py-3 text-center">
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