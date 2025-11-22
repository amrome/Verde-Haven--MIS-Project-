import { Link } from "react-router-dom";
import { Leaf, Facebook, Instagram, Twitter, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-sage/10 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <Leaf className="h-8 w-8 text-sage" />
              <span className="text-2xl font-serif font-bold text-sage">
                Verde Haven
              </span>
            </Link>
            <p className="text-gray-600 mb-4 max-w-md">
              Bridging the gap between high-end interior design and
              environmental responsibility. Style rooted in earth.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-sage hover:text-sage/70 transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-sage hover:text-sage/70 transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-sage hover:text-sage/70 transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-sage hover:text-sage/70 transition-colors"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-serif font-semibold text-lg mb-4 text-gray-800">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/shop"
                  className="text-gray-600 hover:text-sage transition-colors"
                >
                  Shop All
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-gray-600 hover:text-sage transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/cart"
                  className="text-gray-600 hover:text-sage transition-colors"
                >
                  Cart
                </Link>
              </li>
            </ul>
          </div>

          {/* Shop By */}
          <div>
            <h3 className="font-serif font-semibold text-lg mb-4 text-gray-800">
              Shop By
            </h3>
            <ul className="space-y-2">
              <li className="text-gray-600">Bamboo</li>
              <li className="text-gray-600">Recycled Glass</li>
              <li className="text-gray-600">Organic Cotton</li>
              <li className="text-gray-600">Reclaimed Wood</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-sage/20 mt-8 pt-8 text-center text-gray-600 text-sm">
          <p>
            &copy; {new Date().getFullYear()} Verde Haven. All rights reserved.
            Made with sustainable code.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
