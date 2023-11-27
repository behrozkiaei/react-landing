import "./cover.scss";

export default function Cover() {
  return (
    <div className="cover-wrapper">
      <div className="image-box">
        <img src="./images/middel-image.jpg" alt="cover apex" />
      </div>
      <div className="desc">
        <p>All closing costs covered by buyer</p>
      </div>
    </div>
  );
}
