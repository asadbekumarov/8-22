"use client";
import { baseUrl } from "@/utils/api";
import axios from "axios";
import { useRouter } from "next/navigation";
import React from "react";
import { IoPerson } from "react-icons/io5";

function Login() {
  const route = useRouter();

  const onSubmits = async (e) => {
    e.preventDefault();
    let email = e.target[0].value;
    let password = e.target[1].value;
    try {
      let res = await axios.post(`${baseUrl}/auth`, {
        email,
        password,
      });
      if (res.status === 200) {
        localStorage.setItem("accessToken", res.data.token);
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
          Sign In
        </h1>
        <div className="flex items-center gap-2">
          <IoPerson className="font-black text-2xl leading-6" />
          <p className="font-normal text-2xl leading-10">
            Sign Into Your Account
          </p>
        </div>
      <div>
      <form
          action=""
          onSubmit={onSubmits}
          className="flex flex-col gap-3 pt-10 items-start"
        >
          <input
            className="py-2 px-3 w-[1200px] border"
            type="text"
            placeholder="Email Address"
          />
          <input
            className="py-2 px-3 w-[1200px] border"
            type="password"
            placeholder="Password"
          />
          <button className="bg-[#17a2b8] py-2 px-4 text-white" type="submit">
            Login
          </button>
          <p className="text-base leading-6 pt-5">
            Don't have an account?
            <span className="text-[#17a2b8] text-base leading-6">Sign Up</span>
          </p>
        </form>
      </div>
      </div>
    </div>
  );
}

export default Login;
