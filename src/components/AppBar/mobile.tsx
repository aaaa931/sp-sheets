import { useState, MouseEvent } from "react";
import { IconButton, Menu, MenuItem, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

import AppBarToggleTheme from "@/components/AppBar/toggleTheme";
import BaseLink from "@/components/Base/BaseLink";
import { Page } from "@/interface/page";
import { isMobile } from "@/theme";

interface AppBarMobileProps {
  pages: Page[];
}

const AppBarMobile = ({ pages }: AppBarMobileProps) => {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const open = !!anchorEl;

  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(e.currentTarget);
  };

  const handleClose = () => setAnchorEl(null);

  return (
    <>
      <IconButton sx={isMobile} onClick={handleClick}>
        <MenuIcon fontSize="large" sx={{ color: "#fff" }} />
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        onClick={handleClose}
      >
        {pages.map(({ to, label, icon }) => (
          <BaseLink to={to} key={to}>
            <MenuItem>
              {icon}
              <Typography
                textAlign="center"
                variant="h6"
                sx={{ marginLeft: 2 }}
              >
                {label}
              </Typography>
            </MenuItem>
          </BaseLink>
        ))}
        <AppBarToggleTheme />
      </Menu>
    </>
  );
};

export default AppBarMobile;
