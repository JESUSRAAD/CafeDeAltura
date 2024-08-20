"use client";
import TotalPayBox from "@/components/TotalPayBox";
import { CoffeContext } from "@/context/CoffeContext";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@radix-ui/react-accordion";
import Image from "next/image";
import React, { useContext } from "react";
import { useForm } from "react-hook-form";

const PayMethod = () => {
  const {
    setIsCarAvailable,
    subTotal,
    setSubtotal,
    send,
    setSend,
    total,
    setTotal,
    IVA,
    setIVA,
  } = useContext(CoffeContext);

  setIsCarAvailable(false);

  const { register } = useForm();

  return (
    <section className="flex flex-col  items-center min-h-[772px] gap-6 mt-16 p-10">
      <h2 className="font-medium text-2xl leading-7 text-[#2a5b45]">
        Checkout
      </h2>
      <div className="flex   max-w-[1200px] min-h-[415.32px] gap-6">
        <form className="flex flex-col w-[784px]  min-h-[407.32px] gap-6 p-2">
          <p className="font-semibold text-lg leading-6">
            Seleccionar método de pago
          </p>
          <Accordion
            type="single"
            className="flex flex-col items-center justify-center w-[668px] min-h-[216px]  "
          >
            <AccordionItem
              value="item-1"
              className="flex flex-col items-center w-[668px] h-auto gap-4 bg-[white]  text-[#2b2a2b] p-6 rounded-[10px] overflow-hidden"
            >
              <AccordionTrigger className="w-[620px] h-6 flex no-underline hover:no-underline gap-4 items-center">
                <input
                  className="accent-[#2a5b45] "
                  {...register("payMethod")}
                  value="tarjeta"
                  type="radio"
                  id="tarjeta"
                />
                <label
                  className=" flex flex-col w-[657px] min-h-[36px] gap-1 text-start"
                  htmlFor="tarjeta"
                >
                  <p className="text-sm font-semibold leading-4">
                    Tarjeta de débito
                  </p>
                  <p className="text-sm font-normal leading-4">
                    Opción estándar sin seguimiento
                  </p>
                </label>
              </AccordionTrigger>
              <AccordionContent className="w-[620px] h-auto font-normal text-xs leading-4  text-[#2b2a2b] ">
                Selecciona el café que desees probar y completa el proceso de
                compra. Si lo prefieres, te preguntaremos cada cuánto quieres
                que te lo mandemos a casa y así nunca te quedarás sin café.
              </AccordionContent>
            </AccordionItem>
            <hr className=" w-full  border-solid border-[#e3ded7]" />

            <AccordionItem
              value="item-2"
              className="flex flex-col items-center w-[668px] h-auto gap-4 bg-[white]  text-[#2b2a2b] p-6 rounded-[10px] overflow-hidden"
            >
              <AccordionTrigger className="w-[620px] h-6 flex no-underline hover:no-underline gap-4 items-center">
                <input
                  className="accent-[#2a5b45] "
                  {...register("payMethod")}
                  id="transferencia"
                  value="transferencia"
                  type="radio"
                />
                <label
                  className=" flex flex-col w-[657px] min-h-[36px] gap-1 text-start"
                  htmlFor="transferencia"
                >
                  <p className="text-sm font-semibold leading-4">
                    Transferencia bancaria a la cuenta ES12 1234 1234 123457890
                  </p>
                  <p className="text-sm font-normal leading-4">
                    Será necesario recibir el comprobante de la transferencia
                    para preparar tu pedido
                  </p>
                </label>
              </AccordionTrigger>
              <AccordionContent className="w-[620px] h-auto font-normal text-xs leading-4 text-[#2b2a2b]  ">
                Viajamos constantemente para encontrar los mejores granos y a
                los agricultores más exigentes. Si podemos ofrecerte estos
                precios es porque tratamos directamente con los productores de
                café, sin intermediarios. Así obtenemos el mejor precio para ti
                y la persona que está detrás de los granos de café recibe el
                mayor beneficio posible.
              </AccordionContent>
            </AccordionItem>
            <hr className=" w-full  border-solid border-[#e3ded7]" />
            <AccordionItem
              value="item-3"
              className="flex flex-col items-center w-[668px] h-auto gap-4 bg-[white]  text-[#2b2a2b] p-6 rounded-[10px] overflow-hidden"
            >
              <AccordionTrigger className="w-[620px] h-6 flex no-underline hover:no-underline gap-4 items-center">
                <input
                  className="accent-[#2a5b45] "
                  {...register("payMethod")}
                  id="bizum"
                  value="bizum"
                  type="radio"
                />
                <label
                  className=" flex  w-[657px] min-h-[36px] items-center text-start gap-4"
                  htmlFor="bizum"
                >
                  <p className="text-sm font-semibold leading-4">Bizum</p>
                  <Image
                    src="/img/bizumIcon.png"
                    width={70}
                    height={31}
                    alt="bizum icon"
                  />
                </label>
              </AccordionTrigger>
              <AccordionContent className="w-[620px] h-auto font-normal text-xs leading-4 text-[#2b2a2b]  ">
                Viajamos constantemente para encontrar los mejores granos y a
                los agricultores más exigentes. Si podemos ofrecerte estos
                precios es porque tratamos directamente con los productores de
                café, sin intermediarios. Así obtenemos el mejor precio para ti
                y la persona que está detrás de los granos de café recibe el
                mayor beneficio posible.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <p className="font-semibold text-lg leading-6">Dirección de envío</p>
          <div className="flex flex-col gap-2">
            <div className="flex flex-col w-[521px] min-h-[54px] gap-[3px] ">
              <label htmlFor="name" className="text-xs font-normal">
                Nombre{" "}
              </label>
              <input
                className=" flex border border-gray-300  h-[36px] rounded-md border-solid box-border pl-[17px] hover:border  hover:border-solid hover:border-[#9b9ea3]  focus:outline-none focus:border-2 focus:border-solid focus:border-[#3f8f6b] "
                type="text"
                id="name"
                {...register("name", {
                  required: {
                    value: true,
                    message: "Nombre requerido",
                  },
                  minLength: {
                    value: 2,
                    message: "El nombre debe tener al menos 2 caracteres",
                  },
                  maxLength: {
                    value: 20,
                    message: "El nombre no puede tener más de 20 caracteres",
                  },
                })}
              />
              {/* {errors.name? <span className="text-xs text-[#FF5555]">Nombre requerido</span>:null} */}
            </div>
            <div className="flex flex-col w-[521px] min-h-[54px] gap-[3px] ">
              <label htmlFor="name" className="text-xs font-normal">
                Apellidos{" "}
              </label>
              <input
                className=" flex border border-gray-300  h-[36px] rounded-md border-solid box-border pl-[17px] hover:border  hover:border-solid hover:border-[#9b9ea3]  focus:outline-none focus:border-2 focus:border-solid focus:border-[#3f8f6b] "
                type="text"
                {...register("surnames", {
                  required: {
                    value: true,
                    message: "Apellidos requerido",
                  },
                  minLength: {
                    value: 2,
                    message: "El apellido debe tener al menos 2 caracteres",
                  },
                  maxLength: {
                    value: 20,
                    message:
                      "Los apellidos no puede tener más de 20 caracteres",
                  },
                })}
              />
              {/* {errors.name? <span className="text-xs text-[#FF5555]">Nombre requerido</span>:null} */}
            </div>
            <div className="flex flex-col w-[521px] min-h-[54px] gap-[3px] ">
              <label htmlFor="name" className="text-xs font-normal">
                Teléfono{" "}
              </label>
              <input
                className=" flex border border-gray-300  h-[36px] rounded-md border-solid box-border pl-[17px] hover:border  hover:border-solid hover:border-[#9b9ea3]  focus:outline-none focus:border-2 focus:border-solid focus:border-[#3f8f6b] "
                type="text"
                {...register("numPhone", {
                  required: {
                    value: true,
                    message: "Teléfono requerido",
                  },
                })}
                placeholder="+34 600 6000 600"
              />
              {/* {errors.name? <span className="text-xs text-[#FF5555]">Nombre requerido</span>:null} */}
            </div>
            <div className="flex flex-col w-[521px] min-h-[54px] gap-[3px] ">
              <label htmlFor="name" className="text-xs font-normal">
                Email{" "}
              </label>
              <input
                className=" flex border border-gray-300  h-[36px] rounded-md border-solid box-border pl-[17px] hover:border  hover:border-solid hover:border-[#9b9ea3]  focus:outline-none focus:border-2 focus:border-solid focus:border-[#3f8f6b] "
                type="text"
                {...register("mail", {
                  required: {
                    value: true,
                    message: "Email requerido",
                  },
                  pattern: {
                    value: /^[a-z0-9._%+-]+@[a-z0-9·-]+\.[a-z]{2,4}$/,
                    message: "Email no válido",
                  },
                })}
              />
              {/* {errors.name? <span className="text-xs text-[#FF5555]">Nombre requerido</span>:null} */}
            </div>
            <div className="flex flex-col w-[521px] min-h-[54px] gap-[3px] ">
              <label htmlFor="name" className="text-xs font-normal">
                País{" "}
              </label>
              <input
                className=" flex border border-gray-300  h-[36px] rounded-md border-solid box-border pl-[17px] hover:border  hover:border-solid hover:border-[#9b9ea3]  focus:outline-none focus:border-2 focus:border-solid focus:border-[#3f8f6b] "
                type="text"
                {...register("mail", {
                  required: {
                    value: true,
                    message: "Email requerido",
                  },
                  pattern: {
                    value: /^[a-z0-9._%+-]+@[a-z0-9·-]+\.[a-z]{2,4}$/,
                    message: "Email no válido",
                  },
                })}
              />
              {/* {errors.name? <span className="text-xs text-[#FF5555]">Nombre requerido</span>:null} */}
            </div>
          </div>
        </form>

        <TotalPayBox
          IVA={IVA}
          send={send}
          subTotal={subTotal}
          total={total}
          checkOut={true}
        />
      </div>
    </section>
  );
};

export default PayMethod;
