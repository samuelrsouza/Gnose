import { useEthPrice, COURSE_PRICE } from "@components/hooks/useEthPrice"
import Image from "next/image"

export default function EthRates() {
  const { eth } = useEthPrice()

  return (
    <div className="grid grid-cols-4">
      <div className="flex flex-2 items-stretch text-center">
        <div className="p-5 sm:justify-center border drop-shadow rounded-md">
          <div className="flex">
            { eth.data ?
              <>
                {/* <span className="text-2xl font-bold">
                  {eth.perItem}
                </span> */}
                <span className="sm:justify-center ml-7 text-center text-2xl font-bold">
                  2$ + taxas =~7$
                </span>
              </> :
              <div className="w-full flex justify-center">
              </div>
            }
          </div>
          <p className="text-xl text-gray-500">Preço por módulo</p>
        </div>
      </div>
    </div>
  )
}