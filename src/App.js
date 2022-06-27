import { Currencies } from "./components/Currencies/Currencies";
import { ChangeCurrency } from "./components/ChangeCurrency/ChangeCurrency";
import { Header } from "./components/Header/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CheckDate } from "./components/CheckDate/CheckDate";
import { SelectCurrency } from "./components/Select/Select";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Currencies />} />
          <Route path="/change" element={<ChangeCurrency />} />
          <Route path="/check" element={<CheckDate />} />
          <Route path="/select" element={<SelectCurrency />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
