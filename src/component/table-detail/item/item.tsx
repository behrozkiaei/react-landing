import "./item.scss"
import Image  from "next/image";
type ItemProps = {
    image: string;
    desc: string;
    detail: string;
  };
export default function Item({image, desc, detail}: ItemProps) {
  return (
    <div className="wrapper">
        <div className="image-box">
            <img  className="item-image"  src={image} alt={desc} />
        </div>
        <div className="desc">
            <p>{desc}</p>
        </div>
        <div className="arrow">
                <a href=""></a>
        </div>
        <div className="detail"><p>{detail}</p></div>
    </div>
  )
}
