import { Link } from "react-router-dom";
import { Typography, TypographyOwnProps } from "@mui/material";
import { useTheme } from "@mui/material";

interface BaseLinkProps {
  to: string;
  children: React.ReactNode;
  color?: TypographyOwnProps["color"];
}

const BaseLink = ({ to, children, color }: BaseLinkProps) => {
  const theme = useTheme();

  if (!color) {
    color = theme.palette.mode === "light" ? "black" : "white";
  }

  return (
    <Link to={to} style={{ textDecoration: "none" }}>
      <Typography color={color}>{children}</Typography>
    </Link>
  );
};

export default BaseLink;
