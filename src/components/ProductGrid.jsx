const ProductGrid = () => {
  const products = [
    {
      title: "Cashmere Coat",
      price: "$249",
      img: "https://images.unsplash.com/photo-1551024739-78e9d60c45ca?q=80",
      premium: true
    },
    {
      title: "Black Silk Blazer",
      price: "$329",
      img: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80",
      premium: false
    },
    {
      title: "Luxury Leather Bag",
      price: "$199",
      img: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80",
      premium: true
    },
    {
      title: "Minimal Wool Sweater",
      price: "$129",
      img: "https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?q=80",
      premium: false
    }
  ];

  return (
    <section className="bg-dark text-white py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        <h2 className="text-gold font-serif text-4xl mb-10">Best Sellers</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((p, i) => (
            <div
              key={i}
              className="rounded-xl overflow-hidden border border-gold/20 bg-black/40 backdrop-blur-md shadow-lg hover:shadow-gold/20 transition-all"
            >
              <img
                src={p.img}
                alt={p.title}
                className="w-full h-72 object-cover"
              />

              <div className="p-5">
                <h3 className="text-xl font-serif mb-1">{p.title}</h3>
                <p className="text-gold text-lg mb-3">{p.price}</p>

                {p.premium && (
                  <span className="bg-gold text-dark px-3 py-1 text-xs rounded-full font-semibold">
                    Premium Exclusive
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;
