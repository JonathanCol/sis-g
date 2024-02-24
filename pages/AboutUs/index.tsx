import StartContentAbout from "../../app/components/AboutUs/StartContentAbout";
import TitleSection from "../../app/components/Body/TitleSection";
import Footer from "../../app/components/Footer/Footer";
import Cards from "../../app/components/TeamSection/Cards";
import TextImage from "../../app/components/TextAndImage/TextImage";
import WelcomeSection from "../../app/components/WelcomeSection/WelcomeSection";
import RootLayout from "../../app/layout";

export default function AboutUs() {
  return (
    <>
      <RootLayout>
       <WelcomeSection>
        <StartContentAbout/>
       </WelcomeSection>
       <TextImage />
       <TitleSection/>
       <Cards/>
       <TextImage />
       <Footer/>
      </RootLayout>
    </>
  );
}

