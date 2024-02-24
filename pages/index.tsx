import StartContentHome from "../app/components/Home/StartContentHome";
import WelcomeSection from "../app/components/WelcomeSection/WelcomeSection";
import RootLayout from "../app/layout";



export default function Home() {
  return (
     <>
     <RootLayout>
      <WelcomeSection>
        <StartContentHome />
      </WelcomeSection>
     </RootLayout>
     </>
  );
