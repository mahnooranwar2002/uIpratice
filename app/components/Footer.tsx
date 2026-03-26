import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-[#0a0a0a] text-gray-400 py-12 border-t border-gray-800">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          
          {/* Brand Section */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-white tracking-widest uppercase">
              Oga<span className="text-[#E2B05E]">Glow</span>
            </h2>
            <p className="text-sm leading-relaxed">
              Crafting timeless elegance for your wrist. Experience the luxury of precision and style with our curated watch collection.
            </p>
            <div className="flex gap-4 text-xl">
              <a href="#" className="hover:text-[#E2B05E] transition-colors"><i className="ri-facebook-fill"></i></a>
              <a href="#" className="hover:text-[#E2B05E] transition-colors"><i className="ri-instagram-line"></i></a>
              <a href="#" className="hover:text-[#E2B05E] transition-colors"><i className="ri-twitter-x-line"></i></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold uppercase mb-6 tracking-wider">Collections</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-[#E2B05E] transition-all">Men's Luxury</a></li>
              <li><a href="#" className="hover:text-[#E2B05E] transition-all">Ladies' Edition</a></li>
              <li><a href="#" className="hover:text-[#E2B05E] transition-all">Smart Watches</a></li>
              <li><a href="#" className="hover:text-[#E2B05E] transition-all">Limited Series</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-white font-semibold uppercase mb-6 tracking-wider">Customer Care</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-[#E2B05E] transition-all">Order Tracking</a></li>
              <li><a href="#" className="hover:text-[#E2B05E] transition-all">Shipping Policy</a></li>
              <li><a href="#" className="hover:text-[#E2B05E] transition-all">Terms & Conditions</a></li>
              <li><a href="#" className="hover:text-[#E2B05E] transition-all">FAQs</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-white font-semibold uppercase mb-6 tracking-wider">Newsletter</h4>
            <p className="text-sm mb-4">Subscribe to get updates on new arrivals.</p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Email address" 
                className="bg-transparent border border-gray-700 p-2 w-full focus:outline-none focus:border-[#E2B05E] rounded-l-md text-sm"
              />
              <button className="bg-[#E2B05E] text-black px-4 py-2 rounded-r-md font-bold text-xs uppercase hover:bg-[#c99a4e] transition-colors">
                Join
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-900 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
          <p>© 2026 OgaGlow. All Rights Reserved.</p>
          <div className="flex gap-6">
            <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" alt="PayPal" className="h-4 opacity-50 hover:opacity-100 transition-opacity" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" alt="Visa" className="h-4 opacity-50 hover:opacity-100 transition-opacity" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" alt="Mastercard" className="h-4 opacity-50 hover:opacity-100 transition-opacity" />
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer