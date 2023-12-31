import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeart as faHeartRegular } from "@fortawesome/free-regular-svg-icons";
import "./Item.css";
import { Link } from "react-router-dom";
function Item({ id, name, image, price, sale_price }) {
  return (
    <div className="px-[10px]">
      <Link
        to={`/detail/${id}`}
        className="bg-slate-950 inline-block w-full   p-[20px] rounded-xl hover:opacity-80 hover:cursor-pointer"
      >
        <img className="w-full" src={image} />
        <div className=" pt-[10px]  ">
          <h3 className="text-white text-[20px] font-[700] truncate w-[100%] ">
            {name}
          </h3>
          <p className="pt-[4px] font-[600] text-yellow-400">
            {price}đ
            <span className="text-[14px] ml-[6px] line-through text-yellow-300">
              {sale_price}đ
            </span>
          </p>
          <p className="text-right text-[14px] font-[700]">
            Yêu thích
            <span className="ml-[6px] icon-wrapper">
              <FontAwesomeIcon
                className="heart-solid text-yellow-400"
                icon={faHeart}
              />
              <FontAwesomeIcon
                className="heart-regular text-yellow-400"
                icon={faHeartRegular}
              />
            </span>
          </p>
        </div>
      </Link>
    </div>
  );
}

export default Item;
