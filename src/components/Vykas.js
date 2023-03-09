function Vykas() {
  const path = process.env.PUBLIC_URL;
  return (
    <div className="commander vykas">
      <img src={path + "/images/vykas.png"} alt="비아키스" />
    </div>
  );
}

export default Vykas;
