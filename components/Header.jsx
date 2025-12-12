'use client';

import { useState, useEffect } from 'react';
import {
  Menu,
  X,
  ChevronDown,
  Search,
  User,
  Phone
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [companyOpen, setCompanyOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeAllDropdowns = () => {
    setServicesOpen(false);
    setCompanyOpen(false);
    setIsOpen(false);
  };

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },

    {
      name: 'Services',
      href: '/services',
      hasDropdown: true,
      highlight: true,
      dropdown: [
        { name: 'Web Development', href: '/services/web', icon: '💻' },
        { name: 'Mobile Apps', href: '/services/mobile', icon: '📱' },
        { name: 'Cloud Solutions', href: '/services/cloud', icon: '☁️' }
      ]
    },

    { name: 'Contact', href: '/contact', cta: true }
  ];

  const quickActions = [
    { icon: <Phone className="w-4 h-4" />, label: 'Call Us', href: 'tel:+91 9973132362' },
    { icon: <Search className="w-4 h-4" />, label: 'Search', action: () => setSearchOpen(true) }
  ];

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      console.log('Searching for:', searchQuery);
      setSearchOpen(false);
      setSearchQuery('');
    }
  };

  return (
    <>
      {/* MAIN HEADER */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 
          ${scrolled ? 'bg-white/95 shadow-lg backdrop-blur-lg' : 'bg-white/90 backdrop-blur-sm'}
        `}
      >

        {/* Top Bar */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between h-8 text-xs">

              <div className="flex items-center gap-4">
                <span className="hidden sm:flex items-center gap-1">
                  <span className="w-2 h-2 bg-green-400 rounded-full animate-ping"></span>
                  Support Online 24/7
                </span>

                <a
                  href="mailto:dasynoma@gmail.com"
                  className="hover:text-gray-200"
                >
                  dasynoma@gmail.com
                </a>
              </div>

              <div className="flex items-center gap-4">
                <select className="bg-transparent focus:outline-none text-xs">
                  <option value="en">EN</option>
                  <option value="hi">हिंदी</option>
                </select>

                <div className="flex items-center gap-2">
                  <span>Follow:</span>

                  <a
                    href="https://www.facebook.com/profile.php?id=61585232360223"
                    className="hover:text-gray-200"
                  >
                    FB
                  </a>

                  <a
                    href="https://www.instagram.com/dasynoma?igsh=cXNzZXR6c2RpcXlw"
                    className="hover:text-gray-200"
                  >
                    IN
                  </a>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Main Nav */}
        <div className="container mx-auto px-4">
          <div className="flex h-16 items-center justify-between">

            {/* Logo */}
            <Link
              href="/"
              onClick={closeAllDropdowns}
              className="flex items-center gap-3"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="relative h-12 w-12 rounded-xl bg-gradient-to-br from-blue-600 to-purple-600 p-1"
              >
                <Image
                  src="/logo.jpeg"
                  alt="DASYNOMA Technology"
                  fill
                  className="object-contain rounded-xl"
                />
              </motion.div>

              <div className="flex flex-col leading-tight">
                <span className="text-2xl font-bold text-gray-900">DASYNOMA</span>
                <span className="text-xs text-blue-600 font-semibold tracking-widest">
                  TECHNOLOGY SOLUTIONS
                </span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center space-x-1">
              {navItems.map((item) => (
                <div key={item.name} className="relative group">

                  {/* Main Button */}
                  {item.hasDropdown ? (
                    <button
                      onMouseEnter={() => item.name === 'Services' && setServicesOpen(true)}
                      onMouseLeave={() => item.name === 'Services' && setServicesOpen(false)}
                      className={`px-4 py-2 rounded-lg flex items-center gap-1 font-medium transition
                        ${item.highlight ? 'text-blue-600 bg-blue-50' : 'text-gray-700 hover:text-blue-600'}
                      `}
                    >
                      {item.name}
                      <ChevronDown className="w-4 h-4 group-hover:rotate-180 transition" />
                    </button>
                  ) : item.cta ? (
                    <Link
                      href={item.href}
                      className="px-4 py-2 text-blue-600 font-medium rounded-lg hover:bg-blue-50"
                    >
                      {item.name}
                    </Link>
                  ) : (
                    <Link
                      href={item.href}
                      className="px-4 py-2 text-gray-700 hover:text-blue-600 font-medium"
                    >
                      {item.name}
                    </Link>
                  )}

                  {/* SERVICES DROPDOWN */}
                  {item.name === 'Services' && servicesOpen && (
                    <div
                      onMouseEnter={() => setServicesOpen(true)}
                      onMouseLeave={() => setServicesOpen(false)}
                      className="absolute left-0 mt-1 w-64 bg-white border shadow-xl rounded-xl py-2"
                    >
                      {item.dropdown.map((service) => (
                        <Link
                          key={service.name}
                          href={service.href}
                          onClick={closeAllDropdowns}
                          className="flex gap-3 px-4 py-3 text-sm hover:bg-blue-50"
                        >
                          <span className="text-lg">{service.icon}</span>
                          {service.name}
                        </Link>
                      ))}
                    </div>
                  )}

                </div>
              ))}
            </nav>

            {/* Right Buttons */}
            <div className="hidden lg:flex items-center gap-3">

              {quickActions.map((action, i) =>
                action.action ? (
                  <button
                    key={i}
                    onClick={action.action}
                    className="p-2 hover:bg-gray-100 rounded-lg"
                  >
                    {action.icon}
                  </button>
                ) : (
                  <a
                    key={i}
                    href={action.href}
                    className="p-2 hover:bg-gray-100 rounded-lg"
                  >
                    {action.icon}
                  </a>
                )
              )}

              <User className="w-5 h-5 text-gray-700" />

              <motion.button
                whileHover={{ scale: 1.05 }}
                className="px-6 py-2.5 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg shadow"
              >
                Get Quote
              </motion.button>
            </div>

            {/* Mobile Button */}
            <button
              className="lg:hidden p-2 hover:bg-gray-100 rounded-lg"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X /> : <Menu />}
            </button>

          </div>
        </div>

        {/* MOBILE MENU */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="lg:hidden bg-white border-t"
            >
              <div className="px-4 py-4 space-y-1">

                {navItems.map((item) => (
                  <div key={item.name}>
                    <Link
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className="block px-4 py-3 rounded-lg hover:bg-blue-50 text-gray-700 font-medium"
                    >
                      {item.name}
                    </Link>
                  </div>
                ))}

                <div className="pt-4">
                  <button
                    onClick={() => setSearchOpen(true)}
                    className="w-full flex items-center justify-center gap-2 py-3 bg-gray-100 rounded-lg"
                  >
                    <Search className="w-4 h-4" />
                    Search
                  </button>
                </div>

              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </header>

      {/* SEARCH MODAL */}
      <AnimatePresence>
        {searchOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSearchOpen(false)}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[999]"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0, y: -20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: -20 }}
              onClick={(e) => e.stopPropagation()}
              className="absolute top-1/3 left-1/2 -translate-x-1/2 w-full max-w-md bg-white rounded-2xl shadow-xl p-6"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-800">Search</h3>
                <button
                  onClick={() => setSearchOpen(false)}
                  className="p-2 hover:bg-gray-100 rounded-lg"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <form onSubmit={handleSearch} className="flex gap-3">
                <input
                  type="text"
                  autoFocus
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search here..."
                  className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
                />

                <button
                  type="submit"
                  className="px-3 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700"
                >
                  <Search className="w-5 h-5" />
                </button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
