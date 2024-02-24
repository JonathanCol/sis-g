import StartContentContact from "../../app/components/ContacUs/StartContentContact";
import Footer from "../../app/components/Footer/Footer";
import FormContact from "../../app/components/FormContact/FormContact";
import WelcomeSection from "../../app/components/WelcomeSection/WelcomeSection";
import RootLayout from "../../app/layout";



export default function Home() {
  return (
     <>
     <RootLayout>
      <WelcomeSection>
        <StartContentContact />
      </WelcomeSection>
      <FormContact />
      <Footer/>
     </RootLayout>
     </>
  );
}

