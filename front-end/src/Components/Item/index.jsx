import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeart as faHeartRegular } from "@fortawesome/free-regular-svg-icons";

function Item({ name, image, price, sale_price }) {
  return (
    <div className="pl-[20px] w-[25%] mt-[20px]">
      <div className="bg-black  ml-[20px] p-[14px] rounded-xl hover:opacity-80 hover:cursor-pointer">
        <img className="w-full  " src={image} />
        <div className=" pt-[10px]  ">
          <h3 className="text-white truncate w-[100%] ">{name}</h3>
          <p className="pt-[4px] text-yellow-400">
            {price}đ
            <span className="text-[14px] ml-[6px] line-through text-yellow-200">
              {sale_price}đ
            </span>
          </p>
          <p className="text-right text-[14px] font-[500]">
            Yêu thích
            <span className="icon-wrapper">
              <FontAwesomeIcon className="heart-solid" icon={faHeart} />
              <FontAwesomeIcon
                className="heart-regular"
                icon={faHeartRegular}
              />
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Item;
