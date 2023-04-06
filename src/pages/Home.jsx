import React from "react";
import Container from "../components/Container";
import { Link } from "react-router-dom";
import Hero from "../components/Hero";

const Home = () => {
  return (
    <div className="">
      <Container>
        <Hero>
          <div className="grid md:grid-cols-5 items-center h-full ">
            <div className="md:col-span-3">
              <p className="text-secondery text-lg text-center md:text-left">
                Sale up to 70% off
              </p>
              <h1 className="text-primary md:text-6xl text-2xl font-bold text-center md:text-left md:mt-14 md:mb-3">
                New Collection For Fall
              </h1>
              <p className="text-[#2A414F] md:text-2xl md:mb-20 text-center md:text-left">
                Discover all the new arrivals of ready-to-wear collection.
              </p>
              <div className="flex justify-center mt-3 md:mt-0 md:justify-start">
                <Link
                  to={"/shop"}
                  className="text-[#0E161A] bg-secondery py-4 px-10 font-semibold"
                >
                  SHOP NOW
                </Link>
              </div>
            </div>
            <div className="md:col-span-2 hidden md:block">
              <img
                className="md:h-auto w-full mt-4 md:mt-0"
                src="images/hero.png"
                alt="hero"
              />
            </div>
          </div>
        </Hero>
      </Container>
    </div>
  );
};
export default Home;
