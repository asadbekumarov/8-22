"use client";
import React, { useState } from "react";
import { baseUrl } from "@/utils/api";
import axios from "axios";
import { useRouter } from "next/navigation";
import { IoPerson } from "react-icons/io5";

function Register() {
  const route = useRouter();
  const [error, setError] = useState("");

  const onSubmits = async (e) => {
    e.preventDefault();
    let name = e.target.name.value;
    let email = e.target.email.value;
    let password = e.target.password.value;
    let confirmPassword = e.target.confirmPassword.value;
    try {
      let res = await axios.post(`${baseUrl}/users`, {
        name,
        email,
        password,
      });
      if (res.status === 200) {
        localStorage.setItem("accessToken", res.data.token);
        localStorage.setItem("authMethod", "register");

        localStorage.setItem("userName", name);
        route.push("/dashboard");
      }
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };
  if (localStorage.getItem("accessToken")) {
    route.push("/dashboard");
  }
  return (
    <div className="flex flex-col items-center justify-center mt-14">
      <div>
        <h1 className="font-bold text-5xl leading-[58px] text-[#17a2b8]">
          Sign Up
        </h1>
        <div className="flex items-center gap-2">
          <IoPerson className="font-black text-2xl leading-6" />
          <p className="font-normal text-2xl leading-10">Create Your Account</p>
        </div>
        {error && <p className="text-red-500 text-center mt-2">{error}</p>}
        <div>
          <form
            action=""
            onSubmit={onSubmits}
            className="flex flex-col gap-3 pt-10 items-start"
          >
            <input
              name="name"
              className="py-2 px-3 w-[1200px] border"
              type="text"
              placeholder="name"
            />
            <input
              name="email"
              className="py-2 px-3 w-[1200px] border"
              type="text"
              placeholder="Email Address"
            />
            <input
              name="password"
              className="py-2 px-3 w-[1200px] border"
              type="password"
              placeholder="Password"
            />
            <input
              name="confirmPassword"
              className="py-2 px-3 w-[1200px] border"
              type="password"
              placeholder="coniform pasword"
            />
            <button className="bg-[#17a2b8] py-2 px-4 text-white" type="submit">
              submit
            </button>
            <p className="text-base leading-6 pt-5">
              Already have an account?
              <span className="text-[#17a2b8] text-base leading-6">
                Sign In
              </span>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
