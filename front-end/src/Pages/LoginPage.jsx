import axios from "axios";
import { useRef } from "react";
import { Link, redirect } from "react-router-dom";

function LoginPage() {
  const emailField = useRef();
  const passwordField = useRef();
  const handleLogin = () => {
    const emailValue = emailField.current.value;
    const passwordValue = passwordField.current.value;
    console.log(emailValue);
    console.log(passwordValue);
    axios
      .post("http://localhost:8000/api/login", {
        email: emailValue,
        password: passwordValue,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <div className="flex justify-center items-center">
      <div className="bg-slate-700 flex flex-col p-[20px] max-w-[500px]  rounded-xl ">
        <h3 className="text-center font-[700] text-yellow-500 text-[24px]">
          Login
        </h3>
        <div className="mt-[20px]">
          <input
            ref={emailField}
            className="w-full text-white text-[18px] mt-[20px] px-[10px] bg-slate-900 rounded-md py-[4px]"
            placeholder="Email"
          />
          <input
            ref={passwordField}
            type="password"
            className="w-full text-white text-[18px] mt-[20px] px-[10px] bg-slate-900 rounded-md py-[4px]"
            placeholder="Mật khẩu"
          />
        </div>
        <div className="flex justify-between items-center">
          <p className="text-white font-[500]">
            Bạn chưa có tài khoản?
            <Link
              to="/register"
              className="ml-[4px] hover:text-yellow-400 text-yellow-500 font-[600] underline text-[18px]"
            >
              Đăng ký ngay
            </Link>
          </p>

          <button
            onClick={handleLogin}
            className="bg-yellow-500 rounded-md font-[600] hover:bg-yellow-400  w-[80px] p-[10px]  mt-[20px] text-black"
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
