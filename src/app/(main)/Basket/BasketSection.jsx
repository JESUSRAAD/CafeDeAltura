"use client";
import { CoffeContext } from "@/context/CoffeContext";
import Link from "next/link";
import React, { useContext } from "react";
import CardBasket from "./CardBasket";
import { useForm } from "react-hook-form";
import ButtonCoffe from "@/components/ButtonCoffe";
import TotalPayBox from "@/components/TotalPayBox";

const BasketSection = () => {
  const {
    coffeData,
    setCoffeData,
    coffeChoiced,
    setCoffeChoiced,
    setIsCarAvailable,
    subTotal,
    setSubtotal,
    send,
    setSend,
    total,
    setTotal,
    IVA,
    setIVA,
    updateProduct,
    handlePlusAction,
    handleMinusAction,
  } = useContext(CoffeContext);

  setIsCarAvailable(false);

  const { register, watch } = useForm({
    defaultValues: {
      send: "9.00 €", // Valor predeterminado
    },
  });

  const subTotalFun = () => {
    const totalSum = coffeChoiced.reduce(
      (sum, product) => sum + product.totalPay,
      0
    );
    return totalSum;
  };

  setSubtotal(subTotalFun().toFixed(2) + " €");

  const totalFun = () => {
    if (watch("send") === "9.00 €") {
      const totalPay = parseInt(subTotalFun()) + 9;
      return totalPay;
    } else {
      const totalPay = parseInt(subTotalFun()) + 0;
      return totalPay;
    }
  };

  setTotal(totalFun().toFixed(2) + " €");

  const IVATotalFun = () => {
    const totalIVA = coffeChoiced.reduce(
      (sum, product) => sum + product.IVAPay,
      0
    );
    return totalIVA;
  };

  setIVA(IVATotalFun().toFixed(2) + " €");
  setSend(watch("send"));

  return (
    <section className="flex flex-col items-center min-h-[772px] gap-6 mt-16 p-10">
      <h2 className="font-medium text-2xl leading-7 text-[#2a5b45]">
        Cesta ({coffeChoiced.length})
      </h2>
      <div className="flex w-[1200px] min-h-[415.32px] gap-6">
        <div className="flex flex-col w-[784px] min-h-[407.32px] gap-6 p-2">
          <h3 className="font-semibold text-lg leading-6">Procuctos</h3>
          <div className="flex flex-col  gap-6">
            {coffeChoiced.length > 0 ? (
              coffeChoiced.map((coffe) => {
                return (
                  <CardBasket
                    brand={coffe.name}
                    img={coffe.img}
                    price={coffe.price}
                    key={coffe.id}
                    acc={coffe.acc}
                    actionMinus={() => handleMinusAction(coffe.id)}
                    actionPlus={() => handlePlusAction(coffe.id)}
                  />
                );
              })
            ) : (
              <p className="flex text-[#000000b4] justify-center items-center">
                La cesta esta vacio
              </p>
            )}
          </div>
          <form className="flex flex-col gap-6">
            <h3 className="font-semibold text-lg leading-6" for="payMethod">
              Seleccionar envío
            </h3>
            <div className="flex justify-center items-center gap-4">
              <input
                className="accent-[#2a5b45] "
                {...register("send")}
                value="GRATIS"
                type="radio"
                id="7day"
              />
              <label
                className=" flex flex-col w-[657px] min-h-[36px] gap-1 "
                htmlFor="7day"
              >
                <p className="text-sm font-semibold leading-4">
                  Envío 5-7 días
                </p>
                <p className="text-sm font-normal leading-4">
                  Opción estándar sin seguimiento
                </p>
              </label>
              <div className=" text-lg font-semibold leading-6">GRATIS</div>
            </div>

            <hr className="   border-solid border-[#e3ded7]" />

            <div className=" flex justify-center items-center gap-4">
              <input
                className="accent-[#2a5b45]"
                {...register("send")}
                value="9.00 €"
                type="radio"
                id="24h"
              />
              <label
                className=" flex flex-col w-[657px] min-h-[36px] gap-1"
                htmlFor="24h"
              >
                <p className=" text-sm font-semibold leading-4">
                  Envío urgente 24h
                </p>
                <p className=" text-sm font-normal leading-4">
                  Recibe tu pedido en las siguientes 24h (Para pedidos
                  realizados antes de las 13:00).
                </p>
              </label>
              <div className="text-lg font-semibold leading-6">9,00 €</div>
            </div>
          </form>
        </div>

        <TotalPayBox IVA={IVA} send={send} subTotal={subTotal} total={total} />
      </div>
    </section>
  );
};

export default BasketSection;
