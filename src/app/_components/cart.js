"use client";
import { useState } from "react";
import { Sags } from "../icons/sags";
import { Line } from "../icons/line";

export const CartSection = () => {
  const [activeTab, setActiveTab] = useState("cart");

  const initialCart = [
    {
      id: 1,
      name: "Brie Crostini",
      price: 12.99,
      quantity: 1,
      description:
        "Fluffy pancakes stacked with fruits, cream, syrup, and powdered sugar.",
      image: "/Food1.png",
    },
    {
      id: 2,
      name: "Pancakes",
      price: 9.99,
      quantity: 2,
      description: "Delicious pancakes with syrup and butter.",
      image: "oliv.jpg",
    },
  ];

  const orderItems = [
    { id: 1, name: "Burger", price: 15.99, status: "Pending" },
    { id: 2, name: "Pizza", price: 13.5, status: "Delivered" },
  ];

  const [cart, setCart] = useState(initialCart);

  const increment = (id) => {
    setCart(
      cart.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decrement = (id) => {
    setCart(
      cart.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(item.quantity - 1, 1) }
          : item
      )
    );
  };

  const totalPrice = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="absolute top-15 right-0 w-[535px] h-[1024px] bg-[#232323] rounded-lg p-6">
      <div className="flex flex-col justify-center gap-6">
        <div className="flex justify-between">
          <div className="flex gap-2 items-center">
            <Sags />
            <p className="text-[20px] font-semibold text-white">Order detail</p>
          </div>
          <button className="w-8 h-8 rounded-full border border-white text-white flex justify-center items-center cursor-pointer">
            𝘅
          </button>
        </div>

        <div className="rounded-3xl shadow-lg w-full bg-white h-11 flex">
          <button
            className={`flex-1 h-full cursor-pointer rounded-3xl transition-all duration-300 ${
              activeTab === "cart"
                ? "bg-red-500 text-white"
                : "bg-white text-black"
            }`}
            onClick={() => setActiveTab("cart")}
          >
            Cart
          </button>
          <button
            className={`flex-1 h-full cursor-pointer rounded-3xl transition-all duration-300 ${
              activeTab === "order"
                ? "bg-red-500 text-white"
                : "bg-white text-black"
            }`}
            onClick={() => setActiveTab("order")}
          >
            Order
          </button>
        </div>

        {/* Tab Content */}
        <div className="mt-4 overflow-y-auto h-[850px]">
          {activeTab === "cart" && (
            <div className="flex flex-col gap-4 bg-white rounded-lg w-[471px] h-[532px]">
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-lg p-4 flex gap-4"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-31 h-30 rounded-lg object-cover shadow"
                  />
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <p className="font-semibold text-lg text-[#EF4444]">
                        {item.name}
                      </p>
                      <p className="text-gray-500 text-sm">
                        {item.description}
                      </p>
                    </div>
                    <div className="flex justify-between items-center mt-2">
                      <p className="font-semibold text-black">
                        ${(item.price * item.quantity).toFixed(2)}
                      </p>
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => decrement(item.id)}
                          className="w-8 h-8 rounded-full border flex justify-center items-center"
                        >
                          -
                        </button>
                        <p>{item.quantity}</p>
                        <button
                          onClick={() => increment(item.id)}
                          className="w-8 h-8 rounded-full border flex justify-center items-center"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              <div className="mt-4 text-right font-semibold text-xl text-white">
                Total: ${totalPrice.toFixed(2)}
              </div>
            </div>
          )}

          {activeTab === "order" && (
            <div className="flex flex-col gap-4">
              {orderItems.map((item) => (
                <div
                  key={item.id}
                  className="flex justify-between items-center bg-white rounded-lg p-3"
                >
                  <div>
                    <p className="font-semibold">{item.name}</p>
                    <p className="text-gray-500">${item.price.toFixed(2)}</p>
                  </div>
                  <div>
                    <p
                      className={`font-semibold ${
                        item.status === "Delivered"
                          ? "text-green-500"
                          : "text-yellow-500"
                      }`}
                    >
                      {item.status}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
