// app/admin/orders/page.js
"use client";

import { useState } from "react";
import Image from "next/image";

const orders = [
  {
    id: "ORD-001",
    customer: "Test@gmail.com",
    date: "2024/12/20",
    total: 26.97,
    address: "2024/12/СБД, 12-р хороо, СБД нэгдсэн эмнэлэг ...",
    status: "Pending",
    items: [
      {
        name: "Sunshine Stackers",
        quantity: 1,
        image:
          "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=500&auto=format",
      },
      {
        name: "Sunshine Stackers",
        quantity: 1,
        image:
          "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=500&auto=format",
      },
    ],
  },
  // бусад захиалгууд...
];

export default function Order() {
  const [expanded, setExpanded] = useState({});

  const toggleExpand = (id) => {
    setExpanded((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const getStatusColor = (status) => {
    const s = status.toLowerCase();
    if (s === "pending")
      return "bg-orange-100 text-orange-800 border-orange-300";
    if (s === "delivered")
      return "bg-green-100 text-green-800 border-green-300";
    if (s === "cancelled") return "bg-red-100 text-red-800 border-red-300";
    return "bg-gray-100 text-gray-800 border-gray-300";
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold text-gray-900">Захиалгууд</h1>
          <div className="text-sm text-gray-500">
            13 June 2023 - 14 July 2023
          </div>
        </div>

        <div className="bg-white shadow rounded-lg overflow-hidden">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase w-10"></th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  №
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Хэрэглэгч
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Хоол
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Огноо
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Нийт
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Хүргэлтийн хаяг
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Төлөв
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {orders.map((order) => {
                const isExpanded = expanded[order.id];
                return (
                  <React.Fragment key={order.id}>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4">
                        <button onClick={() => toggleExpand(order.id)}>
                          {isExpanded ? "▲" : "▼"}
                        </button>
                      </td>
                      <td className="px-6 py-4 font-medium">1</td>
                      <td className="px-6 py-4">{order.customer}</td>
                      <td className="px-6 py-4">{order.items.length} хоол</td>
                      <td className="px-6 py-4">{order.date}</td>
                      <td className="px-6 py-4 font-medium">
                        ${order.total.toFixed(2)}
                      </td>
                      <td className="px-6 py-4 text-sm max-w-xs truncate">
                        {order.address}
                      </td>
                      <td className="px-6 py-4">
                        <span
                          className={`px-2.5 py-1.5 text-xs font-medium rounded-full border ${getStatusColor(
                            order.status
                          )}`}
                        >
                          {order.status}
                        </span>
                      </td>
                    </tr>

                    {isExpanded && (
                      <tr>
                        <td colSpan={8} className="p-0">
                          <div className="bg-gray-50 px-12 py-4 space-y-4">
                            {order.items.map((item, i) => (
                              <div key={i} className="flex items-center gap-4">
                                <div className="relative w-16 h-16 rounded border overflow-hidden">
                                  <Image
                                    src={item.image}
                                    alt={item.name}
                                    fill
                                    className="object-cover"
                                  />
                                </div>
                                <div>
                                  <div className="font-medium">{item.name}</div>
                                  <div className="text-sm text-gray-500">
                                    x{item.quantity}
                                  </div>
                                </div>
                                <div className="ml-auto font-medium">
                                  $
                                  {(order.total / order.items.length).toFixed(
                                    2
                                  )}
                                </div>
                              </div>
                            ))}
                          </div>
                        </td>
                      </tr>
                    )}
                  </React.Fragment>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
