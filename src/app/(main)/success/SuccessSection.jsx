"use client";
import ButtonCoffe from "@/components/ButtonCoffe";
import CardServices from "@/components/CardServices";
import TotalPayBox from "@/components/TotalPayBox";
import { CoffeContext } from "@/context/CoffeContext";
import React, { useContext } from "react";

const SuccessSection = () => {
  const {
    subTotal,
    setIsCarAvailable,
    send,

    total,

    IVA,
  } = useContext(CoffeContext);
  setIsCarAvailable(false);

  return (
    <div className="flex flex-col gap-6 items-center">
      <CardServices
        payFiniskSecction={true}
        title={"El pedido ha sido realizado con éxito"}
        content={
          "El pedido #12387 se encuentra en preparación. Lo recibirás dentro de las fechas acordadas en tu envío. Hemos enviado un ticket a tu correo electrónico."
        }
        icon={"/img/Clipboard check.png"}
      />
      <TotalPayBox
        IVA={IVA}
        send={send}
        subTotal={subTotal}
        total={total}
        payFiniskSecction={true}
      />
      <ButtonCoffe style={"green"} text={"Volver a la tienda"} link={"/shop"} />
    </div>
  );
};

export default SuccessSection;
