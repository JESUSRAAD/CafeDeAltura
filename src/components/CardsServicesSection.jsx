import React from 'react'
import CardServices from './CardServices'
import { ClipboardCheck, Gift, Truck } from 'lucide-react'

const CardsServicesSection = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-6 min-h-[380px] text-center bg-[url(/img/086aa1e226e5adfe010fd0fb3ff3e2cb.jpeg)] bg-center bg-cover">
    <h2 className="text-2xl font-medium leading-7 text-white">Café con las mejores condiciones</h2>
    <div className="flex justify-center items-center max-w-[996px] min-h-[232px] gap-6">
      <CardServices title={"Recibe tu pedido sin preocuparte"} content={"Tienes cosas más importantes en la cabeza, por eso con nuestra suscripción de café, nunca te quedarás sin tu taza de la mañana."} icon={<ClipboardCheck size={40} color="#ffffff" />}/>
      <CardServices title={"Envío en 24/48h"} content={"Pide tu café antes de las 12h y lo recibirás al día siguiente."} icon={<Truck size={40} color="#ffffff" />}/>
      <CardServices title={"Descuentos y beneficios"} content={"Cada dos meses, te regalamos una bolsa de un nuevo origen sorpresa, para que lo descubras junto a nosotros."} icon={<Gift size={40} color="#ffffff" />}/>
    </div>
  </div>
  )
}

export default CardsServicesSection