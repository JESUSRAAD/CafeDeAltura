"use clients";
import React, { useContext } from "react";
import Image from "next/image";
import ButtonCoffe from "@/components/ButtonCoffe";
import { CoffeContext } from "@/context/CoffeContext";

const HomeCardCoffe = ({ _id, brand, img, price, available }) => {
  const { coffeChoiced, setCoffeChoiced } = useContext(CoffeContext);

  const addToCarShop = (event) => {
    event.preventDefault();

    setCoffeChoiced((prev) => {
      const existingItemIndex = prev.findIndex((item) => item.id === _id);

      if (existingItemIndex !== -1) {
        // Si el artículo ya existe, actualiza su cantidad y el total a pagar.
        const updatedCoffeChoiced = [...prev];
        const updatedItem = { ...updatedCoffeChoiced[existingItemIndex] };
        updatedItem.acc += 1;
        updatedItem.totalPay = updatedItem.acc * updatedItem.price;
        updatedItem.IVAPay = updatedItem.acc * updatedItem.price * 0.21;
        updatedCoffeChoiced[existingItemIndex] = updatedItem;
        return updatedCoffeChoiced;
      } else {
        // Si no existe, agrega el nuevo objeto.
        const newItem = {
          id: _id,
          img: img,
          name: brand,
          price: price,
          acc: 1,
          totalPay: price,
          IVAPay: price * 0.21,
        };
        return [...prev, newItem];
      }
    });
  };

  console.log(coffeChoiced);

  return (
    <>
      {available ? (
        <div className=" group  flex flex-col items-center justify-center text-center gap-6 w-[282px] min-h-[391.39px] border rounded-lg border-solid border-[#e3ded7]  hover:bg-[#f7f5f3]">
          <Image src={img} width={219.39} height={219.39} alt="coffe img" />
          <div className="flex flex-col gap-3 text-sm font-semibold leading-4">
            <p>{brand}</p>
            <p className="font-normal">{price.toFixed(2)} €</p>
          </div>

          <ButtonCoffe
            text={"Añadir"}
            style={"greenSmall"}
            action={addToCarShop}
          />
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center text-center gap-6 w-[282px] min-h-[391.39px] border rounded-lg border-solid border-[#e3ded7]  ">
          <Image
            src={img}
            width={219.39}
            height={219.39}
            alt="coffe img"
            className="opacity-40 -z-10"
          />
          <div className="flex flex-col gap-3 text-sm font-semibold leading-4 opacity-40 -z-10">
            <p>{brand}</p>
            <p className="font-normal">{price.toFixed(2)} €</p>
          </div>

          <ButtonCoffe text={"Agotado"} style={"agotado"} />
        </div>
      )}
    </>
  );
};

export default HomeCardCoffe;
