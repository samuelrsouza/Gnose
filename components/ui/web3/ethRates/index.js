



import { COURSE_PRICE, useEthPrice } from "@components/hooks/useEthPrice"
import { Loader } from "@components/ui/common"
import Image from "next/image"



export default function EthRates() {
  const { eth } = useEthPrice()

    return(
      <div className="grid ">
      <div className="flex flex-1 items-stretch text-center">
        {/* <div className="p-10 border drop-shadow rounded-md">
          <div className="flex items-center">
            { eth.data ?
            <>
              <Image
                height={35} 
                width={35}
                src="/small-eth.webp"
                />
              <span className="text-2xl font-bold"> = {eth.data}$</span>
              </> :
              <div className="w-full flex justify-center"> 
                <Loader size="md"/> 
              </ div> 
            }
          </div>
          <p className="text-xl text-gray-500">Current eth Price</p>
        </div> */}
      </div>
      <div className="flex flex-1 items-stretch text-center">
        <div className="p-10 border drop-shadow rounded-md">
          <div className="flex items-center">
              <div className="w-full flex rounded-md justify-center text-2xl font-semibold "> 
              {COURSE_PRICE} GNS
              </ div>
          </div>
          <p className="text-xl text-gray-500">Preço por módulo</p>
        </div>
      </div>
    </div>
  )
}