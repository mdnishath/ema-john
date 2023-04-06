import React from "react";

const Cart = ({ children }) => {
  return (
    <div>
      <h4 className="md:text-2xl text-xl font-semibold text-primary text-center">
        Order Summary
      </h4>
      {children}
    </div>
  );
};

export default Cart;
