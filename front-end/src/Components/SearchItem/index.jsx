import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faHeart as faHeartSolid } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import "./searchItem.css";
function SearchItem({ id, name, image, price, sale_price, slug }) {
  return (
    <Link
      to={`/Detail/${slug}`}
      className="flex hover:bg-slate-700 bg-slate-800 border-b-[2px] rounded-b-sm border-yellow-500 p-[10px]"
    >
      <div className="flex flex-1">
        <img
          className="w-[80px]"
          src={`http://127.0.0.1:8000/storage/images/${image}`}
        />
        <div className="flex flex-col ml-[10px]">
          <h3 className="text-[20px] font-[600] mt-[2px]">{name}</h3>
          <div>
            <span className="text-[20px] text-yellow-500">{price}đ</span>
            <span className="text-yellow-500 line-through ml-[8px] text-[16px]">
              {sale_price}đ
            </span>
          </div>
        </div>
      </div>
      <div className="flex items-center ">
        <div className="heart">
          <FontAwesomeIcon
            className="heart-prev text-[32px] text-yellow-500"
            icon={faHeart}
          />
          <FontAwesomeIcon
            className="heart-next text-[32px] text-yellow-500"
            icon={faHeartSolid}
          />
        </div>
      </div>
    </Link>
  );
}

export default SearchItem;
