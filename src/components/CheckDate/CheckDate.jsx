import axios from "axios";
import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import { DateWrapper } from "./CheckDate.styles";
import { SelectCurrency } from "../Select/Select";
import { ZlotyCheck } from "../ZlotyCheck/ZlotyCheck";

import "react-datepicker/dist/react-datepicker.css";
import { Wrapper } from "../ChangeCurrency/ChangeCurrency.styles";
import {
  Element,
  Title,
  Code,
  CurrencyWrapper,
  Value,
  PageTitle,
} from "../Currencies/Currencies.styles";

export const CheckDate = () => {
  const [newDate, setNewDate] = useState("");
  const [currencies, setCurrencies] = useState([]);

  const handleChangeDate = (date) => {
    let dataNowa = `${date.getFullYear()}-${date.getMonth() > 9 ? "" : "0"}${
      date.getMonth() + 1
    }-${date.getDate() > 9 ? "" : "0"}${date.getDate()}`;

    setNewDate(dataNowa);
  };

  const fetchData = () => {
    axios
      .get(
        `http://api.nbp.pl/api/exchangerates/tables/a/${newDate}?format=json`
      )
      .then(({ data }) => setCurrencies(data[0].rates));
  };

  useEffect(() => {
    fetchData();
  }, [newDate]);

  return (
    <Wrapper>
      <PageTitle>
        Kursy walut z dnia {newDate ? newDate : "dzisiejszego"}:
      </PageTitle>
      <DateWrapper>
        <DatePicker
          placeholderText="Wybierz datę"
          onChange={(date) => handleChangeDate(date)}
          dateFormat="yyyy-MM-dd"
        />
      </DateWrapper>

      {currencies.map(({ currency, code, mid }) => {
        return (
          <div>
            <Element>
              <CurrencyWrapper>
                <Title>{currency}</Title>
                <Code>({code})</Code>
              </CurrencyWrapper>
              <Value>{mid} PLN</Value>
            </Element>
          </div>
        );
      })}
      <SelectCurrency />
      <ZlotyCheck />
    </Wrapper>
  );
};
