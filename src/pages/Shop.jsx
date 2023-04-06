import React, { useState, useEffect } from "react";
import Container from "../components/Container";
import Hero from "../components/Hero";
import ProductCard from "../components/ProductCard";
import Cart from "../components/Cart";
import { AiOutlineArrowRight } from "react-icons/ai";

const Shop = () => {
  const [products, setProducts] = useState([]);

  // Fetch products
  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  console.log(products);
  return (
    <div className="py-24">
      <Container>
        <Hero>
          <div className="grid md:grid-cols-12 gap-6">
            <div className="md:col-span-9 grid md:grid-cols-3 gap-4">
              {products && products.length > 0
                ? products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))
                : "No Product found"}
            </div>
            <div className="md:col-span-3  relative ">
              <div className="sticky top-[100px] bg-[#FFE0B3] rounded-lg p-4">
                <Cart>
                  <div className=" rounded-b-lg ">
                    <button className="flex rounded-lg items-center font-semibold  justify-center bg-secondery w-full py-2 mt-2">
                      Review Order
                      <AiOutlineArrowRight className="ml-3" />
                    </button>
                  </div>
                </Cart>
              </div>
            </div>
          </div>
        </Hero>
      </Container>
    </div>
  );
};

export default Shop;
