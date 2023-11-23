import { Outlet } from "react-router-dom";
import { Container, CssBaseline, Toolbar } from "@mui/material";

import MyAppBar from "@/components/AppBar";

const DefaultLayout = () => {
  return (
    <Container maxWidth="lg">
      <CssBaseline />
      <MyAppBar />
      <Toolbar />
      <Outlet />
    </Container>
  );
};

export default DefaultLayout;
