
import "./globals.css";

import Header from "./components/Header/Header";
import AppBar from "./components/AppBar/AppBar";


export default function RootLayout({ children }) {
  return (
    <>
    
    <main>
      <Header/>
      {children}
      </main>
    </>
        
   
  )
}
