import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { removeProduct } from "../../features/CartManage/CartSlice";
import "./main.css";
function CartItem({ id, name, image, price, sale_price }) {
  const idUser = useSelector((state) => state.login.id);
  const dispatch = useDispatch();
  const handleRemovePd = () => {
    axios
      .post("http://localhost:8000/api/deletecart", {
        customerid: idUser,
        productid: id,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
    dispatch(removeProduct(id));
  };
  return (
    <div className="flex mt-[12px] opacity-90  border-l-[2px]  border-r-[2px]  border-yellow-500 bg-white rounded-md">
      <img className="w-[160px] pl-[10px] py-[4px] rounded-md" src={image} />
      <div className="ml-[12px]  py-[12px]">
        <h3 className="text-[rgba(0,0,0,0.8)] mb-[10px] font-[600] text-[22px]">
          {name}
        </h3>
        <span className="text-yellow-500 font-[700] text-[24px]">{price}đ</span>
        <span className="text-[rgba(0,0,0,0.5)] ml-[8px] line-through">
          {sale_price}đ
        </span>
        <span className="ml-[8px] bg-yellow-500 rounded-xl p-[4px] text-white font-[600] text-shadow">
          Giảm 20%
        </span>
      </div>
      <div className="flex-1 flex justify-end pr-[30px] items-center">
        <FontAwesomeIcon
          className="text-yellow-500 icon hover:cursor-pointer hover:text-yellow-400 text-[40px]"
          onClick={handleRemovePd}
          icon={faTrash}
        />
      </div>
    </div>
  );
}

export default CartItem;
