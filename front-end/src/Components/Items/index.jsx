import { useEffect, useState } from "react";
import Item from "../Item";
import Slider from "../../Components/Slider";
import { Link } from "react-router-dom";

function Imtes({ Products, amount, category }) {
  return (
    <div className="ml-[-10px] bg-slate-900 rounded-xl pt-[4px] px-[10px] pb-[18px] mt-[30px]">
      <div className="flex justify-between items-center">
        <h3 className="ml-[10px] my-[4px] mb-[4px] font-[600] text-[26px] text-yellow-300">
          {category}
        </h3>
        <Link
          className="text-[14px] hover:bg-yellow-400 mr-[10px] px-[6px] py-[2px] bg-yellow-500 text-black text-shadow font-[700] rounded-md"
          to="/category"
        >
          All
        </Link>
      </div>
      <Slider amount={amount} scroll>
        {Products.map(({ id, slug, name, price, image, sale_price }, index) => (
          <Item
            key={index}
            slug={slug}
            id={id}
            name={name}
            image={image}
            price={price}
            sale_price={sale_price}
          />
        ))}
      </Slider>
    </div>
  );
}

export default Imtes;
