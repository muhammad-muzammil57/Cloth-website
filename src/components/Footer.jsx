import { HeartIcon } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-300 py-12">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-gold font-semibold mb-4">Elegance</h3>
          <p>High-quality clothing designed for modern lifestyles.</p>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="/products">Shop</a></li>
            <li><a href="#premium">Premium</a></li>
            <li><a href="#faq">FAQ</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-4">Categories</h3>
          <ul className="space-y-2">
            <li><a href="/products">Men</a></li>
            <li><a href="/products">Women</a></li>
            <li><a href="/products">Kids</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-4">Newsletter</h3>
          <input
            type="email"
            placeholder="Enter email"
            className="w-full p-2 rounded bg-gray-800 text-white outline-none"
          />
          <button className="w-full mt-3 p-2 bg-white text-black font-semibold rounded hover:bg-gray-200 transition">
            Subscribe
          </button>
        </div>
      </div>

      <div className="text-center text-gray-400 mt-10 border-t border-gray-700 pt-6">
        © {new Date().getFullYear()} Elegance. All rights reserved.
        <div className='flex justify-center'>
        <div className='border-t border-gray-700 mt-6 pt-6 text-center w-70'></div>
        </div>
         <div className=' flex justify-center items-center text-gray-300 '>
        <span className='flex '>Made With  <HeartIcon className='w-6 text-red-700'/> By Muhammad Muzammil</span>
    </div>
      </div>
      
    </footer>
  );
};

export default Footer;
