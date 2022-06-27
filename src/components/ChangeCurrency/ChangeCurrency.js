import React, { useState, useEffect } from "react";
import { Wrapper, Input } from "./ChangeCurrency.styles";
import {
  Element,
  Title,
  Code,
  CurrencyWrapper,
  Value,
  PageTitle,
} from "../Currencies/Currencies.styles";

export const ChangeCurrency = () => {
  const initialState = 1;
  const [currencies, setCurrencies] = useState([]);
  const [plnValue, setPlnValue] = useState(initialState);

  const handleChangeValue = (e) => {
    setPlnValue(e.target.value);
    if (e.target.value === "") {
      setPlnValue(initialState);
    }
  };

  const fetchData = () => {
    fetch("http://api.nbp.pl/api/exchangerates/tables/A?format=json")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setCurrencies(data[0].rates);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Wrapper>
      <PageTitle>Wpisz kwotę jaką chcesz zmienić na inną walute</PageTitle>
      <Input type="number" onChange={handleChangeValue} />
      {currencies.map(({ currency, code, mid }) => {
        return (
          <div>
            <Element>
              <CurrencyWrapper>
                <Title>{currency}</Title>
                <Code>({code})</Code>
              </CurrencyWrapper>
              <Value>
                {plnValue} PLN = {(plnValue / mid).toFixed(2)} {code}
              </Value>
            </Element>
          </div>
        );
      })}
    </Wrapper>
  );
};
