import { Link } from "react-router-dom";

function CunningPaperList() {
  return (
    <ul>
      <li>
        <Link to="/cunningpaper/">발탄</Link>
      </li>
      <li>
        <Link to="/cunningpaper/vykas">비아키스</Link>
      </li>
      <li>
        <Link to="/cunningpaper/kakulSadon">쿠크세이튼</Link>
      </li>
      <li>
        <Link to="/cunningpaper/abrelshud">아브렐슈드</Link>
      </li>
      <li>
        <Link to="/cunningpaper/illiakan">일리아칸</Link>
      </li>
      <li>
        <Link to="/cunningpaper/lauriel">카양겔</Link>
      </li>
    </ul>
  );
}

export default CunningPaperList;
