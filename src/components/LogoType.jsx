import { Coffee } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const LogoType = ({isSuccessPage}) => {
  return (
    <Link href={isSuccessPage ? "#" : "/"} className='flex text-[white] min-w-[213.86px] min-h-[36px] gap-[7.33px] justify-evenly items-center'>
    <p className=' w-[186px] h-9 opacity-[0.86px] text-[23.46px] font-normal leading-[35.19px]'>cafedealtura.com</p>
    {/* <Image className='top-[-0.02px]' src="/img/ps_coffee-hot.png" width={20.53} height={24.93} alt="coffeeHot" /> */}
    <Coffee color="#ffffff" />
 
  </Link>
  )
}

export default LogoType