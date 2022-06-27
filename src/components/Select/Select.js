import React, { useEffect, useState } from "react";
import axios from "axios";
import Select from "react-select";
import { OptionsWrapper } from "../CheckDate/CheckDate.styles";
import { PageTitle } from "../Currencies/Currencies.styles";
import { ChangeWrapper, SelectWrapper } from "./Select.styles";
import { Input } from "../ChangeCurrency/ChangeCurrency.styles";

export const SelectCurrency = () => {
  const [currencies, setCurrencies] = useState([]);
  const [firstValue, setFirstValue] = useState({});
  const [secondValue, setsecondValue] = useState({});
  const [money, setMoney] = useState(1);

  const options = [];

  const addOptions = () => {
    currencies.map(({ code, mid }) => {
      return options.push({ value: code, label: code, mid: mid });
    });
  };

  const fetchData = () => {
    axios
      .get(`http://api.nbp.pl/api/exchangerates/tables/a/`)
      .then(({ data }) => {
        setCurrencies(data[0].rates);
      });
  };

  const handleChangeValue = (e) => {
    setMoney(e.target.value);

    if (e.target.value === "") {
      setMoney(1);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  addOptions();

  const handleCheckOptionOne = (option) => {
    setFirstValue(option);
  };

  const handleCheckOptionTwo = (option) => {
    setsecondValue(option);
  };

  return (
    <OptionsWrapper>
      <PageTitle under>Zmień waluty:</PageTitle>
      <SelectWrapper>
        <Select
          options={options}
          onChange={handleCheckOptionOne}
          className="select-wrapper"
        />
        <Select
          options={options}
          onChange={handleCheckOptionTwo}
          className="select-wrapper"
        />
        <Input type="number" onChange={handleChangeValue} />
      </SelectWrapper>

      <ChangeWrapper>
        <p>
          {(firstValue.mid * money) / firstValue.mid} {firstValue.value} ={" "}
          {((firstValue.mid * money) / secondValue.mid).toFixed(2)}{" "}
          {secondValue.value}
        </p>
      </ChangeWrapper>
    </OptionsWrapper>
  );
};
