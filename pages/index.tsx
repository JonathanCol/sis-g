import DescriptionServices from "../app/components/DescriptionServicesSection/DescriptionServices";
import Footer from "../app/components/Footer/Footer";
import StartContentHome from "../app/components/Home/StartContentHome";
import TextImage from "../app/components/TextAndImage/TextImage";
import TitleSubTitle from "../app/components/TitleAndSubTitle/TitleSubTitle";
import WelcomeSection from "../app/components/WelcomeSection/WelcomeSection";
import RootLayout from "../app/layout";

const arrayText = ["Sobre SIS_G", "Conozca las funcionalidades principales de SIS_G"]
const textQuotation = ["Realice una cotizacion", "Permitanos ofrecerle una herramienta profesional de gestion de incidencias"];
export default function Home() {
  return (
     <>
     <RootLayout>
      <WelcomeSection>
        <StartContentHome />
      </WelcomeSection>
      <TitleSubTitle textArray={arrayText}/>
      <DescriptionServices/>
      <TextImage text={textQuotation} boxColor="#F2EEEE" sourceImage="/Macbook.jpg"/>
      <Footer/>
     </RootLayout>
     </>
  );
}

