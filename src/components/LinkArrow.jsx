import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const LinkArrow = ({titleArrow}) => {
  return (
    <div className="flex underline gap-4 items-center">
    <Link className=" text-black font-semibold leading-4" href="/shop">
     {titleArrow}
    </Link>
    <Image
      src="/img/Arrow narrow right.png"
      width={24}
      height={24}
      alt="Arrow narrow right"
    />
  </div>
  )
}

export default LinkArrow