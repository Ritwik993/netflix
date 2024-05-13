import React from "react";

const GPTSearchBar = () => {
  return (
    <div className="bg-black w-1/2">
      <form className=" text-white mt-36 ">
        <input type="text" className="p-2 text-black" placeholder="What do you want to watch today ?"/>
        <button className="w-6 bg-red-700">Search</button>
      </form>
    </div>
  );
};

export default GPTSearchBar;
