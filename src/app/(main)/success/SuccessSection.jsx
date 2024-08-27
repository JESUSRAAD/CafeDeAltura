"use client";
import ButtonCoffe from "@/components/ButtonCoffe";
import CardServices from "@/components/CardServices";
import TotalPayBox from "@/components/TotalPayBox";
import { CoffeContext } from "@/context/CoffeContext";
import { ClipboardCheck } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useContext } from "react";

const SuccessSection = () => {

  const {
    valuesBox,
    setIsCarAvailable,
    send,
    total,
    setCoffeChoiced,
    IVA,
  } = useContext(CoffeContext);
  setIsCarAvailable(false);
  const router = useRouter(); // Obtén la instancia del enrutador

  const handleCleanOrder = (event) => {
    event.preventDefault();

     setCoffeChoiced([]);
    localStorage.clear("productsChoice")
    router.push('/shop'); // Redirige a la página /success

  };

  return (
    <div className="flex flex-col gap-6 items-center">
      <CardServices
        payFiniskSecction={true}
        title={"El pedido ha sido realizado con éxito"}
        content={
          "El pedido #12387 se encuentra en preparación. Lo recibirás dentro de las fechas acordadas en tu envío. Hemos enviado un ticket a tu correo electrónico."
        }
        icon={<ClipboardCheck size={40} color="#ffffff" />}
      />
      <TotalPayBox
       IVA={valuesBox.IVA}
       send={valuesBox.send}
       subTotal={valuesBox.subTotal}
       total={valuesBox.total}
        payFiniskSecction={true}
      />
      <ButtonCoffe style={"green"} text={"Volver a la tienda"}  action={handleCleanOrder} />
    </div>
  );
};

export default SuccessSection;
