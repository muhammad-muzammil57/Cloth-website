import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative w-full min-h-[90vh] bg-dark text-white flex items-center">
      
      {/* BG IMAGE RIGHT SIDE */}
      <div
        className="absolute right-0 top-0 w-1/2 h-full bg-[url('https://images.unsplash.com/photo-1594633312681-425c7b99f9a0?q=80')] 
        bg-cover bg-right bg-no-repeat hidden md:block"
      />

      {/* OVERLAY GRADIENT FOR BLEND */}
      <div className="absolute inset-0 bg-gradient-to-r from-dark via-dark/70 to-transparent" />

      {/* CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-16 py-32">
        <div className="w-full md:w-1/2">
          
          <h1 className="font-serif text-4xl lg:text-6xl text-gold leading-tight drop-shadow-md">
            Elevate Your Style
          </h1>

          <p className="mt-5 text-neutral-300 text-lg lg:text-xl leading-relaxed">
            Discover timeless fashion crafted from premium materials, designed
            to make every moment feel special.
          </p>

          <div className="flex flex-wrap gap-4 mt-8">
            <Link to="/products">
            <button className="px-6 py-3 bg-gold text-dark font-medium rounded-lg shadow-md shadow-gold/30 hover:bg-gold/90 transition-all"  onClick={() => router.push("/products")}>
              Shop Now
            </button>
            </Link>
            <button className="px-6 py-3 border border-gold text-gold font-medium rounded-lg hover:bg-gold hover:text-white hover:border-white transition-all">
              Become Premium
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE BG IMAGE */}
      <div
        className="absolute bottom-0 w-full h-[45%] bg-[url('https://images.unsplash.com/photo-1594633312681-425c7b99f9a0?q=80')] 
        bg-cover bg-center md:hidden"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-dark via-transparent md:hidden" />
    </section>
  );
};

export default Hero;
