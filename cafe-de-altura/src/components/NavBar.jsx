import Link from 'next/link'
import React from 'react'


const NavBar = () => {





  return (
    <div className='flex items-center justify-center bg-black text-white h-[68px]'>
        <ul className='flex gap-5'>
            <il><Link href="/shop">Tienda</Link></il>
            <il><Link href="/suscription">Suscripcion</Link></il>
            <il><Link href="/forCompany">Para Empresas</Link></il>
            <il><Link href="/aboutWe">Sobre Nosotros</Link></il>
            <il><Link href="/contact">Contacto</Link></il>
          
        </ul>
    </div>
  )
}

export default NavBar