import { Minus, Plus } from "lucide-react";
import Image from "next/image";
import React from "react";

const CardBasket = ({ brand, img, price, acc, actionMinus, actionPlus,payFiniskSecction }) => {
  
  return (
    <>
    {payFiniskSecction?
      <div class="flex justify-between items-center min-w-[776px]  gap-6">
   
      <Image src={img} width={55.66} height={55.66} alt={brand + " img"} />
      <div class=" w-[994.34px] min-h-[55.66px] text-start gap-6">
        <p class="text-sm font-semibold leading-4">{brand}</p>
        <p class=" text-sm font-normal leading-4">Paquete de café, 250 gr</p>
      </div>
    
      <div class="text-lg min-w-[55px] font-semibold leading-6">
        {price.toFixed(2)} €
      </div>
    </div>:
      <div class="flex justify-center items-center min-w-[776px] gap-6">
      <div class=" flex gap-2">
        <span onClick={actionMinus}>
          <Minus  color="#000000" />
        </span>
        <span class="flex justify-center items-center w-6 h-6 text-[#2a5b45] text-xs font-normal leading-4 rounded-[200px] bg-[#2a5b451a]">
          {acc}
        </span>
        <span onClick={actionPlus}>
          <Plus  color="#000000" />
        </span>
      </div>{" "}
      <Image src={img} width={55.66} height={55.66} alt={brand + " img"} />
      <div class=" w-[576px] min-h-[55.66px] gap-6">
        <p class="text-sm font-semibold leading-4">{brand}</p>
        <p class=" text-sm font-normal leading-4">Paquete de café, 250 gr</p>
      </div>
      <div class="text-lg min-w-[55px] font-semibold leading-6">
        {price.toFixed(2)} €
      </div>
    </div>
    }
    </>
  );
};

export default CardBasket;
