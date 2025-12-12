'use client';

import { ArrowRight, Code, Smartphone, Cloud, Brain, Database, Shield, Zap, CheckCircle, Users, TrendingUp, Globe } from 'lucide-react';
import { useState, useEffect } from 'react';

const Hero = () => {
  const [particles, setParticles] = useState<Array<{ left: string; top: string; delay: string }>>([]);

  useEffect(() => {
    // Generate particles only on client side
    const newParticles = Array.from({ length: 20 }).map(() => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      delay: `${Math.random() * 5}s`,
      opacity: 0.3
    }));
    setParticles(newParticles);
  }, []);

  return (
    <section className="relative overflow-hidden min-h-screen">
      {/* Futuristic Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-gray-900 to-purple-900" />
        
        {/* Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px),
                              linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
          }}
        />
        
        {/* Animated Particles - Fixed hydration error */}
        <div className="absolute inset-0">
          {particles.map((particle, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-blue-500 rounded-full animate-pulse"
              style={{
                left: particle.left,
                top: particle.top,
                animationDelay: particle.delay,
                opacity: 0.3,
              }}
            />
          ))}
        </div>

        {/* Floating Tech Elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-green-500/10 rounded-full blur-3xl animate-pulse delay-2000" />
      </div>

      <div className="relative container mx-auto px-4 py-24 md:py-32">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Main Content */}
            <div className="text-white">
              {/* Premium Badge */}
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500/30 to-purple-500/30 backdrop-blur-xl rounded-full px-6 py-3 mb-8 border border-white/20 shadow-2xl">
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <Zap className="h-5 w-5 text-yellow-400 animate-pulse" />
                    <div className="absolute inset-0 bg-yellow-400/20 blur-md" />
                  </div>
                  <span className="text-lg font-bold tracking-wide">🚀 INDIA'S #1 TECH PARTNER</span>
                  <div className="h-4 w-px bg-white/40" />
                  <span className="text-sm font-medium text-blue-200">SINCE 2020</span>
                </div>
              </div>

              {/* Main Heading with Glitch Effect */}
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black mb-8 leading-tight">
                <span className="block bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
                  TRANSFORM
                </span>
                <span className="block bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300 animate-pulse">
                  YOUR DIGITAL
                </span>
                <span className="block bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-300">
                  PRESENCE
                </span>
              </h1>

              {/* Subheading */}
              <p className="text-2xl text-gray-300 mb-12 leading-relaxed max-w-2xl">
                We craft <span className="font-bold text-white">ENTERPRISE-GRADE SOLUTIONS</span> 
                that scale with your business and deliver <span className="text-cyan-300">ROI-driven results</span>.
              </p>

              {/* Enterprise Services Grid */}
              <div className="mb-12">
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-px flex-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent" />
                  <span className="text-lg font-bold text-blue-300">ENTERPRISE SERVICES</span>
                  <div className="h-px flex-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent" />
                </div>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                  {[
                    { icon: Globe, label: 'Enterprise Web Apps', desc: 'Scalable & Secure', color: 'from-blue-500 to-blue-700' },
                    { icon: Smartphone, label: 'Mobile Solutions', desc: 'iOS & Android', color: 'from-green-500 to-emerald-700' },
                    { icon: Cloud, label: 'Cloud Infrastructure', desc: 'AWS/Azure/GCP', color: 'from-purple-500 to-purple-700' },
                    { icon: Brain, label: 'AI/ML Integration', desc: 'Smart Automation', color: 'from-pink-500 to-rose-700' },
                  ].map((service, index) => (
                    <div key={index} className="group relative overflow-hidden rounded-2xl bg-white/5 p-6 border border-white/10 hover:border-white/30 transition-all duration-300">
                      <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-20 transition-opacity duration-300 ${service.color}" />
                      <div className="relative">
                        <div className="mb-4">
                          <div className={`p-3 rounded-xl bg-gradient-to-br ${service.color} w-fit`}>
                            <service.icon className="h-7 w-7 text-white" />
                          </div>
                        </div>
                        <h3 className="text-lg font-bold text-white mb-2">{service.label}</h3>
                        <p className="text-sm text-gray-400">{service.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA Buttons - Enterprise Level */}
              <div className="flex flex-col sm:flex-row gap-6 mb-16">
                <button className="group relative overflow-hidden rounded-2xl bg-gradient-to-r from-blue-600 to-blue-800 px-10 py-5 text-white font-bold shadow-2xl hover:shadow-blue-500/30 transition-all duration-300 hover:scale-[1.02]">
                  <div className="flex items-center justify-center gap-4">
                    <span className="text-xl tracking-wide">START ENTERPRISE PROJECT</span>
                    <ArrowRight className="h-6 w-6 group-hover:translate-x-3 transition-transform duration-300" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                </button>
                
                <button className="group flex items-center justify-center gap-4 rounded-2xl border-2 border-white/30 bg-gradient-to-r from-transparent to-white/5 px-10 py-5 font-bold text-white hover:border-white hover:bg-white/10 transition-all backdrop-blur-sm">
                  <Users className="h-6 w-6" />
                  <span className="text-xl">BOOK BOARDROOM MEETING</span>
                </button>
              </div>

              {/* Enterprise Stats */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 pt-12 border-t border-white/10">
                {[
                  { value: '500+', label: 'Enterprise Projects', sub: 'Completed' },
                  { value: '₹50CR+', label: 'Revenue Generated', sub: 'For Clients' },
                  { value: '99.9%', label: 'Uptime SLA', sub: 'Guaranteed' },
                  { value: '50+', label: 'Tech Experts', sub: 'In Team' },
                ].map((stat, index) => (
                  <div key={index} className="text-center group">
                    <div className="text-4xl font-black bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2">
                      {stat.value}
                    </div>
                    <div className="text-lg font-bold text-white mb-1">{stat.label}</div>
                    <div className="text-sm text-gray-400">{stat.sub}</div>
                    <div className="h-1 w-12 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column - Services Showcase */}
            <div className="relative">
              {/* Floating Card */}
              <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-2xl rounded-3xl p-8 border border-white/20 shadow-2xl">
                {/* Card Header */}
                <div className="text-center mb-10">
                  <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500/30 to-purple-500/30 rounded-full px-6 py-2 mb-4">
                    <span className="text-sm font-bold text-white">PREMIUM SERVICES</span>
                  </div>
                  <h2 className="text-3xl font-bold text-white mb-3">Enterprise Solutions Suite</h2>
                  <p className="text-gray-300">Complete digital transformation for large-scale businesses</p>
                </div>
                
                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                  {[
                    {
                      icon: Code,
                      title: 'Custom ERP/CRM',
                      description: 'Enterprise resource planning',
                      features: ['SAP Integration', 'Custom Modules', 'Analytics'],
                      color: 'from-blue-500/30 to-blue-700/30',
                    },
                    {
                      icon: Smartphone,
                      title: 'Enterprise Apps',
                      description: 'Scalable mobile solutions',
                      features: ['Offline Sync', 'Security', 'Multi-platform'],
                      color: 'from-green-500/30 to-emerald-700/30',
                    },
                    {
                      icon: Cloud,
                      title: 'Hybrid Cloud',
                      description: 'Multi-cloud infrastructure',
                      features: ['Migration', 'Optimization', 'Security'],
                      color: 'from-purple-500/30 to-purple-700/30',
                    },
                    {
                      icon: Database,
                      title: 'Big Data',
                      description: 'Data warehousing & analytics',
                      features: ['Real-time', 'Scalable', 'Secure'],
                      color: 'from-yellow-500/30 to-amber-700/30',
                    },
                    {
                      icon: Shield,
                      title: 'Cyber Security',
                      description: 'Enterprise-grade protection',
                      features: ['Pentesting', 'Compliance', 'Monitoring'],
                      color: 'from-red-500/30 to-red-700/30',
                    },
                    {
                      icon: Brain,
                      title: 'AI Solutions',
                      description: 'Machine learning & automation',
                      features: ['Predictive', 'NLP', 'Computer Vision'],
                      color: 'from-pink-500/30 to-rose-700/30',
                    },
                  ].map((service, index) => (
                    <div 
                      key={index}
                      className={`p-4 rounded-xl border border-white/10 bg-gradient-to-br ${service.color} hover:border-white/30 transition-all cursor-pointer group`}
                    >
                      <div className="flex items-start gap-4">
                        <div className="p-3 rounded-lg bg-white/10 group-hover:bg-white/20 transition-colors">
                          <service.icon className="h-6 w-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg font-bold text-white mb-2">{service.title}</h3>
                          <p className="text-gray-300 text-sm mb-3">{service.description}</p>
                          <div className="flex flex-wrap gap-1">
                            {service.features.map((feature, idx) => (
                              <span 
                                key={idx}
                                className="text-xs bg-white/10 text-gray-300 px-2 py-1 rounded"
                              >
                                {feature}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Enterprise Features */}
                <div className="bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-2xl p-6 backdrop-blur-sm">
                  <h3 className="text-xl font-bold text-white mb-6 text-center">Enterprise-Grade Features</h3>
                  <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
                    {[
                      '24/7 Enterprise Support',
                      'Dedicated Account Manager',
                      'SLA Guarantee',
                      'Monthly Reporting',
                      'Disaster Recovery',
                      'Compliance Ready'
                    ].map((item, index) => (
                      <div key={index} className="flex items-center gap-3 p-3 bg-white/5 rounded-lg">
                        <div className="p-1 bg-green-500/20 rounded">
                          <CheckCircle className="h-4 w-4 text-green-400" />
                        </div>
                        <span className="text-sm font-medium text-white">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Floating Tech Badges */}
              <div className="absolute -top-6 -right-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-xl rotate-3 shadow-2xl">
                <span className="font-black tracking-wider">ISO 27001 CERTIFIED</span>
              </div>
              <div className="absolute -bottom-6 -left-6 bg-gradient-to-r from-green-600 to-emerald-600 text-white px-6 py-3 rounded-xl -rotate-3 shadow-2xl">
                <span className="font-black tracking-wider">AWS PARTNER</span>
              </div>
            </div>
          </div>

          {/* Global Clients Section */}
          <div className="mt-32">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-gray-800 to-gray-900 rounded-full px-8 py-3 mb-6 border border-white/10">
                <span className="text-lg font-bold text-gray-300">TRUSTED BY GLOBAL ENTERPRISES</span>
              </div>
              <p className="text-2xl text-gray-400 mb-2">Serving Fortune 500 companies across 15+ countries</p>
            </div>
            
            {/* Animated Logos Carousel */}
            <div className="relative">
              <div className="flex overflow-hidden py-8">
                <div className="flex animate-scroll">
                  {[
                    { name: 'TATA CONSULTANCY', color: 'text-blue-400' },
                    { name: 'INFOSYS', color: 'text-pink-400' },
                    { name: 'WIPRO', color: 'text-green-400' },
                    { name: 'TECH MAHINDRA', color: 'text-yellow-400' },
                    { name: 'HCL TECHNOLOGIES', color: 'text-red-400' },
                    { name: 'ACCENTURE', color: 'text-purple-400' },
                    { name: 'IBM', color: 'text-cyan-400' },
                    { name: 'MICROSOFT', color: 'text-blue-300' },
                    { name: 'GOOGLE CLOUD', color: 'text-green-300' },
                    { name: 'AMAZON AWS', color: 'text-orange-400' },
                  ].map((company, index) => (
                    <div 
                      key={index} 
                      className="flex-shrink-0 mx-8 group"
                    >
                      <div className={`text-2xl font-black tracking-tighter ${company.color} opacity-80 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110`}>
                        {company.name}
                      </div>
                      <div className="h-1 w-full bg-gradient-to-r from-transparent via-current to-transparent opacity-0 group-hover:opacity-50 transition-opacity mt-2" />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Stats Banner */}
            <div className="mt-16 bg-gradient-to-r from-blue-900/30 via-purple-900/30 to-pink-900/30 rounded-3xl p-8 backdrop-blur-sm border border-white/10">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {[
                  { value: '15+', label: 'Countries' },
                  { value: '200+', label: 'Enterprise Clients' },
                  { value: '₹500CR+', label: 'Revenue Impact' },
                  { value: '24/7', label: 'Global Support' },
                ].map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-5xl font-black text-white mb-2">{stat.value}</div>
                    <div className="text-lg font-medium text-gray-300">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Gradient Waves */}
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-blue-900/20 via-purple-900/20 to-transparent blur-2xl" />
    </section>
  );
};

export default Hero;