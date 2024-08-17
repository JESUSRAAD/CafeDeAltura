import Image from 'next/image'
import React from 'react'

const CardBasket = ({brand,img,price}) => {
  return (
    <div class="flex justify-center items-center min-w-[776px] gap-6">
    <div class=" flex gap-2">
      <button class="flex justify-center items-center w-6 h-6">-</button>
      <span class="flex justify-center items-center w-6 h-6 text-[#2a5b45] text-xs font-normal leading-4 rounded-[200px] bg-[#2a5b451a]">1</span>
      <button class="flex justify-center items-center w-6 h-6">+</button>
    </div>{" "}
    <Image
    
      src={img}
      width={55.66}
      height={55.66}
      alt={brand+" img"}
    />
    <div class=" w-[776px] min-h-[55.66px] gap-6">
      <p class="text-sm font-semibold leading-4">{brand}</p>
      <p class=" text-sm font-normal leading-4">Paquete de café, 250 gr</p>
    </div>
    <div class="text-lg font-semibold leading-6">{price.toFixed(2)}€</div>
  </div>
  )
}

export default CardBasket