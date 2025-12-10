'use client';

import { useState, useEffect } from 'react';
import { 
  Heart, 
  Code, 
  Rocket, 
  Coffee, 
  Brain, 
  Users,
  Target,
  Sparkles,
  Bug,
  Coffee as CoffeeIcon,
  Moon,
  Sun,
  Clock,
  Award,
  TrendingUp,
  Cpu,
  Globe,
  Zap,
  Star,
  BookOpen,
  Lightbulb,
  GitBranch,
  Terminal,
  Palette,
  Server
} from 'lucide-react';
import { motion } from 'framer-motion';

const WebDevelopmentPage = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [typedText, setTypedText] = useState('');
  const [charIndex, setCharIndex] = useState(0);
  const [isClient, setIsClient] = useState(false); // ✅ नया state
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 }); // ✅ नया state
  
  const fullText = "console.log('Hello, beautiful world!');";

  // ✅ Check if we're on client side
  useEffect(() => {
    setIsClient(true);
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight
    });
  }, []);

  useEffect(() => {
    if (charIndex < fullText.length && isClient) {
      const timeout = setTimeout(() => {
        setTypedText(prev => prev + fullText[charIndex]);
        setCharIndex(charIndex + 1);
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [charIndex, fullText, isClient]);

  const journey = [
    {
      stage: "The Beginning",
      icon: <Coffee className="w-8 h-8" />,
      description: "That first 'Hello World' that made your heart race",
      emotion: "Excitement",
      color: "from-blue-500 to-cyan-400"
    },
    {
      stage: "The Struggle",
      icon: <Bug className="w-8 h-8" />,
      description: "Hours debugging, wondering why the div won't center",
      emotion: "Frustration",
      color: "from-red-500 to-pink-500"
    },
    {
      stage: "The Breakthrough",
      icon: <Lightbulb className="w-8 h-8" />,
      description: "When everything finally clicks and works perfectly",
      emotion: "Euphoria",
      color: "from-yellow-500 to-orange-500"
    },
    {
      stage: "The Passion",
      icon: <Heart className="w-8 h-8" />,
      description: "When you realize this is more than just a job",
      emotion: "Love",
      color: "from-pink-500 to-rose-500"
    }
  ];

  const techStack = [
    { name: "React", color: "bg-cyan-100 text-cyan-800", icon: "⚛️" },
    { name: "Next.js", color: "bg-gray-100 text-gray-800", icon: "▲" },
    { name: "Tailwind", color: "bg-teal-100 text-teal-800", icon: "🎨" },
    { name: "TypeScript", color: "bg-blue-100 text-blue-800", icon: "TS" },
    { name: "Node.js", color: "bg-green-100 text-green-800", icon: "🟢" },
    { name: "MongoDB", color: "bg-emerald-100 text-emerald-800", icon: "🍃" },
  ];

  const testimonials = [
    {
      quote: "Web development taught me patience. Every error is a lesson waiting to be learned.",
      author: "Sarah, Frontend Dev",
      role: "3 years of debugging tears"
    },
    {
      quote: "The first time I saw my code come to life in a browser... I cried.",
      author: "Alex, Fullstack Dev",
      role: "From zero to hero in 2 years"
    },
    {
      quote: "It's not about writing code. It's about creating experiences that touch hearts.",
      author: "Maya, UI/UX Developer",
      role: "Making the web beautiful"
    }
  ];

  const lateNightMoments = [
    { time: "2:00 AM", activity: "Finally fixed that annoying bug", emoji: "🎉" },
    { time: "3:00 AM", activity: "Deployed to production with shaky hands", emoji: "🚀" },
    { time: "4:00 AM", activity: "Coffee #5 and still debugging", emoji: "☕" },
    { time: "5:00 AM", activity: "Watching the sunrise, code finally works", emoji: "🌅" }
  ];

  // ✅ Only render if client side
  if (!isClient) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div className={`min-h-screen transition-colors duration-500 ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-gradient-to-br from-blue-50 via-white to-purple-50'}`}>
      
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            initial={{ 
              x: Math.random() * windowSize.width,
              y: Math.random() * windowSize.height
            }}
            animate={{
              y: [null, -30, 30, -30],
              rotate: [0, 180, 360]
            }}
            transition={{
              duration: 3 + Math.random() * 4,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            <Code className={`w-4 h-4 ${isDarkMode ? 'text-blue-400/20' : 'text-blue-200'}`} />
          </motion.div>
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Theme Toggle */}
        <div className="flex justify-end mb-8">
          <button
            onClick={() => setIsDarkMode(!isDarkMode)}
            className={`p-3 rounded-full ${isDarkMode ? 'bg-yellow-500/20 text-yellow-400' : 'bg-blue-500/20 text-blue-600'}`}
          >
            {isDarkMode ? <Sun className="w-6 h-6" /> : <Moon className="w-6 h-6" />}
          </button>
        </div>

        {/* Hero Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white">
            <Sparkles className="w-5 h-5" />
            <span className="font-medium">The Emotional Journey</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
            Code with <span className="text-red-500">❤️</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
            Where <span className="font-bold text-blue-600">passion</span> meets{' '}
            <span className="font-bold text-purple-600">perseverance</span>, and{' '}
            <span className="font-bold text-pink-600">every line of code</span> tells a story.
          </p>

          {/* Animated Code */}
          <div className={`max-w-2xl mx-auto p-6 rounded-2xl ${isDarkMode ? 'bg-gray-800/50' : 'bg-white/80'} backdrop-blur-sm border ${isDarkMode ? 'border-gray-700' : 'border-blue-100'} shadow-xl mb-12`}>
            <div className="flex gap-2 mb-4">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <pre className="text-left font-mono text-lg overflow-x-auto">
              <code className={`${isDarkMode ? 'text-green-400' : 'text-green-600'}`}>
                {typedText}
                <span className="animate-pulse">_</span>
              </code>
            </pre>
          </div>
        </motion.div>

        {/* Journey Section */}
        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            The Emotional Rollercoaster 
            <span className="block text-2xl text-gray-500 mt-2">of Every Developer</span>
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {journey.map((step, index) => (
              <motion.div
                key={step.stage}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className={`p-6 rounded-2xl bg-gradient-to-br ${step.color} text-white transform hover:-translate-y-2 transition-all duration-300 hover:shadow-2xl`}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-white/20 rounded-xl">
                    {step.icon}
                  </div>
                  <span className="font-bold text-lg">{step.emotion}</span>
                </div>
                <h3 className="text-xl font-bold mb-2">{step.stage}</h3>
                <p className="text-white/90">{step.description}</p>
                <div className="mt-4 pt-4 border-t border-white/20">
                  <span className="text-sm opacity-80">Stage {index + 1}/4</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Tech Stack with Emotions */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 mb-4">
              <Cpu className="w-8 h-8 text-blue-600" />
              <h2 className="text-3xl font-bold">Our Tools of Trade</h2>
              <GitBranch className="w-8 h-8 text-purple-600" />
            </div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Each technology we use comes with its own set of emotions
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {techStack.map((tech) => (
              <div key={tech.name} className={`p-4 rounded-xl ${tech.color} flex flex-col items-center justify-center transform hover:scale-105 transition-all duration-300 hover:shadow-lg`}>
                <span className="text-2xl mb-2">{tech.icon}</span>
                <span className="font-semibold">{tech.name}</span>
                <div className="mt-2 flex gap-1">
                  {[...Array(3)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current text-yellow-500" />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Late Night Coding Section */}
        <div className={`mb-20 p-8 rounded-3xl ${isDarkMode ? 'bg-gradient-to-r from-gray-800 to-gray-900' : 'bg-gradient-to-r from-blue-900 to-purple-900'} text-white`}>
          <div className="flex items-center gap-3 mb-8">
            <Clock className="w-8 h-8 text-yellow-400" />
            <h2 className="text-3xl font-bold">Sacred Night Hours</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {lateNightMoments.map((moment) => (
              <div key={moment.time} className="bg-white/10 p-6 rounded-xl backdrop-blur-sm border border-white/20">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-bold text-yellow-300">{moment.time}</span>
                  <span className="text-2xl">{moment.emoji}</span>
                </div>
                <p className="text-white/90">{moment.activity}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-8 p-4 bg-white/10 rounded-xl border border-white/20">
            <div className="flex items-center gap-4">
              <CoffeeIcon className="w-8 h-8 text-yellow-400" />
              <div>
                <p className="font-medium">Pro Tip: Take breaks. Your code will wait.</p>
                <p className="text-sm text-white/70 mt-1">~ Every developer who learned the hard way</p>
              </div>
            </div>
          </div>
        </div>

        {/* Developer Testimonials */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <Users className="w-12 h-12 mx-auto mb-4 text-purple-600" />
            <h2 className="text-3xl font-bold">Heartfelt Confessions</h2>
            <p className="text-gray-600 mt-2">From developers who've been there</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className={`p-6 rounded-2xl ${isDarkMode ? 'bg-gray-800/50' : 'bg-white/80'} backdrop-blur-sm border ${isDarkMode ? 'border-gray-700' : 'border-purple-100'} shadow-lg hover:shadow-xl transition-shadow`}
              >
                <div className="text-4xl mb-4">"</div>
                <p className="text-lg italic mb-6">{testimonial.quote}</p>
                <div className="border-t pt-4">
                  <p className="font-bold">{testimonial.author}</p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className={`text-center p-12 rounded-3xl ${isDarkMode ? 'bg-gradient-to-r from-blue-900/50 to-purple-900/50' : 'bg-gradient-to-r from-blue-500 to-purple-500'} text-white`}>
          <Rocket className="w-16 h-16 mx-auto mb-6 animate-bounce" />
          <h2 className="text-4xl font-bold mb-4">Ready to Start Your Journey?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            The bugs are temporary, but the satisfaction of creation lasts forever.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-white text-blue-600 rounded-full font-bold hover:bg-gray-100 transform hover:-translate-y-1 transition-all duration-300">
              Start Coding Today 🚀
            </button>
            <button className="px-8 py-3 bg-transparent border-2 border-white rounded-full font-bold hover:bg-white/20 transform hover:-translate-y-1 transition-all duration-300">
              Share Your Story 📖
            </button>
          </div>
        </div>

        {/* Footer Quote */}
        <div className="mt-20 text-center">
          <Heart className="w-12 h-12 mx-auto mb-4 text-red-500 animate-pulse" />
          <p className="text-2xl font-light italic max-w-3xl mx-auto">
            "We don't just write code. We build dreams, solve puzzles, 
            and create magic that connects the world."
          </p>
          <div className="mt-8 flex items-center justify-center gap-6">
            <div className="flex items-center gap-2">
              <Terminal className="w-5 h-5 text-green-500" />
              <span className="text-sm">Made with</span>
            </div>
            <div className="flex items-center gap-2">
              <CoffeeIcon className="w-5 h-5 text-yellow-600" />
              <span className="text-sm">Late nights</span>
            </div>
            <div className="flex items-center gap-2">
              <Heart className="w-5 h-5 text-red-500" />
              <span className="text-sm">And passion</span>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="fixed bottom-8 right-8 z-20">
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="p-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full shadow-xl cursor-pointer"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <Zap className="w-6 h-6" />
        </motion.div>
      </div>
    </div>
  );
};

export default WebDevelopmentPage;