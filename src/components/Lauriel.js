function Lauriel() {
  const path = process.env.PUBLIC_URL;
  return (
    <div className="commander lauriel">
      <img src={path + "/images/lauriel.png"} alt="라우리엘" />
    </div>
  );
}

export default Lauriel;
