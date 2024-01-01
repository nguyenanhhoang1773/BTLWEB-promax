import { useEffect } from "react";
import Item from "../Components/Item";
import Items from "../Components/Items";
import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import { paths } from "../router";
import Slider from "../Components/Slider/banner";
import { useSelector, useDispatch } from "react-redux";
import {
  storePd,
  removePd,
} from "../features/storeProducts/storeProductsSlice";
import banner1 from "../assets/img/Blackfriday banner(1).jpg";
import banner2 from "../assets/img/piano-sale-20.jpg";
function HomePage() {
  const dispatch = useDispatch();
  const Products = useSelector((state) => state.storeProducts.Products);
  console.log(Products);
  const handleRegister = () => {};
  useEffect(() => {
    axios
      .get("http://localhost:8000/api/list-product")
      .then(function (response) {
        console.log(response);
        dispatch(storePd(response.data));
      })
      .catch(function (error) {
        console.log(error);
      })
      .finally(function () {
        // always executed
      });
  }, []);
  return (
    <>
      {/* <Link
        to={paths.Register}
        className="bg-yellow-500 cursor-pointer hover:bg-yellow-300 p-[10px] flex justify-center items-center w-[100px] rounded-xl text-slate-900"
      >
        Log in
      </Link> */}
      <div className="">
        <div className="flex bg-yellow-500 p-[20px] rounded-xl">
          <div className="w-[75%]">
            <Slider scroll amount={1}>
              <img
                className="h-[480px] object-cover hover:cursor-pointer hover:opacity-90"
                src={banner1}
              />
              <img
                className="h-[480px] object-cover hover:cursor-pointer hover:opacity-90"
                src={banner2}
              />
            </Slider>
          </div>
          <div className="bg-slate-800 text-white w-[25%] ml-[18px]">
            <h3 className="text-center text-yellow-500 my-[10px] text-[24px] font-[700]">
              Nhạc cụ nổi bật
            </h3>
            <div className="px-[20px]">
              <ul className="overflow-auto h-[400px]">
                <li className="py-[10px] hover:text-yellow-300 hover:bg-slate-700 hover:cursor-pointer text-[18px] font-[600] bg-slate-900  pl-[10px] rounded-md">
                  Piano
                </li>
                <li className="py-[10px] hover:text-yellow-300 hover:bg-slate-700 hover:cursor-pointer text-[18px] font-[600] bg-slate-900 mt-[16px] pl-[10px] rounded-md">
                  Guitar
                </li>
                <li className="py-[10px] hover:text-yellow-300 hover:bg-slate-700 hover:cursor-pointer text-[18px] font-[600] bg-slate-900 mt-[16px] pl-[10px] rounded-md">
                  Violin
                </li>
                <li className="py-[10px] hover:text-yellow-300 hover:bg-slate-700 hover:cursor-pointer text-[18px] font-[600] bg-slate-900 mt-[16px] pl-[10px] rounded-md">
                  Trống bongo
                </li>
                <li className="py-[10px] hover:text-yellow-300 hover:bg-slate-700 hover:cursor-pointer text-[18px] font-[600] bg-slate-900 mt-[16px] pl-[10px] rounded-md">
                  Trống conga
                </li>
                <li className="py-[10px] hover:text-yellow-300 hover:bg-slate-700 hover:cursor-pointer text-[18px] font-[600] bg-slate-900 mt-[16px] pl-[10px] rounded-md">
                  Ukulele
                </li>
                <li className="py-[10px] hover:text-yellow-300 hover:bg-slate-700 hover:cursor-pointer text-[18px] font-[600] bg-slate-900 mt-[16px] pl-[10px] rounded-md">
                  Harmonica
                </li>
                <li className="py-[10px] hover:text-yellow-300 hover:bg-slate-700 hover:cursor-pointer text-[18px] font-[600] bg-slate-900 mt-[16px] pl-[10px] rounded-md">
                  Harmonica
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {Products && (
        <>
          <Items category="Category" Products={Products} />
          <Items category="Category" Products={Products} />
        </>
      )}
    </>
  );
}

export default HomePage;
