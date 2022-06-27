import styled from "styled-components";

export const Wrapper = styled.div`
  width: 1024px;
  margin: 0 auto;
`;

export const Element = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  transition: backgroundColor 0.3s ease-in-out;

  &::before {
    content: "";
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 1px;
    background-color: rgba(37, 28, 28, 0.1);
  }

  &:hover {
    background-color: #f2b90f;
    color: white;
  }
`;

export const Title = styled.p`
  font-size: 24px;
  font-weight: 400;
`;

export const PageTitle = styled.h1`
  font-weight: 500;
  color: black;
  font-size: 24px;
  padding-bottom: 25px;
  margin-top: ${({ under }) => (under ? "40px" : 0)};
`;

export const Code = styled.h1`
  font-size: 10px;
  font-weight: 600px;
`;

export const Value = styled.p`
  font-size: 20px;
`;

export const CurrencyWrapper = styled.div`
  display: flex;
  align-items: center;

  ${Code} {
    padding-left: 7px;
  }
`;
