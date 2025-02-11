"use client";
import React, { createContext, useEffect, useState } from "react";

export const CoffeContext = createContext(null);

export default function CoffeContextProvider({ children }) {
  const [isCarAvailable, setIsCarAvailable] = useState(false);
  const [coffeData, setCoffeData] = useState([]);
  const [coffeUsers, setCoffeUsers] = useState([]);
  const [coffeChoiced, setCoffeChoiced] = useState([]);
  const [payForm, setPayForm] = useState([]);
  const [valuesBox, setValuesBox]= useState([]);

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
  setCoffeChoiced((prev) => {
    // Disminuir la cantidad del producto seleccionado
    const updatedProducts = prev
      .map((item) =>
        item.id === id ? updateProduct({ ...item, acc: item.acc - 1 }) : item
      )
      .filter((item) => item.acc > 0); // Filtrar productos con cantidad mayor a 0

    // Si no quedan productos, limpiar el localStorage
    if (updatedProducts.length === 0) {
      localStorage.removeItem("productsChoice");
    } else {
      // Si hay productos, actualizar el localStorage
      localStorage.setItem("productsChoice", JSON.stringify(updatedProducts));
    }

    return updatedProducts;
  });
};

  // Función para eliminar el producto del carrito
  const handleTrashAction = (id) => {
    setCoffeChoiced((prev) => prev.filter((item) => item.id !== id));
  };

  const totalProductsChoiced = () => {
    const totalSum = coffeChoiced.reduce(
      (sum, product) => sum + product.acc,
      0
    );
    return totalSum;
  };

  useEffect(() => {
    const coffeUsers = JSON.parse(localStorage.getItem("users")) || [];
    setCoffeUsers(coffeUsers);

    const coffeProducts =
      JSON.parse(localStorage.getItem("productsChoice")) || [];
    setCoffeChoiced(coffeProducts);

    const saveValues = JSON.parse(localStorage.getItem("saveValues"))|| []; 
setValuesBox(saveValues)

    const payDirection = JSON.parse(localStorage.getItem("payDirection")) || [];
    setPayForm(payDirection);
  }, [setCoffeUsers, setCoffeChoiced, setPayForm,setValuesBox]);

  useEffect(() => {
    if (coffeChoiced.length > 0) {
      // Evitar guardar un array vacío
      localStorage.setItem("productsChoice", JSON.stringify(coffeChoiced));
    }
  }, [coffeChoiced]);
  useEffect(() => {
    if (coffeChoiced.length > 0) {
      // Evitar guardar un array vacío
      localStorage.setItem("saveValues", JSON.stringify(valuesBox));
    }
  }, [valuesBox]);

  return (
    <CoffeContext.Provider
      value={{
        valuesBox, setValuesBox,
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
        totalProductsChoiced,
        payForm,
        setPayForm,
      }}
    >
      {children}
    </CoffeContext.Provider>
  );
}
