import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

  function Footer()  {
  return (
    <footer className="bg-purple-600 text-gray-300 py-8 mt-12 ">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* About Section */}
        <div>
          <h2 className="font-bold text-lg mb-4 text-white">About</h2>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-blue-500">
                Contact Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-500">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-500">
                Careers
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-500">
                Press
              </a>
            </li>
          </ul>
        </div>

        {/* Help Section */}
        <div>
          <h2 className="font-bold text-lg mb-4 text-white">Help</h2>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-blue-500">
                Payments
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-500">
                Shipping
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-500">
                Cancellation
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-500">
                FAQs
              </a>
            </li>
          </ul>
        </div>

        {/* Policy Section */}
        <div>
          <h2 className="font-bold text-lg mb-4 text-white">Policy</h2>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-blue-500">
                Return Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-500">
                Terms of Use
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-500">
                Privacy
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-500">
                Security
              </a>
            </li>
          </ul>
        </div>

        {/* Follow Us Section */}
        <div>
          <h2 className="font-bold text-lg mb-4 text-white">Follow Us</h2>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-300 hover:text-blue-500">
              <FontAwesomeIcon icon={faFacebookF} size="lg" />
            </a>
            <a href="#" className="text-gray-300 hover:text-blue-500">
              <FontAwesomeIcon icon={faTwitter} size="lg" />
            </a>
            <a href="#" className="text-gray-300 hover:text-blue-500">
              <FontAwesomeIcon icon={faInstagram} size="lg" />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-8 pt-4 text-center">
        <p>&copy; 2024 YourCompany. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
