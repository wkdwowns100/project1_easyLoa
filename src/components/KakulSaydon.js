function KakulSaydon() {
  const path = process.env.PUBLIC_URL;
  return (
    <div className="commander kakulSaydon">
      <img src={path + "/images/kakulSaydon.png"} alt="쿠크세이튼" />
    </div>
  );
}

export default KakulSaydon;
