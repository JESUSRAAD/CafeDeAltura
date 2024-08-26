import React from "react";
import Image from "next/image";

const HomeCardCoffe = ({ brand, img, price }) => {
  return (
    <div className="flex flex-col items-center justify-center text-center gap-6 w-[282px] min-h-[391.39px] border rounded-lg border-solid border-[#e3ded7]">
      <Image src={img} width={219.39} height={219.39} alt="coffe img" />
      <div className="flex flex-col gap-3 text-sm font-semibold leading-4">
        <p>{brand}</p>
        <p className="font-normal">{price.toFixed(2)} €</p>
      </div>
      <a className="flex justify-center items-center min-w-[60px] min-h-[32px] text-[white] rounded text-sm font-semibold leading-4 bg-[#2a5b45b2]">
        <p>Añadir</p>
      </a>
    </div>
  );
};

export default HomeCardCoffe;
