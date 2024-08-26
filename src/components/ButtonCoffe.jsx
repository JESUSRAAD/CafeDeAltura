import Link from "next/link";
import React from "react";

const ButtonCoffe = ({ text, style,link,action }) => {

const linkPath = link || ''
 
    switch (style) {
      case "black":
        return  <Link href={linkPath} onClick={action}  className="flex items-center text-center min-w-[168px] min-h-[40px] justify-center text-white rounded font-semibold text-sm leading-4 bg-[#1f1815]">{text}</Link>;
      case "green":
        return <Link href={linkPath} type="submit" onClick={action} className="flex items-center text-center py-3 px-6 min-h-[40px] justify-center max-w-fit text-white rounded font-semibold text-sm leading-4 bg-[#2a5b45]">{text}</Link>; 
      case "greenSmall":
        return <Link href={linkPath} onClick={action} className="flex justify-center items-center min-w-[60px] min-h-[32px] text-[white] rounded text-sm font-semibold leading-4 bg-[#2a5b45b2] hover:bg-[#2a5b45] hover:cursor-pointer">{text}</Link>; 
      case "agotado":
        return <Link href={linkPath} onClick={action} className="flex justify-center items-center min-w-[72px] min-h-[32px] text-[white] rounded text-sm font-semibold leading-4 bg-[#E3DED7] ">{text}</Link>; 
      case "gray":
        return <Link href={linkPath} onClick={action} className="flex min-w-[130px] min-h-[40px] justify-center rounded text-center items-center no-underline bg-[#515051] text-sm  font-semibold leading-4 text-[white]">{text}</Link>;
      default:
        return <Link href={linkPath} onClick={action} className="flex justify-center text-center items-center bg-transparent text-[#2A5B45] py-3  rounded">{text}</Link>;
    }
  

 
};

export default ButtonCoffe;
