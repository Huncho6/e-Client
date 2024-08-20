import React from "react";
import { SiNike } from "react-icons/si";
import { SiNewbalance } from "react-icons/si";
import { CgAdidas } from "react-icons/cg";

const Container = () => {
  return (
    <div>
      <h1 className="flex justify-center mt-5">SHOP NOW</h1>
      <div className="flex justify-center gap-5">
        <SiNike className="w-[200px] h-[200px]" />
        <SiNewbalance className="w-[200px] h-[200px] text-red-700" />
        <CgAdidas className="w-[200px] h-[200px]" />
      </div>
    </div>
  );
};

export default Container;
