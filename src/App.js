import React from "react";
import Register from "./components/Register";
import Headermui from "./components/Headermui";
import Body from "./components/Body";
import About from "./components/About";
import Contactus from "./components/ContactUs";
import PartnerStores from "./components/PartnerStores";
import Login from "./components/Login";
import Collectpoints from "./components/Collectpoints";
import Error from "./components/Error";
import Surveys from "./components/Surveys";
import Account from "./components/Account";
import Profile from "./components/Profile";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Userguide from "./components/Userguide";
import Dashboard from "./components/Dashboard";
//import RestaurantMenu from "./components/RestaurantMenu";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

const theme = createTheme({
  palette: {
    primary: {
      main: "#f8f9fa",
    },
    secondary: {
      main: "#343a40",
    },
    text: {
      primary: "#343a40",
      secondary: "#495057",
    },
  },
});

const AppLayout = () => (
  <div className="app">
    <ThemeProvider theme={theme}>
      <Headermui />
      <Outlet />
    </ThemeProvider>
  </div>
);

// Configuration for the router
const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { path: "/", element: <Body /> },
      { path: "/about", element: <About /> },
      { path: "/contactus", element: <Contactus /> },
      { path: "/collect-points", element: <Collectpoints /> },
      { path: "/partner-stores", element: <PartnerStores /> },
      { path: "/signup", element: <Register /> },
      { path: "/login", element: <Login /> },
      { path: "/surveys", element: <Surveys /> },
      { path: "/account", element: <Account /> },
      { path: "/profile", element: <Profile /> },
      { path: "/userguide", element: <Userguide /> },
      { path: "/dashboard", element: <Dashboard /> },
    ],
    errorElement: <Error />,
  },
]);

const App = () => <RouterProvider router={router} />;

export default App;
