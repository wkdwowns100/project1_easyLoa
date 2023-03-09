function Illiakan() {
  const path = process.env.PUBLIC_URL;
  return (
    <div className="commander illiakan">
      <img src={path + "/images/illiakan.png"} alt="일리아칸" />
    </div>
  );
}

export default Illiakan;
