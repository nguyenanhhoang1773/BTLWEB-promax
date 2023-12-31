import axios from "axios";
import { useRef } from "react";
import { redirect } from "react-router-dom";

function RegisterPage() {
  const nameField = useRef();
  const emailField = useRef();
  const passwordField = useRef();
  const rePasswordField = useRef();
  const handleRegister = () => {
    const nameValue = nameField.current.value;
    const emailValue = emailField.current.value;
    const passwordValue = passwordField.current.value;
    const rePasswordValue = rePasswordField.current.value;
    console.log(nameValue);
    console.log(emailValue);
    console.log(passwordValue);
    if (passwordValue !== rePasswordValue) {
      alert("Nhập lại sai mật khẩu!!!");
    }
    axios
      .post("http://localhost:8000/api/register", {
        name: nameValue,
        email: emailValue,
        password: passwordValue,
        password: rePasswordValue,
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
          Register
        </h3>
        <div className="mt-[20px]">
          <input
            ref={nameField}
            className="w-full text-[18px] px-[10px] bg-slate-900 rounded-md py-[4px]"
            placeholder="Họ và Tên"
          />
          <input
            ref={emailField}
            className="w-full text-[18px] mt-[20px] px-[10px] bg-slate-900 rounded-md py-[4px]"
            placeholder="Email"
          />
          <input
            ref={passwordField}
            type="password"
            className="w-full text-[18px] mt-[20px] px-[10px] bg-slate-900 rounded-md py-[4px]"
            placeholder="Mật khẩu"
          />
          <input
            ref={rePasswordField}
            type="password"
            className="w-full text-[18px] mt-[20px] px-[10px] bg-slate-900 rounded-md py-[4px]"
            placeholder="Nhập lại mật khẩu"
          />
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
