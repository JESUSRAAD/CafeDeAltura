"use client";
import React, { createContext, useEffect, useState } from "react";

export const CoffeContext = createContext(null);

export default function CoffeContextProvider({ children }) {
  const [isCarAvailable, setIsCarAvailable] = useState(false);
  const [coffeData, setCoffeData] = useState([]);
  const [coffeUsers, setCoffeUsers] = useState([]);
  const [coffeChoiced, setCoffeChoiced] = useState([]);
  const [payForm, setPayForm] = useState([]);

  const [subTotal, setSubtotal] = useState("");
  const [send, setSend] = useState("");
  const [total, setTotal] = useState("");
  const [IVA, setIVA] = useState("");

  // Función para actualizar todas las propiedades del producto
  const updateProduct = (product) => {
    const updatedAcc = product.acc;
    const updatedTotalPay = product.price * updatedAcc;
    const updatedIVAPay = updatedTotalPay * 0.21;

    return {
      ...product,
      acc: updatedAcc,
      totalPay: updatedTotalPay,
      IVAPay: updatedIVAPay,
    };
  };

  // Función para aumentar la cantidad del producto
  const handlePlusAction = (id) => {
    setCoffeChoiced((prev) =>
      prev.map((item) =>
        item.id === id ? updateProduct({ ...item, acc: item.acc + 1 }) : item
      )
    );


  };

  // Función para disminuir la cantidad del producto
  const handleMinusAction = (id) => {
    setCoffeChoiced(
      (prev) =>
        prev
          .map((item) =>
            item.id === id
              ? updateProduct({ ...item, acc: item.acc - 1 })
              : item
          )
          .filter((item) => item.acc > 0) // Elimina el item si acc es 0 o menor
    );

	
  };

  // Función para eliminar el producto del carrito
  const handleTrashAction = (id) => {
    setCoffeChoiced((prev) => prev.filter((item) => item.id !== id));


  };

  useEffect(() => {
    const coffeUsers = JSON.parse(localStorage.getItem("users")) || [];
    setCoffeUsers(coffeUsers);

    const coffeProducts = JSON.parse(localStorage.getItem('productsChoice')) || [];
    setCoffeChoiced(coffeProducts);
	

    const payDirection = JSON.parse(localStorage.getItem('payDirection')) || [];
    setPayForm(payDirection);


    
  }, [
    setCoffeUsers,
    setCoffeChoiced,
    setPayForm,
	
  ]);

  useEffect(() => {
	if (coffeChoiced.length > 0) { // Evitar guardar un array vacío
	  localStorage.setItem("productsChoice", JSON.stringify(coffeChoiced));
	}
  }, [coffeChoiced]);

  return (
    <CoffeContext.Provider
      value={{
        coffeData,
        setCoffeData,
        coffeUsers,
        setCoffeUsers,
        coffeChoiced,
        setCoffeChoiced,
        isCarAvailable,
        setIsCarAvailable,
        subTotal,
        setSubtotal,
        send,
        setSend,
        total,
        setTotal,
        IVA,
        setIVA,
        updateProduct,
        handlePlusAction,
        handleTrashAction,
        handleMinusAction,
        payForm,
        setPayForm,
      }}
    >
      {children}
    </CoffeContext.Provider>
  );
}
