import React from "react";
import { BsFillCartPlusFill } from "react-icons/bs";

const ProductCard = ({ product }) => {
  const { name, price, img, ratings, seller } = product;
  return (
    <div className="border border-[#95A0A7] rounded-lg  relative overflow-hidden flex flex-col justify-between">
      <div className="p-2">
        <img className="w-full rounded-lg" src={img} alt={name} />
        <h3 className="md:text-xl text-lg font-semibold text-primary  mt-3">
          {name}
        </h3>
        <p className="text-lg text-primary mb-5">
          <span>Price</span>: ${price}
        </p>
        <p className="text-lg text-primary">Manufacturer: {seller}</p>
        <p className="text-lg text-primary mb-5">Rating: {ratings}</p>
      </div>
      <div className=" rounded-b-lg border-t border-[#95A0A7]">
        <button className="flex items-center font-semibold  justify-center bg-[#FFE0B3] w-full py-2 ">
          Add to Cart
          <BsFillCartPlusFill className="ml-3" />
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
