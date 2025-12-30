const PremiumBanner = () => {
  return (
    <section id="premium" className="bg-dark text-white py-20 border-t border-gold/30">
      <div className="max-w-6xl mx-auto px-6 lg:px-16 text-center">
        <h2 className="font-serif text-4xl text-gold mb-6">
          Join Elegance Premium
        </h2>

        <p className="text-neutral-300 max-w-2xl mx-auto text-lg leading-relaxed mb-10">
          Unlock 20% off on every order, early access to new collections, 
          free shipping, and exclusive premium-only fashion pieces.
        </p>

        <button className="px-10 py-4 bg-gold text-dark text-lg font-medium rounded-lg shadow-md hover:bg-gold/90 transition-all">
          Become a Premium Member
        </button>
      </div>
    </section>
  );
};

export default PremiumBanner;
