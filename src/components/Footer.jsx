import React from 'react'
import LogoType from './LogoType'
import PageList from './PageList'
import { Mail, Phone } from 'lucide-react'
import Link from 'next/link'
import ButtonCoffe from './ButtonCoffe'

const Footer = () => {
  return (
    <footer className=' flex flex-col justify-between h-[270px] items-center pt-9 pb-9 text-[white]  text-sm bg-[#1f1815]'>
    <div className="flex flex-col w-fit min-h-[204px] gap-4 ">
        <div className='w-fit'>

        <LogoType/>
        </div>
    
    <div className="flex justify-between w-[1132px] h-[152px] gap-[183px]">
    
        <div className="flex flex-col w-[255.33px] h-[152px] gap-4">
    <h3 className='text-lg font-semibold leading-6'>Te ayudamos en</h3>
    <div className="flex justify-center items-center w-[182px] min-h-[48px] rounded bg-[#515051]">
        <Link href="/#contactSection" className="flex justify-center items-center text-sm ">
         <div className='flex gap-2'><Phone size={24} color="#ffffff" />
            <p>+34 919 49 05 18</p></div> 
        </Link>
      </div>
      <div className="flex justify-center items-center w-[232px] min-h-[48px] rounded bg-[#515051]">
        <Link href="/#contactSection" className="flex justify-center items-center text-sm ">
          <div  className='flex gap-2 '><Mail size={24} color="#ffffff" />
            <p>hola@cafedealtura.com</p></div>
        </Link>
      </div>
        </div>
        <PageList direction={"col"}/>
        <ul className="flex flex-col w-[255.33px] h-20 gap-4 text-sm font-semibold leading-4">
            <li><a href="/privPolitic">Política de privacidad</a></li>
            <li><a href="/cookiesPolitic">Política de cookies</a></li>
            <li><a href="/termsAndConditions">Términos y condiciones</a></li>
        </ul>
    </div>
    </div>
    
        </footer>
  )
}

export default Footer