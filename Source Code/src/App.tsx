import React from "react";
import { BrowserRouter } from "react-router-dom";
import AuthProvider from "./auth/AuthProvider";
import Routes from "./routes/Routes";
import ThemeProvider from "./theme/ThemeProvider";
import { Toaster } from "react-hot-toast";
import { ErrorBoundary } from "./components";

/**
 * @component App
 */
function App() {
  return (
    <BrowserRouter>
      <ErrorBoundary>
        <AuthProvider>
          <ThemeProvider>
            {/* ########### Routes ########### */}
            <Routes />

            {/* ########### Toaster ########### */}
            <Toaster />
          </ThemeProvider>
        </AuthProvider>
      </ErrorBoundary>
    </BrowserRouter>
  );
}

export default App;
