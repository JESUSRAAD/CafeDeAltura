"use client";
import { Mail, Phone } from "lucide-react";
import { useForm } from "react-hook-form";
import Link from "next/link";

import { CoffeContext } from "@/context/CoffeContext";
import { useContext } from "react";

const ContacctFormSection = () => {
  const { coffeUsers, setCoffeUsers } = useContext(CoffeContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const onSubmit = handleSubmit((data) => {
    setCoffeUsers((prevData) => {
      const result = [...prevData, data];
      localStorage.setItem("users", JSON.stringify(result));
      reset()
      return result;
    });
    const ceatedListUser = JSON.parse(localStorage.getItem("users")) || [];
    setCoffeUsers(ceatedListUser);
    console.log(coffeUsers);
    alert("Datos enviados")
  });

  return (
    <div className="min-h-[552px] flex justify-center bg-[#e3ded7]">
      <div className="flex w-[1200px] min-h-[552px] gap-6 items-center">
        <div className=" flex flex-col items-center w-[588px] min-h-[320px] gap-8  text-gray-500 text-sm font-normal leading-4">
          <div className="min-h-[68px] gap-3 ">
            <h3 className="text-lg font-semibold leading-6 text-gray-900">
              Entra en contacto con nosotros
            </h3>
            <p>
              Si tienes dudas, ponte en contacto con nosotros a través del
              formulario y te responderemos lo antes posible.
            </p>
          </div>
          <div className="flex flex-col h-[220px] gap-6">
            <p>
              También puedes ponerte en contacto con nostros en nuestra
              dirección o a través del teléfono de la tienda.
            </p>
            <div className=" w-[344px] h-[27px]">
              <p>742 Evergreen Terrace</p>
              <p>Springfield, OR 12345</p>
            </div>
            <div className="flex flex-col h-[60px] gap-3">
              <div className="flex min-h-6 gap-3">
                <Phone color="#6b7280" />
                <p>+1 (555) 123-4567</p>
              </div>
              <div className=" flex min-h-6 gap-3">
                <Mail color="#6b7280" />
                <p>support@example.com</p>
              </div>
            </div>
            <p>
              ¿Buscas un trabajo?{" "}
              <Link
                className="text-sm font-semibold leading-4 text-gray-900 underline"
                href=""
              >
                Ver nuestras ofertas.
              </Link>
            </p>
          </div>
        </div>
        <div className=" w-[588px] min-h-[552px] flex flex-col justify-center items-center text-gray-700 shadow-[0px_4px_4px_0px_#00000040] bg-[#ffffff]">
          <form
            onSubmit={onSubmit}
            className="flex flex-col min-w-[470px] h-[488px] gap-6 text-xs font-normal leading-4"
          >
            <div className="flex flex-col min-h-[54px] gap-1 ">
              <label htmlFor="name">Nombre completo</label>
              <input
                className=" flex border border-gray-300 shadow-[0px_1px_2px_0px_#0000000d] h-[34px] rounded-md border-solid box-border pl-[17px] hover:border  hover:border-solid hover:border-[#9b9ea3]  focus:outline-none focus:border-2 focus:border-solid focus:border-[#3f8f6b] "
                type="text"
                {...register("name", {
                  required: {
                    value: true,
                    message: "Nombre requerido",
                  },
                  minLength: {
                    value: 2,
                    message: "El nombre debe tener al menos 2 caracteres",
                  },
                  maxLength: {
                    value: 20,
                    message: "El nombre no puede tener más de 20 caracteres",
                  },
                })}
              />
              {/* {errors.name? <span className="text-xs text-[#FF5555]">Nombre requerido</span>:null} */}
            </div>
            <div className=" flex flex-col min-h-[54px] gap-1">
              <label htmlFor="mail">Email</label>
              <input
                className="flex border border-gray-300 shadow-[0px_1px_2px_0px_#0000000d] h-[34px] rounded-md border-solid box-border pl-[17px] hover:border  hover:border-solid hover:border-[#9b9ea3]  focus:outline-none focus:border-2 focus:border-solid focus:border-[#3f8f6b] "
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
            </div>
            <div className=" flex flex-col gap-1 min-h-[58px]">
              <label htmlFor="numPhone">Teléfono</label>
              <div className="flex gap-[0%] border border-gray-300 shadow-[0px_1px_2px_0px_#0000000d] rounded-md border-solid hover:border  hover:border-solid hover:border-[#9b9ea3] focus:border-2 focus:border-solid focus:border-[#3f8f6b] focus-within:hover:shadow-none focus-within:hover:border-[#3F8F6B] focus-within:hover:border-2">
                <select   {...register("countriCode")} className=" text-center w-[68px] h-[38px] rounded-md border-0 ">
                  <option value="+1">US</option>
                  <option value="+58">VEN</option>
                  <option value="+57">COL</option>
                </select>
                <input
                  className="w-[402px] h-[38px] shadow-[0px_1px_2px_0px_#0000000d] box-border pl-[17px] rounded-md border-0 outline-none"
                  type="tel"
                  {...register("numPhone", {
                    required: {
                      value: true,
                      message: "Teléfono requerido",
                    },
                  })}
                  placeholder="+1 (555) 987-6543"
                />
              </div>
            </div>

            <div className="flex flex-col min-h-[142px] gap-1">
              <label htmlFor="textArea">Comentarios </label>
              <textarea
                className="flex justify-center border border-gray-300 h-[142px] shadow-[0px_1px_2px_0px_#0000000d] text-justify pt-[13px] px-[17px] rounded-md border-solid hover:border  hover:border-solid hover:border-[#9b9ea3]  focus:outline-none focus:border-2 focus:border-solid focus:border-[#3f8f6b] "
                placeholder="¿En qué podemos ayudarte?"
                {...register("commit")}
              ></textarea>
            </div>
            <div className="flex items-center min-h-[20px] gap-3">
              <input
                type="checkbox"
                {...register("conditions", { required: true })}
                className="shadow-[0px_1px_2px_0px_#0000000d] accent-[#2a5b45]  border border-gray-300 w-4 h-4 rounded border-solid"
              />
              <label htmlFor="conditions">
                Acepto la{" "}
                <Link
                  href=""
                  className="text-sm font-semibold leading-4 underline text-gray-700"
                >
                  Política de Privacidad
                </Link>{" "}
                y los
                <Link
                  className="text-sm font-semibold leading-4 underline text-gray-700"
                  href=""
                >
                  {" "}
                  Términos y condiciones
                </Link>
                .
              </label>
            </div>
            <input
              type="submit"
              className="flex justify-center items-center text-white w-[90px] min-h-[40px] rounded cursor-pointer bg-[#2a5b45]"
            ></input>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContacctFormSection;
