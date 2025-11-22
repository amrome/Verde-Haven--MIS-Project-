import { motion } from "framer-motion";
import { Leaf, Heart, Users, Target, Award, TreePine } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=1600)",
          }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center text-white px-4"
        >
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-4">
            About Verde Haven
          </h1>
          <p className="text-xl md:text-2xl max-w-2xl mx-auto">
            Where sustainability meets sophistication
          </p>
        </motion.div>
      </section>

      {/* Mission Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center space-x-3 mb-6">
              <Target className="h-10 w-10 text-sage" />
              <h2 className="text-4xl font-serif font-bold text-gray-800">
                Our Mission
              </h2>
            </div>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Verde Haven was born from a simple belief:{" "}
              <strong>
                sustainability should not require a sacrifice in style
              </strong>
              . We bridge the gap between high-end interior design and
              environmental responsibility, proving that conscious consumption
              can be beautiful.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Every product in our collection is made exclusively from
              reclaimed, biodegradable, or ethically sourced materials. We
              partner directly with artisans who share our commitment to
              craftsmanship and planetary health.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <img
              src="https://images.unsplash.com/photo-1556909172-54557c7e4fb7?w=800"
              alt="Sustainable craftsmanship"
              className="rounded-lg shadow-2xl"
            />
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-sage/5 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-800 mb-4">
              Our Core Values
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The principles that guide every decision we make
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Leaf,
                title: "Environmental Stewardship",
                description:
                  "We source only materials that regenerate, recycle, or restore—never deplete. From reclaimed wood to organic cotton, every choice honors the earth.",
              },
              {
                icon: Users,
                title: "Fair Trade & Transparency",
                description:
                  "We know the name of every artisan who touches our products. Fair wages, safe conditions, and honest storytelling are non-negotiable.",
              },
              {
                icon: Award,
                title: "Timeless Quality",
                description:
                  'We reject "fast furniture" in favor of heirloom pieces. Our products are designed to last generations, reducing waste and celebrating craftsmanship.',
              },
            ].map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-lg p-8 shadow-md hover:shadow-xl transition-shadow"
              >
                <value.icon className="h-12 w-12 text-sage mb-4" />
                <h3 className="font-serif text-2xl font-bold text-gray-800 mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* The Conscious Consumer */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-2 lg:order-1"
          >
            <img
              src="https://images.unsplash.com/photo-1556912173-46c336c7fd55?w=800"
              alt="Modern sustainable living"
              className="rounded-lg shadow-2xl"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-1 lg:order-2"
          >
            <div className="flex items-center space-x-3 mb-6">
              <Heart className="h-10 w-10 text-terracotta" />
              <h2 className="text-4xl font-serif font-bold text-gray-800">
                For the Conscious Consumer
              </h2>
            </div>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              We designed Verde Haven for <strong>"Eco-Conscious Erin"</strong>
              —the 25-40 year old urban dweller who wants a beautiful home but
              refuses to compromise the planet's future.
            </p>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              You're tired of "greenwashing" from major retailers. You're priced
              out of ultra-luxury ethical brands. You deserve better.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Verde Haven offers{" "}
              <strong>accessible entry-level sustainable decor</strong> without
              sacrificing quality, transparency, or style. This is design with
              integrity.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="bg-sage text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-serif font-bold mb-4">
              Our Impact So Far
            </h2>
            <p className="text-lg opacity-90">
              Together, we're making a difference
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { number: "10,000+", label: "Items Saved from Landfills" },
              { number: "250+", label: "Artisan Families Supported" },
              { number: "50 Tons", label: "CO2 Emissions Prevented" },
              { number: "100%", label: "Carbon-Neutral Shipping" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <TreePine className="h-12 w-12 mx-auto mb-4 opacity-80" />
                <p className="text-4xl font-bold font-serif mb-2">
                  {stat.number}
                </p>
                <p className="text-lg opacity-90">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-serif font-bold text-gray-800 mb-6">
            Ready to Transform Your Space?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Join thousands of conscious consumers who choose style with
            substance
          </p>
          <a
            href="/shop"
            className="inline-block bg-sage text-white px-8 py-4 rounded-lg font-medium text-lg hover:bg-sage/90 transition-colors"
          >
            Explore Our Collection
          </a>
        </motion.div>
      </section>
    </div>
  );
};

export default About;
