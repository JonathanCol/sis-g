
import StartContentAbout from "../../app/components/AboutUs/StartContentAbout";
import StartContent from "../../app/components/AboutUs/StartContentAbout";
import TitleSection from "../../app/components/Body/TitleSection";
import MisionAndVisionSection from "../../app/components/MisionAndVision/MisionAndVision";

import Cards from "../../app/components/TeamSection/Cards";
import WelcomeSection from "../../app/components/WelcomeSection/WelcomeSection";
import RootLayout from "../../app/layout";

export default function AboutUs() {
  return (
      <RootLayout> 
        <WelcomeSection>
          <StartContentAbout />
        </WelcomeSection>
         <TitleSection />
        <Cards />
        <TitleSection />
      </RootLayout>
  )
}
 // <RootLayout>
      
        {/* <WelcomeSection>
          <StartContent />
        </WelcomeSection> */}
        {/* <TitleSection />
        <Cards />
        <TitleSection /> */}
      {/* </RootLayout> */}