import { CircleMinus, CirclePlus, Minus, Plus, Trash } from "lucide-react";
import Image from "next/image";
import React from "react";

const CardCarShoping = ({
  brand,
  img,
  price,
  acc,
  trashAction,
  plusAction,
  minusAction,
}) => {
  return (
    <div className="flex w-[280px] border justify-between items-center text-center bg-[white] gap-1.5 mt-2.5 p-[7px] rounded-lg border-solid border-[#e3ded7]">
      <Image
        className="rounded-xl"
        width={65}
        height={65}
        src={img}
        alt={brand + " img"}
      />
      <div className=" text-[black] flex flex-col gap-3 text-sm font-semibold leading-4">
        <p className="nameCard">{brand}</p>
        <p className="font-normal">{price.toFixed(2)} €</p>
      </div>
      <div className="flex flex-col gap-5  w-fit justify-center">
        <div className="flex  gap-2">
          <Trash size={13} color="#DD2654" onClick={trashAction} />
          <p className="flex justify-center items-center w-4 h-4 text-[#2a5b45] text-xs font-normal leading-4 rounded-[200px] bg-[#2a5b451a]">
            {acc}
          </p>
        </div>
        <div className="flex flex-col justify-center gap-2 items-center">
          {/* <button class="flex justify-center  items-center"> */}
          <CirclePlus size={13} color="#2a5b45" onClick={plusAction} />
          {/* </button> */}
          {/* <button class="flex justify-center items-center text-black w-6 h-6"> */}
          <CircleMinus size={13} color="#2a5b45" onClick={minusAction} />
          {/* </button> */}
        </div>
      </div>
    </div>
  );
};

export default CardCarShoping;
