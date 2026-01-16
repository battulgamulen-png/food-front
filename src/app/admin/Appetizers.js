"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Image from "next/image";
import Pencil from "../icons/Pencil";

export function Appetizers() {
  const [dishes, setDishes] = useState([
    {
      id: 1,
      name: "Brie Crostini Appetizer",
      price: 12.99,
      description: "Fluffy pancakes with fruits and cream.",
      image: "/Food1.png",
    },
  ]);

  // Modal states
  const [open, setOpen] = useState(false);
  const [editingDish, setEditingDish] = useState(null);

  // Form states
  const [form, setForm] = useState({
    id: null,
    name: "",
    price: "",
    description: "",
    image: null,
  });

  const [preview, setPreview] = useState(null);

  // Open ADD modal
  const openAddModal = () => {
    setEditingDish(null);
    setPreview(null);
    setForm({
      id: null,
      name: "",
      price: "",
      description: "",
      image: null,
    });
    setOpen(true);
  };

  // Open EDIT modal
  const openEditModal = (dish) => {
    setEditingDish(dish);
    setPreview(dish.image || null);
    setForm({
      id: dish.id,
      name: dish.name,
      price: dish.price,
      description: dish.description,
      image: dish.image || null,
    });
    setOpen(true);
  };

  // Submit (add or edit)
  const handleSubmit = () => {
    if (editingDish) {
      // Update
      setDishes((prev) =>
        prev.map((d) => (d.id === form.id ? { ...form } : d))
      );
    } else {
      // Add
      setDishes((prev) => [...prev, { ...form, id: Date.now() }]);
    }
    setOpen(false);
  };

  // Delete dish
  const deleteDish = (id) => {
    setDishes((prev) => prev.filter((d) => d.id !== id));
  };

  // Upload image
  const handleImage = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const url = URL.createObjectURL(file);
    setPreview(url);
    setForm((p) => ({ ...p, image: url }));
  };

  return (
    <>
      {/* Add/Edit Modal */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-[400px]">
          <DialogHeader>
            <DialogTitle>
              {editingDish ? "Edit Dish" : "Add New Dish"}
            </DialogTitle>
          </DialogHeader>

          <div className="flex flex-col gap-4">
            <div>
              <Label>Name</Label>
              <Input
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
              />
            </div>

            <div>
              <Label>Price</Label>
              <Input
                type="number"
                value={form.price}
                onChange={(e) => setForm({ ...form, price: e.target.value })}
              />
            </div>

            <div>
              <Label>Description</Label>
              <Input
                value={form.description}
                onChange={(e) =>
                  setForm({
                    ...form,
                    description: e.target.value,
                  })
                }
              />
            </div>

            <div>
              <Label>Image</Label>
              <Input type="file" accept="image/*" onChange={handleImage} />

              {preview ? (
                <Image
                  src={preview}
                  width={200}
                  height={120}
                  className="rounded mt-2 object-cover"
                  alt="Preview"
                />
              ) : (
                <div className="w-[200px] h-[120px] mt-2 bg-gray-200 flex items-center justify-center rounded">
                  <p className="text-gray-600 text-sm">No Image</p>
                </div>
              )}
            </div>
          </div>

          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button onClick={handleSubmit}>
              {editingDish ? "Save" : "Add"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Main UI */}
      <div className="w-[1171px] bg-white rounded-2xl p-5">
        <div className="text-[24px] font-semibold mb-4">Appetizers</div>

        <div className="flex flex-row gap-4 flex-wrap">
          {/* Add new dish */}
          <div className="flex flex-col w-[270px] h-[241px]">
            <div
              className="border-2 border-dashed border-red-300 bg-white h-[250px] rounded-xl flex flex-col justify-center items-center cursor-pointer"
              onClick={openAddModal}
            >
              <div className="w-10 h-10 flex items-center justify-center bg-red-500 text-white rounded-full text-3xl">
                +
              </div>
              <p className="mt-3 text-gray-600 text-[15px]">
                Add new Dish to <br /> Appetizers
              </p>
            </div>
          </div>

          {/* Dish items */}
          {dishes.map((dish) => (
            <div
              key={dish.id}
              className="bg-white rounded-xl shadow w-[270px] h-[241px] p-3 pb-4 border relative"
            >
              <div className="relative h-[129px] w-[238px] rounded-lg overflow-hidden mb-3">
                {dish.image ? (
                  <Image
                    src={dish.image}
                    fill
                    className="object-cover"
                    alt={dish.name}
                  />
                ) : (
                  <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                    <p className="text-gray-600 text-sm">No Image</p>
                  </div>
                )}

                <button
                  className="absolute bottom-2 right-2 bg-white rounded-full p-2 shadow"
                  onClick={() => openEditModal(dish)}
                >
                  <Pencil size={18} className="text-red-500" />
                </button>
              </div>

              <div className="flex flex-row gap-2.5">
                <p className="text-red-500 text-[14px]">{dish.name}</p>
                <p className="text-black text-[12px]">${dish.price}</p>
              </div>

              <p className="text-black text-[12px]">{dish.description}</p>

              <button
                className="absolute top-2 right-2 text-red-700 text-[22px] leading-none"
                onClick={() => deleteDish(dish.id)}
              >
                ×
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
