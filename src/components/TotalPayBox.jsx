import React, { useContext } from 'react'
import ButtonCoffe from './ButtonCoffe'
import { CoffeContext } from '@/context/CoffeContext'

const TotalPayBox = ({subTotal,send,total,IVA,checkOut,pay}) => {
    const {coffeChoiced}=useContext(CoffeContext)
  return (
    <div className={checkOut?"flex flex-col justify-between w-[360px] h-fit gap-4 p-6 rounded-[10px] bg-[#f7f5f3]":"flex flex-col justify-between w-[360px] h-fit gap-4 p-6  bg-[#f7f5f3]"}>
          <div className="flex flex-col gap-4">
            <div className=" text-lg font-semibold leading-6">
              Total del carrito
            </div>
            <hr className="  border-solid border-[#e3ded7]" />

            <div className=" flex justify-between">
              <div className="text-sm font-normal leading-4">SUBTOTAL</div>
              <div
                id="paidQuantity"
                className=" text-sm font-semibold leading-4"
              >
                {subTotal}
              </div>
            </div>

            <div className="flex justify-between">
              <div className=" text-sm font-normal leading-4">ENVÍO</div>
              <div
                id="sendQuantity"
                className=" text-sm font-semibold leading-4"
              >
                {" "}
                {send}
              </div>
            </div>

            <hr className="   border-solid border-[#e3ded7]" />

            <div className="flex justify-between">
              <div className=" text-sm font-semibold leading-4">TOTAL</div>
              <div className="flex flex-col gap-2 text-right">
                <p
                  id="totalQuantity"
                  className=" text-sm font-semibold leading-4"
                >
                  {total}
                </p>
                <p className="text-xs font-normal leading-4 text-[#515051]">
                  Incluye {IVA} de IVA
                </p>
              </div>
            </div>
          </div>
        { checkOut? <div className=" flex w-[310px] h-10 gap-4">
            <ButtonCoffe style={"green"} text={"Pagar y realizar pedido"} action={pay}/>
           
            
          </div>:<div className=" flex w-[310px] h-10 gap-4">
           { coffeChoiced<=0?<ButtonCoffe style={"green"} text={"Ir a checkout"} />:<ButtonCoffe style={"green"} text={"Ir a checkout"} link={"/checkOut"} />}
           
            <ButtonCoffe
              style={"transparente"}
              text={"Seguir comprando"}
              link={"/shop"}
            />
          </div>}
        </div>
  )
}

export default TotalPayBox