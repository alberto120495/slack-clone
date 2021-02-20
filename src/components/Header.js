import React from "react";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import SearchIcon from "@material-ui/icons/Search";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import {
  HeaderContainer,
  HeaderLeft,
  HeaderSearch,
  HeaderRight,
  HeaderAvatar,
} from "./Header.style";

function Header() {
  return (
    <HeaderContainer>
      <HeaderLeft>
        <HeaderAvatar
        //TODO: Add onClick
        />
        <AccessTimeIcon />
      </HeaderLeft>

      <HeaderSearch>
        <SearchIcon />
        <input type="text" placeholder="Search" />
      </HeaderSearch>

      <HeaderRight>
        <HelpOutlineIcon />
      </HeaderRight>
    </HeaderContainer>
  );
}

export default Header;
