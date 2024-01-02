import {
  faBoxOpen,
  faCartShopping,
  faFaceSadCry,
  faFaceSmileWink,
  faHandsHolding,
  faHeart,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CartItem from "../Components/cartItem";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { paths } from "../router";
import { Link, useNavigate } from "react-router-dom";
import { clearProducts, removeProduct } from "../features/CartManage/CartSlice";
import { useRef } from "react";
import axios from "axios";
// import { useMediaQuery } frorouterm "react-responsive";

function CartPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const idUser = useSelector((state) => state.login.id);
  console.log("idUser:", idUser);
  const nameRef = useRef();
  const addressRef = useRef();
  const phoneRef = useRef();
  const noteRef = useRef();
  const [totalPrice, setTotalPrice] = useState("");
  const [showModal, setShowModal] = useState(false);
  const products = useSelector((state) => state.cartManage.products);
  useEffect(() => {
    let total = 0;
    products.forEach((product) => {
      total += Number(product.price.replace(",", ""));
      console.log(total);
    });
    total = String(total);
    if (Number(total.slice(0, total.length - 3)) !== 0) {
      total = total.slice(0, total.length - 3) + "," + total.slice(-3);
      setTotalPrice(total);
    } else {
      setTotalPrice(0);
    }
    setTotalPrice(total);
  }, [products]);
  const handleShowModal = () => {
    setShowModal(true);
  };
  const handleHideModal = () => {
    dispatch(clearProducts());
    setShowModal(false);
  };
  useEffect(() => {
    console.log(products);
  }, []);
  const handleSubmit = () => {
    const nameValue = nameRef.current.value;
    const addressValue = addressRef.current.value;
    const phoneValue = phoneRef.current.value;
    const noteValue = noteRef.current.value;
    console.log(products);
    axios
      .post("http://localhost:8000/api/checkout", {
        id: idUser,
        totalMoney: totalPrice,
        phone: phoneValue,
        address: addressValue,
        note: noteValue,
        items: products,
      })
      .then(function (response) {
        console.log(response);
        const redirect = response.data.redirect;
        if (redirect === "/") {
          navigate(redirect);
        } else {
          alert("Sai email hoặc mật khẩu");
        }
      })
      .catch(function (error) {
        console.log(error);
      });
    axios
      .post("http://localhost:8000/api/checkout", {
        id: idUser,
      })
      .then(function (response) {})
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <div className="relative min-h-[800px] mt-[50px]">
      {/* {showModal && (
        <div
          onClick={handleHideModal}
          className="fixed z-[99] flex items-center justify-center bg-[rgba(0,0,0,0.6)] top-0 right-0 left-0 bottom-0"
        >
          <div
            onClick={(e) => {
              e.stopPropagation();
            }}
            className="absolute rounded-md w-[600px] h-[300px] border-white border-[4px] bg-yellow-400"
          >
            <div
              onClick={handleHideModal}
              className="absolute z-[99] top-[10px] hover:opacity-70 hover:cursor-pointer rounded-full right-[10px] flex items-center justify-center w-[28px] h-[28px] bg-[rgba(0,0,0,0.5)]"
            >
              <FontAwesomeIcon className="" icon={faXmark} />
            </div>
            <div className="flex relative justify-center ">
              <FontAwesomeIcon
                className="text-[80px] absolute top-[-95%] right-[50%] translate-x-[50%]"
                icon={faHandsHolding}
              />
              <FontAwesomeIcon
                className="text-[64px] absolute text-yellow-500  top-[-115%] right-[50%] translate-x-[50%]"
                icon={faHeart}
              />
              <div className="relative inline-block w-[60px] h-[44px] mr-[30px] bg-yellow-400">
                <div className="absolute top-[100%] left-0 border-[30px]  border-t-0 border-yellow-400 border-b-transparent "></div>
              </div>
              <FontAwesomeIcon
                className="text-[60px] py-[14px]"
                icon={faFaceSmileWink}
              />
              <div className="relative inline-block w-[60px] h-[44px] ml-[30px] bg-yellow-400">
                <div className="absolute top-[100%] left-0 border-[30px]  border-t-0 border-v border-b-transparent "></div>
              </div>
            </div>
            <p className="text-white text-shadow text-center font-[600] text-[26px]">
              ĐƠN HÀNG SẼ ĐƯỢC GIAO ĐẾN BẠN TRONG THỜI GIAN GẦN NHẤT!
            </p>
            <p className="text-green-100 text-shadow text-center font-[600] text-[16px] mt-[20px]">
              XIN CẢM ƠN BẠN ĐÃ TIN TƯỞNG VÀ ĐẶT HÀNG.
            </p>
            <div className="flex justify-center mt-[10px]">
              <FontAwesomeIcon
                className="text-[30px] text-yellow-400 p-[10px] "
                icon={faHeart}
              />
              <FontAwesomeIcon
                className="text-[30px] p-[10px] "
                icon={faHeart}
              />
              <FontAwesomeIcon
                className="text-[30px] text-yellow-400 p-[10px] "
                icon={faHeart}
              />
              <FontAwesomeIcon
                className="text-[30px] p-[10px] "
                icon={faHeart}
              />
              <FontAwesomeIcon
                className="text-[30px] text-yellow-500  p-[10px] "
                icon={faHeart}
              />
            </div>
          </div>
        </div>
      )} */}
      {showModal && (
        <>
          <div
            onClick={handleHideModal}
            className="fixed z-[99] flex items-center justify-center bg-[rgba(0,0,0,0.6)] top-0 right-0 left-0 bottom-0"
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="flex flex-col bg-slate-800 py-[10px] px-[30px]"
            >
              <h3 className="text-center text-[22px] font-[600] text-yellow-500">
                Thông tin đơn Hàng
              </h3>
              <span className="text-white">
                Vui lòng cung cấp thông tin để chúng tôi có thể được phục vụ bạn
                sớm nhất.
              </span>
              <input
                ref={nameRef}
                className="w-full text-white text-[18px] mt-[20px] px-[10px] bg-slate-900 rounded-md py-[4px]"
                placeholder="Họ và Tên"
              />
              <input
                ref={addressRef}
                className="w-full text-white text-[18px] mt-[20px] px-[10px] bg-slate-900 rounded-md py-[4px]"
                placeholder="Địa chỉ"
              />
              <input
                ref={phoneRef}
                className="w-full text-white text-[18px] mt-[20px] px-[10px] bg-slate-900 rounded-md py-[4px]"
                placeholder="Số điện thoại"
              />
              <input
                ref={noteRef}
                className="w-full text-white text-[18px] mt-[20px] px-[10px] bg-slate-900 rounded-md py-[4px]"
                placeholder="Ghi chú"
              />
              <button
                onClick={handleSubmit}
                className="bg-yellow-500 w-full rounded-md font-[600] hover:bg-yellow-400  w-[80px] p-[10px]  mt-[20px] text-black"
              >
                Xác nhật đặt hàng
              </button>
            </div>
          </div>
        </>
      )}
      <div className=" absolute flex mt-[-12px] mt-[-70px]">
        <FontAwesomeIcon
          className="text-yellow-400 w-[80px] h-[80px]"
          icon={faCartShopping}
        />
        <div className="h-[70px] bg-yellow-500 w-[4px] mx-[20px]"></div>
        <span className="h-[50px] mt-[10px] flex items-center  bg-yellow-500 rounded-full px-[8px]  text-shadow text-[28px] font-[600]">
          Giỏ hàng của bạn
        </span>
      </div>
      {products.length > 0 && (
        <div className="mx-[300px] relative px-[20px] pt-[2px] border-t-[2px] rounded-t-xl border-l-[2px] border-r-[2px] border-yellow-400 min-h-[640px] px-[14px] pb-[130px]">
          <div className="absolute bg-yellow-500 rounded-t-full pt-[16px] pl-[20px] pr-[20px]  bg-v bottom-[100%] left-[50%] translate-x-[-50%]">
            <FontAwesomeIcon className="text-[28px]" icon={faBoxOpen} />
          </div>
          {products.map((product) => (
            <CartItem
              id={product.id}
              name={product.name}
              image={product.image}
              price={product.price}
              sale_price={product.sale_price}
              key={product.id}
            />
          ))}
        </div>
      )}

      {products.length === 0 && (
        <div className="flex mt-[60px] pt-[64px] items-center flex-col">
          <FontAwesomeIcon
            className="text-yellow-500  text-[140px]"
            icon={faFaceSadCry}
          />
          <p className="text-[30px] font-[600] mt-[20px] text-yellow-400">
            Bạn chưa có sản phẩm nào trong giỏ hàng của mình!
          </p>
        </div>
      )}

      <div className="fixed opacity-80 border-t-[4px] border-yellow-400 shadow-2xl bg-white rounded-lg px-[16px] pb-[10px]  w-[800px] left-[50%] translate-x-[-50%] bottom-0 ">
        <div className="flex justify-between items-center">
          <span className="text-[rgba(0,0,0,0.8)] text-[20px] ">
            Tổng tiền:
          </span>
          <span className="text-yellow-400 text-[24px] font-[600]">
            {totalPrice ? totalPrice : 0}đ
          </span>
        </div>
        <div
          onClick={handleShowModal}
          className="bg-yellow-500  mt-[4px] hover:opacity-80 hover:cursor-pointer rounded-md py-[6px] px-[12px] text-[26px] text-shadow text-center font-[500]"
        >
          TIẾN HÀNH ĐẶT HÀNG
        </div>
        <Link
          to={paths.Home}
          className="text-yellow-500  block border-[2px] hover:opacity-80 hover:cursor-pointer font-[600] mt-[10px] rounded-md text-shadow text-[22px] py-[6px] px-[10px] text-center border-yellow-400"
        >
          CHỌN THÊM SẢN PHẨM KHÁC
        </Link>
      </div>
    </div>
  );
}

export default CartPage;
