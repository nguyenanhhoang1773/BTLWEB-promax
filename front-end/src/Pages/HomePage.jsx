import { useEffect } from "react";
import Item from "../Components/Item";
import Imtes from "../Components/Items";
import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import { paths } from "../router";
function HomePage() {
  const handleRegister = () => {};
  return (
    <div>
      <h3>Home </h3>
      <Link
        to={paths.Register}
        className="bg-yellow-500 cursor-pointer hover:bg-yellow-300 p-[10px] flex justify-center items-center w-[100px] rounded-xl text-slate-900"
      >
        Log in
      </Link>
      <Imtes />
    </div>
  );
}

export default HomePage;
