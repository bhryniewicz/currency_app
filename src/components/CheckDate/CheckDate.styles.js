import styled from "styled-components";
import "react-datepicker/dist/react-datepicker.css";

export const DateWrapper = styled.div`
  display: flex;

  .react-datepicker-wrapper {
    width: 100% !important;
  }

  .react-datepicker__input-container {
    display: flex !important;

    input {
      flex: 1 1 0 !important;
      padding: 5px;
      font-size: 18px;
      margin-bottom: 15px;

      &:focus {
        outline: none;
        border: 2px solid #f2b90f;
      }
    }
  }
`;

export const OptionsWrapper = styled.div`
  height: 35vh;
`;
