'use client'
import StartContentContact from "../app/components/ContacUs/StartContentContact";
import WelcomeSection from "../app/components/WelcomeSection/WelcomeSection";
import RootLayout from "../app/layout";





export default function ContactUs() {
    return (
        // <h1>Holamundo</h1>
    //     <>
            <RootLayout>
                <WelcomeSection>
                    <StartContentContact/>
                </WelcomeSection>
            </RootLayout>
        
    //     </>
    );
}