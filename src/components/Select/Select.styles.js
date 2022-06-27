import styled from "styled-components";
import { PageTitle } from "../Currencies/Currencies.styles";

export const ChangeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px 40px;
  background-color: #094c36;
  color: white;
  height: 150px;
  font-size: ${({ smaller }) => (smaller ? "16px" : "24px")};

  ${PageTitle} {
    align-self: flex-start;
    font-size: 18px;
    color: white;
  }
`;

export const SelectWrapper = styled.div`
  display: flex;
  align-self: center;

  .select-wrapper {
    width: 400px;
    height: 35px;

    &:nth-child(2) {
      margin: 0 20px;
    }

    &:focus {
      outline: none;
      border: 2px solid #f2b90f !important;
    }
  }
`;
