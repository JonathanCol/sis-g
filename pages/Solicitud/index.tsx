import Footer from "../../app/components/Footer/Footer";
import FormSolicitud from "../../app/components/FormSolicitud/FormSolicitud";
import StartContent from "../../app/components/StartContent/StartContent";
import WelcomeSection from "../../app/components/WelcomeSection/WelcomeSection";
import RootLayout from "../../app/layout";



export default function Solicitud() {
  return (
     <>
     <RootLayout>
      <WelcomeSection>
        <StartContent text={"Solicitud"} />
      </WelcomeSection>
      <FormSolicitud />
      <Footer/>
     </RootLayout>
     </>
  );
}