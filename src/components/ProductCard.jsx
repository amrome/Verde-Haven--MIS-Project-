import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { ShoppingCart } from "lucide-react";

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  const handleAddToCart = (e) => {
    e.preventDefault();
    addToCart(product);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      whileHover={{ y: -5 }}
      className="group"
    >
      <Link to={`/product/${product.id}`} className="block">
        <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
          {/* Image */}
          <div className="relative overflow-hidden aspect-square">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
            {/* Eco Tag */}
            <div className="absolute top-3 left-3">
              <span className="bg-sage text-white text-xs px-3 py-1 rounded-full font-medium">
                {product.ecoTag}
              </span>
            </div>
          </div>

          {/* Content */}
          <div className="p-5">
            <p className="text-xs text-gray-500 uppercase tracking-wider mb-2">
              {product.category}
            </p>
            <h3 className="font-serif text-lg font-semibold text-gray-800 mb-2 line-clamp-2 group-hover:text-sage transition-colors">
              {product.name}
            </h3>
            <div className="flex items-center justify-between">
              <p className="text-xl font-bold text-terracotta">
                {product.price} SAR
              </p>
              <button
                onClick={handleAddToCart}
                className="bg-sage text-white p-2 rounded-full hover:bg-sage/90 transition-colors"
                aria-label="Add to cart"
              >
                <ShoppingCart className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default ProductCard;
