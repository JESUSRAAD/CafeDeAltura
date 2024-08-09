import Image from 'next/image'
import Link from 'next/link'
import React from 'react'


const NavBar = () => {





  return (
    <nav className='flex text-white min-h-[64px] fixed items-center justify-around w-screen top-[0%] bg-[#2b2a2b]'>
      <div className='flex text-[white] min-w-[213.86px] min-h-[36px] gap-[7.33px] justify-evenly items-center'>
        <p className=' w-[186px] h-9 opacity-[0.86px] text-[23.46px] font-normal leading-[35.19px]'>cafedealtura.com</p>
        <Image className='top-[-0.02px]' src="/img/ps_coffee-hot.png" width={20.53} height={24.93} alt="coffeeHot" />

     
      </div>
      <ul className='flex justify-between items-center gap-4 min-w-[512px] min-h-[32px] text-sm font-semibold leading-4 p-2'>
            <il className='flex items-center h-8 p-2 hover:flex hover:items-center hover:h-8 hover:p-2 hover:rounded-[10px] hover:bg-[#f7f5f31a]' ><Link href="/shop">Tienda</Link></il>
            <il className='flex items-center h-8 p-2 hover:flex hover:items-center hover:h-8 hover:p-2 hover:rounded-[10px] hover:bg-[#f7f5f31a]' ><Link href="/suscription">Suscripción</Link></il>
            <il className='flex items-center h-8 p-2 hover:flex hover:items-center hover:h-8 hover:p-2 hover:rounded-[10px] hover:bg-[#f7f5f31a]' ><Link href="/forCompany">Para empresas</Link></il>
            <il className='flex items-center h-8 p-2 hover:flex hover:items-center hover:h-8 hover:p-2 hover:rounded-[10px] hover:bg-[#f7f5f31a]' ><Link href="/aboutWe">Sobre nosotros</Link></il>
            <il className='flex items-center h-8 p-2 hover:flex hover:items-center hover:h-8 hover:p-2 hover:rounded-[10px] hover:bg-[#f7f5f31a]' ><Link href="/contact">Contacto</Link></il>
          
        </ul>
      <div className="flex justify-between items-center min-w-[288px] min-h-[40px] gap-6">
        <div  className="flex min-w-[134px] min-h-[24px] gap-2 justify-between items-center">
      
         <Image  src="/img/Icon.png" width={18} height={18} alt="iconPhone" />

          <p className="w-[102px] h-4 text-sm font-semibold leading-4 text-left">+34 919 49 05 18</p>
        </div>

       
        <Link className='flex min-w-[130px] min-h-[40px] justify-center rounded text-center items-center no-underline bg-[#515051]' href="">
          <p className="w-[82px] h-4 text-sm font-semibold leading-4 text-[white]">Iniciar sesión</p>
          </Link>
      </div>
      <div className="carr">
      
        <Image  src="/img/Carr.png" width={18} height={18} alt="icon-shopBag" />

      </div>
    </nav>
  )
}

export default NavBar