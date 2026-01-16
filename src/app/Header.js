"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import NomNom from "./icons/NomNom";
import Cum from "./icons/Cum";
import Loc from "./icons/Loc";
import { Shopp } from "./icons/shopp";
import { User } from "./icons/user";

import OrderCart from "./OrderCart"; // ⬅️ ШИНЭ

export function Header() {
  const router = useRouter();

  const [token, setToken] = useState(null);
  const [showLocation, setShowLocation] = useState(false);
  const [showUser, setShowUser] = useState(false);
  const [showCart, setShowCart] = useState(false);

  useEffect(() => {
    const localToken = localStorage.getItem("token");
    setToken(localToken);
  }, []);

  const logout = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };

  return (
    <>
      {/* ================= HEADER ================= */}
      <header className="sticky top-0 z-40 bg-black/90 backdrop-blur border-b border-white/10">
        <div className="h-[68px] px-6 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3 cursor-pointer">
            <NomNom />
            <div>
              <p className="text-white text-lg font-semibold">Nom Nom</p>
              <p className="text-xs text-zinc-400">Swift delivery</p>
            </div>
          </div>

          {/* Right side */}
          {token ? (
            <div className="flex items-center gap-5 relative">
              {/* Location */}
              <div
                onClick={() => setShowLocation(true)}
                className="w-[260px] h-9 bg-white rounded-2xl px-3 flex items-center gap-2 cursor-pointer hover:shadow-lg transition"
              >
                <Loc />
                <input
                  placeholder="Add location"
                  className="flex-1 text-xs outline-none bg-transparent"
                />
                <Cum />
              </div>

              {/* Icons */}
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setShowCart(true)}
                  className="hover:scale-110 transition"
                >
                  <Shopp />
                </button>

                <button
                  onClick={() => setShowUser(!showUser)}
                  className="hover:scale-110 transition"
                >
                  <User />
                </button>
              </div>

              {/* User dropdown */}
              {showUser && (
                <div className="absolute right-0 top-14 w-56 bg-white rounded-xl shadow-xl p-4 animate-fadeIn">
                  <p className="font-semibold text-black mb-3">
                    Test@gmail.com
                  </p>
                  <button
                    onClick={logout}
                    className="w-full h-9 rounded-lg bg-zinc-100 hover:bg-red-500 hover:text-white transition"
                  >
                    Sign out
                  </button>
                </div>
              )}

              {/* Location Modal */}
              {showLocation && (
                <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50 px-4">
                  <div className="bg-white w-[500px] rounded-2xl shadow-2xl p-6 animate-scaleIn">
                    <div className="flex justify-between items-center mb-6">
                      <p className="text-xl font-semibold">Delivery address</p>
                      <button
                        onClick={() => setShowLocation(false)}
                        className="w-8 h-8 rounded-full border hover:text-red-500 hover:border-red-500 transition"
                      >
                        ✕
                      </button>
                    </div>

                    <input
                      className="w-full h-20 border rounded-xl px-4 outline-none mb-6"
                      placeholder="Write your address..."
                    />

                    <div className="flex justify-end gap-3">
                      <button
                        onClick={() => setShowLocation(false)}
                        className="px-5 h-10 rounded-lg border hover:bg-zinc-100 transition"
                      >
                        Cancel
                      </button>
                      <button className="px-6 h-10 rounded-lg bg-black text-white hover:bg-red-500 transition">
                        Deliver here
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ) : (
            <div className="flex gap-3">
              <button
                onClick={() => router.push("/signup")}
                className="w-[80px] h-9 rounded-2xl bg-white hover:bg-red-500 hover:text-white transition"
              >
                Sign up
              </button>
              <button
                onClick={() => router.push("/login")}
                className="w-[80px] h-9 rounded-2xl bg-red-600 hover:bg-white transition"
              >
                Log in
              </button>
            </div>
          )}
        </div>
      </header>

      {/* ================= CART MODAL ================= */}
      {showCart && <OrderCart onClose={() => setShowCart(false)} />}
    </>
  );
}
