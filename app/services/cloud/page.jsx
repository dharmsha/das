'use client';

import { useState, useEffect } from 'react';
import { 
  Cloud, 
  Zap, 
  Shield, 
  Globe, 
  Database,
  Server,
  Lock,
  Users,
  TrendingUp,
  Rocket,
  Infinity as InfinityIcon,
  Cpu,
  Layers,
  Upload,
  Download,
  Activity,
  BarChart,
  Sparkles,
  Moon,
  Star,
  Heart,
  Coffee as CoffeeIcon,
  CloudRain,
  Wind,
  Sun,
  Target,
  Award,
  CheckCircle,
  Play,
  Pause,
  RefreshCw,
  Code,
  GitBranch,
  Terminal,
  Palette,
  Brain,
  User
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const CloudPage = () => {
  const [activeService, setActiveService] = useState(0);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [floatingElements, setFloatingElements] = useState([]);
  const [cloudAnimation, setCloudAnimation] = useState(true);
  const [serverPulse, setServerPulse] = useState(true);

  const services = [
    {
      id: 'compute',
      name: 'Cloud Compute',
      icon: <Cpu className="w-8 h-8" />,
      description: 'Lightning-fast virtual machines',
      features: ['Scalable CPUs', 'Auto-scaling', 'Load balancing', '99.99% uptime'],
      color: 'from-blue-500 to-cyan-400',
      emotion: 'Power & Speed'
    },
    {
      id: 'storage',
      name: 'Cloud Storage',
      icon: <Database className="w-8 h-8" />,
      description: 'Infinite storage space',
      features: ['Unlimited storage', 'Encrypted data', 'Global CDN', 'Real-time sync'],
      color: 'from-purple-500 to-pink-500',
      emotion: 'Freedom & Space'
    },
    {
      id: 'ai',
      name: 'AI Cloud',
      icon: <Brain className="w-8 h-8" />,
      description: 'Artificial intelligence at scale',
      features: ['ML models', 'Neural networks', 'Real-time inference', 'Training clusters'],
      color: 'from-green-500 to-emerald-400',
      emotion: 'Intelligence & Insight'
    },
    {
      id: 'serverless',
      name: 'Serverless',
      icon: <Zap className="w-8 h-8" />,
      description: 'Code without infrastructure',
      features: ['Zero configuration', 'Pay per use', 'Auto-scaling', 'Event-driven'],
      color: 'from-yellow-500 to-orange-500',
      emotion: 'Simplicity & Magic'
    }
  ];

  const testimonials = [
    {
      quote: "The cloud gave our startup wings. We scaled from 0 to 1M users in 6 months.",
      author: "Alex Chen",
      company: "NovaTech",
      avatar: "👨‍💻"
    },
    {
      quote: "Finally, infrastructure that thinks like we do. It feels like magic.",
      author: "Sarah Johnson",
      company: "Quantum Labs",
      avatar: "👩‍🔬"
    },
    {
      quote: "Our data found its home in the cloud. It's like digital poetry.",
      author: "Miguel Santos",
      company: "DataDreams",
      avatar: "🧑‍🎨"
    }
  ];

  const stats = [
    { label: 'Data Centers', value: '142', icon: <Server className="w-5 h-5" /> },
    { label: 'Countries', value: '65', icon: <Globe className="w-5 h-5" /> },
    { label: 'Petabytes', value: '45M', icon: <Database className="w-5 h-5" /> },
    { label: 'Uptime', value: '99.99%', icon: <Activity className="w-5 h-5" /> }
  ];

  const features = [
    {
      title: "Global Reach",
      description: "Your data lives everywhere and nowhere at once",
      icon: <Globe className="w-6 h-6" />,
      detail: "200+ edge locations"
    },
    {
      title: "Ironclad Security",
      description: "Sleep soundly knowing your data is safe",
      icon: <Shield className="w-6 h-6" />,
      detail: "Military-grade encryption"
    },
    {
      title: "Lightning Fast",
      description: "Speed that feels like teleportation",
      icon: <Zap className="w-6 h-6" />,
      detail: "1ms latency"
    },
    {
      title: "Infinite Scale",
      description: "Grow without limits, shrink without waste",
      icon: <InfinityIcon className="w-6 h-6" />,
      detail: "Auto-scaling"
    }
  ];

  const cloudTypes = [
    { type: 'Public Cloud', color: 'bg-blue-500', usage: 'Startups & Scale-ups' },
    { type: 'Private Cloud', color: 'bg-purple-500', usage: 'Enterprise & Security' },
    { type: 'Hybrid Cloud', color: 'bg-green-500', usage: 'Best of both worlds' },
    { type: 'Multi-Cloud', color: 'bg-yellow-500', usage: 'Freedom & Flexibility' }
  ];

  // Create floating cloud elements
  useEffect(() => {
    const elements = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 20 + 10,
      speed: Math.random() * 0.5 + 0.2,
      opacity: Math.random() * 0.3 + 0.1
    }));
    setFloatingElements(elements);
  }, []);

  // Server pulse animation
  useEffect(() => {
    const interval = setInterval(() => {
      setServerPulse(prev => !prev);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white transition-all duration-500">
      
      {/* Animated Cloud Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {floatingElements.map((cloud) => (
          <motion.div
            key={cloud.id}
            className="absolute rounded-full bg-white/10 backdrop-blur-sm"
            style={{
              left: `${cloud.x}%`,
              top: `${cloud.y}%`,
              width: `${cloud.size}px`,
              height: `${cloud.size}px`,
              opacity: cloud.opacity
            }}
            animate={{
              x: [0, Math.random() * 20 - 10, 0],
              y: [0, Math.random() * 20 - 10, 0],
            }}
            transition={{
              duration: 10 + Math.random() * 20,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Header */}
        <header className="flex justify-between items-center mb-16">
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500">
              <Cloud className="w-8 h-8" />
            </div>
            <div>
              <h1 className="text-2xl font-bold">SkyNex</h1>
              <p className="text-sm text-gray-400">
                Where data meets the sky
              </p>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              className="p-2 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors"
            >
              <Sun className="w-5 h-5" />
            </button>
            <button
              onClick={() => setCloudAnimation(!cloudAnimation)}
              className="p-2 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors"
            >
              {cloudAnimation ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
            </button>
          </div>
        </header>

        {/* Hero Section */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white mb-6"
          >
            <Sparkles className="w-5 h-5" />
            <span>The Future is in the Cloud</span>
          </motion.div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
            Beyond Infrastructure
          </h1>
          
          <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-10 leading-relaxed text-gray-300">
            We don't just host servers. We host{' '}
            <span className="font-bold text-cyan-400">dreams</span>, 
            power <span className="font-bold text-blue-400">innovations</span>, and 
            scale <span className="font-bold text-purple-400">possibilities</span>.
          </p>

          {/* Animated Cloud Diagram */}
          <div className="max-w-4xl mx-auto mb-12 relative h-64">
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                animate={{ 
                  scale: serverPulse ? 1 : 1.05,
                  opacity: serverPulse ? 0.8 : 1 
                }}
                transition={{ duration: 2 }}
                className="w-24 h-24 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center shadow-2xl"
              >
                <Server className="w-12 h-12" />
              </motion.div>
              
              {/* Connection Lines */}
              <div className="absolute w-full h-full">
                {[0, 90, 180, 270].map((angle) => (
                  <motion.div
                    key={angle}
                    className="absolute top-1/2 left-1/2"
                    style={{
                      transform: `rotate(${angle}deg)`,
                      transformOrigin: '0 0'
                    }}
                  >
                    <div className="w-64 h-0.5 bg-gray-800"></div>
                    <div className="absolute right-0 top-1/2 -translate-y-1/2">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
                        <Database className="w-8 h-8" />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="p-6 rounded-2xl backdrop-blur-sm bg-gray-900/80 border border-gray-800"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-blue-500/20">
                  {stat.icon}
                </div>
                <span className="text-sm text-gray-400">
                  {stat.label}
                </span>
              </div>
              <div className="text-3xl font-bold">{stat.value}</div>
            </motion.div>
          ))}
        </div>

        {/* Services */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              More Than Services
              <span className="block text-xl text-gray-500 mt-2">Emotional Connections</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className={`p-6 rounded-2xl cursor-pointer transform transition-all duration-300 hover:-translate-y-2 ${
                  activeService === index
                    ? `bg-gradient-to-br ${service.color} text-white shadow-2xl`
                    : 'bg-gray-900/80 border border-gray-800 hover:bg-gray-800'
                }`}
                onClick={() => setActiveService(index)}
                whileHover={{ scale: 1.02 }}
              >
                <div className={`p-3 rounded-xl inline-block mb-4 ${
                  activeService === index 
                    ? 'bg-white/20' 
                    : 'bg-blue-500/10'
                }`}>
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{service.name}</h3>
                <p className={`mb-4 ${activeService === index ? 'text-white/90' : 'text-gray-400'}`}>
                  {service.description}
                </p>
                <div className="space-y-2">
                  {service.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <CheckCircle className={`w-4 h-4 ${
                        activeService === index ? 'text-white' : 'text-green-500'
                      }`} />
                      <span className="text-sm text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 pt-4 border-t border-white/20">
                  <span className="text-sm opacity-80">💖 {service.emotion}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Cloud Types */}
        <div className="mb-20 p-8 rounded-3xl bg-gray-900/80 border border-gray-800">
          <div className="flex items-center gap-3 mb-8">
            <Layers className="w-8 h-8 text-blue-500" />
            <h2 className="text-3xl font-bold">Choose Your Cloud</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {cloudTypes.map((cloud, index) => (
              <div key={cloud.type} className="p-6 rounded-xl backdrop-blur-sm bg-gray-800/50">
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-4 h-4 rounded-full ${cloud.color}`}></div>
                  <h3 className="font-bold">{cloud.type}</h3>
                </div>
                <p className="text-sm mb-4 text-gray-400">
                  {cloud.usage}
                </p>
                <div className="flex items-center gap-2 text-sm text-gray-300">
                  <Users className="w-4 h-4" />
                  <span>Perfect for teams who value {cloud.type.toLowerCase().split(' ')[0]}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Features */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 mb-4">
              <Star className="w-8 h-8 text-yellow-500" />
              <h2 className="text-3xl font-bold">Why Developers Love Us</h2>
              <Heart className="w-8 h-8 text-red-500" />
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div key={feature.title} className="p-6 rounded-2xl transform hover:-translate-y-2 transition-all duration-300 bg-gray-900/80 hover:shadow-2xl border border-gray-800">
                <div className="p-3 rounded-xl inline-block mb-4 bg-blue-500/20">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="mb-4 text-gray-400">
                  {feature.description}
                </p>
                <div className="flex items-center gap-2 text-sm text-gray-300">
                  <Target className="w-4 h-4" />
                  <span>{feature.detail}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <Users className="w-12 h-12 mx-auto mb-4 text-purple-500" />
            <h2 className="text-3xl font-bold">Stories from the Cloud</h2>
            <p className="mt-2 text-gray-400">
              Real emotions from real teams
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="p-6 rounded-2xl bg-gray-900/80 border border-gray-800 backdrop-blur-sm"
              >
                <div className="text-6xl mb-4">{testimonial.avatar}</div>
                <p className="text-lg italic mb-6 text-gray-300">"{testimonial.quote}"</p>
                <div className="border-t border-gray-700 pt-4">
                  <p className="font-bold">{testimonial.author}</p>
                  <p className="text-sm text-gray-400">
                    {testimonial.company}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Late Night Developer */}
        <div className="mb-20 p-8 rounded-3xl bg-gradient-to-r from-blue-900/50 to-purple-900/50 text-white border border-gray-800">
          <div className="flex items-center gap-4 mb-6">
            <CoffeeIcon className="w-8 h-8 text-yellow-400" />
            <div>
              <h3 className="text-2xl font-bold">For the Late Night Coders</h3>
              <p className="text-white/80">We keep the lights on so you can dream</p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-4 bg-white/10 rounded-xl">
              <div className="flex items-center gap-2 mb-2">
                <Code className="w-5 h-5" />
                <span className="font-medium">Midnight Deployments</span>
              </div>
              <p className="text-sm text-white/70">When inspiration strikes at 2 AM</p>
            </div>
            <div className="p-4 bg-white/10 rounded-xl">
              <div className="flex items-center gap-2 mb-2">
                <GitBranch className="w-5 h-5" />
                <span className="font-medium">Always Available</span>
              </div>
              <p className="text-sm text-white/70">24/7 support for your wildest ideas</p>
            </div>
            <div className="p-4 bg-white/10 rounded-xl">
              <div className="flex items-center gap-2 mb-2">
                <Terminal className="w-5 h-5" />
                <span className="font-medium">Zero Downtime</span>
              </div>
              <p className="text-sm text-white/70">Your users never sleep, neither do we</p>
            </div>
            <div className="p-4 bg-white/10 rounded-xl">
              <div className="flex items-center gap-2 mb-2">
                <Palette className="w-5 h-5" />
                <span className="font-medium">Built with ❤️</span>
              </div>
              <p className="text-sm text-white/70">By developers, for developers</p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center p-12 rounded-3xl bg-gradient-to-r from-cyan-900/30 to-blue-900/30 border border-gray-800">
          <Rocket className="w-16 h-16 mx-auto mb-6 animate-bounce" />
          <h2 className="text-4xl font-bold mb-4">Ready to Soar?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-300">
            Join 50,000+ teams who've found their home in the cloud.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-white text-blue-600 rounded-full font-bold hover:bg-gray-100 transform hover:-translate-y-1 transition-all duration-300 shadow-lg">
              Start Free Trial 🚀
            </button>
            <button className="px-8 py-3 bg-transparent border-2 border-white text-white rounded-full font-bold hover:bg-white/20 transform hover:-translate-y-1 transition-all duration-300">
              Book a Demo ✨
            </button>
          </div>
          <p className="mt-6 text-sm opacity-80">
            No credit card required • Free forever tier • 24/7 human support
          </p>
        </div>

        {/* Footer */}
        <div className="mt-20 text-center">
          <div className="flex items-center justify-center gap-4 mb-6">
            <CloudRain className="w-6 h-6 text-blue-500" />
            <Wind className="w-6 h-6 text-cyan-500" />
            <Sun className="w-6 h-6 text-yellow-500" />
          </div>
          <p className="text-2xl font-light italic max-w-3xl mx-auto mb-8 text-gray-300">
            "The cloud isn't about where your data lives. It's about where your ideas can fly."
          </p>
          <div className="flex items-center justify-center gap-6 text-sm text-gray-400">
            <span>Made with</span>
            <Heart className="w-5 h-5 text-red-500 animate-pulse" />
            <span>by the SkyNex team</span>
            <span>•</span>
            <span>Powered by starlight ☁️</span>
          </div>
        </div>
      </div>

      {/* Floating Action Button */}
      <div className="fixed bottom-8 right-8 z-20">
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="p-4 rounded-full shadow-2xl cursor-pointer bg-gradient-to-r from-cyan-500 to-blue-500"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <Cloud className="w-6 h-6 text-white" />
        </motion.div>
      </div>

      {/* Data Flow Animation */}
      <div className="fixed bottom-0 left-0 right-0 h-1 overflow-hidden">
        <motion.div
          className="h-full bg-gradient-to-r from-transparent via-cyan-500 to-transparent"
          animate={{
            x: ['-100%', '100%']
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>
    </div>
  );
};

export default CloudPage;