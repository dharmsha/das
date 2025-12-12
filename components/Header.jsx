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
  MessageCircle,
  ExternalLink
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

  // Social links data - SIMPLE FIX
  const socialLinks = [
    {
      href: "https://www.facebook.com/profile.php?id=61585232360223",
      icon: <Facebook className="w-3.5 h-3.5 sm:w-4 sm:h-4" />,
      label: "Facebook"
    },
    {
      href: "https://www.instagram.com/dasynoma?igsh=cXNzZXR6c2RpcXlw",
      icon: <Instagram className="w-3.5 h-3.5 sm:w-4 sm:h-4" />,
      label: "Instagram"
    },
    {
      href: "https://wa.me/919973132362",
      icon: <MessageCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4" />,
      label: "WhatsApp"
    }
  ];

  // Handle social link click
  const handleSocialClick = (e, href) => {
    e.preventDefault();
    window.open(href, '_blank', 'noopener,noreferrer');
  };

  return (
    <>
      {/* TOP BAR - Simple and Clean */}
      <div className="bg-gradient-to-r from-blue-800 to-purple-800 text-white">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-9">
            {/* Left - Contact Info */}
            <div className="flex items-center gap-4 text-xs sm:text-sm">
              <a 
                href="tel:+919973132362" 
                className="flex items-center gap-1.5 hover:text-blue-200 transition"
              >
                <Phone className="w-3 h-3" />
                <span className="hidden sm:inline">+91 9973132362</span>
                <span className="sm:hidden">Call</span>
              </a>
              
              <a 
                href="mailto:dasynoma@gmail.com" 
                className="flex items-center gap-1.5 hover:text-blue-200 transition"
              >
                <Mail className="w-3 h-3" />
                <span className="hidden sm:inline">dasynoma@gmail.com</span>
                <span className="sm:hidden">Email</span>
              </a>
            </div>

            {/* Right - Social & Language */}
            <div className="flex items-center gap-2">
              {/* Social Icons - SIMPLE */}
              <div className="flex items-center gap-1.5">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1 hover:bg-white/10 rounded transition"
                    aria-label={social.label}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>

              {/* Language Selector */}
              <div className="hidden sm:flex items-center gap-1 border-l pl-2 ml-2 border-white/20">
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
        className={`sticky top-0 left-0 right-0 z-50 w-full transition-all duration-300 ${
          scrolled ? 'bg-white shadow-lg' : 'bg-white'
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex h-16 sm:h-20 items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2.5">
              <div className="relative h-10 w-10 sm:h-12 sm:w-12 rounded-xl bg-gradient-to-br from-blue-600 to-purple-600 p-1">
                <div className="relative h-full w-full overflow-hidden rounded-lg">
                  <Image
                    src="/logo.jpeg"
                    alt="DASYNOMA Technology"
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 40px, 48px"
                  />
                </div>
              </div>
              
              <div className="flex flex-col">
                <span className="text-lg sm:text-2xl font-bold text-gray-900">DASYNOMA</span>
                <span className="text-[10px] sm:text-xs text-blue-600 font-medium tracking-wide">
                  TECHNOLOGY SOLUTIONS
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => (
                <div key={item.name} className="relative" ref={item.hasDropdown ? servicesRef : null}>
                  {item.hasDropdown ? (
                    <>
                      <button
                        onMouseEnter={() => setServicesOpen(true)}
                        onMouseLeave={() => setServicesOpen(false)}
                        className="px-4 py-2.5 rounded-lg flex items-center gap-1.5 text-gray-700 hover:text-blue-600 font-medium transition-colors"
                      >
                        {item.name}
                        <ChevronDown className={`w-3.5 h-3.5 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
                      </button>
                      
                      {servicesOpen && (
                        <div
                          className="absolute left-0 top-full mt-1 w-64 bg-white border shadow-xl rounded-xl py-2 z-50"
                          onMouseEnter={() => setServicesOpen(true)}
                          onMouseLeave={() => setServicesOpen(false)}
                        >
                          {item.dropdown.map((service) => (
                            <Link
                              key={service.name}
                              href={service.href}
                              className="flex items-center gap-3 px-4 py-2.5 hover:bg-blue-50 transition-colors"
                            >
                              <span className="text-lg">{service.icon}</span>
                              <span className="text-sm font-medium">{service.name}</span>
                            </Link>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <Link
                      href={item.href}
                      className="px-4 py-2.5 text-gray-700 hover:text-blue-600 font-medium rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
              
              <button className="ml-2 px-5 py-2.5 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-lg hover:shadow-md transition-shadow">
                Get Quote
              </button>
            </nav>

            {/* Desktop Right Actions */}
            <div className="hidden lg:flex items-center gap-3">
              <button
                onClick={() => setSearchOpen(true)}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                aria-label="Search"
              >
                <Search className="w-4.5 h-4.5 text-gray-600" />
              </button>
              
              <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors" aria-label="Account">
                <User className="w-4.5 h-4.5 text-gray-600" />
              </button>
            </div>

            {/* Mobile Menu Button - CLEAN AND ATTRACTIVE */}
            <div className="lg:hidden flex items-center gap-2">
              <button
                onClick={() => setSearchOpen(true)}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                aria-label="Search"
              >
                <Search className="w-5 h-5 text-gray-600" />
              </button>
              
              {/* Clean Menu Button */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="relative group"
                aria-label="Menu"
              >
                {/* Main Button */}
                <div className="relative p-2.5 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg shadow-md hover:shadow-lg transition-all duration-200">
                  {isOpen ? (
                    <X className="w-5 h-5" />
                  ) : (
                    <Menu className="w-5 h-5" />
                  )}
                </div>
                
                {/* Animation Ring */}
                {!isOpen && (
                  <div className="absolute inset-0 border-2 border-blue-500/30 rounded-lg animate-ping opacity-0 group-hover:opacity-100"></div>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* MOBILE MENU - Clean and Simple */}
        <AnimatePresence>
          {isOpen && (
            <>
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsOpen(false)}
                className="fixed inset-0 bg-black/40 z-40 lg:hidden"
              />
              
              {/* Menu Panel */}
              <motion.div
                initial={{ x: '100%' }}
                animate={{ x: 0 }}
                exit={{ x: '100%' }}
                transition={{ type: 'tween', duration: 0.3 }}
                className="fixed top-0 right-0 h-full w-80 bg-white shadow-2xl z-50 lg:hidden"
              >
                {/* Menu Header */}
                <div className="p-4 border-b">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-blue-600 to-purple-600 p-0.5">
                        <div className="h-full w-full rounded-md overflow-hidden">
                          <Image
                            src="/logo.jpeg"
                            alt="Logo"
                            width={40}
                            height={40}
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
                      <X className="w-5 h-5" />
                    </button>
                  </div>
                </div>

                {/* Menu Content */}
                <div className="p-4 h-[calc(100vh-120px)] overflow-y-auto">
                  <div className="space-y-1">
                    {navItems.map((item) => (
                      <div key={item.name}>
                        {item.hasDropdown ? (
                          <>
                            <button
                              onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                              className="w-full flex items-center justify-between p-3 text-left hover:bg-blue-50 rounded-lg"
                            >
                              <span className="font-medium text-gray-900">{item.name}</span>
                              <ChevronDown className={`w-4 h-4 transition-transform ${mobileServicesOpen ? 'rotate-180' : ''}`} />
                            </button>
                            
                            {mobileServicesOpen && (
                              <div className="ml-4 space-y-1 py-2 border-l-2 border-blue-100">
                                {item.dropdown.map((service) => (
                                  <Link
                                    key={service.name}
                                    href={service.href}
                                    onClick={() => setIsOpen(false)}
                                    className="flex items-center gap-3 p-3 hover:bg-blue-50 rounded-lg"
                                  >
                                    <span className="text-lg">{service.icon}</span>
                                    <span className="text-gray-700">{service.name}</span>
                                  </Link>
                                ))}
                              </div>
                            )}
                          </>
                        ) : (
                          <Link
                            href={item.href}
                            onClick={() => setIsOpen(false)}
                            className="block p-3 font-medium text-gray-900 hover:bg-blue-50 rounded-lg"
                          >
                            {item.name}
                          </Link>
                        )}
                      </div>
                    ))}
                  </div>

                  {/* Contact Buttons */}
                  <div className="mt-6 pt-6 border-t">
                    <div className="grid grid-cols-2 gap-3">
                      <a
                        href="tel:+919973132362"
                        onClick={() => setIsOpen(false)}
                        className="flex flex-col items-center p-3 bg-blue-50 hover:bg-blue-100 rounded-lg"
                      >
                        <Phone className="w-5 h-5 text-blue-600 mb-1" />
                        <span className="text-xs font-medium">Call Now</span>
                      </a>
                      
                      <a
                        href="https://wa.me/919973132362"
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => setIsOpen(false)}
                        className="flex flex-col items-center p-3 bg-green-50 hover:bg-green-100 rounded-lg"
                      >
                        <MessageCircle className="w-5 h-5 text-green-600 mb-1" />
                        <span className="text-xs font-medium">WhatsApp</span>
                      </a>
                    </div>

                    {/* Social Links in Mobile Menu */}
                    <div className="mt-4 pt-4 border-t">
                      <div className="text-xs text-gray-500 mb-2">Follow us:</div>
                      <div className="flex gap-2">
                        {socialLinks.map((social, index) => (
                          <a
                            key={index}
                            href={social.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={() => setIsOpen(false)}
                            className="flex-1 flex flex-col items-center p-2 bg-gray-50 hover:bg-gray-100 rounded-lg"
                          >
                            {social.icon}
                            <span className="text-xs mt-1">{social.label}</span>
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* CTA Button */}
                <div className="absolute bottom-0 left-0 right-0 p-4 border-t bg-white">
                  <button
                    onClick={() => setIsOpen(false)}
                    className="w-full py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-lg hover:shadow-md"
                  >
                    Get Free Quote
                  </button>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </header>

      {/* SIMPLE SEARCH MODAL */}
      <AnimatePresence>
        {searchOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSearchOpen(false)}
              className="fixed inset-0 bg-black/50 z-[9999]"
            />
            
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="fixed top-20 left-1/2 -translate-x-1/2 w-[90%] max-w-md bg-white rounded-xl shadow-2xl z-[10000]"
            >
              <div className="p-4">
                <div className="flex items-center gap-3 mb-4">
                  <Search className="w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    autoFocus
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search here..."
                    className="flex-1 py-2 outline-none"
                  />
                  <button
                    onClick={() => setSearchOpen(false)}
                    className="p-1 hover:bg-gray-100 rounded"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
                
                <div className="text-sm text-gray-500 mb-2">Popular:</div>
                <div className="flex flex-wrap gap-2">
                  {['Web Development', 'Mobile Apps', 'Cloud'].map((tag) => (
                    <button
                      key={tag}
                      onClick={() => {
                        setSearchQuery(tag);
                        setSearchOpen(false);
                      }}
                      className="px-3 py-1.5 bg-gray-100 hover:bg-gray-200 rounded-lg text-sm"
                    >
                      {tag}
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}