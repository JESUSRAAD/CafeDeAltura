"use client";
import TotalPayBox from "@/components/TotalPayBox";
import { CoffeContext } from "@/context/CoffeContext";

import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";

const PayMethod = () => {
  const { setIsCarAvailable, valuesBox, payForm, setPayForm } =
    useContext(CoffeContext);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    watch,
  } = useForm({ mode: "onChange", defaultValues: { payMethod: "tarjeta" } });

  setIsCarAvailable(false);
  const [isBloked, setIsBloked] = useState(true);

  useEffect(() => {
    // Obtenemos los valores actuales del formulario
    const values = watch();

    // Verificamos si hay algún error
    const hasErrors = Object.keys(errors).length > 0;

    // Validamos si todos los campos obligatorios están llenos
    const isFormComplete = () => {
      if (values.payMethod === "tarjeta") {
        return (
          values.holder &&
          values.numberCard &&
          values.expDate &&
          values.CVC &&
          values.name &&
          values.surnames &&
          values.numPhone &&
          values.mail &&
          values.countri &&
          values.poblation &&
          values.CP &&
          values.street &&
          values.numberStreet
        );
      } else {
        // En caso de otros métodos de pago
        return (
          values.payMethod &&
          values.name &&
          values.surnames &&
          values.numPhone &&
          values.mail &&
          values.countri &&
          values.poblation &&
          values.CP &&
          values.street &&
          values.numberStreet
        );
      }
    };

    // Si no hay errores y el formulario está completo, desbloqueamos el botón
    if (!hasErrors && isFormComplete()) {
      setIsBloked(false);
    } else {
      setIsBloked(true);
    }
  }, [watch(), errors]);

  const router = useRouter(); // Obtén la instancia del enrutador

  const onSubmit = handleSubmit((data) => {
    setPayForm((prevData) => {
      const result = [...prevData, data];
      localStorage.setItem("payDirection", JSON.stringify(result));
      reset();
      return result;
    });
    console.log(payForm);
    alert("Datos enviados");
    router.push("/success"); // Redirige a la página /success
  });

  //  función para manejar la entrada en el campo de fecha de caducidad
  const handleExpDateInput = (e) => {
    const input = e.target.value.replace(/\D/g, ""); // Elimina cualquier carácter no numérico
    let formattedInput = input;

    // Formatea la entrada como MM/YY
    if (input.length >= 3) {
      formattedInput = `${input.substring(0, 2)}/${input.substring(2, 4)}`;
    }

    e.target.value = formattedInput;
  };

  // Función para validar la fecha de caducidad
  const validateExpDate = (date) => {
    // Usa el separador correcto '/'
    const [month, year] = date.split("/").map(Number);

    // Verificar si el mes es válido
    if (month < 1 || month > 12) {
      return "Mes inválido, debe estar entre 01 y 12";
    }

    // Validar el formato
    if (isNaN(month) || isNaN(year) || month < 1 || month > 12 || year < 0) {
      return "Formato inválido, usa MM / YY";
    }

    // Obtener la fecha actual
    const now = new Date();
    const currentYear = now.getFullYear() % 100; // Solo los dos últimos dígitos del año
    const currentMonth = now.getMonth() + 1;

    // Validar si la tarjeta ha expirado
    if (year < currentYear || (year === currentYear && month < currentMonth)) {
      return "La tarjeta ha expirado";
    }

    return true;
  };

  ///////////////////////////////////
  // Validación personalizada
  const hasAtLeastTwoNonSpaceChars = (value) => {
    if (!value) return "Campo requerido";
    const trimmedValue = value.trim();
    if (trimmedValue.length < 2) return "Debe tener al menos 2 caracteres";
    return true;
  };

  const handleCardNumberInput = (e) => {
    let input = e.target.value.replace(/\D/g, ""); // Elimina todo lo que no sea un número

    // Inserta un espacio después de cada 4 números
    let formatted = "";
    for (let i = 0; i < input.length; i += 4) {
      if (i > 0) formatted += " ";
      formatted += input.substring(i, i + 4);
    }

    e.target.value = formatted.substring(0, 19); // Limita el input a 19 caracteres (16 dígitos + 3 espacios)
  };

  const handlePhoneNumberInput = (e) => {
    let input = e.target.value.replace(/\D/g, ""); // Elimina cualquier carácter no numérico
    let formatted = "";

    if (input.length > 11) {
      // Números más largos que el estándar (posiblemente una combinación de países)
      formatted = `+${input.substring(0, 2)} ${input.substring(
        2,
        5
      )} ${input.substring(5, 9)} ${input.substring(9, 13)}`;
    } else if (input.length > 10) {
      // Venezuela, Colombia
      formatted = `+${input.substring(0, 2)} ${input.substring(
        2,
        5
      )} ${input.substring(5, 9)} ${input.substring(9)}`;
    } else if (input.length > 9) {
      // México
      formatted = `+${input.substring(0, 2)} ${input.substring(
        2,
        4
      )} ${input.substring(4, 8)} ${input.substring(8)}`;
    } else if (input.length > 2) {
      formatted = `+${input.substring(0, 2)} ${input.substring(2)}`;
    } else {
      formatted = `+${input}`;
    }

    e.target.value = formatted.substring(0, 17); // Limita el input a un tamaño razonable
  };

  const [postalCodeMaxLength, setPostalCodeMaxLength] = useState(5); // Valor por defecto

  useEffect(() => {
    const selectedCountry = watch("countri");
    switch (selectedCountry) {
      case "venezuela":
        setPostalCodeMaxLength(4);
        break;
      case "colombia":
        setPostalCodeMaxLength(6);
        break;
      case "méxico":
      case "españa":
      default:
        setPostalCodeMaxLength(5);
        break;
    }
  }, [watch("countri")]);

  const handlePostalCodeInput = (e) => {
    let input = e.target.value.replace(/\D/g, ""); // Elimina cualquier carácter no numérico
    if (input.length > postalCodeMaxLength) {
      input = input.slice(0, postalCodeMaxLength); // Limita el tamaño según el país
    }
    e.target.value = input; // Establece el valor del campo al número limpio
  };
  const payMethod = watch("payMethod");

  console.log(valuesBox);

  return (
    <section className="flex flex-col  items-center min-h-screen gap-6 mt-16 p-10">
      <h2 className="font-medium text-2xl leading-7 text-[#2a5b45]">
        Checkout
      </h2>
      <form className="flex   max-w-[1200px] min-h-[415.32px] gap-6">
        <div className="flex flex-col w-[784px]  min-h-[407.32px] gap-6 p-2">
          <p className="font-semibold text-lg leading-6">
            Seleccionar método de pago
          </p>
          {/* ///////////////////////////////primer input///////////////////////////////////// */}
          <div className="w-[620px] min-h-6 flex no-underline hover:no-underline  items-center">
            <input
              defaultChecked
              className="accent-[#2a5b45] "
              {...register("payMethod")}
              value="tarjeta"
              type="radio"
              id="tarjeta"
            />
            <label
              className=" flex flex-col w-[657px] min-h-[36px] gap-1 justify-center pl-4"
              htmlFor="tarjeta"
            >
              <p className="text-sm font-semibold leading-4">
                Tarjeta de débito
              </p>
              {payMethod === "tarjeta" && (
                <p className="text-sm font-normal leading-4">
                  Opción estándar sin seguimiento
                </p>
              )}
            </label>
          </div>
          {/* //////////////////////////////////////////////////////////////////// */}
          {payMethod === "tarjeta" && (
            <div className="flex flex-col gap-2  w-[620px] h-auto font-normal text-xs leading-4  text-[#2b2a2b] ">
              <div className="flex flex-col w-[248.5px] min-h-[55px] gap-[3px]">
                <label htmlFor="holder" className="text-xs font-normal">
                  Titular
                </label>
                <div className="flex gap-2  items-center ">
                  <input
                    id="holder"
                    placeholder="Nombre del titular"
                    className=" flex border border-gray-300  h-[36px] rounded-md border-solid box-border pl-[17px] font-normal text-xs leading-4 hover:border  hover:border-solid hover:border-[#9b9ea3]  focus:outline-none focus:border-2 focus:border-solid focus:border-[#3f8f6b] "
                    type="text"
                    {...register("holder", {
                      required: {
                        value: true,
                        message: "Nombre del titular requerido",
                      },
                      validate: hasAtLeastTwoNonSpaceChars,
                    })}
                  />
                  {errors.holder ? (
                    <span className="text-xs text-[#FF5555] min-w-40">
                      {errors.holder.message}
                    </span>
                  ) : null}
                </div>
              </div>

              <div className="flex flex-col w-[248.5px] min-h-[55px] gap-[3px]">
                <label htmlFor="numberCard" className="text-xs font-normal">
                  Número de la tarjeta
                </label>
                <div className="flex gap-2  items-center ">
                  <input
                    id="numberCard"
                    placeholder="1234 1234 1234 1234"
                    className=" flex border border-gray-300  h-[36px] rounded-md border-solid box-border pl-[17px] font-normal text-xs leading-4 hover:border  hover:border-solid hover:border-[#9b9ea3]  focus:outline-none focus:border-2 focus:border-solid focus:border-[#3f8f6b] "
                    type="text"
                    {...register("numberCard", {
                      required: {
                        value: true,
                        message: "Número de la tarjeta requerido",
                      },

                      pattern: {
                        value: /^\d{4} \d{4} \d{4} \d{4}$/,
                        message: "Formato inválido, usa 1234 1234 1234 1234",
                      },
                    })}
                    onInput={handleCardNumberInput} // Aplica el formateo al escribir
                  />
                  {errors.numberCard ? (
                    <span className="text-xs text-[#FF5555] min-w-40">
                      {errors.numberCard.message}
                    </span>
                  ) : null}
                </div>
              </div>
              <div className="flex gap-6">
                <div className="flex flex-col w-[112.25px] min-h-[55px] gap-[3px]">
                  <label htmlFor="expDate" className="text-xs font-normal">
                    Fecha de caducidad
                  </label>
                  <input
                    type="text"
                    placeholder="MM / YY"
                    maxLength="7"
                    className="flex border border-gray-300 h-[36px] rounded-md border-solid box-border pl-[17px] font-normal text-xs leading-4 hover:border hover:border-solid hover:border-[#9b9ea3] focus:outline-none focus:border-2 focus:border-solid focus:border-[#3f8f6b]"
                    {...register("expDate", {
                      required: "La fecha de caducidad es requerida",
                      validate: validateExpDate,
                    })}
                    onInput={handleExpDateInput} // Aquí agregas la función para manejar el input
                  />
                  {errors.expDate ? (
                    <span className="text-xs text-[#FF5555] max-w-[112.25px]">
                      {errors.expDate.message}
                    </span>
                  ) : null}{" "}
                </div>

                <div className="flex flex-col w-[112.25px] min-h-[55px] gap-[3px]">
                  <label htmlFor="CVC" className="text-xs font-normal">
                    CVC
                  </label>
                  <input
                    id="CVC"
                    placeholder="123"
                    className=" flex border border-gray-300  h-[36px] rounded-md border-solid box-border pl-[17px] font-normal text-xs leading-4 hover:border  hover:border-solid hover:border-[#9b9ea3]  focus:outline-none focus:border-2 focus:border-solid focus:border-[#3f8f6b] "
                    type="text"
                    maxLength={3}
                    {...register("CVC", {
                      required: {
                        value: true,
                        message: "CVC requerido",
                      },
                      minLength: {
                        value: 3,
                        message:
                          "El CVC de la tarjeta debe tener al menos 3 numeros",
                      },
                      pattern: {
                        value: /^[0-9]{3}$/, // Valida que solo se ingresen 3 dígitos
                        message: "CVC inválido, deben ser 3 números",
                      },
                    })}
                  />
                  {errors.CVC ? (
                    <span className="text-xs text-[#FF5555] max-w-[112.25px]">
                      {errors.CVC.message}
                    </span>
                  ) : null}{" "}
                </div>
              </div>
            </div>
          )}

          <hr className=" w-full  border-solid border-[#e3ded7]" />
          {/* ///////////////////////////////segundo input///////////////////////////////////// */}
          <div className="w-[620px] h-6 flex   items-center">
            <input
              className="accent-[#2a5b45] "
              {...register("payMethod")}
              id="transferencia"
              value="transferencia"
              type="radio"
            />
            <label
              className=" flex flex-col w-[657px] min-h-[36px] gap-1 justify-center pl-4"
              htmlFor="transferencia"
            >
              <p className="text-sm font-semibold leading-4">
                Transferencia bancaria a la cuenta ES12 1234 1234 123457890
              </p>
              {payMethod === "transferencia" ? (
                <p className="text-sm font-normal leading-4">
                  Será necesario recibir el comprobante de la transferencia para
                  preparar tu pedido
                </p>
              ) : null}
            </label>
          </div>
          {/* //////////////////////////////////////////////////////////////////// */}

          <hr className=" w-full  border-solid border-[#e3ded7]" />
          {/* ///////////////////////////////tercer input///////////////////////////////////// */}
          <div className="w-[620px] h-6 flex justify-center items-center">
            <input
              className="accent-[#2a5b45] "
              {...register("payMethod")}
              id="bizum"
              value="bizum"
              type="radio"
            />
            <label
              className=" flex flex-col w-[657px] min-h-[36px]  justify-center pl-4"
              htmlFor="bizum"
            >
              <p className="text-sm font-semibold leading-4">Bizum</p>
              {payMethod === "bizum" ? (
                <div className="flex  gap-3 justify-center items-center">
                  <p className="text-sm font-normal leading-4">
                    Será necesario recibir el comprobante de la transferencia
                    para preparar tu pedido
                  </p>
                  <Image
                    src="/img/bizumIcon.png"
                    width={70}
                    height={31}
                    alt="bizum icon"
                  />
                </div>
              ) : null}
            </label>
          </div>

          {/* //////////////////////////////////////////////////////////////////// */}
          <p className="font-semibold text-lg leading-6">Dirección de envío</p>
          <div className="flex flex-col gap-2">
            <div className="flex flex-col w-[521px] min-h-[55px] gap-[3px] ">
              <label htmlFor="name" className="text-xs font-normal">
                Nombre{" "}
              </label>
              <div className="flex gap-2  items-center ">
                <input
                  className=" flex border border-gray-300  h-[36px] min-w-[521px] rounded-md border-solid box-border pl-[17px] font-normal text-xs leading-4 hover:border  hover:border-solid hover:border-[#9b9ea3]  focus:outline-none focus:border-2 focus:border-solid focus:border-[#3f8f6b] "
                  type="text"
                  id="name"
                  {...register("name", {
                    required: {
                      value: true,
                      message: "Nombre requerido",
                    },
                    validate: hasAtLeastTwoNonSpaceChars,
                  })}
                />
                {errors.name ? (
                  <span className="text-xs text-[#FF5555] min-w-40">
                    {errors.name.message}
                  </span>
                ) : null}
              </div>
            </div>
            <div className="flex flex-col w-[521px] min-h-[55px] gap-[3px] ">
              <label htmlFor="surnames" className="text-xs font-normal">
                Apellidos{" "}
              </label>
              <div className="flex gap-2  items-center ">
                <input
                  id="surnames"
                  className=" flex border border-gray-300  h-[36px] min-w-[521px] rounded-md border-solid box-border pl-[17px] font-normal text-xs leading-4 hover:border  hover:border-solid hover:border-[#9b9ea3]  focus:outline-none focus:border-2 focus:border-solid focus:border-[#3f8f6b] "
                  type="text"
                  {...register("surnames", {
                    required: {
                      value: true,
                      message: "Apellidos requerido",
                    },
                    validate: hasAtLeastTwoNonSpaceChars,
                  })}
                />
                {errors.surnames ? (
                  <span className="text-xs text-[#FF5555] min-w-40">
                    {errors.surnames.message}
                  </span>
                ) : null}{" "}
              </div>
            </div>
            <div className="flex flex-col w-[521px] min-h-[55px] gap-[3px] ">
              <label htmlFor="numPhone" className="text-xs font-normal">
                Teléfono{" "}
              </label>
              <div className="flex gap-2  items-center ">
                <input
                  id="numPhone"
                  className=" flex border border-gray-300  h-[36px] min-w-[521px] rounded-md border-solid box-border pl-[17px] font-normal text-xs leading-4 hover:border  hover:border-solid hover:border-[#9b9ea3]  focus:outline-none focus:border-2 focus:border-solid focus:border-[#3f8f6b] "
                  type="text"
                  {...register("numPhone", {
                    required: {
                      value: true,
                      message: "Teléfono requerido",
                    },
                    pattern: {
                      value: /^\+\d{1,3} \d{1,4} \d{1,4} \d{1,4}$/, // Patrón para números internacionales variados
                      message: "Número de teléfono inválido",
                    },
                  })}
                  placeholder="+34 600 6000 600"
                  onInput={handlePhoneNumberInput} // Aplica el formateo al escribir
                />
                {errors.numPhone ? (
                  <span className="text-xs text-[#FF5555] min-w-40">
                    {errors.numPhone.message}
                  </span>
                ) : null}{" "}
              </div>
            </div>
            <div className="flex flex-col w-[521px] min-h-[55px] gap-[3px] ">
              <label htmlFor="mail" className="text-xs font-normal">
                Email{" "}
              </label>
              <div className="flex gap-2  items-center ">
                <input
                  id="mail"
                  className=" flex border border-gray-300  h-[36px] min-w-[521px] rounded-md border-solid box-border pl-[17px] font-normal text-xs leading-4 hover:border  hover:border-solid hover:border-[#9b9ea3]  focus:outline-none focus:border-2 focus:border-solid focus:border-[#3f8f6b] "
                  type="email"
                  {...register("mail", {
                    required: {
                      value: true,
                      message: "Email requerido",
                    },
                    pattern: {
                      value: /^[a-z0-9._%+-]+@[a-z0-9·-]+\.[a-z]{2,4}$/,
                      message: "Email no válido",
                    },
                  })}
                />
                {errors.mail ? (
                  <span className="text-xs text-[#FF5555] min-w-40">
                    {errors.mail.message}
                  </span>
                ) : null}
              </div>
            </div>
            <div className="flex flex-col w-[521px] min-h-[55px] gap-[3px] ">
              <label htmlFor="countri" className="text-xs font-normal">
                País{" "}
              </label>
              <div className="flex gap-2  items-center ">
                <select
                  id="countri"
                  className=" flex border border-gray-300  h-[36px] min-w-[521px] rounded-md border-solid box-border pl-[17px] font-normal text-xs leading-4 text-[#515051] hover:border  hover:border-solid hover:border-[#9b9ea3]  focus:outline-none focus:border-2 focus:border-solid focus:border-[#3f8f6b] "
                  {...register("countri", {
                    required: {
                      value: true,
                      message: "País requerido",
                    },
                  })}
                >
                  <option value="" disabled selected>
                    Seleccionar
                  </option>
                  <option value="venezuela">Venezuela</option>
                  <option value="colombia">Colombia</option>
                  <option value="méxico">México</option>
                  <option value="españa">España</option>
                </select>
                {errors.countri ? (
                  <span className="text-xs text-[#FF5555] min-w-40">
                    {errors.countri.message}
                  </span>
                ) : null}
              </div>
            </div>
            <div className="flex gap-6">
              <div className="flex flex-col w-[248.5px] min-h-[55px] gap-[3px]">
                <label htmlFor="poblation" className="text-xs font-normal">
                  Población
                </label>
                <input
                  id="poblation"
                  className=" flex border border-gray-300  h-[36px] rounded-md border-solid box-border pl-[17px] font-normal text-xs leading-4 hover:border  hover:border-solid hover:border-[#9b9ea3]  focus:outline-none focus:border-2 focus:border-solid focus:border-[#3f8f6b] "
                  type="text"
                  {...register("poblation", {
                    required: {
                      value: true,
                      message: "Población requerido",
                    },
                    validate: hasAtLeastTwoNonSpaceChars,
                  })}
                />
                {errors.poblation ? (
                  <span className="text-xs text-[#FF5555] min-w-[248.5px]">
                    {errors.poblation.message}
                  </span>
                ) : null}
              </div>

              <div className="flex flex-col w-[248.5px] min-h-[55px] gap-[3px]">
                <label htmlFor="CP" className="text-xs font-normal">
                  CP
                </label>
                <input
                  id="CP"
                  className=" flex border border-gray-300  h-[36px] rounded-md border-solid box-border pl-[17px] font-normal text-xs leading-4 hover:border  hover:border-solid hover:border-[#9b9ea3]  focus:outline-none focus:border-2 focus:border-solid focus:border-[#3f8f6b] "
                  type="text"
                  placeholder="123"
                  {...register("CP", {
                    required: {
                      value: true,
                      message: "Código postal requerido",
                    },

                    pattern: {
                      value: /^[0-9]*$/, // Permite solo números
                      message: "Código Postal inválido",
                    },
                    minLength: {
                      value: postalCodeMaxLength,
                      message: `Código Postal debe tener ${postalCodeMaxLength} dígitos.`,
                    },
                    validate: {
                      length: (value) => {
                        if (value.length !== postalCodeMaxLength) {
                          return `Código Postal debe tener ${postalCodeMaxLength} dígitos.`;
                        }
                        return true;
                      },
                    },
                  })}
                  onInput={handlePostalCodeInput} // Aplica el formateo al escribir
                />
                {errors.CP ? (
                  <span className="text-xs text-[#FF5555] min-w-[248.5px]">
                    {errors.CP.message}
                  </span>
                ) : null}{" "}
              </div>
            </div>
            <div className="flex gap-6">
              <div className="flex flex-col w-[112.25px] min-h-[55px] gap-[3px]">
                <label htmlFor="street" className="text-xs font-normal">
                  Calle
                </label>
                <input
                  id="street"
                  className=" flex border border-gray-300  h-[36px] rounded-md border-solid box-border pl-[17px] font-normal text-xs leading-4 hover:border  hover:border-solid hover:border-[#9b9ea3]  focus:outline-none focus:border-2 focus:border-solid focus:border-[#3f8f6b] "
                  type="text"
                  {...register("street", {
                    required: {
                      value: true,
                      message: "Calle requerido",
                    },
                    minLength: {
                      value: 2,
                      message: "La Calle debe tener al menos 2 caracteres",
                    },
                  })}
                />
                {errors.street ? (
                  <span className="text-xs text-[#FF5555] min-w-[112.25px]">
                    {errors.street.message}
                  </span>
                ) : null}
              </div>
              <div className="flex flex-col w-[112.25px] min-h-[55px] gap-[3px]">
                <label htmlFor="numberStreet" className="text-xs font-normal">
                  Nº
                </label>
                <input
                  id="numberStreet"
                  className=" flex border border-gray-300  h-[36px] rounded-md border-solid box-border pl-[17px] font-normal text-xs leading-4 hover:border  hover:border-solid hover:border-[#9b9ea3]  focus:outline-none focus:border-2 focus:border-solid focus:border-[#3f8f6b] "
                  type="number"
                  {...register("numberStreet", {
                    required: {
                      value: true,
                      message: "Number requerido",
                    },
                  })}
                />
                {errors.numberStreet ? (
                  <span className="text-xs text-[#FF5555] min-w-[112.25px]">
                    {errors.numberStreet.message}
                  </span>
                ) : null}{" "}
              </div>
              <div className="flex flex-col w-[112.25px] min-h-[55px] gap-[3px]">
                <label htmlFor="floor" className="text-xs font-normal">
                  Piso
                </label>
                <input
                  id="floor"
                  className=" flex border border-gray-300  h-[36px] rounded-md border-solid box-border pl-[17px] font-normal text-xs leading-4 hover:border  hover:border-solid hover:border-[#9b9ea3]  focus:outline-none focus:border-2 focus:border-solid focus:border-[#3f8f6b] "
                  type="text"
                  {...register("floor")}
                />
              </div>
              <div className="flex flex-col w-[112.25px] min-h-[55px] gap-[3px]">
                <label htmlFor="door" className="text-xs font-normal">
                  Puerta
                </label>
                <input
                  id="door"
                  className=" flex border border-gray-300  h-[36px] rounded-md border-solid box-border pl-[17px] font-normal text-xs leading-4 hover:border  hover:border-solid hover:border-[#9b9ea3]  focus:outline-none focus:border-2 focus:border-solid focus:border-[#3f8f6b] "
                  type="text"
                  {...register("door")}
                />
              </div>
            </div>
          </div>
        </div>

        <TotalPayBox
          IVA={valuesBox.IVA}
          send={valuesBox.send}
          subTotal={valuesBox.subTotal}
          total={valuesBox.total}
          checkOut={true}
          pay={onSubmit}
          btnBloked={isBloked}
        />
      </form>
    </section>
  );
};

export default PayMethod;
