"use client";
import { CoffeContext } from "@/context/CoffeContext";
import React, { useContext, useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import HomeCardCoffe from "./HomeCardCoffe";
import LinkArrow from "./LinkArrow";


const HomeCards = ({acc,title,margin, link,titleArrow}) => {
  const [loading, setLoading] = useState(true);
  const { coffeData, setCoffeData } = useContext(CoffeContext);

  useEffect(() => {
    const getCoffeFetch = async () => {
      try {
        const apiUrl = `https://cafe-de-altura-ten.vercel.app/api/products`;

        const response = await fetch(apiUrl);
        const data = await response.json();
        setCoffeData(data);
        setLoading(false);
        console.log(data);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };

    getCoffeFetch();
  }, []);

  console.log(coffeData);


const withMargin="flex flex-col items-center justify-center min-h-[603.39px] gap-10 mt-16 p-[40px]"
const withOutMargin="flex flex-col items-center justify-center min-h-[603.39px] gap-10 "

  return (
    <>
      {loading ? (
        <p className="flex flex-col items-center justify-center min-h-[603.39px] gap-10 mt-16">Cargando...</p>
      ) : (
        <div className={margin?withMargin:withOutMargin}>
          <h2 className="text-[#2a5b45] text-2xl leading-7 font-medium ">{title}</h2>
          <div className="flex flex-wrap justify-center min-h-[391.39px] gap-6">
            {coffeData.slice(0, acc).map((coffe,i) => {
              return (
                <HomeCardCoffe
                  key={i}
                  brand={coffe.brand}
                  img={coffe.img_url}
                  price={coffe.price}
                  available={coffe.available}
                />
              );
            })}
          </div>
         {link?<LinkArrow titleArrow={titleArrow} color={"black"} path={"/shop"}/>:null}
        </div>
      )}
    </>
  );
};

export default HomeCards;
