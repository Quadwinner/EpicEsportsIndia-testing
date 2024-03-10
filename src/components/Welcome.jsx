import React from "react";
import { AiFillPlayCircle } from "react-icons/ai";
import { SiEthereum } from "react-icons/si";
import { BsInfoCircle } from "react-icons/bs";

import { Loader } from "./"; // Assuming Loader is imported from a file named index.js in the same directory

// ... (other imports from your original code)

const companyCommonStyles =
  "min-h-[70px] sm:px-0 px-2 sm:min-w-[120px] flex justify-center items-center border-[0.5px] border-gray-400 text-sm font-light text-white";

const Input = ({ Placeholder, name, type, value, handleChange }) => (
  <input
    Placeholder={Placeholder}
    type={type}
    step="1"
    value={value}
    onChange={(e) => handleChange(e, name)}
    className="my-2 w-full rounded-sm p-2 outline-none bg-transparent text-white border-none text-sm white-glassmorphism"
  />
);

const Welcome = () => {
  const handleSubmit = () => {
    // Handle the form submission logic
  };

  const redirectToRegistrationPage = () => {
    // Redirect to the registration page
    window.location.href = "registration.html"; // Replace with the actual registration page URL
  };

  return (
    <div className="flex w-full justify-center items-center">
      <div className="flex mf:flex-row flex-col items-start justify-between md:p-20 py-12 px-4">
        <div className="flex flex-1 justify-start items-start flex-col mf:mr-10">
          <h1 className="text-3xl sm:text-5xl text-white text-gradient py-1">
            Lets come <br /> Play some game
          </h1>
          <p className="text-left mt-5 text-white font-light md:w-9/12 w-11/12 text-base">
            THE HOME FOR ALL GAMERSTO LEARN AND COMPETE TOGETHER
          </p>
          <button
            type="button"
            onClick={redirectToRegistrationPage}
            className="flex flex-row justify-center item-centre my-5 bg-[#2952e3] p-3 rounded-full cursor-pointer hover:bg-[#2546bd]"
          >
            <p className="text-white text-base font-semibold">Register</p>
          </button>
          <div className="grid sm:grid-cols-3 grid-cols-2 w-full mt-10">
            <div className={`rounded-tl-2xl ${companyCommonStyles}`}>game</div>
            <div className={companyCommonStyles}>game</div>
            <div className={`sm:rounded-tr-2xl ${companyCommonStyles}`}>game</div>
            <div className={`sm:rounded-bl-2xl ${companyCommonStyles}`}>game</div>
            <div className={companyCommonStyles}>game</div>
            <div className={`rounded-br-2xl ${companyCommonStyles}`}>game</div>
          </div>
        </div>

        <div className="flex flex-col flex-1 items-center justify-start w-full mf:mt-0 mt-10">
          <div className="p-3 flex justify-center items-start flex-col rounded-xl h-40 sm:w-72 w-full my-5 eth-card .white-glassmorphism">
            <div className="flex justify-between flex-col w-full h-full">
              <div className=" flex justify-between items-start">
                <div className="w-10 h-10 rounded-full border-2 border-white flex justify-center items-center"></div>
                <BsInfoCircle fontSize={17} color="#fff" />
              </div>
              <div>
                <p className="text-white font-light text-sm">Player ID:</p>
                <p className="text-white font-semibold text-lg mt-1">Player Card</p>
              </div>
            </div>
          </div>
          <div className="p-5 sm:w-96 w-full flex flex-col justify-start items-center blue-glassmorphism">
            <Input Placeholder="game for register" name="game" type="text" handleChange={() => {}} />
            <Input Placeholder="game experience (in years)" name="game" type="number" handleChange={() => {}} />
            <Input Placeholder="Role in game" name="game" type="text" handleChange={() => {}} />
            <Input Placeholder="Peak Achievement" name="game" type="text" handleChange={() => {}} />

            <div className="h-[1px] w-full bg-gray-400 my-2" />

            {false ? (
              <Loader />
            ) : (
              <button
                type="button"
                onClick={handleSubmit}
                className="text-white w-full mt-2 border-[1px] p-2 border-[#3d4f7c] hover:bg-[#3d4f7c] rounded-full cursor-pointer"
              >
                Send Your Info.
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
