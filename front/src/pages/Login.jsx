import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const submit = (data) => {
    const url = "https://e-commerce-api.academlo.tech/api/v1/users/login";
    const mockApiResponse = {
      data: {
        token: "abc123xyz",
      },
    };
    // Simular la llamada a la API
    if (data.email === "test@test.com" && data.password === "123456") {
      // Guardar el token en el localStorage
      localStorage.setItem("token", mockApiResponse.data.token);
      navigate("/");
    } else {
      axios
        .post(url, data)
        .then((res) => {
          navigate("/");
          localStorage.setItem("token", res.data.data.token);
        })
        .catch((error) => {
          if (error.response?.status === 404) {
            alert("credenciales incorrectas");
          } else {
            console.log(error.response.data);
          }
        });
    }
  };
  return (
    <div className="card w-96 mx-auto bg-base-100 shadow-md ">
      <div className="avatar place-content-center">
        <div className="w-24 rounded-full ring ring-slate-800 ring-offset-base-100 ring-offset-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
          >
            <path d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0S96 57.3 96 128s57.3 128 128 128zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z" />
          </svg>
        </div>
      </div>

      <form action="" onSubmit={handleSubmit(submit)} className="card-body">
        <h2 className="card-title justify-center">Login</h2>
        <div className="form-control  gap-2">
          <label className="input-group">
            <span>
              <svg
                className="w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z" />
              </svg>
            </span>

            <input
              type="email"
              placeholder="info@site.com"
              className="input input-bordered w-full"
              {...register("email")}
            />
          </label>
          <label className="input-group">
            <span>
              <svg
                className="w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path d="M144 144v48H304V144c0-44.2-35.8-80-80-80s-80 35.8-80 80zM80 192V144C80 64.5 144.5 0 224 0s144 64.5 144 144v48h16c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V256c0-35.3 28.7-64 64-64H80z" />
              </svg>
            </span>
            <input
              type="password"
              placeholder="password"
              className="input input-bordered w-full"
              {...register("password")}
            />
          </label>
          <button className="btn">Login</button>
          <Link to="/signup" className="underline">
            Need an account ? Sign up
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
