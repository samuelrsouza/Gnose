import { useEthPrice } from "@components/hooks/useEthPrice";
import { Modal, Button } from "@components/ui/common";
import Image from "next/image";
import { useEffect, useState } from "react";

const defaultOrder = {
  price: "",
  email: "",
  confirmationEmail: ""
}

const _createFormState = (isDisabled = false, message =  "") => ({isDisabled, message})

const createFormState = ({price, email, confirmationEmail}) => {
  if (!price || Number(price) <= 0) {
    return _createFormState(true, "O preço é muito baixo.")
  }
  else if (confirmationEmail.length === 0 || email.length === 0) {
    return _createFormState(true)
  }
  else if (email !== confirmationEmail) {
    return _createFormState(true, "Os endereços não conferem.")
  }

  return _createFormState()
}


export default function OrderModal({course, onClose, onSubmit}) {
  const [isOpen, setIsOpen] = useState(false)
  const [order, setOrder] = useState(defaultOrder)
  const [enablePrice, setEnablePrice] = useState(false)
  const { eth } = useEthPrice()

  useEffect(() => {
    if (!!course) {
      setIsOpen(true)
      setOrder({
        ...defaultOrder,
        price: eth.perItem
      })
    }
  }, [course])

  const closeModal = () => {
    setIsOpen(false)
    setOrder(defaultOrder)
    setEnablePrice(false)
    onClose(true)
  }

  const formState = createFormState(order)

  return (
    <Modal isOpen={isOpen}>
            <div
              x-show="modalOpen"
              x-transition
              class="fixed top-0 left-0 flex h-full min-h-screen w-full items-center justify-center bg-black bg-opacity-90 px-4 py-5"
            >
              <div
                class="w-full max-w-[570px] rounded-[20px] bg-white py-12 px-8 text-center md:py-[60px] md:px-[70px]"
              >
                <h3 class="text-dark pb-2 text-xl font-bold sm:text-2xl">
                  Confirme a compra do Módulo
                </h3>
                <div className="mt-3 sm:mt-0 mb-4 sm:text-left">
              <div className="grid justify-items-center">
              </div>
              <h3 className="mb-7 mt-4 text-lg font-semibold text-center antialiased leading-6 text-gray-900" id="modal-title">
                {course.title}
              </h3>
              <div className="mt-1 relative rounded-md">
                <div className="mb-1">
                  <label className="mb-2 font-bold">Preço sem inclir taxas</label>
                  <div className="text-xs text-gray-700 flex">
                    <label className="flex items-center mr-2">
                      <input
                        checked={enablePrice}
                        onChange={({target: {checked}}) => {
                          setOrder({
                            ...order,
                            price: checked ? order.price : eth.perItem
                          })
                          setEnablePrice(checked)
                        }}
                      />
                    </label>
                  </div>
              </div>
                <input
                  disabled={!enablePrice}
                  value={order.price}
                  onChange={({target: {value}}) => {
                    if (isNaN(value)) { return; }
                    setOrder({
                      ...order,
                      price: value
                    })
                  }}
                  type="text"
                  name="price"
                  id="price"
                  className="disabled:opacity-50 w-80 mb-1 focus:ring-indigo-500 shadow-md focus:border-indigo-900 block pl-7 p-4 sm:text-sm border-gray-300 rounded-md"
                />
                <p className="text-xs text-gray-700">
                  O preço pode variar de uma compra para outra.
                </p>
              </div>
              { formState.message &&
                <div className="p-4 my-3 text-yellow-700 bg-yellow-200 rounded-lg text-sm">
                  { formState.message }
                </div>
              }
            </div>
                <span
                  class="bg-primary mx-auto mb-6 inline-block h-1 w-[90px] rounded"
                ></span>
                <p class="text-body-color mb-10 text-base leading-relaxed">
                  Após selecionar o curso, você deverá confirmar a transação antes de ser redirecionado ao Metamask para assinar a transação.
                </p>
                <div class="-mx-3 flex flex-wrap">
                  <div class="w-1/2 px-3">
                  <Button
                      className="text-dark block w-full rounded-lg border bg-white p-3 text-center text-base font-medium transition hover:border-red-600 hover:bg-red-600 hover:text-white"
                      onClick={closeModal}
                      variant="red">
                      Cancelar
                    </Button>
                  </div>

                  <div class="w-1/2 px-3">
                  <Button
                      className="bg-primary border-primary block w-full rounded-lg border p-3 text-center text-base font-medium text-black transition hover:bg-opacity-90"
                      variant="green"
                      onClick={() => {
                        onSubmit(order)
                    }}>
                      Confirmar
                  </Button>


                  </div>
                </div>
              </div>
            </div>
      {/* <div className="inline-block align-bottom justify-items-center bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
        <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
          <div className=" text-center">
            
            <div className="mt-3 sm:mt-0 mb-4 sm:text-left">
              <div className="grid justify-items-center">
              </div>
              <h3 className="mb-7 mt-4 text-lg font-semibold text-center antialiased leading-6 text-gray-900" id="modal-title">
                {course.title}
              </h3>
              <div className="mt-1 relative rounded-md">
                <div className="mb-1">
                  <label className="mb-2 font-bold">Preço sem inclir taxas</label>
                  <div className="text-xs text-gray-700 flex">
                    <label className="flex items-center mr-2">
                      <input
                        checked={enablePrice}
                        onChange={({target: {checked}}) => {
                          setOrder({
                            ...order,
                            price: checked ? order.price : eth.perItem
                          })
                          setEnablePrice(checked)
                        }}
                      />
                    </label>
                  </div>
              </div>
                <input
                  disabled={!enablePrice}
                  value={order.price}
                  onChange={({target: {value}}) => {
                    if (isNaN(value)) { return; }
                    setOrder({
                      ...order,
                      price: value
                    })
                  }}
                  type="text"
                  name="price"
                  id="price"
                  className="disabled:opacity-50 w-80 mb-1 focus:ring-indigo-500 shadow-md focus:border-indigo-900 block pl-7 p-4 sm:text-sm border-gray-300 rounded-md"
                />
                <p className="text-xs text-gray-700">
                  O preço pode variar de uma compra para outra.
                </p>
              </div>
              { formState.message &&
                <div className="p-4 my-3 text-yellow-700 bg-yellow-200 rounded-lg text-sm">
                  { formState.message }
                </div>
              }
            </div>
          </div>
        </div>
        <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex ">
          <Button
          variant="green"
            onClick={() => {
              onSubmit(order)
          }}>
            Confirmar
          </Button>
          <Button
            className="justify-center py-2 ml-5 "
            onClick={closeModal}
            variant="red">
            Fechar
          </Button>
        </div>
      </div> */}
    </Modal>
  )
}