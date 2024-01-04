import axios from "axios";
import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, redirect, useNavigate } from "react-router-dom";
import { logIn } from "../features/Login/LoginSlice";
function LoginPage() {
  const [emailVali, setEmailVali] = useState(false);
  const [emailValiRegrex, setEmailValiRegrex] = useState(false);
  const [passVali, setPasswordVali] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const emailField = useRef();
  const passwordField = useRef();
  const handleValidate = (e) => {
    console.log(!!e.target.value.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/));
    if (!e.target.value && e.target.name === "emailField") {
      setEmailVali(true);
    }
    if (!e.target.value && e.target.name === "passField") {
      setPasswordVali(true);
    }
    if (e.target.value && e.target.name === "emailField") {
      setEmailVali(false);
    }
    if (e.target.value && e.target.name === "passField") {
      setPasswordVali(false);
    }
    if (
      e.target.value &&
      e.target.name === "emailField" &&
      !e.target.value.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)
    ) {
      setEmailValiRegrex(true);
    }
    if (
      e.target.value &&
      e.target.name === "emailField" &&
      !!e.target.value.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)
    ) {
      setEmailValiRegrex(false);
    }
  };
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
        console.log("Login response:", response.data);
        const redirect = response.data.redirect;
        const idUser = response.data.user[0].id;
        const name = response.data.user[0].name;
        console.log(idUser);
        if (redirect === "/") {
          dispatch(
            logIn({
              id: idUser,
              name: name,
            })
          );
          navigate(redirect);
        } else {
          alert("Sai email hoặc mật khẩu");
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <div className="flex justify-center items-center min-h-[600px]">
      <div className="bg-slate-700 flex flex-col p-[20px] max-w-[500px]  rounded-xl ">
        <h3 className="text-center font-[700] text-yellow-500 text-[24px]">
          Login
        </h3>
        <div className="mt-[20px]">
          <input
            name="emailField"
            onKeyUp={handleValidate}
            ref={emailField}
            className="w-full text-white text-[18px] mt-[20px] px-[10px] bg-slate-900 rounded-md py-[4px]"
            placeholder="Email"
          />
          {emailVali && (
            <p className="text-yellow-500 ml-[2px] text-[16px]">
              Vui lòng nhập trường này.
            </p>
          )}
          {emailValiRegrex && !emailVali && (
            <p className="text-yellow-500 ml-[2px] text-[16px]">
              Vui lòng nhập vào email.
            </p>
          )}
          <input
            name="passField"
            onKeyUp={handleValidate}
            ref={passwordField}
            type="password"
            className="w-full text-white text-[18px] mt-[20px] px-[10px] bg-slate-900 rounded-md py-[4px]"
            placeholder="Mật khẩu"
          />
          {passVali && (
            <p className="text-yellow-500 ml-[2px] text-[16px]">
              Vui lòng nhập trường này.
            </p>
          )}
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
