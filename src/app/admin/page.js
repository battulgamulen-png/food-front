"use client";

import { useState } from "react";

import { Appetizers } from "./Appetizers";
import { Dialogs } from "./Dialog";

import { Sidebar } from "./Sidebar";
import { Categories } from "./ Categories";
import Order from "./Order";

export default function AdminPage() {
  const [addDishClicked, setAddDishClicked] = useState(false);
  const [selectedMenu, setSelectedMenu] = useState("menu");

  return (
    <div className="flex bg-black min-h-screen">
      {/* Sidebar */}
      <Sidebar setSelectedMenu={setSelectedMenu} />

      {/* Main Content */}
      <div className="flex-1 p-6 flex flex-col gap-5">
        {selectedMenu === "menu" && (
          <>
            <Categories />

            <Appetizers
              addDishClicked={addDishClicked}
              setAddDishClicked={setAddDishClicked}
            />
          </>
        )}

        {selectedMenu === "Order" && <Order />}

        {/* Dialog for adding dish */}
        {addDishClicked && (
          <Dialogs
            addDishClicked={addDishClicked}
            setAddDishClicked={setAddDishClicked}
          />
        )}
      </div>
    </div>
  );
}
