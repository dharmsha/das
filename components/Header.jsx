'use client';

import { useState, useEffect, useRef } from 'react';
import {
  Menu,
  X,
  ChevronDown,
  Search,
  User,
  Phone,
  Mail,
  Globe,
  Facebook,
  Instagram,
  MessageCircle
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const servicesRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (servicesRef.current && !servicesRef.current.contains(event.target)) {
        setServicesOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    {
      name: 'Services',
      href: '/services',
      hasDropdown: true,
      dropdown: [
        { name: 'Web Development', href: '/services/web', icon: '💻' },
        { name: 'Mobile Apps', href: '/services/mobile', icon: '📱' },
       
        { name: 'Cloud Solutions', href: '/services/cloud', icon: '☁️' },
        
      ]
    },
    { name: 'Portfolio', href: '/portfolio' },
   
    { name: 'Contact', href: '/contact' }
  ];

  return (
    <>
      {/* TOP BAR - Mobile में भी दिखेगा */}
      <div className="bg-gradient-to-r from-blue-900 via-blue-800 to-purple-800 text-white">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-10">
            {/* Left - Contact Info */}
            <div className="flex items-center gap-3 sm:gap-6 text-xs sm:text-sm">
              <a href="tel:+919973132362" className="flex items-center gap-2 hover:text-blue-200 transition">
                <Phone className="w-3 h-3 sm:w-4 sm:h-4" />
                <span className="hidden sm:inline">+91 9973132362</span>
                <span className="sm:hidden">Call</span>
              </a>
              
              <a href="mailto:dasynoma@gmail.com" className="flex items-center gap-2 hover:text-blue-200 transition">
                <Mail className="w-3 h-3 sm:w-4 sm:h-4" />
                <span className="hidden sm:inline">dasynoma@gmail.com</span>
                <span className="sm:hidden">Email</span>
              </a>
            </div>

            {/* Right - Social & Language */}
            <div className="flex items-center gap-3 sm:gap-4">
              {/* Social Icons - Mobile में भी दिखेंगे */}
              <div className="flex items-center gap-2 sm:gap-3">
                <a
                  href="https://www.facebook.com/profile.php?id=61585232360223"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-1 hover:text-blue-300 transition-transform hover:scale-110"
                  aria-label="Facebook"
                >
                  <Facebook className="w-3 h-3 sm:w-4 sm:h-4" />
                </a>
                
                <a
                  href="https://www.instagram.com/dasynoma?igsh=cXNzZXR6c2RpcXlw"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-1 hover:text-pink-300 transition-transform hover:scale-110"
                  aria-label="Instagram"
                >
                  <Instagram className="w-3 h-3 sm:w-4 sm:h-4" />
                </a>
                
                <a
                  href="https://wa.me/919973132362"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-1 hover:text-green-300 transition-transform hover:scale-110"
                  aria-label="WhatsApp"
                >
                  <MessageCircle className="w-3 h-3 sm:w-4 sm:h-4" />
                </a>
              </div>

              {/* Language Selector */}
              <div className="hidden sm:flex items-center gap-1 border-l pl-3 border-white/30">
                <Globe className="w-3 h-3" />
                <select className="bg-transparent text-xs focus:outline-none cursor-pointer">
                  <option value="en">EN</option>
                  <option value="hi">हिंदी</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* MAIN HEADER */}
      <header
        className={`sticky top-0 left-0 right-0 z-50 w-full transition-all duration-300 
          ${scrolled ? 'bg-white shadow-xl border-b' : 'bg-white border-b'}
        `}
      >
        <div className="container mx-auto px-4">
          <div className="flex h-20 items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <motion.div
                whileHover={{ scale: 1.05, rotate: 5 }}
                className="relative h-14 w-14 rounded-2xl bg-gradient-to-br from-blue-600 to-purple-600 p-1.5 shadow-lg"
              >
                <div className="relative h-full w-full overflow-hidden rounded-xl">
                  <Image
                    src="/logo.jpeg"
                    alt="DASYNOMA Technology"
                    fill
                    className="object-cover"
                    sizes="56px"
                  />
                </div>
              </motion.div>
              
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-gray-900 tracking-tight">DASYNOMA</span>
                <span className="text-xs text-blue-600 font-semibold tracking-wider">
                  TECHNOLOGY SOLUTIONS
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1">
              {navItems.map((item) => (
                <div key={item.name} className="relative" ref={item.hasDropdown ? servicesRef : null}>
                  {item.hasDropdown ? (
                    <>
                      <button
                        onClick={() => setServicesOpen(!servicesOpen)}
                        className={`px-4 py-3 rounded-lg flex items-center gap-1 font-medium transition-all duration-200
                          ${servicesOpen ? 'text-blue-600 bg-blue-50' : 'text-gray-700 hover:text-blue-600'}
                        `}
                      >
                        {item.name}
                        <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${servicesOpen ? 'rotate-180' : ''}`} />
                      </button>
                      
                      <AnimatePresence>
                        {servicesOpen && (
                          <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            className="absolute left-0 mt-1 w-80 bg-white border shadow-2xl rounded-2xl p-3"
                          >
                            <div className="grid grid-cols-2 gap-2">
                              {item.dropdown.map((service) => (
                                <Link
                                  key={service.name}
                                  href={service.href}
                                  onClick={() => setServicesOpen(false)}
                                  className="flex flex-col items-center p-4 rounded-xl hover:bg-blue-50 transition-colors group/item"
                                >
                                  <span className="text-2xl mb-2 group-hover/item:scale-110 transition-transform">
                                    {service.icon}
                                  </span>
                                  <span className="text-sm font-medium text-gray-800 text-center">
                                    {service.name}
                                  </span>
                                </Link>
                              ))}
                            </div>
                            <div className="mt-3 pt-3 border-t">
                              <Link
                                href="/services"
                                className="block w-full py-2 text-center text-blue-600 font-medium rounded-lg hover:bg-blue-50"
                                onClick={() => setServicesOpen(false)}
                              >
                                View All Services →
                              </Link>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    <Link
                      href={item.href}
                      className="px-4 py-3 text-gray-700 hover:text-blue-600 font-medium rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="ml-4 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              >
                Get Quote
              </motion.button>
            </nav>

            {/* Desktop Right Actions */}
            <div className="hidden lg:flex items-center gap-4">
              <button
                onClick={() => setSearchOpen(true)}
                className="p-2.5 hover:bg-gray-100 rounded-xl transition-colors"
                aria-label="Search"
              >
                <Search className="w-5 h-5 text-gray-600" />
              </button>
              
              <button className="p-2.5 hover:bg-gray-100 rounded-xl transition-colors" aria-label="Account">
                <User className="w-5 h-5 text-gray-600" />
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden flex items-center gap-3">
              <button
                onClick={() => setSearchOpen(true)}
                className="p-2 hover:bg-gray-100 rounded-lg"
                aria-label="Search"
              >
                <Search className="w-5 h-5" />
              </button>
              
              <button
                className="p-2 hover:bg-gray-100 rounded-lg"
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Menu"
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* MOBILE MENU - Full Screen */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 lg:hidden"
            >
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsOpen(false)}
                className="absolute inset-0 bg-black/50 backdrop-blur-sm"
              />
              
              {/* Menu Panel */}
              <motion.div
                initial={{ x: '100%' }}
                animate={{ x: 0 }}
                exit={{ x: '100%' }}
                transition={{ type: 'spring', damping: 30 }}
                className="absolute right-0 top-0 h-full w-full max-w-sm bg-white shadow-2xl"
              >
                {/* Menu Header */}
                <div className="flex items-center justify-between p-6 border-b">
                  <div className="flex items-center gap-3">
                    <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-blue-600 to-purple-600 p-1">
                      <div className="h-full w-full rounded-lg overflow-hidden">
                        <Image
                          src="/logo.jpeg"
                          alt="Logo"
                          width={48}
                          height={48}
                          className="object-cover"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold text-gray-900">DASYNOMA</div>
                      <div className="text-xs text-blue-600">TECHNOLOGY</div>
                    </div>
                  </div>
                  
                  <button
                    onClick={() => setIsOpen(false)}
                    className="p-2 hover:bg-gray-100 rounded-lg"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                {/* Menu Content */}
                <div className="p-6 overflow-y-auto h-[calc(100vh-120px)]">
                  <div className="space-y-2">
                    {navItems.map((item) => (
                      <div key={item.name}>
                        {item.hasDropdown ? (
                          <>
                            <button
                              onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                              className="flex items-center justify-between w-full p-4 text-left rounded-xl hover:bg-blue-50 transition-colors"
                            >
                              <span className="font-medium text-gray-900">{item.name}</span>
                              <ChevronDown className={`w-4 h-4 transition-transform ${mobileServicesOpen ? 'rotate-180' : ''}`} />
                            </button>
                            
                            <AnimatePresence>
                              {mobileServicesOpen && (
                                <motion.div
                                  initial={{ height: 0, opacity: 0 }}
                                  animate={{ height: 'auto', opacity: 1 }}
                                  exit={{ height: 0, opacity: 0 }}
                                  className="overflow-hidden"
                                >
                                  <div className="ml-4 pl-4 border-l-2 border-blue-100 space-y-2 py-2">
                                    {item.dropdown.map((service) => (
                                      <Link
                                        key={service.name}
                                        href={service.href}
                                        onClick={() => setIsOpen(false)}
                                        className="flex items-center gap-3 p-3 rounded-lg hover:bg-blue-50"
                                      >
                                        <span className="text-xl">{service.icon}</span>
                                        <span className="text-gray-700">{service.name}</span>
                                      </Link>
                                    ))}
                                    <Link
                                      href="/services"
                                      onClick={() => setIsOpen(false)}
                                      className="block p-3 text-blue-600 font-medium rounded-lg hover:bg-blue-50"
                                    >
                                      View All Services →
                                    </Link>
                                  </div>
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </>
                        ) : (
                          <Link
                            href={item.href}
                            onClick={() => setIsOpen(false)}
                            className="block p-4 text-gray-900 font-medium rounded-xl hover:bg-blue-50 transition-colors"
                          >
                            {item.name}
                          </Link>
                        )}
                      </div>
                    ))}
                  </div>

                  {/* Mobile Quick Actions */}
                  <div className="mt-8 pt-8 border-t">
                    <div className="grid grid-cols-2 gap-3">
                      <a
                        href="tel:+919973132362"
                        className="flex flex-col items-center p-4 bg-blue-50 rounded-xl hover:bg-blue-100 transition-colors"
                      >
                        <Phone className="w-6 h-6 text-blue-600 mb-2" />
                        <span className="text-sm font-medium">Call Now</span>
                      </a>
                      
                      <a
                        href="https://wa.me/919973132362"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex flex-col items-center p-4 bg-green-50 rounded-xl hover:bg-green-100 transition-colors"
                      >
                        <MessageCircle className="w-6 h-6 text-green-600 mb-2" />
                        <span className="text-sm font-medium">WhatsApp</span>
                      </a>
                    </div>

                    {/* Mobile Social Links */}
                    <div className="mt-6 flex justify-center gap-4">
                      <a
                        href="https://www.facebook.com/profile.php?id=61585232360223"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-blue-100 text-blue-600 rounded-full hover:bg-blue-200 transition-colors"
                      >
                        <Facebook className="w-5 h-5" />
                      </a>
                      
                      <a
                        href="https://www.instagram.com/dasynoma?igsh=cXNzZXR6c2RpcXlw"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-pink-100 text-pink-600 rounded-full hover:bg-pink-200 transition-colors"
                      >
                        <Instagram className="w-5 h-5" />
                      </a>
                    </div>
                  </div>
                </div>

                {/* Mobile CTA Button */}
                <div className="absolute bottom-0 left-0 right-0 p-6 border-t bg-white">
                  <motion.button
                    whileTap={{ scale: 0.95 }}
                    className="w-full py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl shadow-lg"
                    onClick={() => setIsOpen(false)}
                  >
                    Get Free Quote
                  </motion.button>
                </div>
              </motion.div>
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
            className="fixed inset-0 z-[9999]"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSearchOpen(false)}
              className="absolute inset-0 bg-black/70 backdrop-blur-md"
            />
            
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: -50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: -50 }}
              onClick={(e) => e.stopPropagation()}
              className="absolute top-20 left-1/2 -translate-x-1/2 w-full max-w-2xl px-4"
            >
              <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
                <div className="p-6 border-b">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-gray-900">Search</h3>
                    <button
                      onClick={() => setSearchOpen(false)}
                      className="p-2 hover:bg-gray-100 rounded-lg"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>
                  
                  <form onSubmit={(e) => { e.preventDefault(); setSearchOpen(false); }} className="relative">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      autoFocus
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder="Search for services, articles, or solutions..."
                      className="w-full pl-12 pr-24 py-4 text-lg border rounded-xl focus:ring-3 focus:ring-blue-500/30 focus:border-blue-500 outline-none"
                    />
                    <button
                      type="submit"
                      className="absolute right-2 top-1/2 -translate-y-1/2 px-6 py-2.5 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-lg hover:opacity-90 transition-opacity"
                    >
                      Search
                    </button>
                  </form>
                </div>
                
                <div className="p-6">
                  <h4 className="text-sm font-semibold text-gray-500 uppercase mb-3">Popular Searches</h4>
                  <div className="flex flex-wrap gap-2">
                    {['Web Development', 'Mobile Apps', 'SEO', 'UI/UX Design', 'Cloud Solutions'].map((tag) => (
                      <button
                        key={tag}
                        onClick={() => { setSearchQuery(tag); }}
                        className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg text-sm font-medium transition-colors"
                      >
                        {tag}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}