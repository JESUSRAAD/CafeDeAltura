import { MoveRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const LinkArrow = ({titleArrow, color, path}) => {
  
  const linkPath = path || ""; 

  switch (color) {
    case "black":
      return  <div className="flex underline gap-4 items-center">
      <Link className=" text-black font-semibold text-sm leading-4" href={linkPath}>
        {titleArrow}
      </Link>

      <MoveRight color="#000000" />
    </div>;
    case "white":
      return <div className="flex underline gap-4 items-center">
      <Link className=" text-white font-semibold text-sm leading-4" href={linkPath}>
        {titleArrow}
      </Link>

      <MoveRight color="#ffffff" />
    </div>; 
    default:
      return<div className="flex underline gap-4 items-center">
      <Link className=" text-purple-950 font-semibold text-sm leading-4" href={linkPath}>
        {titleArrow}
      </Link>

      <MoveRight color="#3b0764" />
    </div>; 
  }


  
}

export default LinkArrow