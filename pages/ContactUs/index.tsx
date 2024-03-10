
import FormContact from "../../app/components/FormContact/FormContact";
import StartContent from "../../app/components/StartContent/StartContent";
import WelcomeSection from "../../app/components/WelcomeSection/WelcomeSection";
import RootLayout from "../../app/layout";
import { Box } from '@mui/material'

export default function Home() {
  return (
    <>
      <Box sx={{ backgroundColor: "#F2EEEE" }}>
        <RootLayout>
          <WelcomeSection>
            <FormContact />
          </WelcomeSection>
        </RootLayout>
      </Box>
    </>
  );
}

