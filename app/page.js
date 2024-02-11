import RootLayout from "./layout"
import WelcomeSection from "./components/WelcomeSection/WelcomeSection"
import StartContentHome from "./components/Home/StartContentHome"


export default function Home() {
  return (
    <main>
      <div>
          <RootLayout>
            <WelcomeSection>
              <StartContentHome />
            </WelcomeSection>
          </RootLayout>
      </div>
    </main>
  )
}
