import Footer from "../../app/components/Footer/Footer";
import ListRegistry from "../../app/components/ListRegistry/ListRegistry";
import StartContent from "../../app/components/StartContent/StartContent";
import WelcomeSection from "../../app/components/WelcomeSection/WelcomeSection";
import RootLayout from "../../app/layout";



export default function Historial() {
  return (
     <>
     <RootLayout>
      <WelcomeSection>
        <StartContent text={"Historial"} />
      </WelcomeSection>
      <ListRegistry/>
      <Footer/>
     </RootLayout>
     </>
  );
}