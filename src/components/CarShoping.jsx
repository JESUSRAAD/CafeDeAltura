import React from "react";
import CardCarShoping from "./cardCarShoping";
import Link from "next/link";

const CarShoping = ({ arr,visibleCondition }) => {


    const arrlengt=arr || []
  return (
    // <div className="minicar" style="visibility: visible;">
    //   <div className="divtitleSectition">
    //     <h3>Carrito</h3>
    //   </div>
    //   <div className="divContainerCar">
    //     <div className="divContainerCoffes">
    //       <p className="divClear">El carrito esta vacio</p>
    //     </div>
    //   </div>
    //   <div className="divContainerButtonCheckOut">
    //     <a className="aCheckoutCar" href="/pages/cesta.html">
    //       Ver pedido
    //     </a>
    //     <a className="aClearCar">Limpiar cesta</a>
    //   </div>
    // </div>
    <div className={visibleCondition?" flex flex-col absolute w-[314px] max-h-[391.37px] min-h-[270px] bg-[white]  gap-5 p-2 rounded-lg border-[#000000] border-solid border-[1px] right-5 top-16":" flex flex-col absolute w-[314px] max-h-[391.37px] min-h-[270px] bg-[white] invisible gap-5 p-2 rounded-lg border-[#000000] border-solid border-[1px] right-5 top-16;"} >
      <div className="text-center text-lg font-semibold leading-6 text-[#2a5b45]">
        <h3>Carrito</h3>
      </div>
      <div className="flex justify-center items-center w-full min-h-[200px]">
        <div className="flex flex-col overflow-scroll overflow-x-hidden max-h-[200px] gap-[7px]">
            {arrlengt.length===0? <p className="text-[#000000b4]">El carrito esta vacio</p>:arrlengt.map((coffeChoice,i)=>{
                return(
                    <CardCarShoping brand={coffeChoice.brand} img={coffeChoice.img} price={coffeChoice.price} key={i}/>
                )
            })}
        </div>
      </div>
      <div className="flex justify-center items-center gap-2">
        <Link className=" bg-[#2a5b45] text-[white] text-sm font-semibold leading-4 p-2.5 rounded-lg" href="/shop">
          Ver pedido
        </Link>
        <button className=" bg-[#E3DED7] text-[black] text-sm font-semibold leading-4 p-2.5 rounded-lg">Limpiar cesta</button>
      </div>
    </div>
  );
};

export default CarShoping;
