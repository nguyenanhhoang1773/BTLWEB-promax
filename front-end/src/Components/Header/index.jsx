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
import { Link } from "react-router-dom";
import { paths } from "../../router";
import SearchItem from "../SearchItem";
// import { db } from "../../api";
import { useState } from "react";
import logo from "../../assets/img/4h.png";
function Header() {
  const [resultsSearch, setResultSearch] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const handleSearch = (e) => {
    // if (e.target.value.trim()) {
    //   const products = db.filter((product) => {
    //     return product.title
    //       .toLowerCase()
    //       .includes(e.target.value.trim().toLowerCase());
    //   });
    //   setResultSearch(products);
    // } else {
    //   setResultSearch([]);
    // }
  };
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
            <FontAwesomeIcon className="ml-[4px] fa-icon" icon={faFacebook} />
            <FontAwesomeIcon className="ml-[2px] fa-icon" icon={faInstagram} />
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
            <a className="header__route__item text-yellow-400 !text-[18px]">
              Đăng ký
            </a>
            <div className="item-line2 !bg-yellow-400"></div>
            <a className="header__route__item ml-4 text-yellow-400 !text-[18px]">
              Đăng nhập
            </a>
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
                onBlur={() => {
                  setTimeout(() => {
                    setShowResults(false);
                  }, 300);
                }}
                onFocus={() => {
                  setShowResults(true);
                }}
                onKeyUp={handleSearch}
                placeholder="Máy Tính Ryzen 10"
                className="header__search--input text-black px-[10px]"
              />
              <button className="header__search--btn bg-yellow-500">
                <FontAwesomeIcon className="fa-icon" icon={faMagnifyingGlass} />
              </button>
              {resultsSearch.length > 0 && showResults && (
                <div className="absolute max-h-[400px] overflow-auto rounded-b-lg hover:cursor-pointer  top-[95%] left-0 right-0 border-[4px] border-t-transparent border-yellow-400  bg-white ">
                  {resultsSearch.map((product, index) => (
                    <SearchItem
                      id={product.id}
                      title={product.title}
                      src={product.src}
                      prevPrice={product.prevPrice}
                      nextPrice={product.nextPrice}
                      key={index}
                    />
                  ))}
                </div>
              )}
            </div>
            <div className="header__items px-[6px]">
              <a className="header__item">Điện thoại</a>
              <a className="header__item">laptop</a>
              <a className="header__item">Đồng Hồ</a>
              <a className="header__item">Tai Nghe</a>
              <a className="header__item">Giá Đỡ</a>
              <a className="header__item">Đĩa game</a>
            </div>
          </div>
          <div className="header__cart">
            <Link className="relative" to={paths.Cart}>
              <FontAwesomeIcon
                className="text-yellow-500 text-[30px]"
                icon={faCartShopping}
              />
              <div className="absolute w-[18px] text-shadow h-[18px] text-[14px] flex justify-center items-center font-[700] bg-yellow-500 rounded-full top-[-6px] right-[-6px]">
                7
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
