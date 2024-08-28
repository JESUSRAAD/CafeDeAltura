import Image from "next/image";
import React from "react";

const CardServices = ({ title, content, icon, payFiniskSecction }) => {
  return (
    <>
      {payFiniskSecction ? (
        <div className="flex flex-col justify-center items-center min-w-[316px] h-fit gap-4  bg-white ">
          <div className="flex items-center justify-center w-16 h-16 rounded-[20px] bg-[#2a5b45]">
            {/* <Image src={icon} width={40} height={40} alt="icon" /> */}
            {icon}
          </div>
          <h3 className=" text-2xl font-medium leading-7 text-[#2A5B45]">
            {title}
          </h3>
          <p className="text-sm font-normal leading-4 w-[346px]">{content}</p>
        </div>
      ) : (
        <div className="flex flex-col justify-center items-center w-[316px] h-[232px] gap-4 shadow-[0px_1px_4px_0px_#e3ded7cc] border bg-white rounded-lg border-solid border-[#f7f5f3]">
          <div className="flex items-center justify-center w-16 h-16 rounded-[20px] bg-[#2a5b45]">
            {/* <Image src={icon} width={40} height={40} alt="icon" /> */}
            {icon}
          </div>
          <h3 className=" text-lg font-semibold leading-6">{title}</h3>
          <p className="text-sm w-[268px]">{content}</p>
        </div>
      )}
    </>
  );
};

export default CardServices;
