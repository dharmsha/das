'use client';

import { useState, useEffect } from 'react';
import { 
  Heart,
  MessageCircle,
  ArrowUp,
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
  Github,
  Globe,
  Sparkles,
  Moon,
  Sun,
  Zap
} from 'lucide-react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

const Footer = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [isDark] = useState(true);
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const footerLinks = {
    Product: [
      { name: 'Features', href: '#' },
      { name: 'Solutions', href: '#' },
      { name: 'Pricing', href: '#' },
      { name: 'Updates', href: '#' },
    ],
    Company: [
      { name: 'About Us', href: '#' },
      { name: 'Careers', href: '#' },
      { name: 'Press', href: '#' },
      { name: 'Blog', href: '#' },
    ],
    Resources: [
      { name: 'Documentation', href: '#' },
      { name: 'Help Center', href: '#' },
      { name: 'Community', href: '#' },
      { name: 'Partners', href: '#' },
    ],
    Legal: [
      { name: 'Privacy', href: '#' },
      { name: 'Terms', href: '#' },
      { name: 'Security', href: '#' },
      { name: 'Cookies', href: '#' },
    ],
  };

  const socialLinks = [
    { icon: Facebook, href: '#', color: 'hover:bg-blue-500/20 hover:text-blue-400', label: 'Facebook' },
    { icon: Twitter, href: '#', color: 'hover:bg-sky-500/20 hover:text-sky-400', label: 'Twitter' },
    { icon: Instagram, href: '#', color: 'hover:bg-pink-500/20 hover:text-pink-400', label: 'Instagram' },
    { icon: Linkedin, href: '#', color: 'hover:bg-blue-500/20 hover:text-blue-400', label: 'LinkedIn' },
    { icon: Github, href: '#', color: 'hover:bg-gray-700 hover:text-gray-300', label: 'GitHub' },
    { icon: Youtube, href: '#', color: 'hover:bg-red-500/20 hover:text-red-400', label: 'YouTube' },
  ];

  const contactInfo = [
    {
      icon: <Phone className="w-4 h-4" />,
      text: '+91 9973132362',
      href: 'tel:+919973132362'
    },
    {
      icon: <Mail className="w-4 h-4" />,
      text: 'hello@dasynoma.com',
      href: 'mailto:hello@yads.com'
    },
    {
      icon: <MapPin className="w-4 h-4" />,
      text: 'Bangalore, India',
      href: '#'
    },
  ];

  return (
    <>
      <footer className="bg-black text-gray-300 border-t border-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Main Footer */}
          <div className="py-8 sm:py-12">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 sm:gap-12">
              
              {/* Brand Section */}
              <div className="lg:col-span-2 space-y-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                      <Sparkles className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-white">DASYNOMA</h2>
                      <p className="text-sm text-blue-400 font-medium">Technology</p>
                    </div>
                  </div>
                  
                  <button 
                    onClick={() => {}}
                    className="hidden sm:block p-2 rounded-lg bg-gray-900 hover:bg-gray-800 transition-colors"
                    aria-label="Toggle theme"
                  >
                    {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                  </button>
                </div>
                
                <p className="text-gray-400 max-w-md text-sm sm:text-base">
                  Building beautiful digital experiences that transform businesses and delight users.
                </p>
                
                {/* Contact Info */}
                <div className="space-y-3">
                  {contactInfo.map((info, index) => (
                    <a
                      key={index}
                      href={info.href}
                      className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors group"
                    >
                      <div className="w-8 h-8 rounded-lg bg-gray-900 border border-gray-800 flex items-center justify-center group-hover:border-blue-500 group-hover:bg-blue-500/10 transition-colors">
                        {info.icon}
                      </div>
                      <span className="font-medium text-sm sm:text-base">{info.text}</span>
                    </a>
                  ))}
                </div>
                
                {/* Social Media */}
                <div className="pt-4">
                  <p className="text-sm font-medium text-gray-300 mb-3">Follow Us</p>
                  <div className="flex flex-wrap gap-2">
                    {socialLinks.map((social, index) => (
                      <a
                        key={index}
                        href={social.href}
                        className={`w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-gray-900 border border-gray-800 flex items-center justify-center transition-all ${social.color}`}
                        aria-label={social.label}
                      >
                        <social.icon className="w-4 h-4 sm:w-5 sm:h-5" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* Links Grid */}
              <div className="lg:col-span-3">
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8">
                  {Object.entries(footerLinks).map(([category, links]) => (
                    <div key={category}>
                      <h3 className="font-semibold text-white mb-3 sm:mb-4 text-sm sm:text-base">
                        {category}
                      </h3>
                      <ul className="space-y-2 sm:space-y-3">
                        {links.map((link) => (
                          <li key={link.name}>
                            <Link
                              href={link.href}
                              className="text-gray-400 hover:text-white transition-colors hover:translate-x-1 inline-block text-sm sm:text-base"
                            >
                              {link.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
                
                {/* Newsletter */}
                <div className="mt-8 sm:mt-12 p-4 sm:p-6 bg-gradient-to-r from-gray-900 to-gray-800 rounded-xl border border-gray-800">
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-6">
                    <div className="w-full sm:w-auto">
                      <div className="flex items-center gap-2 mb-2">
                        <Zap className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400" />
                        <h3 className="text-base sm:text-lg font-semibold text-white">
                          Stay in the loop
                        </h3>
                      </div>
                      <p className="text-gray-400 text-sm sm:text-base">
                        Subscribe to our newsletter for the latest updates.
                      </p>
                    </div>
                    <form className="flex flex-col sm:flex-row w-full sm:w-auto gap-2 sm:gap-2">
                      <input
                        type="email"
                        placeholder="Your email"
                        className="w-full sm:w-56 px-3 sm:px-4 py-2 sm:py-3 bg-gray-900 border border-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-500 text-sm sm:text-base"
                      />
                      <button
                        type="submit"
                        className="w-full sm:w-auto px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:opacity-90 transition-opacity font-medium text-sm sm:text-base"
                      >
                        Subscribe
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="py-4 sm:py-6 border-t border-gray-900">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-2 text-gray-500 text-xs sm:text-sm">
                <Heart className="w-3 h-3 sm:w-4 sm:h-4 text-red-500 animate-pulse" />
                <span>
                  Made with love in India • © {currentYear} DASYNOMA Technology
                </span>
              </div>
              
              <div className="flex items-center gap-4 sm:gap-6">
                <div className="flex items-center gap-1 sm:gap-2">
                  <Globe className="w-3 h-3 sm:w-4 sm:h-4 text-gray-500" />
                  <select className="bg-gray-900 text-xs sm:text-sm text-gray-300 focus:outline-none border border-gray-800 rounded px-1 sm:px-2 py-1">
                    <option value="en">English</option>
                    <option value="hi">हिंदी</option>
                  </select>
                </div>
                <div className="flex items-center gap-3 sm:gap-6 text-xs sm:text-sm text-gray-400">
                  <Link href="#" className="hover:text-white transition-colors">
                    Privacy
                  </Link>
                  <Link href="#" className="hover:text-white transition-colors">
                    Terms
                  </Link>
                  <Link href="#" className="hover:text-white transition-colors">
                    Cookies
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* WhatsApp Button - Mobile के लिए fixed position */}
      <motion.a
        href="https://wa.me/919973132362"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        whileHover={{ scale: 1.05 }}
        className="fixed bottom-20 right-4 sm:bottom-6 sm:right-6 z-40 w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-green-500 to-green-600 text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all"
        aria-label="Chat on WhatsApp"
      >
        <div className="relative">
          <MessageCircle className="w-6 h-6 sm:w-7 sm:h-7" />
          <div className="absolute -top-1 -right-1 w-2 h-2 sm:w-3 sm:h-3 bg-white rounded-full">
            <div className="w-full h-full bg-green-500 rounded-full animate-ping"></div>
          </div>
        </div>
      </motion.a>

      {/* Back to Top Button - Mobile के लिए fixed position */}
      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            onClick={scrollToTop}
            className="fixed bottom-32 right-4 sm:bottom-24 sm:right-6 z-40 w-10 h-10 sm:w-12 sm:h-12 bg-gray-900 border border-gray-800 text-gray-300 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl hover:bg-gray-800 transition-all"
            aria-label="Back to top"
          >
            <ArrowUp className="w-4 h-4 sm:w-5 sm:h-5" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Live Support Badge - Mobile के लिए compact */}
      <div className="fixed bottom-20 left-4 sm:bottom-6 sm:left-6 z-40">
        <div className="px-2 sm:px-4 py-1.5 sm:py-2 bg-gray-900 rounded-full shadow-lg border border-gray-800 flex items-center gap-1 sm:gap-2">
          <div className="relative">
            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-500 rounded-full animate-ping"></div>
            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-500 rounded-full absolute top-0"></div>
          </div>
          <span className="text-xs sm:text-sm font-medium text-gray-300 hidden sm:inline">
            Support Online
          </span>
          <span className="text-xs sm:hidden font-medium text-gray-300">
            Support
          </span>
        </div>
      </div>
    </>
  );
};

export default Footer;