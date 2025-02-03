"use client"

import { useState } from "react"
import {
  Search,
  CircleUserRound,
  ShoppingCart,
  Store,
  Menu,
  X,
  EllipsisVertical,
  User,
  Crown,
  Package,
  Heart,
  Gift,
  CreditCard,
  Bell,
  Headphones,
  TrendingUp,
  Download,
} from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu"

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="bg-white w-full shadow-md fixed top-0 z-10">
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
            <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          <div className="relative w-full md:flex-1">
            <Search size={20} className="text-gray-400 absolute top-2.5 left-3" />
            <input
              type="text"
              placeholder="Search for products, brands and more"
              className="w-full px-4 py-2 bg-[#F0F5FE] border border-gray-200 rounded-lg focus:outline-none pl-10 text-sm"
            />
          </div>

          <div className="hidden md:flex items-center space-x-6">
            <DropdownMenu>
              <DropdownMenuTrigger className="focus:outline-none">
                <div className="text-gray-600 hover:text-blue-500 flex items-center gap-1 whitespace-nowrap">
                  <CircleUserRound size={20} />
                  <span className="text-sm font-medium">Login</span>
                </div>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56 bg-white border-0">
                <div className="flex items-center justify-between px-4 py-2 bg-gray-50">
                  <span className="text-sm text-gray-600">New customer?</span>
                  <a href="#" className="text-sm font-medium text-blue-600 hover:text-blue-700">
                    Sign Up
                  </a>
                </div>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <User className="mr-2 h-4 w-4" />
                  <span>My Profile</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Crown className="mr-2 h-4 w-4" />
                  <span>Flipkart Plus Zone</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Package className="mr-2 h-4 w-4" />
                  <span>Orders</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Heart className="mr-2 h-4 w-4" />
                  <span>Wishlist</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Gift className="mr-2 h-4 w-4" />
                  <span>Rewards</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <CreditCard className="mr-2 h-4 w-4" />
                  <span>Gift Cards</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <a href="#" className="text-gray-600 hover:text-blue-500 flex items-center gap-1 whitespace-nowrap">
              <ShoppingCart size={20} />
              <span className="text-sm font-medium">Cart</span>
            </a>
            <a href="#" className="text-gray-600 hover:text-blue-500 flex items-center gap-1 whitespace-nowrap">
              <Store size={20} />
              <span className="text-sm font-medium">Become a Seller</span>
            </a>

            <DropdownMenu>
              <DropdownMenuTrigger className="focus:outline-none">
                <div className="text-gray-600 hover:text-blue-500">
                  <EllipsisVertical size={20} />
                </div>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56 bg-white border-0 mt-5">
                <DropdownMenuItem>
                  <Bell className="mr-2 h-4 w-4" />
                  <span>Notification Preferences</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Headphones className="mr-2 h-4 w-4" />
                  <span>24x7 Customer Care</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <TrendingUp className="mr-2 h-4 w-4" />
                  <span>Advertise</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Download className="mr-2 h-4 w-4" />
                  <span>Download App</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 space-y-4">
            <a href="#" className="block text-gray-600 hover:text-blue-500 py-2">
              <CircleUserRound className="inline-block mr-2" size={20} />
              <span className="text-sm font-medium">Login</span>
            </a>
            <a href="#" className="block text-gray-600 hover:text-blue-500 py-2">
              <ShoppingCart className="inline-block mr-2" size={20} />
              <span className="text-sm font-medium">Cart</span>
            </a>
            <a href="#" className="block text-gray-600 hover:text-blue-500 py-2">
              <Store className="inline-block mr-2" size={20} />
              <span className="text-sm font-medium">Become a Seller</span>
            </a>
            <div className="border-t pt-2">
              <div className="text-sm font-medium text-gray-600 mb-2 px-2">More</div>
              <a href="#" className="block text-gray-600 hover:text-blue-500 py-2">
                <Bell className="inline-block mr-2" size={20} />
                <span className="text-sm">Notification Preferences</span>
              </a>
              <a href="#" className="block text-gray-600 hover:text-blue-500 py-2">
                <Headphones className="inline-block mr-2" size={20} />
                <span className="text-sm">24x7 Customer Care</span>
              </a>
              <a href="#" className="block text-gray-600 hover:text-blue-500 py-2">
                <TrendingUp className="inline-block mr-2" size={20} />
                <span className="text-sm">Advertise</span>
              </a>
              <a href="#" className="block text-gray-600 hover:text-blue-500 py-2">
                <Download className="inline-block mr-2" size={20} />
                <span className="text-sm">Download App</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar

