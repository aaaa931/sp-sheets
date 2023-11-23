import { useEffect, useMemo } from "react";
import { ThemeProvider } from "@mui/material/styles";

import "@/App.css";
import DefaultLayout from "@/layouts/default";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { lightTheme, darkTheme } from "@/theme";
import { initTheme } from "@/theme/themeSlice";

function App() {
  const mode = useAppSelector((state) => state.themeSlice.mode);
  const dispatch = useAppDispatch();

  const theme = useMemo(
    () => (mode === "light" ? lightTheme : darkTheme),
    [mode]
  );

  useEffect(() => {
    dispatch(initTheme());
  }, [dispatch]);

  return (
    <ThemeProvider theme={theme}>
      <DefaultLayout />
    </ThemeProvider>
  );
}

export default App;
