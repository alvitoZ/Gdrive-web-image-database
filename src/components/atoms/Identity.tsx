import React from "react";

const Identity = () => {
  return (
    <div className="bg-blue-600 w-[20rem] hover:scale-110 transition duration-500">
      <div className="flex justify-between text-blue-100 p-3 flex-wrap">
        <div className="text-[17px] font-bold ">
          <p>Test</p>
          <p>@v1.0</p>
        </div>
        <div className="text-xs font-bold">28/07/2023</div>
      </div>
    </div>
  );
};

export default Identity;
