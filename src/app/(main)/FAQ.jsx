import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import LinkArrow from "@/components/LinkArrow";

const FAQ = () => {
  return (
    <div className=" flex flex-col items-center justify-between text-white min-h-[444px] gap-6 bg-[#2a5b45]">
      <h1 className="   text-2xl font-medium leading-7 text-white flex m-0 items-end h-[110px] pb-6">
        Preguntas Frecuentes
      </h1>

      <Accordion
        type="single"
        collapsible
        className="flex flex-col items-center justify-center w-[668px] min-h-[216px] gap-4 "
      >
        <AccordionItem
          value="item-1"
          className="flex flex-col items-center w-[668px] h-auto gap-4 bg-[white]  text-[#2b2a2b] p-6 rounded-[10px] overflow-hidden"
        >
          <AccordionTrigger className="w-[620px] h-6 flex no-underline hover:no-underline">
            <h3 className=" flex w-[290px] h-6 font-semibold text-lg leading-6 text-[#2B2A2B]">
              ¿Cómo hago el pedido?
            </h3>
          </AccordionTrigger>
          <AccordionContent className="w-[620px] h-auto font-normal text-xs leading-4 text-[#2b2a2b] border-t-2 pt-4">
            Selecciona el café que desees probar y completa el proceso de
            compra. Si lo prefieres, te preguntaremos cada cuánto quieres que te
            lo mandemos a casa y así nunca te quedarás sin café.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem
          value="item-2"
          className="flex flex-col items-center w-[668px] h-auto gap-4 bg-[white]  text-[#2b2a2b] p-6 rounded-[10px] overflow-hidden"
        >
          <AccordionTrigger className="w-[620px] h-6 flex no-underline hover:no-underline">
            <h3 className=" flex w-[290px] h-6 font-semibold text-lg leading-6 text-[#2B2A2B]">
              ¿Por qué los precios son tan bajos?
            </h3>
          </AccordionTrigger>
          <AccordionContent className="w-[620px] h-auto font-normal text-xs leading-4 text-[#2b2a2b] border-t-2 pt-4">
            Viajamos constantemente para encontrar los mejores granos y a los
            agricultores más exigentes. Si podemos ofrecerte estos precios es
            porque tratamos directamente con los productores de café, sin
            intermediarios. Así obtenemos el mejor precio para ti y la persona
            que está detrás de los granos de café recibe el mayor beneficio
            posible.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem
          value="item-3"
          className="flex flex-col items-center w-[668px] h-auto gap-4 bg-[white]  text-[#2b2a2b] p-6 rounded-[10px] overflow-hidden"
        >
          <AccordionTrigger className="w-[620px] h-6 flex no-underline hover:no-underline">
            <h3 className=" flex w-[290px] h-6 font-semibold text-lg leading-6 text-[#2B2A2B]">
              ¿Es posible enviar café a mi oficina?
            </h3>
          </AccordionTrigger>
          <AccordionContent className="w-[620px] h-auto font-normal text-xs leading-4 text-[#2b2a2b] border-t-2 pt-4">
            Viajamos constantemente para encontrar los mejores granos y a los
            agricultores más exigentes. Si podemos ofrecerte estos precios es
            porque tratamos directamente con los productores de café, sin
            intermediarios. Así obtenemos el mejor precio para ti y la persona
            que está detrás de los granos de café recibe el mayor beneficio
            posible.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      <div className=" flex m-0 items-start h-[72px] ">
        <LinkArrow titleArrow={"Resolvemos tus dudas"} color={"white"} />
      </div>
    </div>
  );
};

export default FAQ;
