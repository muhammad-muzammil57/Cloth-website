import ProductCard from "../components/ProductCard";

const dummyProducts = [
  { id: 1, name: "Black Oversized Hoodie", price: 4500, img: "/product1.jpg" },
  { id: 2, name: "Premium Leather Jacket", price: 12500, img: "/product2.jpg" },
  { id: 3, name: "Classic White Shirt", price: 3200, img: "/product3.jpg" },
  { id: 4, name: "Slim Fit Denim Jeans", price: 3900, img: "/product4.jpg" },
  { id: 5, name: "Brown sweeter women", price: 3900, img: "/product5.jpg" },
  { id: 6, name: "Slim Fit Denim shirt", price: 3900, img: "/product6.jpg" },
  { id: 7, name: "pink blue shade sweeter", price: 3900, img: "/product7.jpg" },
  { id: 8, name: "Slim Fit Denim shirt", price: 3900, img: "/product8.jpg" },
  { id: 9, name: "Slim Fit pink sweeter", price: 3900, img: "/product9.jpg" },
  { id: 10, name: "Slim Fit Denim shirt", price: 3900, img: "/product10.jpg" },
  { id: 11, name: "Slim Fit Denim Jeans", price: 3900, img: "/product11.jpg" },
  { id: 12, name: "Slim Fit Denim Jeans", price: 3900, img: "/product12.jpg" },
  { id: 13, name: "Slim Fit Denim Jeans", price: 3900, img: "/product13.jpg" },
  { id: 14, name: "Slim Fit Kashmiri coat", price: 3900, img: "/product14.jpg" },
  { id: 15, name: "Slim Fit Kashmiri coat", price: 3900, img: "/product15.jpg" },
  { id: 16, name: "Slim Fit Kids coat", price: 3900, img: "/product16.jpg" },
  { id: 17, name: "Slim Fit Kashmiri coat", price: 3900, img: "/product17.jpg" },
  { id: 18, name: "Slim Fit Kids coat", price: 3900, img: "/product18.jpg" },
  { id: 19, name: "Slim Fit Kids coat", price: 3900, img: "/product19.jpg" },
  { id: 20, name: "Slim Fit Kids coat", price: 3900, img: "/product20.jpg" },
  { id: 21, name: "Chinese women coat", price: 3900, img: "/product21.jpg" },
  { id: 22, name: "Chinese women coat", price: 3900, img: "/product22.jpg" },
  { id: 23, name: "Chinese women coat", price: 3900, img: "/product23.jpg" },
  { id: 24, name: "Chinese women coat", price: 3900, img: "/product24.jpg" },
  { id: 25, name: "Chinese women coat", price: 3900, img: "/product25.jpg" },
];

const Products = () => {
  return (
    <div className="px-6 md:px-12 lg:px-24 py-20 bg-black min-h-screen">
      <h2 className="text-3xl font-bold mb-6">Available Products</h2>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {dummyProducts.map((product) => (
          <ProductCard key={product.id} item={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;
