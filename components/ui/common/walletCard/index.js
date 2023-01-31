import { useWalletInfo } from "@components/hooks/web3"
import { useWeb3 } from "@components/providers"
import { Button, WalletCard } from "@components/ui/common"



export default function walletCard(){
    const { requireInstall } = useWeb3() 
    const {account, network} = useWalletInfo()
    return(
        <div className="flex justify-center items-center">
            <div className="space-y-16">
                <div className="w-96 h-56 m-auto transition-transform transform hover:scale-110">
                    <img className="relative object-cover w-full h-full rounded-xl" src="https://res.cloudinary.com/dup5cva3r/image/upload/v1675106575/Cart%C3%A3o_Fidelidade_Estilo_Cart%C3%A3o_de_Cr%C3%A9dito_obsggw.png"/>
                    <div className="w-full px-8 absolute top-8">
                        <div className="flex justify-between">
                            <div className="">
                                <p className="font-medium tracking-widest">
                                {account.data}
                                </p>
                            </div>
                        </div>
                        <div className="pt-1 mb-4">
                            <p className="font-light">
                                Card Number
                            </p>
                            <p className="font-medium tracking-more-wider">
                                4642  3489  9867  7632
                            </p>
                        </div>
                        <div className="pt-6 pr-6">
                            <div className="flex justify-between">
                                <div className="">
                                    <p className="font-light text-xs">
                                        Valid
                                    </p>
                                    <p className="font-medium tracking-wider text-sm">
                                        11/15
                                    </p>
                                </div>
                                <div className="">
                                    <p className="font-light text-xs">
                                        Expiry
                                    </p>
                                    <p className="font-medium tracking-wider text-sm">
                                        03/25
                                    </p>
                                </div>
        
                                <div className="">
                                    <p className="font-light text-xs">
                                        CVV
                                    </p>
                                    <p className="font-bold tracking-more-wider text-sm">
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
       </div>
    )
}