import React from "react";

export default function Search() {
  return (
    <div className="border border-gray h-[80px] flex flex-col">

      <div>
        <input
          className="basis-1/5 bg-transparent text-white rounded-sm placeholder-gray-300 outline-none "
          placeholder="Find a User"
        />
      </div>

      <div className="basis-4/5 flex space-x-2 m-1 hover:bg-[#2f2d52] cursor-pointer py-2 px-1">
        <img
          className="h-[30px] w-[30px] rounded-3xl"
          src={require("../images/avatar_default.png")}
          alt=""
        />
        <div className="text-[#ddddf7] pt-1">Jane</div>
      </div>

    </div>
  );
}
