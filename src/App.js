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

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ContentItem } from "./components/content-item";

function App() {
  return (
    <BrowserRouter>
      <MarvelTheme>
        <Box sx={{ display: "flex" }}>
          <CssBaseline />
          <AppBarComponent />
          <DrawerComponent />

          <Routes>
            <Route
              path="/"
              element={
                <ContentLayout>
                  <MainPage />
                </ContentLayout>
              }
            />

            <Route
              path="/comics"
              element={
                <ContentLayout>
                  <Comics />
                </ContentLayout>
              }
            >
              <Route path=":comicsID" element={<ContentItem />} />
            </Route>

            <Route
              path="/characters"
              element={
                <ContentLayout>
                  <Characters />
                </ContentLayout>
              }
            >
              <Route path=":charactersID" element={<ContentItem />} />
            </Route>

            <Route
              path="/events"
              element={
                <ContentLayout>
                  <Events />
                </ContentLayout>
              }
            >
              <Route path=":eventsID" element={<ContentItem />} />
            </Route>
          </Routes>
        </Box>
      </MarvelTheme>
    </BrowserRouter>
  );
}

export default App;
