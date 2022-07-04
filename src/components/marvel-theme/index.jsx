import { createTheme, ThemeProvider } from "@mui/material/styles";

const marvelDefaultColor = "#f50057";
const marvelDefaultWidth = 240;

const theme = createTheme({
  defaultWidth: {
    width: marvelDefaultWidth,
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: marvelDefaultColor,
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          color: marvelDefaultColor,
        },
      },
    },
    MuiInputLabelRoot: {
      styleOverrides: {
        root: {
          color: marvelDefaultColor,
        },
      },
    },
    MuiToolbar: {
      styleOverrides: {
        root: {
          display: "flex",
          justifyContent: "space-between",
        },
      },
    },
  },
});

export const MarvelTheme = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
