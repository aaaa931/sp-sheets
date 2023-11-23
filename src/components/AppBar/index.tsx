import { Link } from "react-router-dom";
import { AppBar, Box, Toolbar } from "@mui/material";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import EditNoteIcon from "@mui/icons-material/EditNote";
import EventNoteIcon from "@mui/icons-material/EventNote";
import HomeIcon from "@mui/icons-material/Home";
import SubjectIcon from "@mui/icons-material/Subject";

import logo from "@/assets/logo.png";
import AppBarPc from "@/components/AppBar/pc";
import AppBarMobile from "@/components/AppBar/mobile";
import BaseImg from "@/components/Base/BaseImg";
import { Page } from "@/interface/page";

const pages: Page[] = [
  { to: "/", label: "首頁", icon: <HomeIcon /> },
  { to: "/note", label: "筆記", icon: <EditNoteIcon /> },
  { to: "/accounting/item", label: "項目", icon: <EventNoteIcon /> },
  { to: "/accounting", label: "記帳", icon: <AttachMoneyIcon /> },
  { to: "/accounting/record", label: "紀錄", icon: <SubjectIcon /> },
];

const MyAppBar = () => {
  return (
    <AppBar>
      <Toolbar>
        <Link to="/">
          <BaseImg src={logo} />
        </Link>
        <Box flexGrow={1} />
        <AppBarPc pages={pages} />
        <AppBarMobile pages={pages} />
      </Toolbar>
    </AppBar>
  );
};

export default MyAppBar;
