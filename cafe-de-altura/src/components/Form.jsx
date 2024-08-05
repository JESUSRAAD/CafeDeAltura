"use client";

import { UserContext } from "@/context/UserContex";
import { useContext, useState } from "react";

const Form = () => {
  const { dataUsers,setdataUsers, filterUsers, setFilterUsers } = useContext(UserContext);
  const [user, setUser] = useState({});
  const handleInput = (event) => {
    const inputName = event.target.name;
    setUser((prev) => {
      return {
        ...prev,
        [inputName]: event.target.value,
      };
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    setdataUsers((prevData) =>{ 
     const  result= [...prevData, user]
      localStorage.setItem('users', JSON.stringify(result));
      return result
    });
      event.target.reset();

      const storedUsers = JSON.parse(localStorage.getItem('users')) || [];
      setdataUsers(storedUsers);
      setFilterUsers(storedUsers);
  };
  console.log(dataUsers);


  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
     <div>
  <label htmlFor="name">Enter your name:</label>
  <input
    className="border"
    type="text"
    name="name"
    id="name"
    required
    onChange={handleInput}
  />
</div>
<div>
  <label htmlFor="email">Enter your email:</label>
  <input
    className="border"
    type="email"
    name="email"
    id="email"
    required
    onChange={handleInput}
  />
</div>
<div>
  <label htmlFor="age">Enter your age:</label>
  <input
    className="border"
    type="number"
    name="age"
    id="age"
    required
    onChange={handleInput}
  />
</div>
<div>
  <label htmlFor="telf">Enter your number phone:</label>
  <input
    className="border"
    type="tel"
    name="telf"
    id="telf"
    required
    onChange={handleInput}
  />
</div>
<div>
  <label>Enter your gender:</label>
  <div>
    <input
      className="border"
      type="radio"
      name="gender"
      id="masculino"
      value="masculino"
      onChange={handleInput}
    />
    <label htmlFor="masculino">masculino</label>
  </div>
  <div>
    <input
      className="border"
      type="radio"
      name="gender"
      id="femenino"
      value="femenino"
      onChange={handleInput}
    />
    <label htmlFor="femenino">femenino</label>
  </div>
  <div>
    <input
      className="border"
      type="radio"
      name="gender"
      id="no-binario"
      value="no-binario"
      onChange={handleInput}
    />
    <label htmlFor="no-binario">no binario</label>
  </div>
  <div>
    <input
      className="border"
      type="radio"
      name="gender"
      id="otros-prefiero-no-decirlo"
      value="otros"
      defaultChecked
      onChange={handleInput}
    />
    <label htmlFor="otros-prefiero-no-decirlo">
      otros / prefiero no decirlo
    </label>
  </div>
</div>
<div>
  <label htmlFor="countType">Type count:</label>
  <select
    className="border"
    name="countType"
    id="countType"
    required
    onChange={handleInput}
  >
    <option value="">--Please choose an option--</option>
    <option value="básica">básica</option>
    <option value="premium">premium</option>
    <option value="business">business</option>
  </select>
</div>
<div>
  <input
    className="border"
    type="checkbox"
    name="advertising"
    id="advertising"
    onChange={handleInput}
  />
  <label htmlFor="advertising">Acepto recibir publicidad por email:</label>
</div>
<div>
  <input
    className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded w-fit"
    type="submit"
  />
</div>

    </form>
  );
};

export default Form;
