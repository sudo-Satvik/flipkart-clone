import { useState } from "react";
import {
  Search,
  CircleUserRound,
  ShoppingCart,
  Store,
  Menu,
  X,
} from "lucide-react";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white w-full shadow-md">
      <div className="container mx-auto px-4 py-2 md:py-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center justify-between w-full md:w-auto">
            <a href="/" className="mr-4">
              <img
                src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/fkheaderlogo_exploreplus-44005d.svg"
                alt="logo"
                className="h-6 md:h-8"
              />
            </a>
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          <div className="relative w-full md:flex-1">
            <Search
              size={20}
              className="text-gray-400 absolute top-2.5 left-3"
            />
            <input
              type="text"
              placeholder="Search for products, brands and more"
              className="w-full px-4 py-2 bg-[#F0F5FE] border border-gray-200 rounded-lg focus:outline-none pl-10 text-sm"
            />
          </div>

          <div className="hidden md:flex items-center space-x-6">
            <a
              href="#"
              className="text-gray-600 hover:text-blue-500 flex items-center gap-1 whitespace-nowrap"
            >
              <CircleUserRound size={20} />
              <span className="text-sm font-medium">Login</span>
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-blue-500 flex items-center gap-1 whitespace-nowrap"
            >
              <ShoppingCart size={20} />
              <span className="text-sm font-medium">Cart</span>
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-blue-500 flex items-center gap-1 whitespace-nowrap"
            >
              <Store size={20} />
              <span className="text-sm font-medium">Become a Seller</span>
            </a>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 space-y-4">
            <a
              href="#"
              className="block text-gray-600 hover:text-blue-500 py-2"
            >
              <CircleUserRound className="inline-block mr-2" size={20} />
              <span className="text-sm font-medium">Login</span>
            </a>
            <a
              href="#"
              className="block text-gray-600 hover:text-blue-500 py-2"
            >
              <ShoppingCart className="inline-block mr-2" size={20} />
              <span className="text-sm font-medium">Cart</span>
            </a>
            <a
              href="#"
              className="block text-gray-600 hover:text-blue-500 py-2"
            >
              <Store className="inline-block mr-2" size={20} />
              <span className="text-sm font-medium">Become a Seller</span>
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
