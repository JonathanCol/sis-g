import TitleSection from "../../app/components/Body/TitleSection";
import Footer from "../../app/components/Footer/Footer";
import StartContent from "../../app/components/StartContent/StartContent";
import Cards from "../../app/components/TeamSection/Cards";
import TextImage from "../../app/components/TextAndImage/TextImage";
import WelcomeSection from "../../app/components/WelcomeSection/WelcomeSection";
import RootLayout from "../../app/layout";


const textQuotation = ["Nuestra Historia", "Somos un equipo que nació de un proyecto para la institucion SENA"];
const joinTool = ["Maximise el registro de incidencias", "Nuestra herramienta facilitará la solución de inconvenientes en poco tiempo"]
export default function AboutUs() {
  return (
    <>
      <RootLayout>
        <WelcomeSection>
          <StartContent text={"AboutUs"} />
        </WelcomeSection>
        <TextImage text={textQuotation} boxColor="#FFFFF" sourceImage="/images/Equipo.jpg"/>
        <TitleSection />
        <Cards />
        <TextImage text={joinTool} boxColor="#F2EEEE" sourceImage="/images/Equipo.jpg"/>
      </RootLayout>
    </>
  );
}
