import DescriptionServices from "../app/components/DescriptionServicesSection/DescriptionServices";
import StartContentHome from "../app/components/Home/StartContentHome";
import TextImage from "../app/components/TextAndImage/TextImage";
import TitleSubTitle from "../app/components/TitleAndSubTitle/TitleSubTitle";
import WelcomeSection from "../app/components/WelcomeSection/WelcomeSection";
import RootLayout from "../app/layout";

const arrayText = ["Sobre SIS_G", "Explora las Funcionalidades Esenciales de SIS_G: Potencia tu Experiencia y Maximiza tu Productividad"]
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
        <TextImage text={textQuotation} boxColor="#F2EEEE" sourceImage="/images/contactenos_sis_g.png"/>
      </RootLayout>
    </>
  );
}

