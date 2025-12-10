'use client';

import { Users, Target, Award, TrendingUp, Globe, Shield, Zap, Heart } from 'lucide-react';
import Image from 'next/image';

const AboutPage = () => {
  const founders = [
    {
      name: 'Amit Kumar',
      role: 'CEO & Tech Visionary',
      description: '2+ years in enterprise software, Ex-Employee, leads our technical strategy',
      expertise: ['Cloud Architecture', 'AI/ML', 'Strategic Planning'],
      avatar: '/amit.jpg', // Add actual image in public folder
      linkedin: '#',
    },
    {
      name: 'Yusuf Khan',
      role: 'CTO & Product Head',
      description: 'Former Our Business product lead, specializes in scalable systems and innovation',
      expertise: ['System Design', 'DevOps', 'Product Development'],
      avatar: '/yusuf.jpg',
      linkedin: '#',
    },
    {
      name: 'Aryan Patel',
      role: 'CEO &Marketing Analytics',
      description: '10+ years in full-stack development, passionate about clean code and mentorship',
      expertise: ['Full Stack', 'Team Leadership', 'Code Quality'],
      avatar: '/aryan.jpg',
      linkedin: '#',
    },
    {
      name: 'Shivam Verma',
      role: 'CO And Solution To Our Clients',
      description: 'Award-winning designer with 8+ years experience in creating intuitive interfaces',
      expertise: ['UI/UX Design', 'Design Systems', 'User Research'],
      avatar: '/shivam.jpg',
      linkedin: '#',
    },
  ];

  const differentiators = [
    {
      icon: Zap,
      title: 'Blazing Fast Development',
      description: 'We deliver projects 40% faster than industry average using our proprietary workflow.',
      stat: '40% Faster',
    },
    {
      icon: Shield,
      title: 'Military-Grade Security',
      description: 'Every line of code undergoes 3-layer security audit. Zero breaches since inception.',
      stat: '100% Secure',
    },
    {
      icon: Heart,
      title: 'Client-Centric Approach',
      description: 'We work as your tech partner, not just a vendor. Your success is our priority.',
      stat: '98% Retention',
    },
    {
      icon: Globe,
      title: 'Global Standards, Local Understanding',
      description: 'Combine international best practices with deep understanding of local markets.',
      stat: '50+ Countries',
    },
  ];

  const timeline = [
    { year: '2018', event: 'Founded with 4 members in Bangalore', milestone: 'Start' },
    { year: '2019', event: 'First 10 clients, reached ₹1Cr revenue', milestone: 'Growth' },
    { year: '2020', event: 'Expanded team to 25 members, opened US office', milestone: 'Expansion' },
    { year: '2021', event: 'Launched AI division, 100+ projects delivered', milestone: 'Innovation' },
    { year: '2022', event: 'Crossed 250+ clients, ₹50Cr revenue', milestone: 'Leadership' },
    { year: '2023', event: 'Recognized as Top 10 Tech Startups by Forbes', milestone: 'Recognition' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-purple-600/5" />
        <div className="container relative mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white rounded-full px-4 py-2 mb-6 shadow-sm">
              <Users className="h-4 w-4 text-blue-600" />
              <span className="text-sm font-semibold text-gray-700">Since 2018</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Building the Future, <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">One Line at a Time</span>
            </h1>
            <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto">
              We're not just another software company. We're a team of passionate innovators, 
              problem-solvers, and dreamers committed to transforming businesses through technology.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="text-sm font-semibold text-blue-600 mb-4">OUR STORY</div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">From Garage to Global</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                It all started in 2018 when four friends—Amit, Yusuf, Aryan, and Shivam—came together 
                with a shared vision: to make cutting-edge technology accessible to every business, 
                regardless of size.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                What began as late-night coding sessions in a small Bangalore apartment has now grown 
                into a 150+ member team serving clients across 50+ countries. But our core philosophy 
                remains unchanged: build technology that empowers.
              </p>
              <div className="grid grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">250+</div>
                  <div className="text-sm text-gray-600">Projects</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600 mb-2">98%</div>
                  <div className="text-sm text-gray-600">Client Satisfaction</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">50+</div>
                  <div className="text-sm text-gray-600">Countries</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
                {/* Add company team image here */}
                <div className="w-full h-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                  <span className="text-white text-2xl font-bold">Our Team @ YADS</span>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl">
                <Award className="h-12 w-12 text-yellow-500 mb-4" />
                <div className="text-2xl font-bold mb-2">Award Winning</div>
                <div className="text-sm text-gray-600">Forbes Top 10 Tech Startups 2023</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Founders Section */}
      <section className="py-20 bg-gradient-to-b from-white to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="text-sm font-semibold text-blue-600 mb-4">MEET THE FOUNDERS</div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">The Brains Behind the Innovation</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Four distinct personalities, one shared vision. Meet the team that's redefining 
              what's possible in technology.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {founders.map((founder, index) => (
              <div key={index} className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300">
                <div className="relative mb-6">
                  <div className="aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-blue-100 to-purple-100">
                    {/* Add actual founder images */}
                    <div className="w-full h-full flex items-center justify-center">
                      <div className="text-4xl font-bold text-blue-600">
                        {founder.name.charAt(0)}
                      </div>
                    </div>
                  </div>
                  <div className="absolute -bottom-3 -right-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full p-3">
                    <Target className="h-6 w-6" />
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2">{founder.name}</h3>
                <div className="text-blue-600 font-medium mb-3">{founder.role}</div>
                <p className="text-gray-600 text-sm mb-4">{founder.description}</p>
                <div className="flex flex-wrap gap-2">
                  {founder.expertise.map((skill, idx) => (
                    <span key={idx} className="px-3 py-1 bg-blue-50 text-blue-700 text-xs font-medium rounded-full">
                      {skill}
                    </span>
                  ))}
                </div>
                <div className="mt-6 pt-6 border-t border-gray-100">
                  <a href={founder.linkedin} className="text-blue-600 hover:text-blue-800 font-medium text-sm">
                    Connect on LinkedIn →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="text-sm font-semibold text-purple-600 mb-4">OUR DIFFERENCE</div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Why We're <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Not Just Another</span> Tech Company
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              In a market flooded with agencies and freelancers, here's what sets DasyNOMA apart
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {differentiators.map((item, index) => (
              <div key={index} className="relative group">
                <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 h-full">
                  <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r from-blue-100 to-purple-100 mb-6`}>
                    <item.icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                  <p className="text-gray-600 mb-6">{item.description}</p>
                  <div className="text-2xl font-bold text-blue-600">{item.stat}</div>
                </div>
                <div className="absolute inset-0 rounded-2xl border-2 border-blue-200 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -m-2 pointer-events-none" />
              </div>
            ))}
          </div>

          {/* Comparison Table */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6">
              <h3 className="text-2xl font-bold text-white text-center">How We Compare</h3>
            </div>
            <div className="p-0">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="p-6 text-left font-bold text-gray-900">Features</th>
                    <th className="p-6 text-center font-bold text-gray-900">Other Companies</th>
                    <th className="p-6 text-center font-bold text-blue-600">DASYNOMA Technology</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {[
                    ['Project Management', 'Basic tools', 'Dedicated Project Manager + AI Dashboard'],
                    ['Code Quality', 'Standard practices', 'Multiple reviews + Automated testing'],
                    ['Support', '9-5 Business hours', '24/7 Priority support'],
                    ['Security', 'Basic SSL', 'Enterprise-grade + Regular audits'],
                    ['Pricing', 'Hidden costs', 'Transparent, all-inclusive pricing'],
                    ['Innovation', 'Follow trends', 'Set trends with R&D team'],
                  ].map(([feature, others, yads], idx) => (
                    <tr key={idx} className="hover:bg-gray-50">
                      <td className="p-6 font-medium text-gray-900">{feature}</td>
                      <td className="p-6 text-center text-gray-600">{others}</td>
                      <td className="p-6 text-center font-medium text-blue-600 bg-blue-50">{yads}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="text-sm font-semibold text-blue-600 mb-4">OUR JOURNEY</div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Milestones That Define Us</h2>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-500 to-purple-500" />

            {timeline.map((item, index) => (
              <div key={index} className={`relative flex items-center mb-12 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                <div className={`w-1/2 ${index % 2 === 0 ? 'pr-12 text-right' : 'pl-12'}`}>
                  <div className="bg-white p-6 rounded-2xl shadow-lg inline-block">
                    <div className="text-sm font-semibold text-purple-600 mb-2">{item.milestone}</div>
                    <h3 className="text-xl font-bold mb-2">{item.year}</h3>
                    <p className="text-gray-600">{item.event}</p>
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 border-4 border-white shadow-lg" />
                </div>
                <div className="w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl">
              <div className="text-sm font-semibold text-blue-600 mb-4">OUR MISSION</div>
              <h3 className="text-2xl font-bold mb-6">Democratize Technology</h3>
              <p className="text-gray-600 mb-6">
                We believe every business—from startups to enterprises—deserves access to 
                world-class technology solutions. Our mission is to break down technical 
                barriers and empower businesses to thrive in the digital age.
              </p>
              <div className="flex items-center gap-4">
                <div className="p-3 bg-blue-100 rounded-lg">
                  <TrendingUp className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <div className="font-bold">Make Tech Accessible</div>
                  <div className="text-sm text-gray-600">For businesses of all sizes</div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-white p-8 rounded-2xl">
              <div className="text-sm font-semibold text-purple-600 mb-4">OUR VISION</div>
              <h3 className="text-2xl font-bold mb-6">Shape the Future</h3>
              <p className="text-gray-600 mb-6">
                We envision a world where technology seamlessly enhances human potential. 
                By 2030, we aim to be at the forefront of technological innovation, 
                creating solutions that solve humanity's biggest challenges.
              </p>
              <div className="flex items-center gap-4">
                <div className="p-3 bg-purple-100 rounded-lg">
                  <Globe className="h-6 w-6 text-purple-600" />
                </div>
                <div>
                  <div className="font-bold">Global Impact</div>
                  <div className="text-sm text-gray-600">Innovate for billions</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl mx-4 mb-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Build Something Amazing?
          </h2>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
            Join 250+ businesses that trust us with their digital transformation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-white text-blue-600 font-bold rounded-xl hover:bg-gray-100 transition-colors shadow-2xl">
              Start Your Project
            </button>
            <button className="px-8 py-4 border-2 border-white text-white font-bold rounded-xl hover:bg-white/10 transition-colors">
              Meet Our Team
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;