import NomNom from "./icons/NomNom";

export default function Footer() {
  return (
    <footer className="bg-[#1B1B1B] text-white pt-16 pb-12 px-6">
      {/* Top Red Bar */}
      <div className="bg-[#E74C3C] w-full py-3 text-center text-lg font-semibold tracking-wide">
        Fresh fast delivered &nbsp;·&nbsp; Fresh fast delivered &nbsp;·&nbsp;
        Fresh fast delivered
      </div>

      {/* Main Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 mt-12">
        {/* Logo Section */}
        <div className="flex flex-col items-start space-y-3">
          <NomNom />
          <div className="text-2xl font-bold">NomNom</div>
          <div className="text-sm text-gray-300">Swift delivery</div>
        </div>

        {/* NomNom Links */}
        <div>
          <h3 className="text-gray-400 mb-4 font-semibold tracking-wide uppercase text-sm">
            NOMNOM
          </h3>
          <ul className="space-y-2 text-sm">
            {["Home", "Contact us", "Delivery zone"].map((item) => (
              <li
                key={item}
                className="hover:text-white cursor-pointer transition-colors duration-200"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Menu Links */}
        <div>
          <h3 className="text-gray-400 mb-4 font-semibold tracking-wide uppercase text-sm">
            MENU
          </h3>
          <ul className="space-y-2 text-sm">
            {["Appetizers", "Salads", "Pizzas", "Main dishes", "Desserts"].map(
              (item) => (
                <li
                  key={item}
                  className="hover:text-white cursor-pointer transition-colors duration-200"
                >
                  {item}
                </li>
              )
            )}
          </ul>
        </div>

        {/* Right Menu + Social */}
        <div>
          <h3 className="text-gray-400 mb-4 font-semibold tracking-wide uppercase text-sm">
            MENU
          </h3>
          <ul className="space-y-2 text-sm">
            {[
              "Side dish",
              "Brunch",
              "Desserts",
              "Beverages",
              "Fish & Sea foods",
            ].map((item) => (
              <li
                key={item}
                className="hover:text-white cursor-pointer transition-colors duration-200"
              >
                {item}
              </li>
            ))}
          </ul>

          <h3 className="text-gray-400 mt-8 mb-3 font-semibold tracking-wide uppercase text-sm">
            FOLLOW US
          </h3>
          <div className="flex space-x-4">
            <img
              src="./Facebook.png"
              alt="Facebook"
              className="w-8 h-8 hover:scale-110 transition-transform duration-200"
            />
            <img
              src="./Instagram.png"
              alt="Instagram"
              className="w-8 h-8 hover:scale-110 transition-transform duration-200"
            />
          </div>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="border-t border-gray-600 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400 max-w-6xl mx-auto gap-4 md:gap-0">
        <span>© 2024 NomNom LLC. All rights reserved.</span>
        <div className="flex flex-wrap gap-6">
          {["Privacy policy", "Terms and condition", "Cookie policy"].map(
            (item) => (
              <span
                key={item}
                className="hover:text-white cursor-pointer transition-colors duration-200"
              >
                {item}
              </span>
            )
          )}
        </div>
      </div>
    </footer>
  );
}
