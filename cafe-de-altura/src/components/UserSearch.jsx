import { UserContext } from "@/context/UserContex";
import React, { useContext, useState } from "react";

const UserSearch = () => {
  const { dataUsers, setdataUsers, filterUsers, setFilterUsers } =
    useContext(UserContext);
  const [searchEmail, setSearchEmail] = useState("");

  const handleSearchChange = (e) => {
    setSearchEmail(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchEmail.trim()) {
      const filterResult = dataUsers.filter((user) =>
        user.email.toLowerCase().includes(searchEmail.toLowerCase())
      );
      setFilterUsers(filterResult);
      if (filterResult.length === 0) {
        setFilterUsers(dataUsers);
      }
    }
    if (searchEmail.trim() === "") {
      setFilterUsers(dataUsers);
    }
  };

  const handleReset = () => {
    setSearchEmail("");
    setFilterUsers(dataUsers);
  };



  console.log(dataUsers);
  console.log(filterUsers);
  return (
    <form className="max-w-4xl  flex" onSubmit={handleSearchSubmit}>
      <input
        type="email"
        name="search"
        id="search"
        placeholder="Search for email"
        onChange={handleSearchChange}
        value={searchEmail}
        className="border h-[40px]"
      />
      <div>
        <input
          className="bg-green-500 hover:bg-green-400 text-white font-light py-2 px-4 border-b-4 border-green-700 hover:border-green-500 rounded w-fit"
          type="submit"
          value="Search"
        />
      </div>
      <div>
        <input
          className="bg-orange-500 hover:bg-orange-400 text-white font-light py-2 px-4 border-b-4 border-orange-700 hover:border-orange-500 rounded w-fit"
          type="reset"
          value="Reset"
          onClick={handleReset}
        />
      </div>
    </form>
  );
};

export default UserSearch;
