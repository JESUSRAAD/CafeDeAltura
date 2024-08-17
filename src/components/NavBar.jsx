"use client"
import Image from 'next/image'
import Link from 'next/link'
import React, { useContext } from 'react'
import ButtonCoffe from './ButtonCoffe'
import LogoType from './LogoType'
import PageList from './PageList'
import { Phone } from 'lucide-react'
import { CoffeContext } from '@/context/CoffeContext'
import CarShoping from './CarShoping'


const NavBar = () => {

  const {isCarAvailable,setIsCarAvailable,coffeChoiced,setCoffeChoiced}=useContext(CoffeContext)

const handleCarShoping=()=>{
  return(
    isCarAvailable?setIsCarAvailable(false):setIsCarAvailable(true)
  )
}

  return (
    <nav className='flex text-white min-h-[64px] fixed items-center justify-around w-screen top-[0%] bg-[#2b2a2b]'>
  
     <Link href={"/"}> <LogoType/></Link>
  
        <PageList direction={"row"}/>
      <div className="flex justify-between items-center min-w-[288px] min-h-[40px] gap-6">
        <div  className="flex min-w-[134px] min-h-[24px] gap-2 justify-between items-center">
      
        <Phone color="#ffffff" />

          <p className="w-[102px] h-4 text-sm font-semibold leading-4 text-left">+34 919 49 05 18</p>
        </div>

       
        <Link  href="">
        <ButtonCoffe text={"Iniciar sesión"} style={"gray"} link={"/Basket"} />
          </Link>

          
      </div>
      <div className="carr">
      
        <Image onClick={()=>handleCarShoping()}  src="/img/Carr.png" width={24} height={24} alt="icon-shopBag" />

      </div>
      <CarShoping arr={coffeChoiced} visibleCondition={isCarAvailable}/>
    </nav>
  )
}

export default NavBar