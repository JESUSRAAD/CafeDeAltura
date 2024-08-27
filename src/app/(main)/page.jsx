import Form from "@/components/Form";
import UserList from "@/components/UserList";
import Image from "next/image";
import HomeCards from "../../components/HomeCards";
import Hero from "./Hero";
import CardsServicesSection from "@/components/CardsServicesSection";
import FAQ from "./FAQ";
import FeaturingSection from "./FeaturingSection";
import Footer from "@/components/Footer";
import ContacctFormSection from "./ContacctFormSection";



const HomePage = () => {
  return (
    <>
  
      <Hero/>
      <CardsServicesSection/>
      <HomeCards acc={4} title={"Novedades"} margin={false} link={true} titleArrow={"Ver todos"}/>
      <FAQ/>
      <FeaturingSection/>
      <ContacctFormSection/>
      <Footer/>
      
    </>
  );
};

export default HomePage;
