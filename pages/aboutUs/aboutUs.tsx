import StartContent from "../../app/components/AboutUs/StartContentAbout";
import TitleSection from "../../app/components/Body/TitleSection";
import Cards from "../../app/components/TeamSection/Cards";
import WelcomeSection from "../../app/components/WelcomeSection/WelcomeSection";
import RootLayout from "../../app/layout";

export default function AboutUs() {
  return (
    <>
      <RootLayout>
        <WelcomeSection>
          <StartContent />
        </WelcomeSection>
        <TitleSection />
        <Cards />
      </RootLayout>
    </>
  );
}
