import React from "react";

const Container = ({ children }) => {
  return (
    <div className={`max-w-[1440px] mx-auto px-3 md:px-0`}>{children}</div>
  );
};

export default Container;
