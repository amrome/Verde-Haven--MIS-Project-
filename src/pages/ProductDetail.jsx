import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ShoppingCart, Leaf, Users, TrendingUp } from "lucide-react";
import { products } from "../data/products";
import { useCart } from "../context/CartContext";

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState("story");

  const product = products.find((p) => p.id === parseInt(id));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-serif font-bold text-gray-800 mb-4">
            Product not found
          </h2>
          <button
            onClick={() => navigate("/shop")}
            className="text-sage hover:text-sage/80 transition-colors"
          >
            Return to Shop
          </button>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(product, quantity);
  };

  const relatedProducts = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 3);

  return (
    <div className="min-h-screen">
      {/* Back Button */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center space-x-2 text-gray-600 hover:text-sage transition-colors"
        >
          <ArrowLeft className="h-5 w-5" />
          <span>Back</span>
        </button>
      </div>

      {/* Product Details */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Image Gallery */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <div className="aspect-square rounded-lg overflow-hidden shadow-xl">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          {/* Product Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div>
              <p className="text-sm text-gray-500 uppercase tracking-wider mb-2">
                {product.category}
              </p>
              <h1 className="text-4xl font-serif font-bold text-gray-800 mb-4">
                {product.name}
              </h1>
              <p className="text-3xl font-bold text-terracotta mb-4">
                {product.price} SAR
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="bg-sage text-white text-sm px-3 py-1 rounded-full">
                  {product.ecoTag}
                </span>
                <span className="bg-terracotta/20 text-terracotta text-sm px-3 py-1 rounded-full">
                  {product.material}
                </span>
                <span className="bg-sage/20 text-sage text-sm px-3 py-1 rounded-full">
                  {product.value}
                </span>
              </div>
              <p className="text-gray-600 text-lg leading-relaxed">
                {product.description}
              </p>
            </div>

            {/* Quantity and Add to Cart */}
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <label className="text-gray-700 font-medium">Quantity:</label>
                <div className="flex items-center space-x-3">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-10 h-10 rounded-full border-2 border-sage text-sage hover:bg-sage hover:text-white transition-colors"
                  >
                    -
                  </button>
                  <span className="text-xl font-semibold w-8 text-center">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-10 h-10 rounded-full border-2 border-sage text-sage hover:bg-sage hover:text-white transition-colors"
                  >
                    +
                  </button>
                </div>
              </div>

              <button
                onClick={handleAddToCart}
                className="w-full flex items-center justify-center space-x-2 bg-sage text-white px-8 py-4 rounded-lg font-medium text-lg hover:bg-sage/90 transition-colors"
              >
                <ShoppingCart className="h-6 w-6" />
                <span>Add to Cart</span>
              </button>
            </div>

            {/* Key Features */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t">
              <div className="text-center">
                <Leaf className="h-8 w-8 text-sage mx-auto mb-2" />
                <p className="text-sm text-gray-600">Sustainable</p>
              </div>
              <div className="text-center">
                <Users className="h-8 w-8 text-sage mx-auto mb-2" />
                <p className="text-sm text-gray-600">Fair Trade</p>
              </div>
              <div className="text-center">
                <TrendingUp className="h-8 w-8 text-sage mx-auto mb-2" />
                <p className="text-sm text-gray-600">Quality</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Tabs Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16"
        >
          <div className="border-b">
            <div className="flex space-x-8">
              <button
                onClick={() => setActiveTab("story")}
                className={`pb-4 font-medium transition-colors ${
                  activeTab === "story"
                    ? "text-sage border-b-2 border-sage"
                    : "text-gray-500 hover:text-sage"
                }`}
              >
                Story of the Artisan
              </button>
              <button
                onClick={() => setActiveTab("impact")}
                className={`pb-4 font-medium transition-colors ${
                  activeTab === "impact"
                    ? "text-sage border-b-2 border-sage"
                    : "text-gray-500 hover:text-sage"
                }`}
              >
                Sustainability Impact
              </button>
            </div>
          </div>

          <div className="py-8">
            {activeTab === "story" ? (
              <div className="prose max-w-none">
                <p className="text-gray-700 text-lg leading-relaxed">
                  {product.artisan}
                </p>
              </div>
            ) : (
              <div className="bg-sage/5 rounded-lg p-6">
                <h3 className="font-serif text-2xl font-bold text-gray-800 mb-4">
                  Environmental Impact
                </h3>
                <div className="space-y-3">
                  {product.impact.split("•").map(
                    (item, index) =>
                      item.trim() && (
                        <div key={index} className="flex items-start space-x-3">
                          <Leaf className="h-5 w-5 text-sage flex-shrink-0 mt-1" />
                          <p className="text-gray-700">{item.trim()}</p>
                        </div>
                      )
                  )}
                </div>
              </div>
            )}
          </div>
        </motion.div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-20"
          >
            <h2 className="text-3xl font-serif font-bold text-gray-800 mb-8">
              You May Also Like
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedProducts.map((product) => (
                <div key={product.id}>
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full aspect-square object-cover rounded-lg mb-4 cursor-pointer hover:shadow-lg transition-shadow"
                    onClick={() => navigate(`/product/${product.id}`)}
                  />
                  <h3 className="font-serif font-semibold text-lg text-gray-800 mb-2">
                    {product.name}
                  </h3>
                  <p className="text-terracotta font-bold">
                    {product.price} SAR
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default ProductDetail;
