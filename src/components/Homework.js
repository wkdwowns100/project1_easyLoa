import { useState, useEffect } from "react";
import data from "../assets/json/characters.json";
import category from "../assets/json/homework.json";

import "../assets/style/homework.scss";

function Homework() {
  const path = process.env.PUBLIC_URL;

  const [checked, setChecked] = useState({});

  useEffect(() => {
    const itemData = JSON.parse(localStorage.getItem("체크") || "{}");
    setChecked(itemData);
  }, []);

  useEffect(() => {
    localStorage.setItem("체크", JSON.stringify(checked));
  }, [checked]);

  function handleCheck(e) {
    const { name, checked } = e.target;
    setChecked((item) => ({ ...item, [name]: checked }));
  }

  const handleReset = () => {
    localStorage.removeItem("체크");
  };
  useEffect(() => {
    handleReset();
  }, []);

  return (
    <div className="homework">
      <div className="table Left">
        <table className="category">
          {category.map((list) => (
            <tr key={list.id} className={"title" + list.id}>
              <th>{list.text}</th>
            </tr>
          ))}
        </table>
      </div>
      <div className="table right">
        <table className="characters">
          <thead>
            <tr className="title1">
              {data.map((item) => (
                <th key={item.id}>{item.CharacterName}</th>
              ))}
            </tr>
            <tr className="title2">
              {data.map((item) => (
                <th key={item.id}>
                  <img
                    src={path + item.ClassIcon}
                    alt={item.CharacterClassName}
                  />
                  {item.CharacterClassName}
                </th>
              ))}
            </tr>
            <tr className="title3">
              {data.map((item) => (
                <th key={item.id}>{item.ItemAvgLevel}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr className="title4">
              <td colSpan="10"></td>
            </tr>
            <tr className="title5">
              {data.map((item) => (
                <td>
                  <input
                    type="checkbox"
                    name={item.CharacterClassName + "chaosDungeon1"}
                    id="chaosDungeon1"
                    checked={checked[item.CharacterClassName + "chaosDungeon1"]}
                    onChange={handleCheck}
                  />
                  <input
                    type="checkbox"
                    name={item.CharacterClassName + "chaosDungeon2"}
                    id="chaosDungeon2"
                    checked={checked[item.CharacterClassName + "chaosDungeon2"]}
                    onChange={handleCheck}
                  />
                </td>
              ))}
            </tr>
            <tr className="title6">
              {data.map((item) => (
                <td>
                  <input
                    type="checkbox"
                    name={item.CharacterClassName + "guardian1"}
                    id="guardian1"
                    checked={checked[item.CharacterClassName + "guardian1"]}
                    onChange={handleCheck}
                  />
                  <input
                    type="checkbox"
                    name={item.CharacterClassName + "guardian2"}
                    id="guardian2"
                    checked={checked[item.CharacterClassName + "guardian2"]}
                    onChange={handleCheck}
                  />
                </td>
              ))}
            </tr>
            <tr className="title7">
              {data.map((item) => (
                <td>
                  <input
                    type="checkbox"
                    name={item.CharacterClassName + "epona1"}
                    id="epona1"
                    checked={checked[item.CharacterClassName + "epona1"]}
                    onChange={handleCheck}
                  />
                  <input
                    type="checkbox"
                    name={item.CharacterClassName + "epona2"}
                    id="epona2"
                    checked={checked[item.CharacterClassName + "epona2"]}
                    onChange={handleCheck}
                  />
                  <input
                    type="checkbox"
                    name={item.CharacterClassName + "epona3"}
                    id="epona3"
                    checked={checked[item.CharacterClassName + "epona3"]}
                    onChange={handleCheck}
                  />
                </td>
              ))}
            </tr>
            <tr className="title8">
              <td colSpan="10"></td>
            </tr>
            <tr className="title9">
              {data.map((item) => (
                <td>
                  <input
                    type="checkbox"
                    name={item.CharacterClassName + "valtan"}
                    id="valtan"
                    checked={checked[item.CharacterClassName + "valtan"]}
                    onChange={handleCheck}
                  />
                </td>
              ))}
            </tr>
            <tr className="title10">
              {data.map((item) => (
                <td>
                  <input
                    type="checkbox"
                    name={item.CharacterClassName + "vykas"}
                    id="vykas"
                    checked={checked[item.CharacterClassName + "vykas"]}
                    onChange={handleCheck}
                  />
                </td>
              ))}
            </tr>
            <tr className="title11">
              {data.map((item) => (
                <td>
                  <input
                    type="checkbox"
                    name={item.CharacterClassName + "kakulsadon"}
                    id="kakulsadon"
                    checked={checked[item.CharacterClassName + "kakulsadon"]}
                    onChange={handleCheck}
                  />
                </td>
              ))}
            </tr>
            <tr className="title12">
              {data.map((item) => (
                <td>
                  <input
                    type="checkbox"
                    name={item.CharacterClassName + "abrelshudNormal"}
                    id="abrelshudNormal"
                    checked={
                      checked[item.CharacterClassName + "abrelshudNormal"]
                    }
                    onChange={handleCheck}
                  />
                </td>
              ))}
            </tr>
            <tr className="title13">
              {data.map((item) => (
                <td>
                  <input
                    type="checkbox"
                    name={item.CharacterClassName + "abrelshudHard"}
                    id="abrelshudHard"
                    checked={checked[item.CharacterClassName + "abrelshudHard"]}
                    onChange={handleCheck}
                  />
                </td>
              ))}
            </tr>
            <tr className="title14">
              {data.map((item) => (
                <td>
                  <input
                    type="checkbox"
                    name={item.CharacterClassName + "illiakanNormal"}
                    id="illiakanNormal"
                    checked={
                      checked[item.CharacterClassName + "illiakanNormal"]
                    }
                    onChange={handleCheck}
                  />
                </td>
              ))}
            </tr>
            <tr className="title15">
              {data.map((item) => (
                <td>
                  <input
                    type="checkbox"
                    name={item.CharacterClassName + "illiakanHard"}
                    id="illiakanHard"
                    checked={checked[item.CharacterClassName + "illiakanHard"]}
                    onChange={handleCheck}
                  />
                </td>
              ))}
            </tr>
            <tr className="title16">
              <td colSpan="10"></td>
            </tr>
            <tr className="title17">
              {data.map((item) => (
                <td>
                  <input
                    type="checkbox"
                    name={item.CharacterClassName + "seto"}
                    id="seto"
                    checked={checked[item.CharacterClassName + "seto"]}
                    onChange={handleCheck}
                  />
                </td>
              ))}
            </tr>
            <tr className="title18">
              {data.map((item) => (
                <td>
                  <input
                    type="checkbox"
                    name={item.CharacterClassName + "albion"}
                    id="albion"
                    checked={checked[item.CharacterClassName + "albion"]}
                    onChange={handleCheck}
                  />
                </td>
              ))}
            </tr>
            <tr className="title19">
              {data.map((item) => (
                <td>
                  <input
                    type="checkbox"
                    name={item.CharacterClassName + "nellasia"}
                    id="nellasia"
                    checked={checked[item.CharacterClassName + "nellasia"]}
                    onChange={handleCheck}
                  />
                </td>
              ))}
            </tr>
            <tr className="title20">
              {data.map((item) => (
                <td>
                  <input
                    type="checkbox"
                    name={item.CharacterClassName + "lauriel"}
                    id="lauriel"
                    checked={checked[item.CharacterClassName + "lauriel"]}
                    onChange={handleCheck}
                  />
                </td>
              ))}
            </tr>
            <tr className="title21">
              {data.map((item) => (
                <td>
                  <input
                    type="checkbox"
                    name={item.CharacterClassName + "ivoryTower"}
                    id="ivoryTower"
                    checked={checked[item.CharacterClassName + "ivoryTower"]}
                    onChange={handleCheck}
                  />
                </td>
              ))}
            </tr>
            <tr className="title22">
              {data.map((item) => (
                <td>
                  <input
                    type="checkbox"
                    name={item.CharacterClassName + "challangeAbiss"}
                    id="challangeAbiss"
                    checked={
                      checked[item.CharacterClassName + "challangeAbiss"]
                    }
                    onChange={handleCheck}
                  />
                </td>
              ))}
            </tr>
            <tr className="title23">
              {data.map((item) => (
                <td>
                  <input
                    type="checkbox"
                    name={item.CharacterClassName + "challangeGuardian"}
                    id="challangeGuardian"
                    onChange={handleCheck}
                    checked={
                      checked[item.CharacterClassName + "challangeGuardian"]
                    }
                  />
                </td>
              ))}
            </tr>
            <tr className="title24">
              {data.map((item) => (
                <td>
                  <input
                    type="checkbox"
                    name={item.CharacterClassName + "argos"}
                    id="argos"
                    onChange={handleCheck}
                    checked={checked[item.CharacterClassName + "argos"]}
                  />
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
      <div className="weeklyReset" onClick={handleReset}>
        로요일 Reset
        <br />
        Click & Refresh
      </div>
    </div>
  );
}

export default Homework;
