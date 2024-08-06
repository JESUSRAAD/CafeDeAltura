import React from "react";

const ButtonCoffe = ({ text, style }) => {
//   const styleGreen = "bg-[ #2A5B45] text-white py-3 px-6 rounded";
//   const styleGrayDark = "bg-[#1F1815] text-white py-3 px-6 rounded";
//   const styleGreenSmall ="bg-[ #2A5B45B2] bg-opacity-70 text-white p-2 rounded";
//   const styleGray = "bg-[ #515051]  text-white py-3 px-6 rounded";
//   const transparent = "bg-transparent text-[ #2A5B45] py-3 px-6 rounded";

 
    switch (style) {
      case "black":
        return <button className="bg-[#1F1815] text-white py-3 px-6 rounded">{text}</button>;
      case "green":
        return <button className="bg-[#2A5B45] text-white py-3 px-6 rounded">{text}</button>; 
      case "greenSmall":
        return <button className="bg-[#2A5B45B2] bg-opacity-70 text-white p-2 rounded">{text}</button>; 
      case "gray":
        return <button className="bg-[#515051]  text-white py-3 px-6 rounded">{text}</button>;

      default:
        return <button className="bg-transparent text-[#2A5B45] py-3 px-6 rounded">{text}</button>;
    }
  

 
};

export default ButtonCoffe;
