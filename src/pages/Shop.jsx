import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Filter } from "lucide-react";
import ProductCard from "../components/ProductCard";
import { products, categories, materials, values } from "../data/products";

const Shop = () => {
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [selectedCategory, setSelectedCategory] = useState("All Products");
  const [selectedMaterial, setSelectedMaterial] = useState("All Materials");
  const [selectedValue, setSelectedValue] = useState("All Values");
  const [showFilters, setShowFilters] = useState(false);

  useEffect(() => {
    let filtered = products;

    if (selectedCategory !== "All Products") {
      filtered = filtered.filter(
        (product) => product.category === selectedCategory
      );
    }

    if (selectedMaterial !== "All Materials") {
      filtered = filtered.filter(
        (product) => product.material === selectedMaterial
      );
    }

    if (selectedValue !== "All Values") {
      filtered = filtered.filter((product) => product.value === selectedValue);
    }

    setFilteredProducts(filtered);
  }, [selectedCategory, selectedMaterial, selectedValue]);

  const resetFilters = () => {
    setSelectedCategory("All Products");
    setSelectedMaterial("All Materials");
    setSelectedValue("All Values");
  };

  return (
    <div className="min-h-screen">
      {/* Page Header */}
      <div className="bg-sage/10 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-5xl font-serif font-bold text-gray-800 mb-4">
              Our Collection
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Every piece is carefully curated for sustainability, quality, and
              timeless design
            </p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filters */}
          <div className="lg:w-64 flex-shrink-0">
            {/* Mobile Filter Toggle */}
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="lg:hidden w-full flex items-center justify-center space-x-2 bg-sage text-white px-4 py-3 rounded-lg mb-4"
            >
              <Filter className="h-5 w-5" />
              <span>Filters</span>
            </button>

            {/* Filter Panel */}
            <div
              className={`${
                showFilters ? "block" : "hidden"
              } lg:block bg-white rounded-lg shadow-md p-6 sticky top-20`}
            >
              <div className="flex items-center justify-between mb-6">
                <h2 className="font-serif text-2xl font-bold text-gray-800">
                  Filters
                </h2>
                <button
                  onClick={resetFilters}
                  className="text-sm text-sage hover:text-sage/80 transition-colors"
                >
                  Reset
                </button>
              </div>

              {/* Category Filter */}
              <div className="mb-6">
                <h3 className="font-semibold text-gray-800 mb-3">Category</h3>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <label
                      key={category}
                      className="flex items-center space-x-2 cursor-pointer"
                    >
                      <input
                        type="radio"
                        name="category"
                        value={category}
                        checked={selectedCategory === category}
                        onChange={(e) => setSelectedCategory(e.target.value)}
                        className="text-sage focus:ring-sage"
                      />
                      <span className="text-gray-600 hover:text-sage transition-colors">
                        {category}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Material Filter */}
              <div className="mb-6">
                <h3 className="font-semibold text-gray-800 mb-3">
                  Shop by Material
                </h3>
                <div className="space-y-2">
                  {materials.map((material) => (
                    <label
                      key={material}
                      className="flex items-center space-x-2 cursor-pointer"
                    >
                      <input
                        type="radio"
                        name="material"
                        value={material}
                        checked={selectedMaterial === material}
                        onChange={(e) => setSelectedMaterial(e.target.value)}
                        className="text-sage focus:ring-sage"
                      />
                      <span className="text-gray-600 hover:text-sage transition-colors">
                        {material}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Value Filter */}
              <div>
                <h3 className="font-semibold text-gray-800 mb-3">
                  Shop by Value
                </h3>
                <div className="space-y-2">
                  {values.map((value) => (
                    <label
                      key={value}
                      className="flex items-center space-x-2 cursor-pointer"
                    >
                      <input
                        type="radio"
                        name="value"
                        value={value}
                        checked={selectedValue === value}
                        onChange={(e) => setSelectedValue(e.target.value)}
                        className="text-sage focus:ring-sage"
                      />
                      <span className="text-gray-600 hover:text-sage transition-colors">
                        {value}
                      </span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Products Grid */}
          <div className="flex-1">
            <div className="mb-6 flex items-center justify-between">
              <p className="text-gray-600">
                Showing{" "}
                <span className="font-semibold">{filteredProducts.length}</span>{" "}
                products
              </p>
            </div>

            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="text-center py-20">
                <p className="text-gray-600 text-lg mb-4">
                  No products found matching your filters
                </p>
                <button
                  onClick={resetFilters}
                  className="text-sage hover:text-sage/80 transition-colors font-medium"
                >
                  Reset Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
