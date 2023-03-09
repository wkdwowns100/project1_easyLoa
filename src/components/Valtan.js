function Valtan() {
  const path = process.env.PUBLIC_URL;
  return (
    <div className="commander valtan">
      <img src={path + "/images/valtan.png"} alt="발탄" />
    </div>
  );
}

export default Valtan;
