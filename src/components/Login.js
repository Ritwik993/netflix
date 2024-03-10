import React, { useRef, useState } from "react";
import Header from "./Header";
import { validateFormData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const Login = () => {
  const dispatch = useDispatch();
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errMessage, setErrMessage] = useState("");
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);
  const handleForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  const validateForm = () => {
    // console.log(email);
    // console.log(password);
    const message = validateFormData(
      email.current.value,
      password.current.value
    );
    setErrMessage(message);
    if (message) return;
    //SignIn or Sign up

    if (!isSignInForm) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          // console.log(user);
          updateProfile(user, {
            displayName: name.current.value,
            photoURL:
              "https://media.licdn.com/dms/image/D4D03AQEKV0mimGGPKg/profile-displayphoto-shrink_400_400/0/1671346823742?e=1715212800&v=beta&t=GbdFfnrnjkrc10rxuih28kkdCTcl5XuXX5H6BsxfHZ8",
          })
            .then(() => {
              // Profile updated!
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(addUser({ uid, email, displayName, photoURL }));
            })
            .catch((error) => {
              // An error occurred
              setErrMessage(error);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrMessage(errorCode + ":" + errorMessage);
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          //console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrMessage(errorCode + ":" + errorMessage);
        });
    }
  };
  return (
    <>
      <Header />
      <div className="h-[100vh] w-full relative ">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/93da5c27-be66-427c-8b72-5cb39d275279/94eb5ad7-10d8-4cca-bf45-ac52e0a052c0/IN-en-20240226-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
          alt=""
          className="h-full w-full"
        />
        <div className="absolute top-1/4 w-full flex items-center justify-center mx-auto">
          <form
            className="w-[400px] bg-black text-white flex flex-col py-[48px] px-[68px] rounded-lg opacity-80"
            onSubmit={(e) => e.preventDefault()}
          >
            <p className=" text-3xl font-bold mb-6">
              {isSignInForm ? "Sign In" : "Sign Up"}
            </p>
            {!isSignInForm && (
              <input
                ref={name}
                type="text"
                placeholder="Full Name"
                className="w-full p-2 text-black mb-4"
              />
            )}
            <input
              type="text"
              ref={email}
              placeholder="Email Address"
              className="w-full p-2 text-black mb-4"
            />
            <input
              type="password"
              ref={password}
              placeholder="Password"
              className="w-full p-2 text-black mb-4"
            />
            <p className=" text-red-500 font-bold mb-4">{errMessage}</p>
            <button
              type="submit"
              className="w-full p-3 bg-red-700 my-4 rounded cursor-pointer"
              onClick={validateForm}
            >
              {isSignInForm ? "Sign In" : "Sign Up"}
            </button>
            <p onClick={() => handleForm()} className=" cursor-pointer">
              {isSignInForm
                ? "New to Netflix? Sign up Now"
                : "Already a User? Sing In Now"}
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
