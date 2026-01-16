import React, { useState } from "react";
import { X, ShoppingCart, Minus, Plus } from "lucide-react";

export default function OrderCart({ onClose }) {
  const [activeTab, setActiveTab] = useState("cart");
  const [deliveryAddress, setDeliveryAddress] = useState("");

  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Sunshine Stackers",
      description:
        "Fluffy pancakes stacked with fruits, cream, syrup, and powdered sugar.",
      price: 12.99,
      quantity: 1,
      image:
        "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=300&h=200&fit=crop",
    },
  ]);

  const updateQuantity = (id, delta) => {
    setCartItems((items) =>
      items.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + delta) }
          : item
      )
    );
  };

  const removeItem = (id) => {
    setCartItems((items) => items.filter((item) => item.id !== id));
  };

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const shipping = 0.99;
  const total = subtotal + shipping;

  return (
    /* Backdrop */
    <div
      className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center px-4"
      onClick={onClose} // ⬅ backdrop дархад хаагдана
    >
      {/* Card */}
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-2xl bg-gray-700 rounded-3xl shadow-2xl overflow-hidden animate-scaleIn"
      >
        {/* Header */}
        <div className="p-6 flex items-center justify-between border-b border-white/10">
          <div className="flex items-center gap-3">
            <ShoppingCart className="w-6 h-6 text-white" />
            <h1 className="text-2xl font-bold text-white">Order detail</h1>
          </div>

          {/* ❌ CLOSE */}
          <button
            onClick={onClose}
            className="w-10 h-10 rounded-full bg-white/10 hover:bg-red-500 transition flex items-center justify-center"
          >
            <X className="w-5 h-5 text-white" />
          </button>
        </div>

        {/* Tabs */}
        <div className="flex gap-2 p-4">
          {["cart", "order"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`flex-1 py-3 rounded-full font-semibold transition ${
                activeTab === tab
                  ? "bg-red-500 text-white shadow-lg"
                  : "bg-white text-gray-700 hover:bg-gray-100"
              }`}
            >
              {tab === "cart" ? "Cart" : "Order"}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="bg-white rounded-t-3xl p-6 max-h-[65vh] overflow-y-auto">
          {activeTab === "cart" ? (
            <>
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex gap-4 pb-4 mb-4 border-b border-dashed"
                >
                  <img
                    src={item.image}
                    className="w-28 h-24 rounded-xl object-cover"
                  />

                  <div className="flex-1">
                    <div className="flex justify-between">
                      <h3 className="text-lg font-bold text-red-500">
                        {item.name}
                      </h3>
                      <button
                        onClick={() => removeItem(item.id)}
                        className="text-red-500 hover:scale-110 transition"
                      >
                        <X size={18} />
                      </button>
                    </div>

                    <div className="flex justify-between items-center mt-3">
                      <div className="flex items-center gap-3 bg-gray-100 rounded-full px-3 py-1">
                        <button onClick={() => updateQuantity(item.id, -1)}>
                          <Minus size={16} />
                        </button>
                        <span className="font-semibold">{item.quantity}</span>
                        <button onClick={() => updateQuantity(item.id, 1)}>
                          <Plus size={16} />
                        </button>
                      </div>

                      <span className="text-xl font-bold">
                        ${(item.price * item.quantity).toFixed(2)}
                      </span>
                    </div>
                  </div>
                </div>
              ))}

              {/* Address */}
              <textarea
                value={deliveryAddress}
                onChange={(e) => setDeliveryAddress(e.target.value)}
                placeholder="Delivery address..."
                className="w-full border rounded-xl p-4 mb-6 focus:ring-2 focus:ring-red-500"
              />

              {/* Total */}
              <div className="flex justify-between font-bold text-lg mb-6">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>

              <button className="w-full bg-red-500 hover:bg-red-600 text-white font-bold py-4 rounded-full shadow-lg transition">
                Checkout
              </button>
            </>
          ) : (
            <p className="text-center text-gray-500 py-20">
              Захиалгын түүх энд гарна
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
