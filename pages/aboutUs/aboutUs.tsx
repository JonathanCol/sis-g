
import StartContent from "../../app/components/AboutUs/StartContentAbout";
import WelcomeSection from "../../app/components/WelcomeSection/WelcomeSection";
import RootLayout from "../../app/layout";





export default function AboutUs ({children}){
    return <>
    
        <RootLayout>
           <WelcomeSection>
            <StartContent/>
           </WelcomeSection>
        </RootLayout>
    
    </>
}