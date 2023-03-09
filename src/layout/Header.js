import { Link } from "react-router-dom";
import { useState } from "react";

import { ReactComponent as HomeworkImg } from "../assets/images/homework.svg";
import { ReactComponent as CunningPaperImg } from "../assets/images/cunningPaper.svg";
import { ReactComponent as CharaterInfoImg } from "../assets/images/characters.svg";

import "../assets/style/header.scss";
import logo from "../assets/images/logo.png";

function Header() {
  const [timer, setTimer] = useState("0000년 0월 00일 00:00:00");
  useState(() => {
    const currentTimer = () => {
      const date = new Date();
      const years = String(date.getFullYear());
      const months = String(date.getMonth() + 1);
      const dates = String(date.getDate());
      const hours = String(date.getHours()).padStart(2, "0");
      const minutes = String(date.getMinutes()).padStart(2, "0");
      const seconds = String(date.getSeconds()).padStart(2, "0");
      setTimer(
        `${years}년 ${months}월 ${dates}일 ${hours}:${minutes}:${seconds}`
      );
    };
    const startTimer = () => {
      setInterval(currentTimer, 1000);
    };
    startTimer();
  }, []);

  return (
    <header>
      <div className="time">{timer}</div>
      <ul>
        <li>
          <Link to="/">
            <HomeworkImg />
            숙제
          </Link>
        </li>
        <li>
          <Link to="/cunningpaper">
            <CunningPaperImg />
            레이드 공략
          </Link>
        </li>
        <li>
          <Link to="/characters">
            <CharaterInfoImg />
            캐릭터 정보
          </Link>
        </li>
      </ul>
      <div
        className="logo"
        onClick={() => {
          window.open(`https://lostark.game.onstove.com/`);
        }}
      >
        <img src={logo} alt="로아 공홈" />
        <span>공식 홈페이지</span>
      </div>
    </header>
  );
}

export default Header;
