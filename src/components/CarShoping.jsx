import React, { useContext } from "react";
import CardCarShoping from "./CardCarShoping";
import ButtonCoffe from "./ButtonCoffe";
import { CoffeContext } from "@/context/CoffeContext";

const CarShoping = ({ arr, visibleCondition }) => {
  const {
    coffeChoiced,
    setCoffeChoiced,
    updateProduct,
    handlePlusAction,
    handleTrashAction,
    handleMinusAction,
  } = useContext(CoffeContext);

  const handleCleanCarShoping = (event) => {
    event.preventDefault();

     setCoffeChoiced([]);
    localStorage.clear("productsChoice")
  };

  const arrCar = arr || [];

  return (
    <div
      className={
        visibleCondition
          ? " flex flex-col absolute w-[314px] max-h-[391.37px] min-h-[270px] bg-[white]  gap-5 p-2 rounded-lg border-[#000000] border-solid border-[1px] right-5 top-[70px]"
          : " flex flex-col absolute w-[314px] max-h-[391.37px] min-h-[270px] bg-[white] invisible gap-5 p-2 rounded-lg border-[#000000] border-solid border-[1px] right-5 top-[70px]"
      }
    >
      <div className="text-center text-lg font-semibold leading-6 text-[#2a5b45]">
        <h3>Carrito</h3>
      </div>
      <div className="flex justify-center items-center w-full min-h-[200px]">
        <div className="flex flex-col overflow-scroll overflow-x-hidden max-h-[200px] gap-[7px]">
          {arrCar.length === 0 ? (
            <p className="text-[#000000b4]">El carrito esta vacio </p>
          ) : (
            arrCar.map((coffeChoice, i) => {
              return (
                <CardCarShoping
                  brand={coffeChoice.name}
                  img={coffeChoice.img}
                  price={coffeChoice.price}
                  acc={coffeChoice.acc}
                  minusAction={() => handleMinusAction(coffeChoice.id)}
                  plusAction={() => handlePlusAction(coffeChoice.id)}
                  trashAction={() => handleTrashAction(coffeChoice.id)}
                  key={i}
                />
              );
            })
          )}
        </div>
      </div>
      <div className="flex justify-center items-center gap-2">
        <ButtonCoffe style={"green"} text={"Ver pedido"} link={"/Basket"} />
        <ButtonCoffe
          style={"gray"}
          text={"Limpiar Cesta"}
          action={handleCleanCarShoping}
        />
      </div>
    </div>
  );
};

export default CarShoping;
