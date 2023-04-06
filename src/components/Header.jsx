import React, { useState } from "react";
import Container from "./Container";
import { Link } from "react-router-dom";
import ActiveNav from "./ActiveNav";
import { VscMenu } from "react-icons/vsc";
import { AiOutlineClose } from "react-icons/ai";

const Header = () => {
  const [isActive, setIsActive] = useState(false);
  return (
    <div className="bg-primary z-[100] py-3 md:py-5 px-3 md:px-0 fixed top-0 left-0 w-full">
      <Container>
        <div className="md:flex md:justify-between md:items-center">
          <Link to={"/"}>
            <img
              className="md:w-[140px] md:h-[42px]"
              src="/images/logo.png"
              alt="Logo"
            />
          </Link>
          <div className=" absolute md:hidden top-4 right-2 text-white">
            {isActive ? (
              <AiOutlineClose
                onClick={() => setIsActive(!isActive)}
                className="cursor-pointer text-2xl text-secondery"
              />
            ) : (
              <VscMenu
                onClick={() => setIsActive(!isActive)}
                className="cursor-pointer text-2xl text-secondery"
              />
            )}
          </div>
          <ul
            className={`md:flex md:space-x-8 space-y-2 md:space-y-0 text-white md:static absolute ${
              isActive ? "top-[55px]" : "top-[-250px]"
            } left-0 bg-primary font-semibold w-full md:w-auto md:px-0 px-4 py-3 md:py-0`}
          >
            <li className="hover:text-secondery duration-200">
              <ActiveNav to={"/"}>Home</ActiveNav>
            </li>
            <li className="hover:text-secondery duration-200">
              <ActiveNav to={"/shop"}>Shop</ActiveNav>
            </li>
            <li className="hover:text-secondery duration-200">
              <ActiveNav to={"/order"}>Order</ActiveNav>
            </li>
            <li className="hover:text-secondery duration-200">
              <ActiveNav to={"/checkout"}>Order Review</ActiveNav>
            </li>
            <li className="hover:text-secondery duration-200">
              <ActiveNav to={"/login"}>Login</ActiveNav>
            </li>
          </ul>
        </div>
      </Container>
    </div>
  );
};

export default Header;
