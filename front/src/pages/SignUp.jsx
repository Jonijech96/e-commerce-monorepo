import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";

const SignUp = () => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const submit = (data) => {
    const url = "https://e-commerce-api.academlo.tech/api/v1/users/login";
    axios
      .post(url, data)
      .then((res) => {
        navigate("/login");
        console.log(res);
        // localStorage.setItem("token", res.data.data.token);
      })
      .catch((error) => {
        if (error.response?.status === 404) {
          alert("credenciales incorrectas");
        } else {
          console.log(error.response.data);
        }
      });
    // console.log(data);
  };
  return (
    <div className="card w-96 mx-auto bg-base-100 shadow-md ">
      <div className="avatar place-content-center">
        <div className="w-24 rounded-full ring ring-slate-800 ring-offset-base-100 ring-offset-2">
          <svg
            // className="w-10 rounded-full border-solid border-4"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
          >
            <path d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0S96 57.3 96 128s57.3 128 128 128zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z" />
          </svg>
        </div>
      </div>

      <form action="" onSubmit={handleSubmit(submit)} className="card-body">
        <h2 className="card-title justify-center">Sign Up</h2>
        <div className="form-control  gap-2">
          
          
          <label className="input-group">
          <span>
          <svg
          className="w-4"
            // className="w-10 rounded-full border-solid border-4"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
          >
            <path d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0S96 57.3 96 128s57.3 128 128 128zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z" />
          </svg>
            </span>
            <input type="text" placeholder="First Name" className="input input-bordered" />
          </label>
          
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
              placeholder="Create a password"
              className="input input-bordered w-full"
              {...register("password")}
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
              placeholder="Confirm a password"
              className="input input-bordered w-full"
              {...register("password")}
            />
          </label>
          <label className="input-group">
            <span>
            <svg className="w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"/></svg>
            </span>
            <input
              type="password"
              placeholder="Phone"
              className="input input-bordered w-full"
              {...register("password")}
            />
          </label>
          <button className="btn">Register Now</button>
          <Link to="/login" className="underline">
            Already Account? Login
          </Link>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
