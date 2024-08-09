"use client";
import { CoffeContext } from "@/context/CoffeContext";
import React, { useContext, useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import HomeCardCoffe from "./HomeCardCoffe";

const HomeCards = () => {
  const [loading, setLoading] = useState(true);

  const { coffeData, setCoffeData } = useContext(CoffeContext);

  useEffect(() => {
    const getCoffeFetch = async () => {
      try {
        const response = await fetch(`http://localhost:3000/api/products`);

        const data = await response.json();
        setCoffeData(data);

        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };

    getCoffeFetch();
  }, []);

  console.log(coffeData);

  return (
    <>
      {" "}
      {loading ? (
        <p>Cargando...</p>
      ) : (
        <div className="flex flex-col items-center justify-center min-h-[603.39px] gap-10 mt-16">
          <h2 className="text-[#2a5b45] text-2xl font-bold ">Novedades</h2>
          <div className="flex flex-wrap justify-center min-h-[391.39px] gap-6">
            {coffeData.slice(0,4).map((coffe,i) => {
              return <HomeCardCoffe key={i} brand={coffe.brand} img={coffe.img_url} price={coffe.price}/>;
            })}
          </div>
            <div className="flex underline gap-4 items-center">
            <Link className=" text-black font-semibold leading-4" href="/shop">Ver todos</Link>
            <Image src="/img/Arrow narrow right.png" width={24} height={24} alt="Arrow narrow right" />

            </div>
        </div>
      )}
    </>
  );
};

export default HomeCards;
