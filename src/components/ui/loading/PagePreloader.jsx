import React from "react";
const PagePreloader = () => {
  return (
    <div className="w-full h-[100vh] fixed top-0 left-0 flex justify-center items-center">
      <div className="w-[100px] h-[100px] animate-bounce ">loading</div>
    </div>
  );
};

export default PagePreloader;
