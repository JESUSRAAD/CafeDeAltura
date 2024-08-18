"use client";
import { CoffeContext } from "@/context/CoffeContext";
import Link from "next/link";
import React, { useContext } from "react";
import CardBasket from "./CardBasket";
import { useForm } from "react-hook-form";
import ButtonCoffe from "@/components/ButtonCoffe";

const BasketSection = () => {
  const { coffeData, setCoffeData, coffeChoiced, setCoffeChoiced } =
    useContext(CoffeContext);

  const { register, watch } = useForm({
    defaultValues: {
      send: "9.00 €", // Valor predeterminado
    },
  });

  const subTotal = () => {
    const totalSum = coffeChoiced.reduce(
      (sum, product) => sum + product.totalPay,
      0
    );
    return totalSum;
  };

  const total = () => {
    if (watch("send") === "9.00 €") {
      const totalPay = parseInt(subTotal()) + 9;
      return totalPay;
    } else {
      const totalPay = parseInt(subTotal()) + 0;
      return totalPay;
    }
  };

  const IVATotal=()=>{
    const totalIVA = coffeChoiced.reduce((sum, product) => sum + product.IVAPay, 0);
    return totalIVA
  }

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
              />
              <label
                className="lab flex flex-col w-[657px] min-h-[36px] gap-1elInpu"
                for="7day"
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

            <hr className=" border  border-solid border-[#e3ded7]" />

            <div className=" flex justify-center items-center gap-4">
              <input
                className="accent-[#2a5b45]"
                {...register("send")}
                value="9.00 €"
                type="radio"
              />
              <label
                className=" flex flex-col w-[657px] min-h-[36px] gap-1"
                for="24h"
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
        <div className="flex flex-col justify-between w-[360px] h-64 gap-4 p-6 bg-[#f7f5f3]">
          <div className="flex flex-col gap-4">
            <div className=" text-lg font-semibold leading-6">
              Total del carrito
            </div>
            <hr className=" border border-solid border-[#e3ded7]" />

            <div className=" flex justify-between">
              <div className="text-sm font-normal leading-4">SUBTOTAL</div>
              <div
                id="paidQuantity"
                className=" text-sm font-semibold leading-4"
              >
                {subTotal().toFixed(2) + " €"}
              </div>
            </div>

            <div className="flex justify-between">
              <div className=" text-sm font-normal leading-4">ENVÍO</div>
              <div
                id="sendQuantity"
                className=" text-sm font-semibold leading-4"
              >
                {" "}
                {watch("send")}
              </div>
            </div>

            <hr className=" border  border-solid border-[#e3ded7]" />

            <div className="flex justify-between">
              <div className=" text-sm font-semibold leading-4">TOTAL</div>
              <div className="flex flex-col gap-2 text-right">
                <p
                  id="totalQuantity"
                  className=" text-sm font-semibold leading-4"
                >
                  {total().toFixed(2) + " €"}
                </p>
                <p className="text-xs font-normal leading-4 text-[#515051]">
                  Incluye {IVATotal().toFixed(2) + " €"} de IVA
                </p>
              </div>
            </div>
          </div>
          <div className=" flex w-[310px] h-10 gap-4">
            <ButtonCoffe style={"green"} text={"Ir a checkout"} />
            {/* <Link
              href=""
              className=" flex justify-center items-center w-[129px] h-10 rounded text-sm font-semibold leading-4 text-[#2a5b45]"
            >
              Seguir comprando
            </Link> */}
            <ButtonCoffe
              style={"transparente"}
              text={"Seguir comprando"}
              link={"/shop"}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BasketSection;
