import React, { useState, useEffect } from "react";
import {
  Wrapper,
  Element,
  Title,
  Code,
  Value,
  CurrencyWrapper,
  PageTitle,
} from "./Currencies.styles";

export const Currencies = () => {
  const [currencies, setCurrencies] = useState([]);

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

  console.log(currencies);
  return (
    <Wrapper>
      <PageTitle>Spis głównych walut: </PageTitle>
      {currencies.map(({ currency, code, mid }) => {
        return (
          <Element>
            <CurrencyWrapper>
              <Title>{currency}</Title>
              <Code>({code})</Code>
            </CurrencyWrapper>
            <Value>
              1 {code} = {mid.toFixed(2)} PLN
            </Value>
          </Element>
        );
      })}
    </Wrapper>
  );
};
