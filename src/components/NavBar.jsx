"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useContext, useEffect } from "react";
import ButtonCoffe from "./ButtonCoffe";
import LogoType from "./LogoType";
import PageList from "./PageList";
import { Phone } from "lucide-react";
import { CoffeContext } from "@/context/CoffeContext";
import CarShoping from "./CarShoping";
import { usePathname } from "next/navigation";

const NavBar = () => {
  const {
    isCarAvailable,
    setIsCarAvailable,
    coffeChoiced,
    totalProductsChoiced,
  } = useContext(CoffeContext);

  const handleCarShoping = () => {
    return isCarAvailable ? setIsCarAvailable(false) : setIsCarAvailable(true);
  };

  const pathname = usePathname();
  useEffect(() => {
    setIsCarAvailable(false);
  }, [pathname]);

  const isSuccessPage = pathname === "/success"; // Verifica si estás en la página de éxito
  return (
    <nav className="flex text-white min-h-[64px] fixed items-center justify-around w-screen top-[0%] bg-[#2b2a2b]">
      <Link href={isSuccessPage ? "#" : "/"}>
        {" "}
        <LogoType isSuccessPage={isSuccessPage} />
      </Link>

      <PageList direction={"row"} isSuccessPage={isSuccessPage} />
      <div className="flex justify-between items-center min-w-[288px] min-h-[40px] gap-6">
        <div className="flex min-w-[134px] min-h-[24px] gap-2 justify-between items-center">
          <Phone color="#ffffff" />

          <p className="w-[102px] h-4 text-sm font-semibold leading-4 text-left">
            +34 919 49 05 18
          </p>
        </div>

        <ButtonCoffe text={"Iniciar sesión"} style={"gray"} />
      </div>
      <div
        className="flex gap-2  cursor-pointer "
        onClick={() => handleCarShoping()}
      >
        <Image src="/img/Carr.png" width={24} height={24} alt="icon-shopBag" />
        <span
          className={
            coffeChoiced.length < 1
              ? "  w-[7.9px] h-[7.9px] rounded-full bg-[#DD2654] absolute invisible mt-[16.1px]"
              : "  w-[7.9px] h-[7.9px] rounded-full bg-[#DD2654] absolute  mt-[16.1px]"
          }
        ></span>
        <span
          className={
            coffeChoiced.length < 1
              ? " flex justify-center items-center opacity-0 min-w-6 min-h-6 rounded-full bg-[#F7F5F31A] font-semibold text-sm leading-4"
              : " flex justify-center items-center min-w-6 min-h-6 rounded-full bg-[#F7F5F31A] font-semibold text-sm leading-4"
          }
        >
          {totalProductsChoiced()}
        </span>
      </div>
      <CarShoping arr={coffeChoiced} visibleCondition={isCarAvailable} />
    </nav>
  );
};

export default NavBar;
