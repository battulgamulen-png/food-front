import NomNom from "./icons/NomNom";

export default function Footer() {
  return (
    <footer className="bg-[#1B1B1B] text-white pt-16 pb-10 px-6">
      {/* Top red bar */}
      <div className="bg-[#E74C3C] w-full text-white py-3 text-center text-lg font-medium">
        Fresh fast delivered &nbsp;·&nbsp; Fresh fast delivered &nbsp;·&nbsp;
        Fresh fast delivered
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 mt-10">
        {/* Logo Section */}
        <div>
          <div className="flex items-center space-x-3">
            <div>
              <NomNom />
              <div className="text-xl font-semibold">NomNom</div>
              <div className="text-sm text-gray-300">Swift delivery</div>
            </div>
          </div>
        </div>

        {/* Nomnom Links */}
        <div>
          <h3 className="text-gray-400 mb-4">NOMNOM</h3>
          <ul className="space-y-2 text-sm">
            <li>Home</li>
            <li>Contact us</li>
            <li>Delivery zone</li>
          </ul>
        </div>

        {/* Menu Links */}
        <div>
          <h3 className="text-gray-400 mb-4">MENU</h3>
          <ul className="space-y-2 text-sm">
            <li>Appetizers</li>
            <li>Salads</li>
            <li>Pizzas</li>
            <li>Main dishes</li>
            <li>Desserts</li>
          </ul>
        </div>

        {/* Right Menu */}
        <div>
          <h3 className="text-gray-400 mb-4">MENU</h3>
          <ul className="space-y-2 text-sm">
            <li>Side dish</li>
            <li>Brunch</li>
            <li>Desserts</li>
            <li>Beverages</li>
            <li>Fish & Sea foods</li>
          </ul>

          <h3 className="text-gray-400 mt-8 mb-3">FOLLOW US</h3>
          <div className="flex flex-row w-[28px] h-[28px]">
            <img src="./Facebook.png" />
            <img src="./Instagram.png" />
          </div>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="border-t border-gray-600 mt-10 pt-6 flex flex-wrap justify-between text-sm text-gray-400 max-w-6xl mx-auto">
        <span>Copy right 2024 © Nomnom LLC</span>
        <div className="flex space-x-6">
          <span>Privacy policy</span>
          <span>Terms and conditoin</span>
          <span>Cookie policy</span>
        </div>
      </div>
    </footer>
  );
}
