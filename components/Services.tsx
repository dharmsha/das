import { Code2, Smartphone, Cloud, Brain, Palette, Database, Zap, Shield, Clock, Users, Rocket, Cpu } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Code2,
      title: 'Full-Stack Web Development',
      description: 'Transform your ideas into powerful, scalable web applications that drive business growth and user engagement.',
      features: ['Next.js 14 / React 18', 'Node.js / Express', 'TypeScript', 'GraphQL / REST APIs', 'Microservices'],
      color: 'from-blue-600 to-cyan-500',
      stats: '98% Client Satisfaction',
      emoji: '🚀',
      duration: '4-8 Weeks'
    },
    {
      icon: Smartphone,
      title: 'Enterprise Mobile Solutions',
      description: 'Build native mobile experiences that feel seamless, fast, and intuitive across iOS and Android platforms.',
      features: ['React Native / Flutter', 'iOS Swift / Kotlin', 'PWA', 'App Store Deployment', 'Offline First'],
      color: 'from-purple-600 to-pink-500',
      stats: '500K+ Downloads',
      emoji: '📱',
      duration: '6-12 Weeks'
    },
    {
      icon: Cloud,
      title: 'Cloud & DevOps Engineering',
      description: 'Scale your infrastructure with confidence using our expert cloud migration and management services.',
      features: ['AWS / Azure / GCP', 'Docker & Kubernetes', 'CI/CD Pipelines', 'Serverless Architecture', 'Security Hardening'],
      color: 'from-orange-600 to-red-500',
      stats: '99.9% Uptime SLA',
      emoji: '☁️',
      duration: '2-4 Weeks'
    },
    {
      icon: Brain,
      title: 'AI & Machine Learning',
      description: 'Harness the power of artificial intelligence to automate processes and gain valuable business insights.',
      features: ['Custom Chatbots', 'Predictive Analytics', 'Computer Vision', 'NLP Solutions', 'Recommendation Systems'],
      color: 'from-green-600 to-emerald-500',
      stats: '40% Efficiency Gain',
      emoji: '🤖',
      duration: '8-16 Weeks'
    },
    {
      icon: Palette,
      title: 'UI/UX Design & Branding',
      description: 'Create stunning user interfaces that not only look beautiful but also drive conversions and user retention.',
      features: ['Figma / Adobe XD', 'User Research', 'Interactive Prototypes', 'Design Systems', 'Brand Identity'],
      color: 'from-yellow-600 to-amber-500',
      stats: '300% ROI on Design',
      emoji: '🎨',
      duration: '3-6 Weeks'
    },
    {
      icon: Database,
      title: 'Database Architecture',
      description: 'Design robust, scalable database systems that ensure data integrity and lightning-fast performance.',
      features: ['MongoDB / PostgreSQL', 'Redis / Elasticsearch', 'Data Warehousing', 'Real-time Analytics', 'Backup & Recovery'],
      color: 'from-indigo-600 to-blue-500',
      stats: '10x Query Speed',
      emoji: '💾',
      duration: '2-5 Weeks'
    },
  ];

  const whyChooseUs = [
    { icon: Shield, text: 'Enterprise-Grade Security', subtext: 'ISO 27001 Certified' },
    { icon: Clock, text: 'On-Time Delivery', subtext: '100% Track Record' },
    { icon: Users, text: 'Dedicated Team', subtext: 'Senior Developers Only' },
    { icon: Rocket, text: 'Rapid Development', subtext: 'Agile Methodology' },
    { icon: Cpu, text: 'Latest Tech Stack', subtext: 'Future-Proof Solutions' },
    { icon: Zap, text: '24/7 Support', subtext: 'Priority Response' },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-gray-950 via-black to-gray-950 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/3 w-48 h-48 bg-cyan-500/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative">
        {/* Header Section */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-lg rounded-full px-8 py-4 mb-8 border border-blue-500/30">
            <Zap className="h-6 w-6 text-blue-400 animate-pulse" />
            <span className="text-lg font-bold tracking-wider text-white">PREMIUM SERVICES</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-black mb-8">
            <span className="block bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
              TRANSFORMATIVE
            </span>
            <span className="block bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300 mt-2">
              TECH SOLUTIONS
            </span>
          </h1>
          
          <p className="text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            We don't just build software - we craft <span className="font-bold text-white">digital experiences</span> that 
            propel businesses forward, drive innovation, and create lasting impact in the market.
          </p>
        </div>

        {/* Why Choose Us */}
        <div className="mb-16 bg-gradient-to-r from-gray-900/50 to-black/50 backdrop-blur-xl rounded-3xl p-10 border border-gray-800">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Why Partner With Us?</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {whyChooseUs.map((item, index) => (
              <div key={index} className="group text-center">
                <div className="inline-flex p-4 bg-gradient-to-br from-gray-900 to-black rounded-2xl mb-4 border border-gray-800 group-hover:border-blue-500/50 transition-all">
                  <item.icon className="h-8 w-8 text-blue-400" />
                </div>
                <h3 className="text-lg font-bold text-white mb-1">{item.text}</h3>
                <p className="text-sm text-gray-400">{item.subtext}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative overflow-hidden bg-gradient-to-br from-gray-900/80 to-black backdrop-blur-lg rounded-3xl p-8 border border-gray-800 hover:border-blue-500/50 transition-all duration-500 hover:-translate-y-2"
            >
              {/* Background Glow Effect */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
              
              {/* Icon & Badge */}
              <div className="flex items-start justify-between mb-6">
                <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${service.color}`}>
                  <service.icon className="h-10 w-10 text-white" />
                </div>
                <div className="flex flex-col items-end gap-2">
                  <div className="px-4 py-2 bg-gradient-to-r from-blue-900/30 to-purple-900/30 rounded-full">
                    <span className="text-sm font-bold text-blue-300">{service.stats}</span>
                  </div>
                  <div className="text-2xl">{service.emoji}</div>
                </div>
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">{service.description}</p>

              {/* Tech Stack */}
              <div className="mb-8">
                <div className="flex items-center gap-2 mb-4">
                  <div className="h-px flex-1 bg-gradient-to-r from-blue-500/30 to-transparent" />
                  <span className="text-sm font-semibold text-gray-400">TECH STACK</span>
                  <div className="h-px flex-1 bg-gradient-to-r from-transparent to-blue-500/30" />
                </div>
                <div className="flex flex-wrap gap-3">
                  {service.features.map((feature, idx) => (
                    <span
                      key={idx}
                      className="px-4 py-2 bg-gray-900/50 text-gray-300 rounded-xl text-sm font-medium border border-gray-800 hover:bg-gray-800/50 transition-colors"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>

              {/* Footer */}
              <div className="flex items-center justify-between pt-6 border-t border-gray-800">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-sm text-gray-400">Project Duration: <span className="text-white font-semibold">{service.duration}</span></span>
                </div>
                <button className="group/btn flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-bold rounded-xl hover:shadow-2xl hover:shadow-blue-500/30 transition-all duration-300">
                  <span>Explore Details</span>
                  <div className="w-5 h-5 bg-white/20 rounded-full flex items-center justify-center group-hover/btn:bg-white/30 transition-colors">
                    <div className="w-2 h-2 bg-white rounded-full" />
                  </div>
                </button>
              </div>

              {/* Corner Decoration */}
              <div className="absolute top-0 right-0 w-20 h-20 overflow-hidden">
                <div className={`absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl ${service.color} opacity-20 rotate-45 translate-x-20 -translate-y-20`} />
              </div>
            </div>
          ))}
        </div>

        {/* Process Section */}
        <div className="bg-gradient-to-r from-blue-900/20 via-purple-900/20 to-cyan-900/20 backdrop-blur-xl rounded-3xl p-12 border border-blue-500/30">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Our Proven Process</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Discovery & Strategy', desc: 'Deep dive into your vision and goals' },
              { step: '02', title: 'Design & Prototyping', desc: 'Create wireframes and interactive prototypes' },
              { step: '03', title: 'Development', desc: 'Agile sprints with weekly demos' },
              { step: '04', title: 'Launch & Support', desc: 'Deployment and ongoing maintenance' },
            ].map((process, index) => (
              <div key={index} className="text-center group">
                <div className="relative inline-flex items-center justify-center mb-6">
                  <div className="absolute w-16 h-16 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full animate-pulse" />
                  <div className="relative z-10 text-4xl font-black bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                    {process.step}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{process.title}</h3>
                <p className="text-gray-400">{process.desc}</p>
                {index < 3 && (
                  <div className="hidden md:block absolute top-1/2 right-0 w-8 h-1 bg-gradient-to-r from-blue-500/30 to-transparent group-hover:from-blue-500/50 transition-colors" />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center">
          <div className="inline-flex items-center gap-6 bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-lg rounded-full px-10 py-6 border border-blue-500/30">
            <Rocket className="h-8 w-8 text-blue-400 animate-bounce" />
            <div>
              <h3 className="text-2xl font-bold text-white">Ready to Transform Your Business?</h3>
              <p className="text-gray-400">Let's build something amazing together</p>
            </div>
            <button className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-xl hover:shadow-2xl hover:shadow-blue-500/30 transition-all">
              Start Free Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;