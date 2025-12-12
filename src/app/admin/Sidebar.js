import NomNom from "../icons/NomNom";
import Menu from "../icons/Menu";
import Car from "../icons/Car";

export function Sidebar({ setSelectedMenu }) {
  const handleMenuSelect = (menu) => {
    setSelectedMenu(menu);
  };
  return (
    <div className="w-[205px] h-screen bg-white pt-9 flex flex-col items-center sticky top-0">
      <div className="flex flex-row justify-center">
        <div>
          <NomNom />
        </div>

        <div className="flex flex-col">
          <p className="normal text-lg">Nom Nom</p>
          <p className="text-xs text-[#71717A]">Swift delivery</p>
        </div>
      </div>

      <div className="flex gap-2.5 flex-col pt-10">
        <button className="w-[165px] h-10 flex items-center justify-center rounded-4xl transition-all  duration-200 hover:bg-black hover:text-white gap-2">
          <Menu />
          <p onClick={() => handleMenuSelect("menu")}>Food menu</p>
        </button>

        <button className="w-[165px] h-10 flex items-center justify-center rounded-4xl transition-all duration-200 hover:bg-black hover:text-white gap-2">
          <Car />
          <p onClick={() => handleMenuSelect("order")}>Orders</p>
        </button>
      </div>
    </div>
  );
}
