import React, { useState } from 'react';
import { Search, ShoppingCart, User, Menu, X } from 'lucide-react';
import { Link } from "react-router-dom";


const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = ['Shop', 'Men', 'Women', 'Kids', 'Premium', ];

  return (
    <div className="relative w-full font-sans ">
      
      {/* --- NAVBAR HEADER --- */}
      <nav className="fixed top-0 left-0 w-full z-50 px-6 py-4
             bg-gradient-to-b from-[#2a2a2a] via-[#1a1a1a] to-[#0f0f0f]
             border-b border-white/5 shadow-[0_20px_50px_-10px_rgba(0,0,0,0.9)]">
        
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          
          {/* 1. LEFT: HAMBURGER (Mobile Only) */}
          <button 
            className="md:hidden text-gray-300 hover:text-[#DEC67C] transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

          {/* 2. LOGO (Centered on mobile, Left on Desktop) */}
          <div className="flex-shrink-0">
            <h1 className="text-3xl font-serif text-gold tracking-wide cursor-pointer drop-shadow-md">
              Elegance
            </h1>
          </div>

          {/* 3. CENTER: DESKTOP MENU (Hidden on Mobile) */}
          <Link to="/products">
          <div className="hidden md:flex items-center gap-8">
            <a href="#" className="text-[#DEC67C] text-sm font-medium tracking-wide border-b border-[#DEC67C] pb-1">
              Home
            </a>
            {navLinks.map((item) => (
              <a 
                key={item} 
                href="#" 
                className="text-gray-300 text-sm font-medium tracking-wide hover:text-[#DEC67C] transition-colors duration-200"
              >
                {item}
              </a>
            ))}
          </div>
</Link>
<div className="hidden md:flex items-center gap-8">
            <a href="#contact" className="text-[#DEC67C] text-sm font-medium tracking-wide border-b border-[#DEC67C] pb-1">
              Contact Us
            </a>
            
          </div>
          {/* 4. RIGHT: ICONS (Search & Cart) */}
          <div className="flex items-center gap-5">
            
            {/* Desktop Search (Hidden on Mobile) */}
            <div className="hidden lg:flex items-center relative group">
              <Search className="absolute left-3 text-gray-400 w-4 h-4" />
              <input 
                type="text" 
                placeholder="Search..." 
                className="bg-white/10 border border-white/10 rounded-md py-1.5 pl-9 pr-4 
                           text-sm text-gray-200 placeholder-gray-400 focus:outline-none 
                           focus:border-[#DEC67C]/50 transition-all w-48"
              />
            </div>

            {/* Cart Icon */}
            <div className="relative cursor-pointer group">
              <ShoppingCart className="w-6 h-6 text-[#DEC67C] group-hover:text-white transition-colors" />
              <span className="absolute -top-2 -right-2 bg-[#DEC67C] text-black text-[10px] font-bold 
                               h-4 w-4 rounded-full flex items-center justify-center">
                2
              </span>
            </div>
          </div>
        </div>

        {/* --- MOBILE MENU DROPDOWN --- */}
        {/* Shows when state is true. Uses absolute positioning to sit on top of content */}
        {isMobileMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-[#1a1a1a] border-t border-white/5 shadow-2xl md:hidden flex flex-col p-6 gap-4 animate-fade-in-down">
            
            {/* Mobile Search */}
            <div className="relative w-full mb-2">
              <Search className="absolute left-3 top-2.5 text-gray-400 w-4 h-4" />
              <input 
                type="text" 
                placeholder="Search products..." 
                className="w-full bg-black/30 border border-white/10 rounded-md py-2 pl-9 pr-4 
                           text-sm text-gray-200 placeholder-gray-500 focus:outline-none 
                           focus:border-[#DEC67C]/50"
              />
            </div>

            {/* Mobile Links */}
            <a href="#" className="text-[#DEC67C] font-medium tracking-wide border-l-2 border-[#DEC67C] pl-3">
              Home
            </a>
            {navLinks.map((item) => (
              <a 
                key={item} 
                href="#" 
                className="text-gray-300 font-medium tracking-wide hover:text-[#DEC67C] pl-3 border-l-2 border-transparent hover:border-[#DEC67C] transition-all"
              >
                {item}
              </a>
            ))}
            
            {/* Mobile Account Link */}
            <div className="flex items-center gap-3 text-gray-300 mt-4 pt-4 border-t border-white/5">
                <User className="w-5 h-5 text-[#DEC67C]" />
                <span>My Account</span>
            </div>
          </div>
        )}
      </nav>

      {/* --- HERO SECTION (Background Images) --- */}
    
           <div className="hidden md:flex absolute top-6 right-8 gap-6 text-white/90 z-40">
              <div className="flex flex-col items-center gap-1 cursor-pointer hover:text-[#DEC67C] transition-colors">
                <User className="w-6 h-6 shadow-sm" />
                <span className="text-xs font-medium drop-shadow-md">Account</span>
              </div>
              <div className="flex flex-col items-center gap-1 cursor-pointer hover:text-[#DEC67C] transition-colors">
                <div className="relative">
                  <ShoppingCart className="w-6 h-6 text-[#DEC67C] shadow-sm" />
                  <span className="absolute -top-1.5 -right-1.5 bg-[#DEC67C] text-black text-[9px] font-bold h-3.5 w-3.5 rounded-full flex items-center justify-center shadow-sm">2</span>
                </div>
                <span className="text-xs font-medium drop-shadow-md">Cart</span>
              </div>
           </div>
           </div>
       
      
  );
};

export default Navbar;