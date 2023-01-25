import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Box from "@mui/material/Box";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./tsx/views/components/block/Layout";
import { lazy } from "react";

const Top = lazy(() => import("./tsx/views/pages/top/Top"));
const Employees = lazy(() => import("./tsx/views/pages/employees/Employees"));

const theme = createTheme();

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Top />} />
              <Route path="/employees" element={<Employees />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </Box>
    </ThemeProvider>
  );
}
