import { useAccount } from "@components/hooks/web3";
import { Breadcrumbs } from "@components/ui/common";






const LINKS = [{
    href: "/marketplace",
    value: "Comprar"
  }, {
    href: "/marketplace/courses/possuidos",
    value: "Meu Conhecimento"
  }, {
    href: "/marketplace/courses/gerenciar",
    value: "Gerenciar",
    requireAdmin: true
  }]


export default function HeaderNoBar(){
  const { account } = useAccount()


    return(
        <>
            <div className="flex flex-row-reverse pb-4 py-4 px-4 sm:px-6 lg:px-8"> 
                <Breadcrumbs
                  isAdmin = {account.isAdmin}
                  items={LINKS} 
                  />
            </div>
        </>
    )
}