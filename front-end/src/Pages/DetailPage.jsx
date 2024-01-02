import { StartIcon, CartIcon } from "../assets/icon";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faSpinner,
  faHeart,
  faXmark,
  faHandsHolding,
  faFaceSmileWink,
} from "@fortawesome/free-solid-svg-icons";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addProduct } from "../features/CartManage/CartSlice";
import {
  storePd,
  removePd,
} from "../features/storeProducts/storeProductsSlice";
import Items from "../Components/Items";
import axios from "axios";

function DetailPage() {
  const idUser = useSelector((state) => state.login.id);
  const Products = useSelector((state) => state.storeProducts.Products);
  const cartProducts = useSelector((state) => state.cartManage.products);
  const dispatch = useDispatch();
  const { slug: slugProduct } = useParams();
  const [showModal, setShowModal] = useState(false);
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(false);
  const [loadingApp, setLoadingApp] = useState(true);
  const [haveProduct, setHaveProduct] = useState(false);
  const handleShowModal = () => {
    setShowModal(true);
  };
  const handleHideModal = () => {
    setShowModal(false);
  };
  useEffect(() => {
    async function fetchData() {
      if (!Products) {
        try {
          const response = await axios.get(
            "http://localhost:8000/api/list-product"
          );
          dispatch(storePd(response.data));
          await new Promise((resolve) => setTimeout(resolve, 0));
        } catch (error) {
          console.error("Lỗi khi lấy dữ liệu:", error);
        }
      }
    }
    setLoadingApp(true);
    setTimeout(() => {
      setLoadingApp(false);
    }, 300);
    fetchData();
  }, [slugProduct]);
  useEffect(() => {
    if (!Products) {
      return;
    }
    console.log(Products);
    Products.forEach(
      ({ id, name, slug, image, price, sale_price, description }) => {
        if (slugProduct === slug) {
          setProduct({
            id,
            name,
            slug,
            image,
            price,
            sale_price,
            description,
          });
        }
      }
    );
  }, [Products, slugProduct]);
  const handleAddToCart = (e) => {
    const num = cartProducts.filter((product) => {
      return product.slug === slugProduct;
    });
    if (num.length > 0) {
      setHaveProduct(true);
      setTimeout(() => {
        setHaveProduct(false);
      }, 1000);
    } else {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
      }, 500);
      dispatch(addProduct({ ...product }));
      console.log("customerid:", idUser);
      console.log("productid:", product.id);
      console.log("name:", product.name);
      console.log("saleprice:", product.sale_price);
      console.log("price:", product.price);
      console.log("image:", product.image);
      axios
        .get("http://localhost:8000/api/addCart", {
          params: {
            customerid: idUser,
            productid: product.id,
            name: product.name,
            saleprice: product.sale_price,
            price: product.price,
            image: product.image,
          },
        })
        .then(function (response) {
          console.log(response.data);
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        })
        .finally(function () {
          // always executed
        });
      // axios
      //   .post("http://localhost:8000/api/addCart", {
      //     customerid: idUser,
      //     productid: product.id,
      //     name: product.name,
      //     saleprice: product.sale_price,
      //     price: product.price,
      //   })
      //   .then(function (response) {
      //     console.log(response);
      //   })
      //   .catch(function (error) {
      //     console.log(error);
      //   });
    }
  };
  return (
    <div className="">
      {loadingApp && (
        <div className="h-[80vh] flex justify-center items-center ">
          <FontAwesomeIcon
            className="text-[140px] text-yellow-400 animate-spin "
            icon={faSpinner}
          />
        </div>
      )}
      {!loadingApp && (
        <div>
          {showModal && (
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
                    className="text-[64px] absolute text-yellow-400 top-[-115%] right-[50%] translate-x-[50%]"
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
                    <div className="absolute top-[100%] left-0 border-[30px]  border-t-0 border-yellow-400 border-b-transparent "></div>
                  </div>
                </div>
                <p className="text-white text-shadow text-center font-[600] text-[26px]">
                  ĐƠN HÀNG SẼ ĐƯỢC GIAO ĐẾN BẠN TRONG THỜI GIAN GẦN NHẤT!
                </p>
                <p className="text-yellow-200 text-shadow text-center font-[600] text-[16px] mt-[20px]">
                  XIN CẢM ƠN BẠN ĐÃ TIN TƯỞNG VÀ ĐẶT HÀNG TẠI TECHSTORE.
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
                    className="text-[30px] text-yellow-400 p-[10px] "
                    icon={faHeart}
                  />
                </div>
              </div>
            </div>
          )}
          {haveProduct && (
            <div className="fixed flex justify-center items-center z-[99] top-0 left-0 right-0 bottom-0 bg-[rgba(0,0,0,0.5)]">
              <div className="bg-yellow-400 px-[12px] py-[6px] rounded-2xl text-white font-[600] text-shadow text-[26px]">
                Sản phẩm đã ở trong giỏ hàng!
              </div>
            </div>
          )}
          <div className="px-[10px]">
            <div className="flex text-white  border-r-[8px] shadow-lg border-l-[8px] border-yellow-400    rounded-lg  text-[rgba(0,0,0,0.7)]">
              <div className="bg-white  rounded-r-md opacity-90">
                <img
                  className="w-[400px]  rounded-sm py-[10px]"
                  src={product.image}
                />
              </div>
              <div className="flex-1 px-[20px] ml-[40px] py-[30px]">
                <h3 className="max-w-[500px] text-yellow-400 text-[22px] font-[600]">
                  {product.name}
                </h3>
                {/* <div className="flex mt-[12px] items-center">
                  <span className=" mr-[4px]">4.5</span>
                  <span className="h-[30px]">
                    <StartIcon deltail />
                    <StartIcon deltail />
                    <StartIcon deltail />
                  </span>
                  <span className="ml-[18px]">68</span>
                  <span className="ml-[6px] text--500 ">Đánh Giá</span>
                  <span className="ml-[18px]">1,3k</span>
                  <span className="ml-[6px] text-[var(--color-primary)] ">
                    Đã Bán
                  </span>
                </div> */}
                <div className="flex mt-[10px] items-center">
                  <span className="text-yellow-500 line-through">
                    {product.sale_price}đ
                  </span>
                  <span className="text-yellow-500   text-[24px] ml-[10px]">
                    {product.price}đ
                  </span>
                  <div className="bg-[var(--color-primary)]  text-white inline-block  ml-[12px] px-[4px] rounded-sm">
                    33% Giảm
                  </div>
                </div>
                <div className="mt-[10px]">
                  <span className="text-primary">Mã Giảm Giá</span>
                  <span className="ml-[14px]  bg-yellow-600 px-[6px] py-[2px] text-[var(--color-primary)]">
                    10% GIẢM
                  </span>
                </div>
                <div className="mt-[10px]">
                  <span className="text-primary">Bảo Hiểm</span>
                  <span className="ml-[14px]">Bảo hiểm Công nghệ</span>
                  <span className="ml-[4px] p-[4px] bg-[var(--color-primary)] rounded-t-xl rounded-br-xl">
                    Mới
                  </span>
                </div>
                <div className="mt-[10px]">
                  <span className="text-primary">Vận chuyển</span>
                  <div className="inline-block ml-[16px]">
                    <img
                      className="inline-block"
                      src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/74f3e9ac01da8565c3baead996ed6e2a.png"
                    />
                    <span className="ml-[4px]">Miễn phí vận chuyển</span>
                  </div>
                </div>
                <div className="mt-[20px]">
                  <div
                    onClick={handleAddToCart}
                    className="inline-block h-[48px] hover:opacity-70 hover:cursor-pointer bg-yellow-100 px-[12px] py-[10px] text-center w-[220px] border border-[var(--color-primary)] text-[var(--color-primary)] rounded-sm"
                  >
                    {!loading && (
                      <>
                        <CartIcon />
                        <span className="ml-[8px] font-[600] text-black">
                          Thêm Vào Giỏ Hàng
                        </span>
                      </>
                    )}
                    {loading && (
                      <FontAwesomeIcon
                        className="text-[20px] text-yellow-500 animate-spin"
                        icon={faSpinner}
                      />
                    )}
                  </div>
                  <div
                    onClick={handleShowModal}
                    className="inline-block text-center font-[700] hover:cursor-pointer hover:opacity-80 w-[120px] ml-[12px] bg-yellow-400 text-black rounded-sm  p-[12px]"
                  >
                    Mua Ngay
                  </div>
                </div>
              </div>
              <div className="ml-[20px] p-[20px]">
                <div className=" w-[400px] max-h-[380px] overflow-hidden  h-full border-[2px] rounded-xl border-yellow-400">
                  <div className="bg-[var(--color-primary)] font-[700] text-[20px] text-yellow-400 text-center rounded-t-[8px]">
                    Thông tin sản phẩm
                  </div>
                  <div className="px-[20px] py-[8px] ">
                    {product.description}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-[26px]">
            {Products && (
              <>
                <Items category="Sản phẩm tương tự" Products={Products} />
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default DetailPage;
