
import StartContent from "../../app/components/AboutUs/StartContentAbout";
import Cards from "../../app/components/TeamSection/Cards";
import WelcomeSection from "../../app/components/WelcomeSection/WelcomeSection";
import RootLayout from "../../app/layout";





export default function AboutUs ({children}){
    return <>
    
        <RootLayout>
           <WelcomeSection>
            <StartContent/>
            <Cards/>
           </WelcomeSection>
        </RootLayout>
    
    </>
}