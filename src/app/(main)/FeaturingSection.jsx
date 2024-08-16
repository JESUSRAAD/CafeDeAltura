import LinkArrow from "@/components/LinkArrow";
import Image from "next/image";
import React from "react";

const FeaturingSection = () => {
  return (
    <div className="flex justify-center h-[480px] bg-[#f7f5f3]">
      <div className="flex justify-between items-center w-[1200px] min-h-[390px] pt-[44.61px] pb-[44.61px]">
        <div className="flex flex-col w-[457px] min-h-[116px] gap-4">
          <h2 className="font-medium text-2xl leading-7 text-[#2a5b45]">
            Pruébalo en nuestro coffee shop
          </h2>
          <p className="text-sm font-normal leading-4">
            Visita nuestra cafetería en el centro de la ciudad para probar los
            granos de café antes de hacer tu pedido y llévate un descuento
          </p>

          
          <LinkArrow titleArrow={"Cómo llegar"} color={"black"} />
        </div>
       
                <Image  src="/img/af83409b898246e822c86278c804fd4c.jpeg" width={588} height={390} alt="coffe Store" className="rounded-[20px]"/>

      </div>
    </div>
  );
};

export default FeaturingSection;
