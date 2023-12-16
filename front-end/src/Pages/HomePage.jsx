import { useEffect } from "react";
import Item from "../Components/Item";
import Imtes from "../Components/Items";
import axios from "axios";
import { useState } from "react";
import LoginModal from "../Components/LoginModal";

function HomePage() {
  const [login, setLogin] = useState(false);
  const showLogin = () => {
    setLogin(true);
  };
  return (
    <div>
      <h3>Home </h3>
      <div
        onClick={showLogin}
        className="bg-yellow-500 cursor-pointer hover:bg-yellow-300 p-[10px] flex justify-center items-center w-[100px] rounded-xl text-slate-900"
      >
        Log in
      </div>
      {login && <LoginModal />}
      <Imtes />
    </div>
  );
}

export default HomePage;
