"use client";

import { useRouter } from "next/navigation";
import NomNom from "./icons/NomNom";
import { useEffect, useState } from "react";
import Sum from "./icons/Sum";
import Cum from "./icons/Cum";
import Loc from "./icons/Loc";
export function Header() {
  const [token, setToken] = useState("");

  const router = useRouter();

  const handleSignUp = () => {
    router.push("/signup");
  };
  const handleLogIn = () => {
    router.push("/login");
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      const localToken = window.localStorage.getItem("token");
      setToken(localToken);
    }
  }, [typeof window]);

  const [location, setLocation] = useState("");

  const handleLocationSave = () => {
    if (!location.trim()) return;

    localStorage.setItem("delivery_location", location);
  };

  return (
    <div className="bg-black w-full h-[68px] px-6 py-4 flex flex-row justify-between pt-4">
      <div className="flex items-center gap-3">
        <NomNom />
        <div className="flex flex-col">
          <p className="text-lg text-white font-normal">Nom Nom</p>
          <p className="text-xs text-white">Swift delivery</p>
        </div>
      </div>
      {token ? (
        <div className="flex items-center justify-center gap-5">
          <div className="w-[291px] h-[36px] bg-white flex items-center gap-1 rounded-2xl px-2">
            <p className="text-[12px] text-red-500 flex items-center justify-center">
              <Loc /> Delivery_address
            </p>
            <input
              className="bg-transparent outline-none text-[12px] flex-1"
              placeholder="Add location"
            />
            <Cum />
          </div>
          <button className="bg-red-600 w-[76px] h-[36px] hover:bg-white rounded-2xl">
            <p
              onClick={() => {
                localStorage.removeItem("token"), window.location.reload();
              }}
              className=" cursor-pointer text-black text-sm"
            >
              Sign out
            </p>
          </button>
        </div>
      ) : (
        <div className="flex gap-3">
          <button className="bg-white w-[76px] h-[36px] hover:bg-red-600 rounded-2xl">
            <p
              onClick={handleSignUp}
              className="cursor-pointer text-black text-sm"
            >
              Sign up
            </p>
          </button>
          <button className="bg-red-600 w-[76px] h-[36px] hover:bg-white rounded-2xl">
            <p
              onClick={handleLogIn}
              className=" cursor-pointer text-black text-sm"
            >
              Log in
            </p>
          </button>
        </div>
      )}
    </div>
  );
}
