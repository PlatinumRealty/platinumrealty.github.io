"use client";
import React, { useState, useEffect } from "react";
import { db, uid } from "@/firebase/config";
import { signUp, login } from "../../firebase/auth";
import { useRouter } from "next/navigation";

const AuthenticationPage = () => {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const [signUpData, setSignUpData] = useState({
    email: "",
    password: "",
  });

  const [showSignUp, setShowSignUp] = useState(false);

  const router = useRouter();

  const submitLogin = async (e) => {
    e.preventDefault();

    const { email, password } = loginData;
    const { result, error } = await login(email, password);
    if (error) {
      return console.log(error);
    } else {
      return router.push("/adminPage");
    }
  };
  const submitSignUp = async (e) => {
    e.preventDefault();

    const { result, error } = await signUp(
      signUpData.email,
      signUpData.password
    );
    if (error) {
      return console.log(error);
    }
    return router.push("/adminPage");
  };

  const handleLoginInput = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };
  const handleSignUpInput = (e) => {
    setSignUpData({ ...signUpData, [e.target.name]: e.target.value });
  };

  return (
    <div>
      {!showSignUp ? (
        <LoginForm
          submitLogin={submitLogin}
          handleLoginInput={handleLoginInput}
          loginData={loginData}
          setShowSignUp={setShowSignUp}
        />
      ) : (
        <SignUpForm
          submitSignUp={submitSignUp}
          handleSignUpInput={handleSignUpInput}
          signUpData={signUpData}
          setShowSignUp={setShowSignUp}
        />
      )}
    </div>
  );
};

export default AuthenticationPage;

const LoginForm = ({
  submitLogin,
  handleLoginInput,
  loginData,
  setShowSignUp,
}) => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-black">
      <div className="w-2/5 h-1/2 bg-[#201c1c] rounded-2xl px-8 py-8 shadow-md flex flex-col justify-center items-center">
        <div className="w-full mb-10 text-5xl font-bold text-blue-500">
          Login
        </div>
        <div className="w-full h-3/4">
          <form onSubmit={submitLogin}>
            <div className="mb-6">
              <h2 className="mb-4 text-white">Email</h2>
              <input
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none text-black"
                type="email"
                name="email"
                placeholder="Enter your email"
                value={loginData.email}
                onChange={handleLoginInput}
              />
            </div>
            <div className="mb-6">
              <h2 className="mb-4 text-white">Password</h2>
              <input
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none text-black"
                type="password"
                name="password"
                placeholder="Enter your password"
                value={loginData.password}
                onChange={handleLoginInput}
              />
            </div>
            <button
              className="w-full bg-blue-500 text-white py-2 px-4 rounded-md disabled:bg-gray-400 disabled:cursor-not-allowed"
              type="submit"
              //   disabled={isDisabled}
            >
              Login
            </button>
          </form>
        </div>
        <div className="flex justify-around mt-2 w-full">
          <div className="text-gray-500">
            Don't have an account?{" "}
            <span
              className="text-blue-500 font-bold cursor-pointer"
              onClick={() => setShowSignUp(true)}
            >
              Sign Up
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

const SignUpForm = ({
  submitSignUp,
  handleSignUpInput,
  signUpData,
  setShowSignUp,
}) => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-black">
      <div className="w-2/5 h-1/2 bg-[#201c1c] rounded-2xl px-8 py-8 shadow-md flex flex-col justify-center items-center">
        <div className="w-full mb-10 text-5xl font-bold text-blue-500">
          Sign Up
        </div>
        <div className="w-full h-3/4">
          <form onSubmit={submitSignUp}>
            <div className="mb-6">
              <h2 className="mb-4 text-white">Email</h2>
              <input
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none text-black"
                type="email"
                name="email"
                placeholder="Enter your email"
                value={signUpData.email}
                onChange={handleSignUpInput}
              />
            </div>
            <div className="mb-6">
              <h2 className="mb-4 text-white">Password</h2>
              <input
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none text-black"
                type="password"
                name="password"
                placeholder="Enter your password"
                value={signUpData.password}
                onChange={handleSignUpInput}
              />
            </div>
            <button
              className="w-full bg-blue-500 text-white py-2 px-4 rounded-md disabled:bg-gray-400 disabled:cursor-not-allowed"
              type="submit"
              //   disabled={isDisabled}
            >
              Sign Up
            </button>
          </form>
        </div>
        <div className="flex justify-around mt-2 w-full">
          <div className="text-gray-500">
            Have an account?{" "}
            <span
              className="text-blue-500 font-bold cursor-pointer"
              onClick={() => setShowSignUp(false)}
            >
              Login
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
