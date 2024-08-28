"use client";
import { CoffeContext } from "@/context/CoffeContext";
import React, { useContext, useEffect, useState } from "react";

import HomeCardCoffe from "./HomeCardCoffe";
import LinkArrow from "./LinkArrow";

const HomeCards = ({ acc, title, margin, link, titleArrow }) => {
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

  const withMargin =
    "flex flex-col items-center justify-center max-w-[1200px] min-h-[603.39px] gap-10 mt-16 pt-[40px] pb-[40px]";
  const withOutMargin =
    "flex flex-col items-center justify-center max-w-[1200px] min-h-[603.39px] gap-10 ";

const orderCoffeData=coffeData.sort((a, b) => {
  // Primero comparar por disponibilidad
  if (a.available === b.available) {
      // Si ambos están disponibles o no, comparar por precio
      return a.price - b.price;
  }
  // Si uno está disponible y el otro no, el disponible va primero
  return a.available ? -1 : 1;
});

const SkeletonCard = () => (
  <div className="animate-pulse flex flex-col items-center justify-center w-[240px] h-[390px] bg-gray-200 rounded-lg p-4">
    <div className="w-full h-40 bg-gray-300 rounded-lg mb-4"></div>
    <div className="w-3/4 h-4 bg-gray-300 rounded mb-2"></div>
    <div className="w-1/2 h-4 bg-gray-300 rounded"></div>
  </div>
);

  return (
    <div className="flex flex-col items-center justify-center">
      {loading ? (
        <div className={margin ? withMargin : withOutMargin}>
          <h2 className="text-[#2a5b45] text-2xl leading-7 font-medium ">
            {title}
          </h2>
          <div className="flex flex-wrap justify-center min-h-[391.39px] gap-6">
            {/* Renderizamos 3 skeletons como ejemplo */}
            {Array.from({ length: acc }).map((_, i) => (
              <SkeletonCard key={i} />
            ))}
          </div>
        </div>
      ) : (
        <div className={margin ? withMargin : withOutMargin}>
          <h2 className="text-[#2a5b45] text-2xl leading-7 font-medium ">
            {title}
          </h2>
          <div className="flex flex-wrap justify-center min-h-[391.39px] gap-6">
            {orderCoffeData.slice(0, acc).map((coffe, i) => {
              return (
                <HomeCardCoffe
                  key={i}
                  brand={coffe.brand}
                  img={coffe.img_url}
                  price={coffe.price}
                  available={coffe.available}
                  _id={coffe._id}
                />
              );
            })}
          </div>
          {link ? (
            <LinkArrow titleArrow={titleArrow} color={"black"} path={"/shop"} />
          ) : null}
        </div>
      )}
    </div>
  );
};

export default HomeCards;
