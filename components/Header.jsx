'use client';

import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, Search, User, ShoppingCart, Phone } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [companyOpen, setCompanyOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);
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
    setResourcesOpen(false);
    setIsOpen(false);
  };

  const navItems = [
    { 
      name: 'Home', 
      href: '/', 
      exact: true 
    },
    { 
      name: 'About', 
      href: '/about', 
     
    },
    { 
      name: 'Services', 
      href: '/services', 
      hasDropdown: true,
      highlight: true,
      dropdown: [
        { name: 'Web Development', href: '/services/web', icon: '💻' },
        { name: 'Mobile Apps', href: '/services/mobile', icon: '📱' },
        { name: 'Cloud Solutions', href: '/services/cloud', icon: '☁️' },
      ]
    },
    { 
      name: 'Contact', 
      href: '/contact',
      cta: true
    },
  ];

  const quickActions = [
    { icon: <Phone className="w-4 h-4" />, label: 'Call Us', href: 'tel:+919876543210' },
    { icon: <Search className="w-4 h-4" />, label: 'Search', action: () => setSearchOpen(true) },
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
      <header className={`
        fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300
        ${scrolled 
          ? 'bg-white/95 backdrop-blur-lg shadow-lg border-b border-gray-200' 
          : 'bg-white/90 backdrop-blur-sm'
        }
      `}>
        {/* Top Bar */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between h-8 text-xs">
              <div className="flex items-center space-x-4">
                <span className="hidden sm:inline-flex items-center gap-1">
                  <span className="w-2 h-2 bg-green-500 rounded-full animate-ping"></span>
                  <span>Support Online 24/7</span>
                </span>
                <a href="mailto:hello@dasynoma.com" className="hover:text-gray-200 transition-colors">
                  dasynoma@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-4">
                <select className="bg-transparent text-xs focus:outline-none">
                  <option value="en">EN</option>
                  <option value="hi">हिंदी</option>
                </select>
                <div className="flex items-center space-x-2">
                  <span>Follow:</span>
                  <a href="#" className="hover:text-gray-200">FB</a>
                  <a href="#" className="hover:text-gray-200">TW</a>
                  <a href="#" className="hover:text-gray-200">IN</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Navigation */}
        <div className="container mx-auto px-4">
          <div className="flex h-16 items-center justify-between">
            
            {/* Logo */}
            <Link 
              href="/" 
              className="flex items-center space-x-3 group"
              onClick={closeAllDropdowns}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="relative h-12 w-12 rounded-xl overflow-hidden bg-gradient-to-br from-blue-600 to-purple-600 p-1"
              >
                <div className="relative h-full w-full">
                  <Image
                    src="/logo.jpeg"
                    alt="DASYNOMA Technology"
                    fill
                    className="object-contain"
                    sizes="48px"
                    priority
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-xl"></div>
              </motion.div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-gray-900 tracking-tight">DASYNOMA</span>
                <span className="text-xs font-semibold text-blue-600 tracking-wide">
                  TECHNOLOGY SOLUTIONS
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1">
              {navItems.map((item) => (
                <div key={item.name} className="relative group">
                  {item.hasDropdown ? (
                    <button
                      className={`
                        flex items-center space-x-1 px-4 py-2 font-medium rounded-lg transition-all duration-200
                        ${item.highlight 
                          ? 'text-blue-600 hover:text-blue-700 bg-blue-50 hover:bg-blue-100' 
                          : 'text-gray-700 hover:text-blue-600'
                        }
                      `}
                      onMouseEnter={() => {
                        if (item.name === 'Services') setServicesOpen(true);
                        if (item.name === 'About') setCompanyOpen(true);
                      }}
                      onMouseLeave={() => {
                        if (item.name === 'Services') setServicesOpen(false);
                        if (item.name === 'About') setCompanyOpen(false);
                      }}
                    >
                      <span>{item.name}</span>
                      <ChevronDown className="h-4 w-4 transition-transform group-hover:rotate-180 duration-200" />
                    </button>
                  ) : item.cta ? (
                    <Link
                      href={item.href}
                      className="px-4 py-2 text-blue-600 hover:text-blue-700 font-medium rounded-lg hover:bg-blue-50 transition-colors duration-200"
                    >
                      {item.name}
                    </Link>
                  ) : (
                    <Link
                      href={item.href}
                      className="px-4 py-2 text-gray-700 hover:text-blue-600 font-medium rounded-lg transition-colors duration-200"
                    >
                      {item.name}
                    </Link>
                  )}
                  
                  {/* Services Dropdown */}
                  {item.name === 'Services' && servicesOpen && (
                    <div 
                      className="absolute left-0 top-full mt-1 w-64 rounded-xl bg-white shadow-2xl border py-2 animate-in slide-in-from-top-2"
                      onMouseEnter={() => setServicesOpen(true)}
                      onMouseLeave={() => setServicesOpen(false)}
                    >
                      {item.dropdown.map((service) => (
                        <Link
                          key={service.name}
                          href={service.href}
                          className="flex items-center gap-3 px-4 py-3 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors group/item"
                          onClick={closeAllDropdowns}
                        >
                          <span className="text-lg">{service.icon}</span>
                          <div>
                            <div className="font-medium">{service.name}</div>
                            <div className="text-xs text-gray-500">Expert solutions</div>
                          </div>
                          <ChevronDown className="h-4 w-4 ml-auto opacity-0 group-hover/item:opacity-100 rotate-270 transition-all" />
                        </Link>
                      ))}
                    </div>
                  )}

                  {/* Company Dropdown */}
                  {item.name === 'About' && companyOpen && item.dropdown && (  // ✅ यहाँ condition add करो
                    <div 
                      className="absolute left-0 top-full mt-1 w-56 rounded-xl bg-white shadow-2xl border py-2 animate-in slide-in-from-top-2"
                      onMouseEnter={() => setCompanyOpen(true)}
                      onMouseLeave={() => setCompanyOpen(false)}
                    >
                      {item.dropdown.map((dropdownItem) => (  // ✅ variable name change करो
                        <Link
                          key={dropdownItem.name}
                          href={dropdownItem.href}
                          className="block px-4 py-3 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                          onClick={closeAllDropdowns}
                        >
                          {dropdownItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* Right Side Actions */}
            <div className="hidden lg:flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                {quickActions.map((action, index) => (
                  action.action ? (
                    <button
                      key={index}
                      onClick={action.action}
                      className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
                      title={action.label}
                    >
                      {action.icon}
                    </button>
                  ) : (
                    <a
                      key={index}
                      href={action.href}
                      className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
                      title={action.label}
                    >
                      {action.icon}
                    </a>
                  )
                ))}
                <button className="p-2 rounded-lg hover:bg-gray-100 transition-colors">
                  <User className="w-5 h-5" />
                </button>
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-2.5 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:shadow-xl transition-all duration-300 shadow-md"
              >
                Get Quote
              </motion.button>
            </div>

            {/* Mobile menu button */}
            <button
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden overflow-hidden bg-white border-t"
            >
              <div className="container mx-auto px-4 py-4">
                <div className="flex flex-col space-y-1">
                  {navItems.map((item) => (
                    <div key={item.name}>
                      {item.hasDropdown ? (
                        <>
                          <button
                            className="w-full flex items-center justify-between px-4 py-3 text-gray-700 hover:bg-blue-50 rounded-lg transition-colors text-left"
                            onClick={() => {
                              if (item.name === 'Services') setServicesOpen(!servicesOpen);
                              if (item.name === 'About') setCompanyOpen(!companyOpen);
                            }}
                          >
                            <span className="font-medium">{item.name}</span>
                            <ChevronDown className={`h-4 w-4 transition-transform ${
                              (item.name === 'Services' && servicesOpen) ||
                              (item.name === 'About' && companyOpen) 
                                ? 'rotate-180' : ''
                            }`} />
                          </button>
                          {/* Services Mobile Dropdown */}
                          {item.name === 'Services' && servicesOpen && item.dropdown && (  // ✅ condition add करो
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              className="ml-4 space-y-1 border-l border-gray-200 pl-4 my-2"
                            >
                              {item.dropdown.map((service) => (
                                <Link
                                  key={service.name}
                                  href={service.href}
                                  className="flex items-center gap-3 px-4 py-3 text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                                  onClick={() => setIsOpen(false)}
                                >
                                  <span>{service.icon}</span>
                                  {service.name}
                                </Link>
                              ))}
                            </motion.div>
                          )}
                          {/* About Mobile Dropdown */}
                          {item.name === 'About' && companyOpen && item.dropdown && (  // ✅ condition add करो
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              className="ml-4 space-y-1 border-l border-gray-200 pl-4 my-2"
                            >
                              {item.dropdown.map((subItem) => (
                                <Link
                                  key={subItem.name}
                                  href={subItem.href}
                                  className="block px-4 py-3 text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                                  onClick={() => setIsOpen(false)}
                                >
                                  {subItem.name}
                                </Link>
                              ))}
                            </motion.div>
                          )}
                        </>
                      ) : (
                        <Link
                          href={item.href}
                          className="block px-4 py-3 text-gray-700 hover:bg-blue-50 rounded-lg transition-colors font-medium"
                          onClick={() => setIsOpen(false)}
                        >
                          {item.name}
                        </Link>
                      )}
                    </div>
                  ))}
                  
                  <div className="pt-4 px-4 flex gap-2">
                    <a
                      href="tel:+919876543210"
                      className="flex-1 px-4 py-3 bg-blue-50 text-blue-600 font-medium rounded-lg text-center hover:bg-blue-100 transition-colors"
                    >
                      <div className="flex items-center justify-center gap-2">
                        <Phone className="w-4 h-4" />
                        Call Now
                      </div>
                    </a>
                    <button
                      onClick={() => setSearchOpen(true)}
                      className="flex-1 px-4 py-3 bg-gray-50 text-gray-700 font-medium rounded-lg hover:bg-gray-100 transition-colors flex items-center justify-center gap-2"
                    >
                      <Search className="w-4 h-4" />
                      Search
                    </button>
                  </div>
                  
                  <div className="pt-4 px-4">
                    <button className="w-full px-6 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:shadow-lg transition-shadow text-lg">
                      Start Your Project
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Search Modal */}
      <AnimatePresence>
        {searchOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-black/50 backdrop-blur-sm flex items-start justify-center pt-32"
            onClick={() => setSearchOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: -20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: -20 }}
              className="w-full max-w-2xl mx-4"
              onClick={(e) => e.stopPropagation()}
            >
              <form onSubmit={handleSearch} className="relative">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search for services, articles, or resources..."
                  className="w-full px-6 py-4 bg-white rounded-2xl shadow-2xl border-0 text-lg focus:outline-none focus:ring-2 focus:ring-blue-500 pl-14"
                  autoFocus
                />
                <Search className="absolute left-6 top-1/2 transform -translate-y-1/2 text-gray-400 w-6 h-6" />
                <button
                  type="submit"
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Search
                </button>
              </form>
              <div className="mt-4 bg-white rounded-2xl shadow-2xl p-4">
                <p className="text-gray-600 text-sm">Try searching for: <span className="text-blue-600">web development</span>, <span className="text-blue-600">cloud services</span>, <span className="text-blue-600">portfolio</span></p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="h-24"></div>
    </>
  );
};

export default Header;