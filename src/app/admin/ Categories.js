"use client";

import React, { useState } from "react";
import { X } from "lucide-react";

function Plus() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 5V19M5 12H19"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function AddCategoryModal({ isOpen, onClose, onAdd }) {
  const [categoryName, setCategoryName] = useState("");

  const handleAddCategory = () => {
    if (categoryName.trim()) {
      onAdd(categoryName);
      setCategoryName("");
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 z-50 animate-in fade-in duration-200">
      <div
        className="bg-white rounded-3xl shadow-2xl w-full max-w-xl animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-8 border-b border-gray-100">
          <h2 className="text-2xl font-bold text-gray-900">Add new category</h2>
          <button
            onClick={onClose}
            className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-100 text-gray-400 hover:text-gray-600 transition-all duration-200"
          >
            <X size={22} />
          </button>
        </div>

        {/* Body */}
        <div className="p-8">
          <label className="block text-sm font-semibold text-gray-700 mb-3">
            Category name
          </label>
          <input
            type="text"
            value={categoryName}
            onChange={(e) => setCategoryName(e.target.value)}
            placeholder="Type category name..."
            className="w-full px-5 py-3.5 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-4 focus:ring-red-100 focus:border-red-400 transition-all duration-200 text-base"
            onKeyPress={(e) => {
              if (e.key === "Enter") {
                handleAddCategory();
              }
            }}
            autoFocus
          />
        </div>

        {/* Footer */}
        <div className="flex justify-end gap-3 p-8 pt-0">
          <button
            onClick={handleAddCategory}
            className="px-8 py-3 bg-gradient-to-r bg-black text-white rounded-xl hover:from-red-600 hover:to-red-700 transition-all duration-200 font-semibold shadow-lg shadow-red-500/30 hover:shadow-xl hover:shadow-red-500/40"
          >
            Add category
          </button>
        </div>
      </div>
    </div>
  );
}

export function Categories() {
  const [categories, setCategories] = useState([
    "All dishes",
    "Pizza",
    "Burger",
    "Salad",
    "Dessert",
    "Drinks",
  ]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddCategory = (newCategory) => {
    setCategories([...categories, newCategory]);
  };

  return (
    <>
      <div className="w-[1171px] bg-gradient-to-br from-white to-gray-50 rounded-3xl p-8 shadow-lg border border-gray-100">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="w-1 h-8 bg-gradient-to-b from-red-500 to-red-600 rounded-full"></div>
            <h2 className="text-2xl font-bold text-gray-900">
              Dishes Category
            </h2>
          </div>
          <button
            onClick={() => setIsModalOpen(true)}
            className="w-11 h-11 bg-gradient-to-br from-red-500 to-red-600 flex justify-center items-center rounded-2xl hover:from-red-600 hover:to-red-700 transition-all duration-200 text-white shadow-lg shadow-red-500/30 hover:shadow-xl hover:shadow-red-500/40 hover:scale-105 active:scale-95"
          >
            <Plus />
          </button>
        </div>

        <div className="flex flex-wrap gap-3">
          {categories.map((cat, i) => (
            <button
              key={i}
              className="px-6 py-2.5 rounded-xl border-2 border-gray-200 text-sm font-medium text-gray-700 hover:bg-black hover:text-white hover:border-black transition-all duration-200 hover:scale-105 active:scale-95 hover:shadow-lg"
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <AddCategoryModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onAdd={handleAddCategory}
      />
    </>
  );
}
