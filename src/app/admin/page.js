"use client";

import { Categories } from "./ Categories";
import { Appetizers } from "./Appetizers";
import { Dialog, Dialogs } from "./Dialog";
import { Order } from "./Order";
import { Salads } from "./Salads";
import { Sidebar } from "./Sidebar";
import { useState } from "react";

export default function AdminPage() {
  const [addDishClicked, setAddDishClicked] = useState(false);
  const [selectedMenu, setSelectedMenu] = useState("menu");

  return (
    <div className="flex bg-black ">
      <Sidebar setSelectedMenu={setSelectedMenu} />
      {selectedMenu === "menu" && (
        <div className="flex flex-col pt-4 gap-5 pl-6">
          {/* <User /> */}
          <Categories />
          <Appetizers
            addDishClicked={addDishClicked}
            setAddDishClicked={setAddDishClicked}
          />

          <Salads />
        </div>
      )}
      {selectedMenu === "order" && (
        <div>
          <Order />
        </div>
      )}
      {addDishClicked && <Appetizers /> && (
        <div>
          <Dialogs
            addDishClicked={addDishClicked}
            setAddDishClicked={setAddDishClicked}
          />
        </div>
      )}
    </div>
  );
}
