import axios from "axios";
import React, { useEffect, useMemo, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { DateWrapper, OptionsWrapper } from "../CheckDate/CheckDate.styles";
import { PageTitle } from "../Currencies/Currencies.styles";
import { ChangeWrapper } from "../Select/Select.styles";
import { Break } from "./ZlotyCheck.styles";
import Select from "react-select";

export const ZlotyCheck = () => {
  const [startDate, setStartDate] = useState("");
  const [currencies, setCurrencies] = useState([]);
  const [endDate, setEndDate] = useState("");
  const [dateOne, setDateOne] = useState({});
  const [dateTwo, setDateTwo] = useState({});
  const [currency, setCurrency] = useState("");
  const options = [];

  const addOptions = () => {
    currencies.map(({ code, mid }) => {
      return options.push({ value: code, label: code, mid: mid });
    });
    console.log(options);
  };

  const valueProcentage = useMemo(() => {
    const value = dateOne.mid?.toFixed(2) / dateTwo.mid?.toFixed(2);
    return value.toFixed(2) * 100;
  }, [dateOne, dateTwo]);

  const handleChangeDate = (date, option) => {
    let dataNowa = `${date.getFullYear()}-${date.getMonth() > 9 ? "" : "0"}${
      date.getMonth() + 1
    }-${date.getDate() > 9 ? "" : "0"}${date.getDate()}`;

    option(dataNowa);
  };

  const fetchDataWithDate = (date, option) => {
    axios
      .get(`http://api.nbp.pl/api/exchangerates/rates/a/${currency}/${date}/`)
      .then(({ data }) => {
        option(data.rates[0]);
      });
  };

  const fetchData = () => {
    axios
      .get(`http://api.nbp.pl/api/exchangerates/tables/a/`)
      .then(({ data }) => {
        setCurrencies(data[0].rates);
      });
  };

  const handleAddOpion = (data) => {
    setCurrency(data.value.toLowerCase());
    console.log(currency);
  };

  useEffect(() => {
    fetchDataWithDate(startDate, setDateOne);
    fetchDataWithDate(endDate, setDateTwo);
  }, [startDate, endDate, currency]);

  useEffect(() => {
    fetchData();
  }, []);

  addOptions();
  return (
    <OptionsWrapper>
      <PageTitle>
        Zmiana złotego w dniach: {startDate} / {endDate}{" "}
      </PageTitle>
      <DateWrapper>
        <DatePicker
          placeholderText="Wybierz datę"
          onChange={(date) => handleChangeDate(date, setStartDate)}
          dateFormat="yyyy-MM-dd"
        />
        <Break />
        <DatePicker
          placeholderText="Wybierz datę"
          onChange={(date) => handleChangeDate(date, setEndDate)}
          dateFormat="yyyy-MM-dd"
        />
        <Break />
        <Select options={options} onChange={handleAddOpion} />
      </DateWrapper>
      <ChangeWrapper smaller>
        {currency && startDate && endDate && valueProcentage
          ? `Waluta ${currency} w dniu ${endDate} ma ${valueProcentage}% swojej wartości
             w stosunku do złotego dnia ${startDate}`
          : "Wypełnij wszystkie dane"}
      </ChangeWrapper>
    </OptionsWrapper>
  );
};
