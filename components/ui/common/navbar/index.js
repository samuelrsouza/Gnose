import { useWeb3 } from "@components/providers"
import Link from "next/link"
import { ActiveLink, Button } from "@components/ui/common"
import { useAccount } from "@components/hooks/web3"
import { useRouter } from "next/router"

export default function Navbar() {
  const { connect, isLoading, requireInstall } = useWeb3()
  const { account } = useAccount()
  const { pathname } = useRouter()

  return (
    <section>
      <div className="relative pt-6 px-4 text-lg py-10 sm:px-6 lg:px-8">
        <nav className="relative" aria-label="Global">
          <div className="flex justify-between items-center">
            <div>
              <ActiveLink href="/">
                <span className="font-medium mr-8 text-gray-500 hover:text-gray-900"> 
                  Início 
                </span> 
              </ActiveLink>
              <ActiveLink href="/marketplace">
                <span className="font-medium mr-8 text-gray-500 hover:text-gray-900"> 
                  Conteúdos 
                </span>
              </ActiveLink>
              <ActiveLink href="/portfolio">
                <span className="font-medium mr-8 text-gray-500 hover:text-gray-900"> 
                  Portfolio 
                </span>
              </ActiveLink>
              <ActiveLink href="/gnose">
                <span className="font-medium mr-8 text-gray-500 hover:text-gray-900"> 
                  Gnose 
                </span>
              </ActiveLink>
            </div>
            <div>
                { isLoading ?
                  <Button
                    disabled={true}
                    onClick={connect}>
                      Carregando...
                  </Button> :
                  account.data ?
                  <Button
                    hoverable={false}
                    className="cursor-default ">
                      {account.isAdmin && "Conectado como Professor"}
                      { account.data &&
                        !pathname.includes("/marketplace") &&
                        <div className="flex justify-end pt-1">
                          {account.isAdmin && "Conta: "}
                          <div className="text-white bg-indigo-600 rounded-md">
                            &nbsp;
                            {account.data}
                          </div>
                        </div>
                      }
                  </Button> :
                  requireInstall ?
                  <Button
                    onClick={() => window.open("https://metamask.io/download.html", "_blank")}>
                    Instale o Metamask
                  </Button> : 
                  <Button
                    onClick={connect}>
                    Conectar
                  </Button> 
                }
            </div>
          </div>
        </nav>
      </div>
    </section>
  )
}