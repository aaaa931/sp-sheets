import { MenuItem, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import DarkModeIcon from "@mui/icons-material/DarkMode";

import { useAppDispatch } from "@/hooks";
import { toggleTheme } from "@/theme/themeSlice";

const Light = () => {
  const dispatch = useAppDispatch();
  const handleToggleTheme = () => dispatch(toggleTheme());

  return (
    <>
      <MenuItem onClick={handleToggleTheme}>
        <WbSunnyIcon />
        <Typography textAlign="center" variant="h6" sx={{ marginLeft: 2 }}>
          日間模式
        </Typography>
      </MenuItem>
    </>
  );
};

const Night = () => {
  const dispatch = useAppDispatch();
  const handleToggleTheme = () => dispatch(toggleTheme());

  return (
    <>
      <MenuItem onClick={handleToggleTheme}>
        <DarkModeIcon />
        <Typography textAlign="center" variant="h6" sx={{ marginLeft: 2 }}>
          夜間模式
        </Typography>
      </MenuItem>
    </>
  );
};

const AppBarToggleTheme = () => {
  const theme = useTheme();

  return <>{theme.palette.mode === "light" ? <Light /> : <Night />}</>;
};

export default AppBarToggleTheme;
