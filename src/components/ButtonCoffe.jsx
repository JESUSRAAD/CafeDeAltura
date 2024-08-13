import React from "react";

const ButtonCoffe = ({ text, style }) => {
//   const styleGreen = "bg-[ #2A5B45] text-white py-3 px-6 rounded";
//   const styleGrayDark = "bg-[#1F1815] text-white py-3 px-6 rounded";
//   const styleGreenSmall ="bg-[ #2A5B45B2] bg-opacity-70 text-white p-2 rounded";
//   const styleGray = "bg-[ #515051]  text-white py-3 px-6 rounded";
//   const transparent = "bg-transparent text-[ #2A5B45] py-3 px-6 rounded";

 
    switch (style) {
      case "black":
        return <button className="flex items-center text-center min-w-[168px] min-h-[40px] justify-center text-white rounded font-semibold text-sm leading-4 bg-[#1f1815]">{text}</button>;
      case "green":
        return <button className="flex items-center text-center min-w-[137px] min-h-[40px] justify-center text-white rounded font-semibold text-sm leading-4 bg-[#2a5b45]">{text}</button>; 
      case "greenSmall":
        return <button className="flex justify-center items-center min-w-[60px] min-h-[32px] text-[white] rounded text-sm font-semibold leading-4 bg-[#2a5b45b2] hover:bg-[#2a5b45] hover:cursor-pointer">{text}</button>; 
      case "agotado":
        return <button className="flex justify-center items-center min-w-[72px] min-h-[32px] text-[white] rounded text-sm font-semibold leading-4 bg-[#E3DED7] ">{text}</button>; 
      case "gray":
        return <button className="flex min-w-[130px] min-h-[40px] justify-center rounded text-center items-center no-underline bg-[#515051] text-sm  font-semibold leading-4 text-[white]">{text}</button>;
      default:
        return <button className="bg-transparent text-[#2A5B45] py-3 px-6 rounded">{text}</button>;
    }
  

 
};

export default ButtonCoffe;
