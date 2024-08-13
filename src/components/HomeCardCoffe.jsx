import React from "react";
import Image from "next/image";
import ButtonCoffe from "@/components/ButtonCoffe";

const HomeCardCoffe = ({ brand, img, price,available }) => {




  return (
   <>{available?<div className="flex flex-col items-center justify-center text-center gap-6 w-[282px] min-h-[391.39px] border rounded-lg border-solid border-[#e3ded7] op hover:bg-[#f7f5f3]">
      <Image src={img} width={219.39} height={219.39} alt="coffe img" />
      <div className="flex flex-col gap-3 text-sm font-semibold leading-4">
        <p>{brand}</p>
        <p className="font-normal">{price.toFixed(2)} €</p>
      </div>
      
      <ButtonCoffe text={"Añadir"} style={"greenSmall"}/>
    </div>:
    <div className="flex flex-col items-center justify-center text-center gap-6 w-[282px] min-h-[391.39px] border rounded-lg border-solid border-[#e3ded7]  ">
    <Image src={img} width={219.39} height={219.39} alt="coffe img" className="opacity-40"/>
    <div className="flex flex-col gap-3 text-sm font-semibold leading-4 opacity-40">
      <p>{brand}</p>
      <p className="font-normal">{price.toFixed(2)} €</p>
    </div>
    
    <ButtonCoffe text={"Agotado"} style={"agotado"}/>
  </div>
    
    }</>
  );
};

export default HomeCardCoffe;
