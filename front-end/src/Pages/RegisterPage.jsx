import axios from "axios";
import { useState } from "react";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";

function RegisterPage() {
  const navigate = useNavigate();
  const nameField = useRef();
  const emailField = useRef();
  const passwordField = useRef();
  const rePasswordField = useRef();
  const [nameVali, setNameVali] = useState(false);
  const [emailVali, setEmailVali] = useState(false);
  const [emailValiRegrex, setEmailValiRegrex] = useState(false);
  const [passwordVali, setPasswordVali] = useState(false);
  const [repasswordVali, setRepasswordVali] = useState(false);
  const handleValidate = (e) => {
    if (e.target.name === "nameField" && !e.target.value) {
      setNameVali(true);
    }
    if (e.target.name === "emailField" && !e.target.value) {
      setEmailVali(true);
    }
    if (e.target.name === "passwordField" && !e.target.value) {
      setPasswordVali(true);
    }
    if (e.target.name === "repasswordField" && !e.target.value) {
      setRepasswordVali(true);
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
    ////////////
    if (e.target.name === "nameField" && e.target.value) {
      setNameVali(false);
    }
    if (e.target.name === "emailField" && e.target.value) {
      setEmailVali(false);
    }
    if (e.target.name === "passwordField" && e.target.value) {
      setPasswordVali(false);
    }
    if (e.target.name === "repasswordField" && e.target.value) {
      setRepasswordVali(false);
    }
  };
  const handleRegister = () => {
    const nameValue = nameField.current.value;
    const emailValue = emailField.current.value;
    const passwordValue = passwordField.current.value;
    const rePasswordValue = rePasswordField.current.value;
    if (passwordValue !== rePasswordValue) {
      alert("Nhập lại sai mật khẩu!!!");
      return;
    }
    axios
      .post("http://localhost:8000/api/register", {
        name: nameValue,
        email: emailValue,
        password: passwordValue,
        password_confirmation: rePasswordValue,
      })
      .then(function (response) {
        const urlRedirect = response.data.redirect;
        console.log("register:", response);
        if (urlRedirect === "/login") {
          navigate(`${urlRedirect}`);
          alert("Đã đăng ký tài khoản thành công.");
          console.log("successfully");
        } else {
          alert("email đã tồn tại.");
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <div className="flex justify-center items-center">
      <div className="bg-slate-700 flex flex-col p-[20px] max-w-[500px]  rounded-xl ">
        <h3 className="text-center font-[700] text-yellow-500 text-[24px]">
          Register
        </h3>
        <div className="mt-[20px]">
          <input
            onKeyUp={handleValidate}
            ref={nameField}
            name="nameField"
            className="w-full text-white text-[18px] px-[10px] bg-slate-900 rounded-md py-[4px]"
            placeholder="Họ và Tên"
          />
          {nameVali && (
            <p className="text-yellow-500 ml-[2px] text-[16px]">
              Vui lòng nhập trường này.
            </p>
          )}
          <input
            onKeyUp={handleValidate}
            ref={emailField}
            name="emailField"
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
            onKeyUp={handleValidate}
            ref={passwordField}
            name="passwordField"
            type="password"
            className="w-full text-white text-[18px] mt-[20px] px-[10px] bg-slate-900 rounded-md py-[4px]"
            placeholder="Mật khẩu"
          />
          {passwordVali && (
            <p className="text-yellow-500 ml-[2px] text-[16px]">
              Vui lòng nhập trường này.
            </p>
          )}

          <input
            onKeyUp={handleValidate}
            ref={rePasswordField}
            name="repasswordField"
            type="password"
            className="w-full text-white text-[18px] mt-[20px] px-[10px] bg-slate-900 rounded-md py-[4px]"
            placeholder="Nhập lại mật khẩu"
          />
          {repasswordVali && (
            <p className="text-yellow-500 ml-[2px] text-[16px]">
              Vui lòng nhập trường này.
            </p>
          )}
        </div>
        <button
          onClick={handleRegister}
          className="bg-yellow-500 rounded-md font-[600] hover:bg-yellow-400  w-[80px] p-[10px] self-end mt-[20px] text-black"
        >
          Register
        </button>
      </div>
    </div>
  );
}

export default RegisterPage;
