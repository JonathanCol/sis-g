import StartContentContact from "../app/components/ContacUs/StartContentContact";
import WelcomeSection from "../app/components/WelcomeSection/WelcomeSection";
import RootLayout from "../app/layout";





export default function ContactUs() {
    return (
        <>
            <RootLayout>
                <WelcomeSection>
                    <StartContentContact/>
                </WelcomeSection>
            </RootLayout>
        
        </>
    );
}