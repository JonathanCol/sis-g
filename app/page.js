import AppBarMenu from "./components/AppBar/AppBarMenu"
import WelcomeSection from "./components/Hero/WelcomeSection"


export default function Home() {
  return (
    <main>
      <div>
        <AppBarMenu/>
        <WelcomeSection />
      </div>
    </main>
  )
}
