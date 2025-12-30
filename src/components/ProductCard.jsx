/* eslint-disable react/prop-types */

const ProductCard = ({ item }) => {
  return (
    <div className="bg-white/10 backdrop-blur-lg p-4 rounded-xl border border-white/10 hover:scale-105 transition cursor-pointer">
      <img
        src={item.img}
        alt={item.name}
        className="w-full h-48 object-cover rounded-lg mb-4"
      />

      <h3 className="font-semibold text-lg mb-1">{item.name}</h3>
      <p className="text-gray-300">Rs {item.price}</p>

      <button className="mt-3 w-full py-2 bg-white text-black rounded-lg font-medium hover:bg-gray-200 transition">
        Add To Cart
      </button>
    </div>
  );
};

export default ProductCard;
