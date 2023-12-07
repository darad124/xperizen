import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus, faTimes } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";

const Products = () => {
  const products = [
    {
      id: 1,
      name: "One Person Ticket",
      variant: "1 Ticket",
      price: "₦50,000",
      image: "https://via.placeholder.com/400x304",
    },
    {
      id: 2,
      name: "Two Person Ticket",
      variant: "2 Tickets",
      price: "₦80,000",
      image: "https://via.placeholder.com/400x304",
    },
    {
      id: 3,
      name: "Three Person Ticket",
      variant: "3 Tickets",
      price: "₦110,000",
      image: "https://via.placeholder.com/400x304",
    },
    {
      id: 4,
      name: "Five Person Ticket",
      variant: "5 Tickets",
      price: "₦150,000",
      image: "https://via.placeholder.com/400x304",
    },
  ];

  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    const existingProduct = cart.find((item) => item.id === product.id);
  
    if (existingProduct) {
      // If the product already exists in the cart, increase its quantity
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      // If the product doesn't exist in the cart, add it as a new line item
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  
    // Show the notification
    setShowNotification(true);
  
    // Hide the notification after 3 seconds
    setTimeout(() => setShowNotification(false), 3000);
  };
  
  const updateQuantity = (product, amount) => {
    setCart(
      cart.map((item) =>
        item.id === product.id
          ? { ...item, quantity: Math.max(0, item.quantity + amount) }
          : item
      )
    );
  };

  const removeFromCart = (product) => {
    setCart(cart.filter((item) => item.id !== product.id));
  };

  const [showNotification, setShowNotification] = useState(false);

  return (
    <div>
      {showNotification && (
        <div className="fixed top-0 right-0 m-6 p-4 bg-orange-500 text-white z-20 rounded shadow-lg">
          Item added to cart!
        </div>
      )}

      <div className="w-full h-full px-6 md:px-15 md:py-24 py-12 gap-20 flex flex-col border-box">
        <div className="w-full h-full items-end flex flex-row justify-between ">
          <div className="w-full flex-col justify-center items-center gap-4 flex">
            <div className="text-white text-base font-semibold font-['Poppins'] gap-4 leading-normal">
              Tagline
            </div>
            <div className="flex-col justify-center items-center gap-4 flex">
              <div className=" text-white text-5xl font-bold font-['Poppins'] leading-[57.60px]">
                Products
              </div>
              <div className="self-stretch text-white text-lg font-normal font-['Poppins'] leading-[27px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
              </div>
            </div>
          </div>
        </div>
        <div className="gap-6  flex md:flex-row flex-col overflow-hidden w-full  justify-center ">
          {products.map((product, i) => (
            <div
              key={i}
              className="md:w-[300px] h-full flex-col  justify-start items-start gap-4 flex"
            >
              <img className="self-stretch h-[260px]" src={product.image} />
              <div className="self-stretch justify-start items-start inline-flex">
                <div className="grow shrink basis-0 flex-col justify-start items-start inline-flex">
                  <div className="w-[200px] text-white text-lg font-semibold font-['Poppins'] leading-[27px]">
                    {product.name}
                  </div>
                  <div className="w-[200px] text-white text-sm font-normal font-['Poppins'] leading-[21px]">
                    {product.variant}
                  </div>
                </div>
                <div className="text-white text-xl font-semibold font-['Poppins'] leading-[30px]">
                  {product.price}
                </div>
              </div>
              <button
                onClick={() => addToCart(product)}
                className="self-stretch px-5 py-2 rounded-[13px] border border-white justify-center items-center gap-2 inline-flex transform transition-all duration-200 hover:bg-black hover:text-white hover:shadow-inner hover:scale-105"
              >
                <div className="text-white text-base font-normal font-['Poppins'] leading-normal">
                  Add to cart
                </div>
              </button>
            </div>
          ))}
        </div>
        <div className="flex justify-center flex-col items-center">
          <div className="md:w-[768px] bg-white text-black rounded-lg p-6">
            <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
            {cart.map((item, i) => (
              <div
                key={i}
                className="flex justify-between items-center mb-4 border-b border-gray-200 pb-4"
              >
                <div className="flex-grow bold text-lg">
                  {item.quantity} x {item.name}
                </div>
                <div className="flex space-x-2 text-2xl">
                  <FontAwesomeIcon
                    icon={faMinus}
                    onClick={() => updateQuantity(item, -1)}
                    className={`cursor-pointer text-red-500 ${
                      item.quantity === 0 ? "opacity-50" : ""
                    }`}
                  />

                  <FontAwesomeIcon
                    icon={faPlus}
                    onClick={() => updateQuantity(item, 1)}
                    className="cursor-pointer text-green-500"
                  />
                  <FontAwesomeIcon
                    icon={faTimes}
                    onClick={() => removeFromCart(item)}
                    className="cursor-pointer text-gray-500"
                  />
                </div>
              </div>
            ))}
            <div className="text-2xl font-bold">
              Total: ₦
              {cart.reduce(
                (total, item) =>
                  total +
                  item.quantity * Number(item.price.replace(/[^0-9.-]+/g, "")),
                0
              )}
            </div>
          </div>
          <div>
            <button className="self-stretch w-64 px-5 py-2 mt-4 rounded-[13px] bg-white text-black justify-center items-center gap-2 inline-flex transform transition-all duration-200  hover:shadow-inner hover:scale-105">
              <div className="text-base font-normal font-['Poppins'] leading-normal">
                Checkout
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
