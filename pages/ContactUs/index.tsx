
import Footer from "../../app/components/Footer/Footer";
import FormContact from "../../app/components/FormContact/FormContact";
import StartContent from "../../app/components/StartContent/StartContent";
import WelcomeSection from "../../app/components/WelcomeSection/WelcomeSection";
import RootLayout from "../../app/layout";



export default function Home() {
  return (
     <>
     <RootLayout>
      <WelcomeSection>
        <StartContent text={"ContactUs"} />
      </WelcomeSection>
      <FormContact />
      <Footer/>
     </RootLayout>
     </>
  );
}

