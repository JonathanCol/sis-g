
import RootLayout from "./layout"
import WelcomeSection from "./components/WelcomeSection/WelcomeSection"
import StartContentHome from "./components/Home/StartContentHome"
import AppBar from "./components/AppBar/AppBar"


export default function Home() {
  return (
      <RootLayout>
            <WelcomeSection>
              <AppBar/>
              <StartContentHome />
            </WelcomeSection>
          </RootLayout>
  )
}
