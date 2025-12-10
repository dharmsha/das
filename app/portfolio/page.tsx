'use client';

import { useState } from 'react';
import { ExternalLink, Github, Eye, Star, Zap, Users, TrendingUp, Filter, ChevronRight } from 'lucide-react';
import Image from 'next/image';

const PortfolioPage = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'web', label: 'Web Apps' },
    { id: 'mobile', label: 'Mobile Apps' },
    { id: 'ecommerce', label: 'E-commerce' },
    { id: 'saas', label: 'SaaS' },
    { id: 'ai', label: 'AI/ML' },
    { id: 'enterprise', label: 'Enterprise' },
  ];

  const projects = [
    {
      id: 1,
      title: 'Fintech Dashboard Pro',
      category: 'web',
      client: 'Global Finance Corp',
      description: 'Real-time financial analytics dashboard with AI predictions',
      image: '/fintech-dashboard.jpg',
      technologies: ['React', 'TypeScript', 'D3.js', 'Node.js', 'MongoDB'],
      results: {
        revenue: '↑ 45%',
        efficiency: '↑ 60%',
        users: '10K+',
      },
      liveUrl: 'https://fintechdemo.com',
      githubUrl: '#',
      featured: true,
    },
    {
      id: 2,
      title: 'HealthCare AI Assistant',
      category: 'ai',
      client: 'MedTech Solutions',
      description: 'AI-powered healthcare assistant for patient diagnosis',
      image: '/healthcare-ai.jpg',
      technologies: ['Python', 'TensorFlow', 'React Native', 'Firebase'],
      results: {
        accuracy: '98%',
        time: '↓ 70%',
        patients: '50K+',
      },
      liveUrl: '#',
      githubUrl: '#',
      featured: true,
    },
    {
      id: 3,
      title: 'E-commerce Super Platform',
      category: 'ecommerce',
      client: 'ShopGlobal Inc',
      description: 'Multi-vendor marketplace with AR shopping experience',
      image: '/ecommerce.jpg',
      technologies: ['Next.js', 'GraphQL', 'Stripe', 'Redis', 'Docker'],
      results: {
        sales: '↑ 300%',
        conversion: '↑ 25%',
        vendors: '500+',
      },
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      id: 4,
      title: 'Smart Home Mobile App',
      category: 'mobile',
      client: 'SmartLiving Tech',
      description: 'IoT-based home automation with voice control',
      image: '/smart-home.jpg',
      technologies: ['React Native', 'AWS IoT', 'Firebase', 'Redux'],
      results: {
        energy: '↓ 40%',
        satisfaction: '4.9/5',
        devices: '1M+',
      },
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      id: 5,
      title: 'Education SaaS Platform',
      category: 'saas',
      client: 'EduTech Global',
      description: 'Learning management system with interactive courses',
      image: '/education-saas.jpg',
      technologies: ['Vue.js', 'Laravel', 'WebRTC', 'PostgreSQL'],
      results: {
        engagement: '↑ 80%',
        retention: '↑ 65%',
        students: '100K+',
      },
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      id: 6,
      title: 'Supply Chain Tracker',
      category: 'enterprise',
      client: 'Logistics Plus',
      description: 'Blockchain-based supply chain transparency system',
      image: '/supply-chain.jpg',
      technologies: ['React', 'Solidity', 'Node.js', 'IPFS', 'Ethereum'],
      results: {
        transparency: '↑ 95%',
        efficiency: '↑ 55%',
        partners: '200+',
      },
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      id: 7,
      title: 'Fitness AI Coach',
      category: 'ai',
      client: 'FitAI Labs',
      description: 'Personalized workout plans with computer vision',
      image: '/fitness-ai.jpg',
      technologies: ['Python', 'OpenCV', 'React', 'MongoDB', 'AWS'],
      results: {
        results: '↑ 65%',
        accuracy: '96%',
        users: '25K+',
      },
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      id: 8,
      title: 'Real Estate CRM',
      category: 'saas',
      client: 'Property Experts',
      description: 'Complete CRM for real estate agencies',
      image: '/real-estate.jpg',
      technologies: ['Angular', '.NET', 'SQL Server', 'Azure'],
      results: {
        leads: '↑ 150%',
        closing: '↑ 40%',
        agents: '2K+',
      },
      liveUrl: '#',
      githubUrl: '#',
    },
  ];

  const testimonials = [
    {
      name: 'Amit Kumar',
      company: 'CEO, FinTech Corp',
      text: 'DASYNOMA transformed our financial platform. The dashboard they built increased our operational efficiency by 60%.',
      project: 'Fintech Dashboard Pro',
      rating: 5,
    },
    {
      name: 'Yusuf Khan',
      company: 'CTO, MedTech Solutions',
      text: 'Their AI solution helped us reduce diagnosis time by 70%. The team is incredibly talented and professional.',
      project: 'HealthCare AI Assistant',
      rating: 5,
    },
    {
      name: 'Arayan Kumar',
      company: 'Founder, ShopGlobal',
      text: 'Our e-commerce platform saw 300% growth after launching with YADS. Their technical expertise is unmatched.',
      project: 'E-commerce Super Platform',
      rating: 5,
    },
     {
      name: 'Shivam Kumar',
      company: 'CO, ShopGlobal',
      text: 'Our e-commerce platform saw 300% growth after launching with YADS. Their technical expertise is unmatched.',
      project: 'E-commerce Super Platform',
      rating: 5,
    },
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const stats = [
    { value: '250+', label: 'Projects Delivered' },
    { value: '98%', label: 'Client Satisfaction' },
    { value: '50+', label: 'Countries Served' },
    { value: '150M+', label: 'Users Reached' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 via-purple-600/5 to-blue-600/5" />
        <div className="container relative mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white rounded-full px-4 py-2 mb-6 shadow-sm">
              <Eye className="h-4 w-4 text-blue-600" />
              <span className="text-sm font-semibold text-gray-700">Portfolio Showcase</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Work</span> Speaks
            </h1>
            <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto">
              Discover how we've helped businesses transform through innovative technology solutions. 
              Each project tells a story of success.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
              {stats.map((stat, index) => (
                <div key={index} className="text-center p-4">
                  <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="sticky top-16 z-40 bg-white/95 backdrop-blur-sm border-b py-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <Filter className="h-5 w-5 text-gray-500" />
              <span className="font-medium text-gray-700">Filter by:</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {filters.map((filter) => (
                <button
                  key={filter.id}
                  onClick={() => setActiveFilter(filter.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    activeFilter === filter.id
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {filter.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div 
                key={project.id}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 relative"
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                {project.featured && (
                  <div className="absolute top-4 left-4 z-10">
                    <div className="flex items-center gap-1 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                      <Star className="h-3 w-3 fill-white" />
                      <span>Featured</span>
                    </div>
                  </div>
                )}
                
                {/* Project Image */}
                <div className="relative h-56 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 opacity-90" />
                  <div className="absolute inset-0 flex items-center justify-center text-white text-4xl font-bold">
                    {project.title.split(' ')[0].charAt(0)}
                  </div>
                  <div className={`absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                    hoveredProject === project.id ? 'opacity-100' : ''
                  }`}>
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="flex gap-2 flex-wrap">
                        {project.technologies.slice(0, 3).map((tech, idx) => (
                          <span key={idx} className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-xs rounded-full">
                            {tech}
                          </span>
                        ))}
                        {project.technologies.length > 3 && (
                          <span className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-xs rounded-full">
                            +{project.technologies.length - 3} more
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <div className="text-sm font-medium text-blue-600 mb-1">{project.client}</div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                    </div>
                    <Zap className="h-5 w-5 text-yellow-500" />
                  </div>

                  <p className="text-gray-600 mb-6">{project.description}</p>

                  {/* Results */}
                  <div className="grid grid-cols-3 gap-3 mb-6">
                    {Object.entries(project.results).map(([key, value], idx) => (
                      <div key={idx} className="text-center p-2 bg-gray-50 rounded-lg">
                        <div className="text-lg font-bold text-gray-900">{value}</div>
                        <div className="text-xs text-gray-600 capitalize">{key}</div>
                      </div>
                    ))}
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.slice(0, 3).map((tech, idx) => (
                      <span key={idx} className="px-3 py-1 bg-blue-50 text-blue-700 text-xs font-medium rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-lg hover:shadow-lg transition-all group/btn"
                    >
                      <ExternalLink className="h-4 w-4" />
                      <span>Live Demo</span>
                    </a>
                    <a
                      href={project.githubUrl}
                      className="flex items-center justify-center w-12 border border-gray-300 rounded-lg hover:border-blue-500 hover:text-blue-600 transition-colors"
                    >
                      <Github className="h-5 w-5" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* No Results */}
          {filteredProjects.length === 0 && (
            <div className="text-center py-20">
              <div className="text-gray-400 mb-4">No projects found in this category</div>
              <button
                onClick={() => setActiveFilter('all')}
                className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-lg hover:shadow-lg"
              >
                View All Projects
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gradient-to-b from-white to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="text-sm font-semibold text-purple-600 mb-4">CLIENT TESTIMONIALS</div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              What Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Clients Say</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Don't just take our word for it. Here's what our clients have to say about working with us.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 italic">"{testimonial.text}"</p>
                <div className="border-t pt-6">
                  <div className="font-bold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-600 mb-2">{testimonial.company}</div>
                  <div className="text-sm text-blue-600 font-medium">{testimonial.project}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="text-sm font-semibold text-blue-600 mb-4">OUR PROCESS</div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              How We <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Deliver Excellence</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Discovery',
                description: 'We understand your requirements, goals, and challenges',
              },
              {
                step: '02',
                title: 'Planning',
                description: 'Detailed roadmap with milestones and deliverables',
              },
              {
                step: '03',
                title: 'Development',
                description: 'Agile development with regular updates and reviews',
              },
              {
                step: '04',
                title: 'Launch & Support',
                description: 'Deployment, training, and ongoing maintenance',
              },
            ].map((process, index) => (
              <div key={index} className="relative">
                <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
                  <div className="text-4xl font-bold text-blue-100 mb-4">{process.step}</div>
                  <h3 className="text-xl font-bold mb-4">{process.title}</h3>
                  <p className="text-gray-600">{process.description}</p>
                </div>
                {index < 3 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <ChevronRight className="h-8 w-8 text-gray-300" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 md:p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
              Let's discuss how we can bring your vision to life with our expertise.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-white text-blue-600 font-bold rounded-xl hover:bg-gray-100 transition-colors shadow-2xl">
                Start Free Consultation
              </button>
              <button className="px-8 py-4 border-2 border-white text-white font-bold rounded-xl hover:bg-white/10 transition-colors">
                View Case Studies
              </button>
            </div>
            <div className="mt-10 text-blue-100 text-sm">
              <span className="opacity-80">Average project timeline: 3-6 months</span>
              <span className="mx-4">•</span>
              <span className="opacity-80">Starting from $15,000</span>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies We Use */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="text-sm font-semibold text-gray-600 mb-4">TECHNOLOGIES WE LOVE</div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Modern <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Tech Stack</span>
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {[
              { name: 'React', color: 'bg-blue-100 text-blue-800' },
              { name: 'Next.js', color: 'bg-gray-100 text-gray-800' },
              { name: 'Node.js', color: 'bg-green-100 text-green-800' },
              { name: 'TypeScript', color: 'bg-blue-100 text-blue-800' },
              { name: 'Python', color: 'bg-yellow-100 text-yellow-800' },
              { name: 'TensorFlow', color: 'bg-orange-100 text-orange-800' },
              { name: 'AWS', color: 'bg-yellow-100 text-yellow-800' },
              { name: 'Docker', color: 'bg-blue-100 text-blue-800' },
              { name: 'Kubernetes', color: 'bg-blue-100 text-blue-800' },
              { name: 'MongoDB', color: 'bg-green-100 text-green-800' },
              { name: 'PostgreSQL', color: 'bg-blue-100 text-blue-800' },
              { name: 'GraphQL', color: 'bg-pink-100 text-pink-800' },
            ].map((tech, index) => (
              <div key={index} className="text-center">
                <div className={`p-6 rounded-2xl ${tech.color} font-bold text-lg`}>
                  {tech.name}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default PortfolioPage;