import React from "react";
import { Wrapper, WidthWrapper, LogoImg, Nav } from "./Header.styles";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo.png";

export const Header = () => {
  return (
    <Wrapper>
      <WidthWrapper>
        <LogoImg src={Logo} alt="" />
        <Nav>
          <Link to="/">HOME</Link>
          <Link to="/change">CHANGE</Link>
          <Link to="/check">CHECK</Link>
        </Nav>
      </WidthWrapper>
    </Wrapper>
  );
};
