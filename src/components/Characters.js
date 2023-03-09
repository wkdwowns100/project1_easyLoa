import characterList from "../assets/json/characters.json";
import "../assets/style/characters.scss";

function Characters() {
  const path = process.env.PUBLIC_URL;
  return (
    <div className="characters">
      <ul>
        {characterList.map((item) => (
          <li key={item.id} onClick={() => {window.open(`https://lostark.game.onstove.com/Profile/Character/${item.CharacterName}`)}}>
              <span className="server">{item.ServerName}</span>
              <span className="name">{item.CharacterName}</span>
              <div className="img"><img src={path + item.ClassIcon} alt={item.CharacterClassName} /></div>
              <div className="level">
                <span className="characterLevel">LV.{item.CharacterLevel}</span>
                <span className="itemLevel">{item.ItemAvgLevel}</span>
              </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Characters;


