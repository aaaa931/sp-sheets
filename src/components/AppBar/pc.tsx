import { MenuItem, Stack, Typography } from "@mui/material";

import AppBarToggleTheme from "@/components/AppBar/toggleTheme";
import BaseLink from "@/components/Base/BaseLink";
import { Page } from "@/interface/page";
import { isPc } from "@/theme";

interface AppBarProps {
  pages: Page[];
}

const AppBarPc = ({ pages }: AppBarProps) => (
  <Stack direction="row" sx={isPc}>
    {pages.map(({ to, label, icon }) => (
      <BaseLink to={to} key={to} color="white">
        <MenuItem>
          {icon}
          <Typography textAlign="center" variant="h6" sx={{ marginLeft: 2 }}>
            {label}
          </Typography>
        </MenuItem>
      </BaseLink>
    ))}
    <AppBarToggleTheme />
  </Stack>
);

export default AppBarPc;
