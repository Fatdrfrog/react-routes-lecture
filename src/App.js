import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";

import { MarvelTheme } from "./components/marvel-theme";
import { AppBarComponent } from "./components/app-bar";
import { DrawerComponent } from "./components/drawer-component";
import { ContentLayout } from "./components/content-layout";
import { Comics } from "./components/comics";
import { Characters } from "./components/characters";
import { Events } from "./components/events";
import { MainPage } from "./components/main-page";

function App() {
  return (
    <MarvelTheme>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBarComponent />
        <DrawerComponent />

        <ContentLayout>
          <MainPage />
        </ContentLayout>

        {/* <ContentLayout>
          <Comics />
        </ContentLayout> */}

        {/* <ContentLayout>
          <Characters />
        </ContentLayout> */}

        {/* <ContentLayout>
          <Events />
        </ContentLayout> */}
      </Box>
    </MarvelTheme>
  );
}

export default App;
