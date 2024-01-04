// function Header() {
//   return <div>Header</div>;
// }

// export default Header;

import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faChevronCircleDown,
  faChevronDown,
  faGlobe,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { faBell, faCircleQuestion } from "@fortawesome/free-regular-svg-icons";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { Link, useNavigate } from "react-router-dom";
import { paths } from "../../router";
import SearchItem from "../SearchItem";
// import { db } from "../../api";
import { useEffect, useRef, useState } from "react";
import logo from "../../assets/img/4h.png";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import {
  setProducts,
  clearProducts,
} from "../../features/CartManage/CartSlice";
import { logOut } from "../../features/Login/LoginSlice";
function Header() {
  const navigate = useNavigate();
  const isLogin = useSelector((state) => state.login.isLogin);
  const userName = useSelector((state) => state.login.name);
  const idUser = useSelector((state) => state.login.id);
  const amountCart = useSelector((state) => state.cartManage.amount);
  const dispatch = useDispatch();
  const amountProducts = useSelector((state) => state.cartManage.products);
  const [resultsSearch, setResultSearch] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const inputRef = useRef();
  const handleClickSearch = () => {
    const inputValue = inputRef.current.value;
    navigate(`/list/${inputValue}`);
  };
  const handleSearch = (e) => {
    const value = e.target.value.trim();
    if (value) {
      // console.log(value);
      axios
        .get("http://localhost:8000/api/search", {
          params: {
            value: value,
          },
        })
        .then(function (response) {
          setResultSearch(response.data);
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        })
        .finally(function () {
          // always executed
        });
    } else {
      setResultSearch([]);
    }
  };
  const handleLogout = () => {
    dispatch(logOut());
    dispatch(clearProducts());
    navigate("/");
    alert("Bạn đã đăng xuất");
  };
  useEffect(() => {
    axios
      .get("http://localhost:8000/api/cart", {
        params: {
          id: idUser,
        },
      })
      .then(function (response) {
        const data = response.data;
        const newData = [];
        data.forEach((value) => {
          let obj = {
            id: value.product_id,
            customer_id: value.customer_id,
            name: value.name,
            price: value.price,
            sale_price: value.sale_price,
            image: value.image,
          };
          newData.push(obj);
        });
        dispatch(
          setProducts({
            amount: data.length,
            products: [...newData],
          })
        );
        console.log(" cart:", data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }, [idUser]);
  return (
    <div className="header bg-slate-900">
      <div className="header--wrapper mx-[var(--app-margin)]">
        <div className="header__route">
          <div className="header__route--left">
            <a className="header__route__item" href="#">
              Kênh Người Bán
            </a>
            <div className="item-line"></div>
            <a className="header__route__item" href="#">
              Trở thành Người bán
            </a>
            <div className="item-line"></div>
            <a className="header__route__item" href="#">
              Tải ứng dụng
            </a>
            <div className="item-line"></div>
            <a className="header__route__item" href="#">
              Kết nối
            </a>
            <FontAwesomeIcon
              className="ml-[4px] fa-icon text-white"
              icon={faFacebook}
            />
            <FontAwesomeIcon
              className="ml-[2px] fa-icon text-white"
              icon={faInstagram}
            />
          </div>
          <div className="header__route--right">
            <>
              <a className="header__route__item">
                <FontAwesomeIcon className="fa-icon mr-[4px] " icon={faBell} />
                Thông báo
              </a>
              <a className="header__route__item">
                <FontAwesomeIcon
                  className="fa-icon mr-[4px]"
                  icon={faCircleQuestion}
                />
                Hỗ Trợ
              </a>
            </>
            <a className="header__route__item">
              <FontAwesomeIcon className="fa-icon mr-[4px]" icon={faGlobe} />
              Tiếng Việt
              <FontAwesomeIcon
                className="fa-icon ml-[4px]"
                icon={faChevronDown}
              />
              <i className="fa-solid fa-icon fa-chevron-down"></i>
            </a>
            {!isLogin && (
              <>
                <Link
                  to="/register"
                  className="header__route__item text-yellow-400 !text-[18px]"
                >
                  Đăng ký
                </Link>
                <div className="item-line2 !bg-yellow-400"></div>
                <Link
                  to="/login"
                  className="header__route__item ml-4 text-yellow-400 !text-[18px]"
                >
                  Đăng nhập
                </Link>
              </>
            )}
            {isLogin && (
              <>
                <span className="header__route__item  text-yellow-500 !text-[18px]">
                  {userName}
                </span>
                <div className="item-line2 !bg-yellow-400 mr-[4px]"></div>
                <button
                  onClick={handleLogout}
                  className="header__route__item  text-yellow-400 !text-[18px]"
                >
                  Đăng xuất
                </button>
              </>
            )}
          </div>
        </div>
        <div className="header__container">
          <Link
            to="/"
            className="header__icon overflow-hidden w-[180px] h-[80px] mt-[-14px]"
          >
            <img
              className="w-[220px] h-[100px] mt-[-8px] ml-[5px] scale-[0.6] overflow-hidden ml-[-20px] max-w-none object-cover"
              src={logo}
            />
          </Link>
          <div className="header__filter max-w-[1100px]">
            <div className="header__search relative">
              <input
                ref={inputRef}
                onBlur={() => {
                  setTimeout(() => {
                    setShowResults(false);
                  }, 300);
                }}
                onFocus={() => {
                  setShowResults(true);
                }}
                onKeyUp={handleSearch}
                placeholder="Đàn aucostic"
                className="header__search--input text-black px-[10px]"
              />
              <button
                onClick={handleClickSearch}
                className="header__search--btn bg-yellow-500"
              >
                <FontAwesomeIcon className="fa-icon" icon={faMagnifyingGlass} />
              </button>
              {resultsSearch.length > 0 && showResults && (
                <div className="absolute max-h-[400px] overflow-auto rounded-b-lg hover:cursor-pointer  top-[95%] left-0 right-0 border-[4px] border-t-transparent border-yellow-400  bg-white ">
                  {resultsSearch.map((product, index) => (
                    <SearchItem
                      id={product.id}
                      slug={product.slug}
                      name={product.name}
                      image={product.image}
                      price={product.price}
                      sale_price={product.sale_price}
                      key={index}
                    />
                  ))}
                </div>
              )}
            </div>
            <div className="header__items px-[6px]">
              <a className="header__item hover:text-yellow-500">Đàn</a>
              <a className="header__item hover:text-yellow-500">Piano</a>
              <a className="header__item hover:text-yellow-500">Trống</a>
              <a className="header__item hover:text-yellow-500">Ukele</a>
              <a className="header__item hover:text-yellow-500">Violin</a>
            </div>
          </div>
          <div className="header__cart">
            <Link className="relative" to={paths.Cart}>
              <FontAwesomeIcon
                className="text-yellow-500 text-[30px]"
                icon={faCartShopping}
              />
              <div className="absolute w-[18px] text-shadow h-[18px] text-[14px] flex justify-center items-center font-[700] bg-yellow-500 rounded-full top-[-6px] right-[-6px]">
                {amountCart}
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
