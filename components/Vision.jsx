'use client';

import { useState, useEffect } from 'react';
import { Target, Eye, Rocket, Users, Globe, Award, Shield, Zap, TrendingUp, Sparkles, Star, Heart, Compass, Lightbulb, Building2, Brain, Cpu, Cloud, Code, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';

const VisionPage = () => {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const newParticles = Array.from({ length: 30 }).map(() => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      delay: `${Math.random() * 5}s`,
      opacity: 0.2
    }));
    setParticles(newParticles);
  }, []);

  return (
    <div className="min-h-screen bg-black overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0">
        {particles.map((particle, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-blue-500 rounded-full animate-pulse"
            style={{
              left: particle.left,
              top: particle.top,
              animationDelay: particle.delay,
              opacity: 0.2,
            }}
          />
        ))}
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative container mx-auto px-4 py-24">
        {/* Page Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600/30 to-purple-600/30 backdrop-blur-lg rounded-full px-8 py-4 mb-8 border border-blue-500/30">
            <Eye className="h-6 w-6 text-blue-400 animate-pulse" />
            <span className="text-lg font-bold tracking-wider text-white">OUR VISION & MISSION</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-black mb-8">
            <span className="block bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200">
              WHERE TECHNOLOGY
            </span>
            <span className="block bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300 mt-2">
              MEETS HUMAN DREAMS
            </span>
          </h1>
          
          <p className="text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed font-light">
            We don't just build software - we craft <span className="font-bold text-white">digital dreams</span> into reality. 
            Every line of code we write is a step toward a future where technology doesn't just exist, 
            but <span className="font-bold text-blue-300">lives, breathes, and empowers</span>.
          </p>
        </motion.div>

        {/* Emotional Quote */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-gradient-to-r from-blue-900/20 via-purple-900/20 to-pink-900/20 backdrop-blur-xl rounded-3xl p-12 border border-blue-500/30 shadow-2xl mb-20 relative overflow-hidden"
        >
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl" />
          
          <div className="text-center">
            <Brain className="h-16 w-16 text-blue-400 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-white mb-6 italic">
              "Technology is the canvas, imagination is the paint, and we are the artists 
              <span className="block text-blue-300 mt-2">creating masterpieces that move the world forward</span>"
            </h2>
            <p className="text-gray-400">- Our Promise to Every Client</p>
          </div>
        </motion.div>

        {/* Main Vision Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-gradient-to-br from-gray-900/80 to-black backdrop-blur-xl rounded-3xl p-12 border border-blue-500/30 shadow-2xl mb-20 relative overflow-hidden"
        >
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl" />
          
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-2/3">
              <div className="flex items-center gap-4 mb-8">
                <div className="p-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl">
                  <Target className="h-10 w-10 text-white" />
                </div>
                <div>
                  <h2 className="text-4xl font-bold text-white mb-2">Our Vision</h2>
                  <div className="h-1 w-32 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full" />
                </div>
              </div>
              
              <p className="text-2xl text-gray-300 leading-relaxed mb-8 font-medium">
                To create a world where <span className="font-bold text-white">every business, every dreamer, every innovator</span> 
                has access to technology that feels less like a tool and more like an <span className="font-bold text-blue-300">extension of their ambition</span>.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                {[
                  { icon: Globe, label: 'Global Impact', desc: 'Empowering 1 million businesses by 2030', color: 'text-blue-400' },
                  { icon: Rocket, label: 'Innovation First', desc: 'Turning impossible ideas into reality', color: 'text-purple-400' },
                  { icon: Award, label: 'Excellence', desc: 'Where passion meets perfection', color: 'text-yellow-400' },
                  { icon: Users, label: 'Human Connection', desc: 'Technology with a human heartbeat', color: 'text-green-400' },
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-4 p-4 bg-gray-900/50 rounded-xl border border-gray-800 hover:border-blue-500/50 transition-all">
                    <div className={`p-3 bg-gradient-to-r ${item.color.replace('text-', 'from-')}/20 to-transparent rounded-lg`}>
                      <item.icon className={`h-6 w-6 ${item.color}`} />
                    </div>
                    <div>
                      <h4 className="font-bold text-white text-lg">{item.label}</h4>
                      <p className="text-gray-400 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="lg:w-1/3">
              <div className="bg-gradient-to-br from-blue-900/40 to-purple-900/40 rounded-2xl p-8 border border-blue-500/30">
                <h3 className="text-2xl font-bold text-white mb-6 text-center">Our Journey Ahead</h3>
                <div className="space-y-6">
                  {[
                    { year: '2025', goal: 'Touch 10,000+ Lives', status: 'In Progress', emoji: '❤️' },
                    { year: '2026', goal: 'Build 500+ Dream Projects', status: 'Planned', emoji: '🚀' },
                    { year: '2027', goal: 'Create 1000+ Tech Careers', status: 'Target', emoji: '👨‍💻' },
                    { year: '2030', goal: 'Change 1 Million Stories', status: 'Vision', emoji: '🌟' },
                  ].map((item, index) => (
                    <div key={index} className="relative">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-3">
                          <span className="text-2xl">{item.emoji}</span>
                          <span className="text-3xl font-black bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                            {item.year}
                          </span>
                        </div>
                        <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                          item.status === 'In Progress' ? 'bg-green-500/20 text-green-400' :
                          item.status === 'Planned' ? 'bg-blue-500/20 text-blue-400' :
                          item.status === 'Target' ? 'bg-purple-500/20 text-purple-400' :
                          'bg-yellow-500/20 text-yellow-400'
                        }`}>
                          {item.status}
                        </span>
                      </div>
                      <p className="text-white font-medium">{item.goal}</p>
                      <div className="h-px w-full bg-gradient-to-r from-blue-500/30 to-transparent mt-3" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Heartfelt Mission Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">More Than Code, It's Our Heartbeat</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              We don't just develop software - we pour our soul into every project
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Heart,
                title: 'Passion That Drives Us',
                description: 'When you love what you do, excellence becomes a habit, not a goal',
                color: 'from-red-500/20 to-pink-500/20',
                points: ['Love for innovation', 'Emotional investment', 'Personal commitment']
              },
              {
                icon: ShieldCheck,
                title: 'Trust You Can Feel',
                description: 'Your dreams are safe with us - we guard them like our own',
                color: 'from-blue-500/20 to-cyan-500/20',
                points: ['Unbreakable security', 'Absolute transparency', '24/7 guardianship']
              },
              {
                icon: TrendingUp,
                title: 'Growth Together',
                description: 'Your success is our success - we grow when you grow',
                color: 'from-green-500/20 to-emerald-500/20',
                points: ['Shared victories', 'Mutual growth', 'Lifelong partnership']
              }
            ].map((mission, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-900/80 to-black backdrop-blur-lg rounded-2xl p-8 border border-gray-800 hover:border-blue-500/30 transition-all duration-300 hover:scale-[1.02]">
                <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${mission.color} mb-6`}>
                  <mission.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{mission.title}</h3>
                <p className="text-gray-300 mb-6 italic">{mission.description}</p>
                <ul className="space-y-3">
                  {mission.points.map((point, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-gray-400">
                      <div className="w-2 h-2 bg-blue-500 rounded-full" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Core Values with Emotions */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">The Soul of DASYNOMA</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              These aren't just values - they're the DNA of who we are
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: Sparkles, title: 'Magic Makers', color: 'from-purple-500 to-pink-500', desc: 'We create moments that make you say "wow"' },
              { icon: Heart, title: 'Heart-Driven', color: 'from-red-500 to-orange-500', desc: 'Every project gets a piece of our heart' },
              { icon: Users, title: 'Family First', color: 'from-green-500 to-emerald-500', desc: 'Clients become family, projects become stories' },
              { icon: Star, title: 'Dream Chasers', color: 'from-yellow-500 to-amber-500', desc: 'We chase your dreams as if they were our own' },
              { icon: Compass, title: 'Guiding Light', color: 'from-blue-500 to-cyan-500', desc: 'Lighting the path when things get complex' },
              { icon: Lightbulb, title: 'Eternal Learners', color: 'from-indigo-500 to-purple-500', desc: 'The day we stop learning is the day we stop growing' },
              { icon: Building2, title: 'Legacy Builders', color: 'from-gray-500 to-blue-500', desc: 'Building something that outlasts us all' },
              { icon: Globe, title: 'World Changers', color: 'from-teal-500 to-green-500', desc: 'One line of code at a time, changing the world' },
            ].map((value, index) => (
              <div key={index} className="group relative overflow-hidden bg-gradient-to-br from-gray-900/80 to-black backdrop-blur-lg rounded-2xl p-6 border border-gray-800 hover:border-blue-500/30 transition-all duration-300">
                <div className={`absolute inset-0 bg-gradient-to-br ${value.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                <div className="relative">
                  <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${value.color} mb-4`}>
                    <value.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{value.title}</h3>
                  <p className="text-sm text-gray-400">{value.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Technology & Emotion Fusion */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="bg-gradient-to-r from-blue-900/20 via-purple-900/20 to-pink-900/20 backdrop-blur-lg rounded-3xl p-12 border border-blue-500/30 mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Where Technology Meets Emotion</h2>
            <p className="text-xl text-gray-400">The perfect blend of cutting-edge tech and human touch</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                number: '01',
                title: 'Intelligent Code',
                description: 'AI that understands your vision',
                icon: Cpu,
                color: 'border-blue-500/50 text-blue-400'
              },
              {
                number: '02',
                title: 'Cloud Dreams',
                description: 'Your ideas floating in secure clouds',
                icon: Cloud,
                color: 'border-purple-500/50 text-purple-400'
              },
              {
                number: '03',
                title: 'Pixel Perfect',
                description: 'Designs that touch the soul',
                icon: Code,
                color: 'border-green-500/50 text-green-400'
              },
              {
                number: '04',
                title: 'Secure Embrace',
                description: 'Protection you can feel',
                icon: Shield,
                color: 'border-red-500/50 text-red-400'
              }
            ].map((pillar, index) => (
              <div key={index} className={`border-l-4 ${pillar.color} pl-6 py-4`}>
                <div className="flex items-center gap-4 mb-4">
                  <pillar.icon className={`h-8 w-8 ${pillar.color.split(' ')[1]}`} />
                  <div className="text-4xl font-black text-white/20">{pillar.number}</div>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{pillar.title}</h3>
                <p className="text-gray-400">{pillar.description}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Final Emotional Call */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="text-center"
        >
          <h2 className="text-4xl font-bold text-white mb-8">Your Story, Our Mission</h2>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              { value: '1000+', label: 'Dreams Realized', desc: 'Every project is someone\'s dream come true', emoji: '✨' },
              { value: '24/7', label: 'Heartbeat Support', desc: 'We\'re always here, feeling your pulse', emoji: '❤️' },
              { value: '∞', label: 'Infinite Possibilities', desc: 'With us, your potential has no limits', emoji: '🚀' },
            ].map((impact, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-900/80 to-black backdrop-blur-lg rounded-2xl p-8 border border-gray-800">
                <div className="text-6xl mb-4">{impact.emoji}</div>
                <div className="text-5xl font-black bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-4">
                  {impact.value}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{impact.label}</h3>
                <p className="text-gray-400">{impact.desc}</p>
              </div>
            ))}
          </div>
          
          <div className="inline-flex items-center gap-6 bg-gradient-to-r from-blue-600/30 to-purple-600/30 backdrop-blur-lg rounded-full px-10 py-6 border border-blue-500/30 group hover:scale-105 transition-transform duration-300">
            <Rocket className="h-8 w-8 text-blue-400 animate-bounce group-hover:rotate-12 transition-transform" />
            <span className="text-2xl font-bold text-white">
              LET'S CREATE MAGIC TOGETHER
            </span>
            <Rocket className="h-8 w-8 text-purple-400 animate-bounce group-hover:-rotate-12 transition-transform" />
          </div>
          
          <p className="text-gray-400 mt-8 text-lg">
            Because at DASYNOMA, we don't just build technology - <span className="text-blue-300 font-bold">we build dreams with a heartbeat</span>
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default VisionPage;