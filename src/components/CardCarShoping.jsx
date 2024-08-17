import Image from "next/image";
import React from "react";

const CardCarShoping = ({brand,img,price}) => {
  return (
    <div className="flex w-[280px] border justify-between items-center text-center bg-[white] gap-1.5 mt-2.5 p-[7px] rounded-lg border-solid border-[#e3ded7]">
      <Image
      className="rounded-xl"
        width={50}
        height={50}
        src={img}
      />
      <div className=" text-[black] flex flex-col gap-3 text-sm font-semibold leading-4">
        <p className="nameCard">{brand}</p>
        <p className="font-normal">{price}</p>
      </div>
      <div className="flex flex-col gap-0.5 w-3 justify-center">
        <p className="text-[10px] bg-[#2A5B451A] text-[#2A5B45] p-0.5 rounded-[200px]">1</p>
        <button className=" h-5 bg-[red] text-[black] rounded-[50%] border-[none]">x</button>
      </div>
    </div>
  );
};

export default CardCarShoping;
