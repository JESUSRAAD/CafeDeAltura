"use client";
import { UserContext } from "@/context/UserContex";
import React, { useContext } from "react";

const UserCard = ({ user }) => {
  const { dataUsers, setdataUsers, filterUsers, setFilterUsers } =
    useContext(UserContext);

  const handleUsserDelete = (telf) => {
    setdataUsers((prevDetails) => {
      const indexDelete = prevDetails.findIndex(
        (detail) => detail.telf === telf
      );

      const updatedUsers = [
        ...prevDetails.slice(0, indexDelete),
        ...prevDetails.slice(indexDelete + 1),
      ];
      localStorage.setItem("users", JSON.stringify(updatedUsers));

      const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
      setdataUsers(storedUsers);
      setFilterUsers(storedUsers);

      return updatedUsers;
    });
  };

  return (
    <div className="max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-4">{user.name}</h2>
        <p className="text-gray-700 mb-2">
          <strong>Publicidad:</strong> {user.advertising}
        </p>
        <p className="text-gray-700 mb-2">
          <strong>Edad:</strong> {user.age}
        </p>
        <p className="text-gray-700 mb-2">
          <strong>Tipo de Cuenta:</strong> {user.countType ? "Sí" : "No"}
        </p>
        <p className="text-gray-700 mb-2">
          <strong>Email:</strong> {user.email}
        </p>
        <p className="text-gray-700 mb-2">
          <strong>Género:</strong> {user.gender}
        </p>
        <p className="text-gray-700">
          <strong>Teléfono:</strong> {user.telf}
        </p>
        <div className="flex w-full gap-2">
          <button
            onClick={() => handleUsserDelete(user.telf)}
            className="bg-red-500 hover:bg-red-400 text-white font-bold py-2 px-4 border-b-4 border-red-700 hover:border-red-500 rounded w-full"
          >
            X
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
