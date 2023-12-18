import React from "react";
import {
  CssBaseline,
  ThemeProvider as MUIThemeProvider,
  createTheme,
} from "@mui/material";

/* ======= Types ========*/
declare module "@mui/material/styles" {
  interface Palette {
    sidebar?: string;
    header?: string;
    mainBackground?: string;
  }
  interface PaletteOptions {
    sidebar?: string;
    header?: string;
    mainBackground?: string;
  }
}

/**
 * @component ThemeProvider
 */
const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const theme = createTheme({
    typography: {
      fontFamily: [
        "-apple-system",
        "BlinkMacSystemFont",
        '"Segoe UI"',
        "Roboto",
        '"Helvetica Neue"',
        "Arial",
        "sans-serif",
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(","),
      fontSize: 9,
    },
    palette: {
      primary: {
        main: "#1f2938",
        dark: "#121929",
        light: "#2958cf",
        contrastText: "#c9ccd1",
      },
      secondary: {
        main: "#cf7425",
      },
      success: {
        main: "#8ecc43",
      },
      warning: { main: "#ffd500" },
      sidebar: "#1f2938",
      header: "#ffffff",
      mainBackground: "#f0f4f7",
    },
    components: {
      MuiDrawer: {
        styleOverrides: {
          paper: {
            backgroundColor: "#1f2938",
            color: "#fff",
          },
        },
      },
      MuiAppBar: {
        styleOverrides: {
          root: {
            backgroundColor: "#fff",
            color: "#000",
            minHeight: "7vh",
            height: "7vh",
          },
        },
      },
      MuiToolbar: {
        styleOverrides: {
          root: {
            minHeight: "7vh !important",
            height: "7vh !important",
          },
        },
      },
    },
  });

  return (
    <MUIThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </MUIThemeProvider>
  );
};

export default ThemeProvider;
