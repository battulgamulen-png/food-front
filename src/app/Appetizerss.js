"use client";

import React, { useState } from "react";
import Image from "next/image";

export function Appetizerss() {
  const [selectedDish, setSelectedDish] = useState(null);
  const [dishQuantity, setDishQuantity] = useState({});

  const dishes = [
    {
      id: 1,
      name: "Brie Crostini Appetizer",
      price: 12.99,
      description:
        "Fluffy pancakes stacked with fruits, cream, syrup, and powdered sugar.",
      image: "/Food1.png",
    },
    {
      id: 2,
      name: "Brie Crostini Appetizer",
      price: 12.99,
      description:
        "Fluffy pancakes stacked with fruits, cream, syrup, and powdered sugar.",
      image: "/Food1.png",
    },
  ];

  const openPopup = (id) => {
    setSelectedDish(id);
    if (!dishQuantity[id]) setDishQuantity({ ...dishQuantity, [id]: 1 });
  };

  const closePopup = () => {
    setSelectedDish(null);
  };

  const increment = (id) => {
    setDishQuantity({ ...dishQuantity, [id]: (dishQuantity[id] || 1) + 1 });
  };

  const decrement = (id) => {
    setDishQuantity({
      ...dishQuantity,
      [id]: Math.max((dishQuantity[id] || 1) - 1, 1),
    });
  };

  return (
    <div className="w-full min-h-screen rounded-3xl p-6 bg-[#1B1B1B] text-white flex flex-col ">
      <h2 className="text-3xl font-bold mb-6 tracking-tight">🍽 Menu</h2>

      {/* Cards */}
      <div className="flex flex-wrap gap-6">
        {dishes.map((dish) => (
          <div
            key={dish.id}
            className="group w-[390px] rounded-2xl bg-white backdrop-blur border shadow-sm hover:shadow-xl transition-all duration-300"
          >
            {/* Image */}
            <div className="relative h-[220px] rounded-t-2xl overflow-hidden">
              <Image
                src={dish.image}
                fill
                alt={dish.name}
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />

              <button
                onClick={() => openPopup(dish.id)}
                className="absolute bottom-4 right-4 w-11 h-11 rounded-full bg-black text-white text-xl flex items-center justify-center shadow-lg hover:bg-red-500 hover:scale-110 transition-all"
              >
                +
              </button>
            </div>

            {/* Content */}
            <div className="p-4">
              <div className="flex justify-between items-center mb-1">
                <p className="text-xl font-semibold text-red-500">
                  {dish.name}
                </p>
                <p className="text-lg font-semibold text-black">
                  ${dish.price}
                </p>
              </div>

              <p className="text-sm text-zinc-600 leading-relaxed line-clamp-2">
                {dish.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Popup */}
      {selectedDish !== null && (
        <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex items-center justify-center px-4">
          <div className="max-w-4xl w-full bg-white rounded-2xl shadow-2xl p-6 flex gap-6 animate-fadeIn">
            {/* Image
            <img
              src="/Food1.png"
              alt="Food"
              className="w-[380px] h-[360px] rounded-xl object-cover shadow-md"
            /> */}

            {/* Info */}
            <div className="flex flex-col justify-between w-full">
              <div>
                <div className="flex justify-end">
                  <button
                    onClick={closePopup}
                    className="w-9 h-9 rounded-full border flex items-center justify-center hover:text-red-500 hover:border-red-500 transition"
                  >
                    ✕
                  </button>
                </div>

                <h3 className="text-3xl font-bold text-red-500 mt-2">
                  {dishes.find((d) => d.id === selectedDish).name}
                </h3>

                <p className="mt-3 text-zinc-600">
                  {dishes.find((d) => d.id === selectedDish).description}
                </p>
              </div>

              {/* Bottom */}
              <div>
                <div className="flex justify-between items-center mt-6">
                  <div>
                    <p className="text-sm text-zinc-500">Total price</p>
                    <p className="text-2xl font-bold">
                      $
                      {(
                        dishes.find((d) => d.id === selectedDish).price *
                        (dishQuantity[selectedDish] || 1)
                      ).toFixed(2)}
                    </p>
                  </div>

                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => decrement(selectedDish)}
                      className="w-10 h-10 rounded-full border text-xl hover:bg-black hover:text-white transition"
                    >
                      −
                    </button>

                    <span className="text-lg font-semibold">
                      {dishQuantity[selectedDish]}
                    </span>

                    <button
                      onClick={() => increment(selectedDish)}
                      className="w-10 h-10 rounded-full border text-xl hover:bg-black hover:text-white transition"
                    >
                      +
                    </button>
                  </div>
                </div>

                <button className="mt-6 w-full h-12 rounded-xl bg-black text-white font-semibold hover:bg-red-500 transition-all">
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
