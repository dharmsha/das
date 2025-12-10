'use client';

import { ArrowRight, Code, Smartphone, Cloud, Brain, Database, Shield, Zap, CheckCircle, Users, TrendingUp, Globe } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative overflow-hidden">
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
        
        {/* Animated Particles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-blue-500 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                opacity: 0.3,
              }}
            />
          ))}
        </div>
      </div>

      <div className="relative container mx-auto px-4 py-24 md:py-32">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Main Content */}
            <div className="text-white">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-8 border border-white/20">
                <div className="flex items-center gap-1">
                  <Zap className="h-4 w-4 text-yellow-400" />
                  <span className="text-sm font-medium">🚀 #1 Tech Partner in India</span>
                </div>
              </div>

              {/* Main Heading */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                <span className="block">Transform Your Business</span>
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  With Digital Excellence
                </span>
              </h1>

              {/* Subheading */}
              <p className="text-xl text-gray-300 mb-10 leading-relaxed">
                We craft <span className="font-semibold text-white">cutting-edge software solutions</span> that drive growth, 
                enhance efficiency, and create exceptional digital experiences for your customers.
              </p>

              {/* Services Quick View */}
              <div className="mb-10">
                <div className="text-lg font-semibold mb-4 text-gray-300">What We Build:</div>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { icon: Globe, label: 'Web Applications', color: 'text-blue-400' },
                    { icon: Smartphone, label: 'Mobile Apps', color: 'text-green-400' },
                    { icon: Cloud, label: 'Cloud Solutions', color: 'text-purple-400' },
                    { icon: Brain, label: 'AI/ML Systems', color: 'text-pink-400' },
                  ].map((service, index) => (
                    <div key={index} className="flex items-center gap-3 bg-white/5 rounded-lg p-3 border border-white/10">
                      <service.icon className={`h-5 w-5 ${service.color}`} />
                      <span className="text-sm font-medium">{service.label}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <button className="group relative flex items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-blue-500 to-blue-600 px-8 py-4 text-white font-semibold shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-[1.02]">
                  <span className="text-lg">Start Your Project</span>
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-2 transition-transform" />
                  <div className="absolute inset-0 rounded-xl border-2 border-blue-400 translate-x-2 translate-y-2 -z-10" />
                </button>
                
                <button className="group flex items-center justify-center gap-3 rounded-xl border-2 border-white/30 bg-transparent px-8 py-4 font-semibold text-white hover:border-white hover:bg-white/10 transition-all">
                  <Users className="h-5 w-5" />
                  <span>Book Free Consultation</span>
                </button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 border-t border-white/10 pt-8">
                {[
                  { value: '500+', label: 'Projects' },
                  { value: '98%', label: 'Satisfaction' },
                  { value: '50+', label: 'Experts' },
                ].map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                    <div className="text-sm text-gray-400">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column - Services Showcase */}
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
              <h2 className="text-2xl font-bold text-white mb-8 text-center">Our Core Services</h2>
              
              <div className="space-y-6">
                {[
                  {
                    icon: Code,
                    title: 'Custom Web Development',
                    description: 'Scalable web apps with React, Next.js, Node.js',
                    features: ['E-commerce', 'Dashboards', 'Portals'],
                    color: 'bg-blue-500/20',
                  },
                  {
                    icon: Smartphone,
                    title: 'Mobile App Development',
                    description: 'iOS & Android apps with React Native & Flutter',
                    features: ['Cross-platform', 'Native apps', 'PWA'],
                    color: 'bg-green-500/20',
                  },
                  {
                    icon: Cloud,
                    title: 'Cloud & DevOps',
                    description: 'AWS, Azure, Docker, CI/CD pipelines',
                    features: ['Scalability', 'Security', 'Monitoring'],
                    color: 'bg-purple-500/20',
                  },
                  {
                    icon: Database,
                    title: 'Database Solutions',
                    description: 'MongoDB, PostgreSQL, Redis, Firebase',
                    features: ['Optimization', 'Migration', 'Backups'],
                    color: 'bg-yellow-500/20',
                  },
                  {
                    icon: Shield,
                    title: 'Security & Compliance',
                    description: 'End-to-end security implementation',
                    features: ['SSL/TLS', 'GDPR', 'Pen Testing'],
                    color: 'bg-red-500/20',
                  },
                  {
                    icon: Brain,
                    title: 'AI & Machine Learning',
                    description: 'Smart solutions with TensorFlow, PyTorch',
                    features: ['Chatbots', 'Predictions', 'Automation'],
                    color: 'bg-pink-500/20',
                  },
                ].map((service, index) => (
                  <div 
                    key={index}
                    className={`p-4 rounded-xl border border-white/10 hover:border-white/30 transition-all cursor-pointer hover:scale-[1.02] ${service.color}`}
                  >
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-lg bg-white/10">
                        <service.icon className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-white mb-2">{service.title}</h3>
                        <p className="text-gray-300 text-sm mb-3">{service.description}</p>
                        <div className="flex flex-wrap gap-2">
                          {service.features.map((feature, idx) => (
                            <span 
                              key={idx}
                              className="text-xs bg-white/10 text-gray-300 px-3 py-1 rounded-full"
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

              {/* Why Choose Us */}
              <div className="mt-8 p-6 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl">
                <h3 className="text-xl font-bold text-white mb-4">Why Choose DASYNOMA?</h3>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    'Agile Methodology',
                    'Transparent Pricing',
                    '24/7 Support',
                    'On-time Delivery',
                    'Quality Assurance',
                    'Post-launch Support'
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-400" />
                      <span className="text-sm text-gray-300">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Trusted By Section */}
          <div className="mt-20 text-center">
            <p className="text-gray-400 mb-8">Trusted by innovative companies worldwide</p>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
              {[
                { name: 'TCS', color: 'text-blue-300' },
                { name: 'INFOSYS', color: 'text-pink-300' },
                { name: 'WIPRO', color: 'text-green-300' },
                { name: 'TECH MAHINDRA', color: 'text-yellow-300' },
                { name: 'HCL', color: 'text-red-300' },
                { name: 'ACCENTURE', color: 'text-purple-300' },
              ].map((company, index) => (
                <div 
                  key={index} 
                  className={`text-xl font-bold tracking-wider ${company.color} opacity-80 hover:opacity-100 transition-opacity`}
                >
                  {company.name}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-900 to-transparent pointer-events-none" />
    </section>
  );
};

export default Hero;