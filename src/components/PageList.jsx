import Link from 'next/link'
import React from 'react'

const PageList = ({direction}) => {
    switch (direction) {
        case "row":
          return   <ul className='flex justify-between items-center gap-4 min-w-[512px] min-h-[32px] text-sm font-semibold leading-4 p-2'>
          <il className='flex items-center h-8 p-2 hover:flex hover:items-center hover:h-8 hover:p-2 hover:rounded-[10px] hover:bg-[#f7f5f31a]' ><Link href="/shop">Tienda</Link></il>
          <il className='flex items-center h-8 p-2 hover:flex hover:items-center hover:h-8 hover:p-2 hover:rounded-[10px] hover:bg-[#f7f5f31a]' ><Link href="/suscription">Suscripción</Link></il>
          <il className='flex items-center h-8 p-2 hover:flex hover:items-center hover:h-8 hover:p-2 hover:rounded-[10px] hover:bg-[#f7f5f31a]' ><Link href="/forCompany">Para empresas</Link></il>
          <il className='flex items-center h-8 p-2 hover:flex hover:items-center hover:h-8 hover:p-2 hover:rounded-[10px] hover:bg-[#f7f5f31a]' ><Link href="/aboutWe">Sobre nosotros</Link></il>
          <il className='flex items-center h-8 p-2 hover:flex hover:items-center hover:h-8 hover:p-2 hover:rounded-[10px] hover:bg-[#f7f5f31a]' ><Link href="/contact">Contacto</Link></il>
        
      </ul>
        default:
          return   <ul className='flex flex-col  items-start gap-4  min-h-[32px] text-sm font-semibold leading-4 '>
          <il className='flex items-center h-8' ><Link href="/shop">Tienda</Link></il>
          <il className='flex items-center h-8 ' ><Link href="/suscription">Suscripción</Link></il>
          <il className='flex items-center h-8 ' ><Link href="/forCompany">Para empresas</Link></il>
          <il className='flex items-center h-8 ' ><Link href="/aboutWe">Sobre nosotros</Link></il>
          <il className='flex items-center h-8 ' ><Link href="/contact">Contacto</Link></il>
        
      </ul>
      }
    
}

export default PageList