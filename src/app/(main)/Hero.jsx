import ButtonCoffe from "@/components/ButtonCoffe";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <div className=" flex justify-center items-center min-h-[486px] shadow-[0px_4px_4px_0px_#00000040] mt-16 bg-[#e3ded74d]">
      <div className="flex items-center max-w-[1200px] min-h-[390px] gap-6">
        <div className="flex flex-col gap-4">
          <h3 className="text-lg font-semibold leading-6 text-[#2a5b45]">
            De la planta a tu taza
          </h3>
          <h1 className="text-[40px] font-semibold leading-[44px]">
            El mejor café del mundo, ahora en tu casa.
          </h1>
          <p className="text-sm font-normal leading-4 text-gray-900">
            Trabajamos con agricultores de todo el mundo para seleccionar los
            mejores granos de café y que puedas viajar desde la comodidad de tu
            hogar.
          </p>
          <div className="flex gap-4 w-[321px]">
            <Link href="">
              <ButtonCoffe text={"Descubrir orígenes"} style={"black"} />
            </Link>

            <Link href="">
              <ButtonCoffe
                text={"Comprar café"}
                style={"green"}
                link={"/shop"}
              />
            </Link>
          </div>
        </div>
        {/* <img
        className="imgHero"
        src="assets/img/"
        alt="manoCogiendoGranosDeCafe"
      /> */}
        <Image
          src="/img/Hero image.png"
          width={588}
          height={390}
          alt="manoCogiendoGranosDeCafe"
        />
      </div>
    </div>
  );
};

export default Hero;
