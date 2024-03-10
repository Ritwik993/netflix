import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className=" pt-60 pl-12 w-screen aspect-video absolute text-white bg-gradient-to-r from-black overflow-x-hidden">
      <h1 className="font-bold text-6xl ">{title}</h1>
      <p className=" w-[600px] text-2xl my-6">{overview}</p>
      <div>
        <button className="bg-white py-4 px-12 rounded font-bold text-black mr-2 hover:bg-opacity-50">Play</button>
        <button className="bg-gray-600 py-4 px-12 rounded font-bold text-white ml-2 bg-opacity-50">More Info</button>
      </div>
    </div>
  );
};

export default VideoTitle;
