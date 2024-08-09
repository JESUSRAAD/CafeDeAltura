import Form from "@/components/Form";
import UserList from "@/components/UserList";
import Image from "next/image";
import HomeCards from "./HomeCards";


const HomePage = () => {
  return (
    <div>
      {/* <Image
        src={
          "https://res.cloudinary.com/dalssoks9/image/upload/v1666638763/cafe_de_altura/coffee_bag_colombia_la_casita_pefsel.png"
        }
        width={50}
        height={50}
        alt="coffe img"
      /> */}
      {/* <div className="flex justify-center items-center h-screen">
        <Form />
      </div>
      <div className="flex justify-center h-screen">
        <UserList />
      </div> */}
      <HomeCards />
    </div>
  );
};

export default HomePage;
