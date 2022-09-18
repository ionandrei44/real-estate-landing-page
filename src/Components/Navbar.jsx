import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import FeaturedPlayListIcon from "@mui/icons-material/FeaturedPlayList";
import MiscellaneousServicesIcon from "@mui/icons-material/MiscellaneousServices";
import ListAltIcon from "@mui/icons-material/ListAlt";
import HomeIcon from "@mui/icons-material/Home";
import ContactsIcon from "@mui/icons-material/Contacts";
import logoImg from "../media/logo.png";
import { Container } from "@mui/system";
import CustomButton from "./CustomButton";
import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  styled,
} from "@mui/material";
import { useState } from "react";

export const Navbar = () => {
  const NavLink = styled(Typography)(({ theme }) => ({}));

  const NavbarLinksBox = styled(Box)(({ theme }) => ({}));

  const CustomMenuIcon = styled(MenuIcon)(({ theme }) => ({}));

  const NavbarContainer = styled(Container)(({ theme }) => ({}));

  const NavbarLogo = styled("img")(({ theme }) => ({}));

  return <></>;
};

export default Navbar;
