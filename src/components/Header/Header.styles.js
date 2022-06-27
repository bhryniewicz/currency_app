import styled from "styled-components";

export const Wrapper = styled.div`
  height: 10vh;
  margin-bottom: 50px;
  background-color: #f2b90f;
  color: white;
`;

export const WidthWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 1024px;
  height: 100%;
  margin: 0 auto;
`;

export const LogoImg = styled.img`
  width: 60px;
  height: 60px;
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;

  a {
    color: white;
    text-decoration: none;
    font-weight: 600;
    font-size: 18px;
    margin: 0 20px;
    position: relative;

    &::before {
      content: "";
      position: absolute;
      display: none;
      bottom: -6px;
      width: 0;
      height: 2px;
      background-color: #fff;
    }

    &:hover::before {
      display: block;
      width: 100%;
    }
  }
`;
