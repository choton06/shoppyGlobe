import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faCartPlus, faUser, faBasketShopping, faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { setSearchText } from "../Utils/searchSlice";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchText, setsearchText] = useState("");
  const items = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function HandleSearch() {
    dispatch(setSearchText(searchText));
    navigate("/");
  }

  return (
    <header className="bg-purple-500 shadow-md sticky top-0 z-50">
      {/* Container */}
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo Section */}
        <div className="flex items-center text-xl font-bold text-white space-x-2 ml-4">
          <FontAwesomeIcon icon={faBasketShopping} size="lg" className="text-yellow-300" />
          <Link to="/" className="hover:text-yellow-300 text-white">
            ShoppyGlobal
          </Link>
        </div>

        {/* Hamburger Menu Icon for Mobile */}
        <button
          className="sm:hidden text-white focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} size="lg" />
        </button>

        {/* Desktop Navigation Links */}
        <nav className="hidden sm:flex space-x-6 text-white font-medium ml-10">
          <Link to="/" className="hover:text-yellow-300">
            Home
          </Link>
          <Link to="/about" className="hover:text-yellow-300">
            About
          </Link>
          <Link to="/contact" className="hover:text-yellow-300">
            Contact
          </Link>
          <Link to="/checkout" className="hover:text-yellow-300">
            Checkout
          </Link>
        </nav>

        {/* Search Bar */}
        <div className="hidden sm:flex flex-1 mx-4 md:ml-16 relative">
          <input
            type="text"
            placeholder="Search for products..."
            onChange={(e) => setsearchText(e.target.value)}
            className="w-full border-2 border-white bg-transparent text-white px-4 py-2 rounded-l-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
          />
          <button
            className="absolute right-0 top-0 bottom-0 bg-yellow-500 text-white px-4 py-2 rounded-r-md hover:bg-yellow-400 focus:outline-none"
            onClick={HandleSearch}
          >
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </div>

        {/* Icons Section */}
        <div className="flex items-center space-x-6 text-white">
          {/* User Icon */}
          <div className="relative">
            <FontAwesomeIcon
              icon={faUser}
              size="lg"
              className="cursor-pointer hover:text-yellow-300"
            />
          </div>

          {/* Shopping Cart Icon */}
          <div className="relative">
            <Link to="/cart">
              <FontAwesomeIcon
                icon={faCartPlus}
                size="lg"
                className="cursor-pointer hover:text-yellow-300"
              />
            </Link>
            {items.length > 0 && (
              <span className="absolute -top-2 -right-3 bg-red-500 text-white text-xs rounded-full px-2">
                {items.length}
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div className="sm:hidden bg-purple-600 text-white">
          <nav className="flex flex-col items-center space-y-4 py-4">
            <Link
              to="/"
              className="text-lg font-medium hover:text-yellow-300"
              onClick={() => setMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/about"
              className="text-lg font-medium hover:text-yellow-300"
              onClick={() => setMenuOpen(false)}
            >
              About
            </Link>
            <Link
              to="/contact"
              className="text-lg font-medium hover:text-yellow-300"
              onClick={() => setMenuOpen(false)}
            >
              Contact
            </Link>
            <Link
              to="/checkout"
              className="text-lg font-medium hover:text-yellow-300"
              onClick={() => setMenuOpen(false)}
            >
              Checkout
            </Link>
          </nav>

          {/* Mobile Search Bar */}
          <div className="flex px-4 pb-3">
            <input
              type="text"
              placeholder="Search for products..."
              onChange={(e) => setsearchText(e.target.value)}
              className="w-full border-2 border-white bg-transparent text-white px-4 py-2 rounded-l-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
            <button
              className="bg-yellow-500 text-white px-4 py-2 rounded-r-md hover:bg-yellow-400 focus:outline-none"
              onClick={HandleSearch}
            >
              <FontAwesomeIcon icon={faSearch} />
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;





