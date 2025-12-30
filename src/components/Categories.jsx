const Categories = () => {
  const items = [
    {
      title: "Men",
      img: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?q=80"
    },
    {
      title: "Women",
      img: "https://diversesystem.com/media/catalog/product/c/o/coatana_255_camel_melange_1__1_1.jpg?width=680&height=952"
    },
    {
      title: "Kids",
      img: "https://www.kiddie.pk/cdn/shop/files/rn-image_picker_lib_temp_811c3376-4d8f-45b7-a744-905ea7bc08a7.jpg?v=1754383847"
    },
    {
      title: "Accessories",
      img: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?q=80"
    }
  ];

  return (
    <section className="bg-dark text-white py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        <h2 className="text-gold font-serif text-4xl mb-10">Categories</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((cat, i) => (
            <div key={i}
              className="relative group rounded-xl overflow-hidden cursor-pointer border border-gold/20"
            >
              <img
                src={cat.img}
                alt={cat.title}
                className="h-64 w-full object-cover group-hover:scale-105 transition-all duration-500"
              />
              <div className="absolute inset-0 bg-black/40 flex items-end p-6 group-hover:bg-black/20 transition-all">
                <h3 className="text-xl font-serif tracking-wide">{cat.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
