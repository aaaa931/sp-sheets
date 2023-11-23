import { SxProps, createTheme } from "@mui/material/styles";

export const lightTheme = createTheme({
  palette: { mode: "light" },
});

export const darkTheme = createTheme({
  palette: { mode: "dark" },
});

export const isPc: SxProps = {
  display: { xs: "none", md: "flex" },
};

export const isMobile: SxProps = {
  display: { xs: "flex", md: "none" },
};
