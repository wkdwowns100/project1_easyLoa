import { Routes, Route } from "react-router-dom";
import { useState } from "react";

import Valtan from "./Valtan";
import Vykas from "./Vykas";
import KakulSaydon from "./KakulSaydon";
import Abrelshod from "./Abrelshud";
import Illiakan from "./Illiakan";
import Lauriel from "./Lauriel";

import "../assets/style/cunningPaper.scss";
import CunningPaperList from "./CunningPaperList";

function CunningPaper() {
  const [price, setPrice] = useState("");
  const [people, setPeople] = useState("");

  function getPrice(e) {
    const { value } = e.target;
    setPrice(value);
  }
  const onChecked = (e) => {
    const { value } = e.target;
    setPeople(value);
  };
  const minPrice = Math.floor((price * 0.95 * people) / 1.1);
  const maxPrice = Math.floor(price * 0.95 * people);

  return (
    <div className="cunningPaper">
      <CunningPaperList />
      <Routes>
        <Route path="/" element={<Valtan />} />
        <Route path="vykas" element={<Vykas />} />
        <Route path="kakulSadon" element={<KakulSaydon />} />
        <Route path="abrelshud" element={<Abrelshod />} />
        <Route path="illiakan" element={<Illiakan />} />
        <Route path="lauriel" element={<Lauriel />} />
      </Routes>
      <div className="calculator">
        <h2>쌀 산 기</h2>
        <div className="party">
          <form className="radioBtn">
            <label>
              <input
                type="radio"
                name="people"
                id="fourPeople"
                value="0.75"
                onClick={onChecked}
              />
              4인
            </label>
            <label>
              <input
                type="radio"
                name="people"
                id="eightPeople"
                value="0.875"
                onClick={onChecked}
              />
              8인
            </label>
          </form>
          <form className="auctionPrice">
            <label>
              거래소가격 :&nbsp;
              <input
                type="text"
                name="tradePrice"
                id="tradePrice"
                value={price}
                onChange={getPrice}
              />
            </label>
          </form>
          <br />
          <h3>
            입찰추천가 : <span className="calcPrice minPrice">{minPrice}</span>
          </h3>
          <br />
          <h3>
            손익분기점 : <span className="calcPrice maxPrice">{maxPrice}</span>
          </h3>
        </div>
      </div>
    </div>
  );
}

export default CunningPaper;
