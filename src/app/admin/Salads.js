"use client";

import Image from "next/image";
import Pencil from "../icons/Pencil";

export function Salads() {
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
    {
      id: 3,
      name: "Brie Crostini Appetizer",
      price: 12.99,
      description:
        "Fluffy pancakes stacked with fruits, cream, syrup, and powdered sugar.",
      image: "/Food1.png",
    },
    {
      id: 4,
      name: "Brie Crostini Appetizer",
      price: 12.99,
      description:
        "Fluffy pancakes stacked with fruits, cream, syrup, and powdered sugar.",
      image: "/Food1.png",
    },
  ];

  return (
    <div className="w-[1171px] h-[582px] bg-white rounded-2xl p-5 ">
      <div className="text-[24px] font-semibold mb-4">Salads</div>
      <div className="flex flex-row gap-4 flex-wrap">
        <div className="flex flex-col   w-[270px] h-[241px] ">
          <div className="border-2 border-dashed border-red-300 bg-white h-[250px] rounded-xl flex flex-col justify-center items-center cursor-pointer">
            <div className="w-10 h-10 flex items-center justify-center bg-red-500 text-white rounded-full text-3xl">
              +
            </div>
            <p className="mt-3 text-gray-600 text-[15px]">
              Add new Dish to <br /> Appetizers
            </p>
          </div>
        </div>

        {dishes.map((dish) => (
          <div
            key={dish.id}
            className="bg-white rounded-xl shadow w-[270px] h-[241px] p-3 pb-4 border"
          >
            <div className="relative h-[129px] w-[238px] rounded-lg overflow-hidden mb-3">
              <Image
                src={dish.image}
                fill
                className="object-cover"
                alt={dish.name}
              />

              <button className="absolute bottom-2 right-2 bg-white rounded-full p-2 shadow">
                <Pencil size={18} className="text-red-500" />
              </button>
            </div>
            <div>
              <div className="flex flex-row gap-[10px]">
                <p className="text-red-500 text-[14px]">{dish.name}</p>
                <p className="text-black text-[12px]">{dish.price}</p>
              </div>
              <div>
                <p className="text-black text-[12px]">{dish.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
