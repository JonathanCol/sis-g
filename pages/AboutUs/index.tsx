import TitleSection from "../../app/components/Body/TitleSection";
import Footer from "../../app/components/Footer/Footer";
import StartContent from "../../app/components/StartContent/StartContent";
import Cards from "../../app/components/TeamSection/Cards";
import TextImage from "../../app/components/TextAndImage/TextImage";
import WelcomeSection from "../../app/components/WelcomeSection/WelcomeSection";
import RootLayout from "../../app/layout";

export default function AboutUs() {
  return (
    <>
      <RootLayout>
        <WelcomeSection>
          <StartContent text={"AboutUs"} />
        </WelcomeSection>
        <TextImage />
        <TitleSection />
        <Cards />
        <TextImage />
        <Footer/>
      </RootLayout>
    </>
  );
}
