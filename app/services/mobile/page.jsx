'use client';

import { useState, useEffect } from 'react';
import {
  User,
  Mail,
  Phone,
  GraduationCap,
  Briefcase,
  Upload,
  FileText,
  Calendar,
  MapPin,
  Globe,
  Award,
  CheckCircle,
  AlertCircle,
  Clock,
  Sparkles,
  TrendingUp,
  Users,
  Target,
  Zap,
  Shield,
  Lock,
  Eye,
  EyeOff,
  ExternalLink,
  Download,
  Trash2,
  X,
  ChevronDown,
  Building,
  DollarSign,
  Heart
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const ApplicationPage = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    // Personal Info
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    country: '',
    city: '',
    linkedin: '',
    portfolio: '',
    
    // Professional Info
    currentRole: '',
    yearsOfExperience: '',
    currentCompany: '',
    expectedSalary: '',
    noticePeriod: '',
    
    // Education
    highestDegree: '',
    university: '',
    graduationYear: '',
    
    // Documents
    resume: null,
    coverLetter: null,
    portfolioFile: null,
    
    // Questions
    whyApply: '',
    strengths: '',
    availability: '',
    
    // Preferences
    workType: '',
    remotePreference: '',
    relocation: '',
    
    // Consent
    termsAccepted: false,
    privacyAccepted: false,
    jobAlerts: false
  });

  const [uploadProgress, setUploadProgress] = useState({});
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [savedProgress, setSavedProgress] = useState(0);
  const [applicationId, setApplicationId] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});

  const totalSteps = 5;
  const progress = ((step - 1) / (totalSteps - 1)) * 100;

  const jobDetails = {
    title: "Senior Frontend Developer",
    company: "TechVision Inc.",
    type: "Full-time",
    location: "Remote • Bangalore • Mumbai • Delhi",
    salary: "₹15L - ₹25L PA",
    experience: "3-5 years",
    posted: "2 days ago",
    applications: "245 applied",
    deadline: "Dec 30, 2024",
    perks: [
      "Flexible work hours",
      "Health insurance",
      "Learning budget",
      "Stock options",
      "WFH allowance",
      "Annual retreats"
    ]
  };

  const steps = [
    { number: 1, title: "Personal Info", icon: <User className="w-5 h-5" /> },
    { number: 2, title: "Professional", icon: <Briefcase className="w-5 h-5" /> },
    { number: 3, title: "Education", icon: <GraduationCap className="w-5 h-5" /> },
    { number: 4, title: "Documents", icon: <FileText className="w-5 h-5" /> },
    { number: 5, title: "Review", icon: <CheckCircle className="w-5 h-5" /> }
  ];

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    
    if (type === 'file') {
      const file = files[0];
      if (file) {
        // Simulate upload progress
        simulateUpload(name, file);
      }
    } else if (type === 'checkbox') {
      setFormData(prev => ({ ...prev, [name]: checked }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
      
      // Clear error when user starts typing
      if (errors[name]) {
        setErrors(prev => ({ ...prev, [name]: '' }));
      }
    }
    
    // Auto-save progress
    setSavedProgress(prev => Math.min(prev + 2, 100));
  };

  const simulateUpload = (fieldName, file) => {
    setUploadProgress(prev => ({ ...prev, [fieldName]: 0 }));
    
    const interval = setInterval(() => {
      setUploadProgress(prev => {
        const newProgress = prev[fieldName] + 10;
        if (newProgress >= 100) {
          clearInterval(interval);
          setFormData(prevData => ({ ...prevData, [fieldName]: file }));
          return { ...prev, [fieldName]: 100 };
        }
        return { ...prev, [fieldName]: newProgress };
      });
    }, 100);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Generate application ID
    const newAppId = `APP-${Date.now().toString().slice(-6)}`;
    setApplicationId(newAppId);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setStep(6); // Success step
  };

  const validateStep = () => {
    const newErrors = {};
    
    switch(step) {
      case 1:
        if (!formData.firstName) newErrors.firstName = 'First name is required';
        if (!formData.email) newErrors.email = 'Email is required';
        if (!formData.phone) newErrors.phone = 'Phone is required';
        break;
      case 2:
        if (!formData.currentRole) newErrors.currentRole = 'Current role is required';
        if (!formData.yearsOfExperience) newErrors.yearsOfExperience = 'Experience is required';
        break;
      // Add more validations for other steps
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const nextStep = () => {
    if (validateStep()) {
      setStep(prev => Math.min(prev + 1, totalSteps));
    }
  };

  const prevStep = () => {
    setStep(prev => Math.max(prev - 1, 1));
  };

  const countries = [
    'India', 'United States', 'United Kingdom', 'Canada', 'Australia',
    'Germany', 'France', 'Singapore', 'Japan', 'UAE'
  ];

  const degrees = [
    'High School',
    'Associate Degree',
    'Bachelor\'s Degree',
    'Master\'s Degree',
    'PhD',
    'Diploma',
    'Other'
  ];

  // Auto-generate application ID on mount
  useEffect(() => {
    const appId = `APP-${Math.floor(100000 + Math.random() * 900000)}`;
    setApplicationId(appId);
  }, []);

  // Progress auto-save simulation
  useEffect(() => {
    const interval = setInterval(() => {
      if (savedProgress < 100 && step < totalSteps) {
        setSavedProgress(prev => Math.min(prev + 1, 100));
      }
    }, 30000); // Every 30 seconds
    
    return () => clearInterval(interval);
  }, [savedProgress, step]);

  if (step === 6) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100 flex items-center justify-center p-4">
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="max-w-2xl w-full bg-white rounded-3xl shadow-2xl p-8 text-center"
        >
          <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-12 h-12 text-green-600" />
          </div>
          
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Application Submitted! 🎉
          </h1>
          
          <p className="text-lg text-gray-600 mb-6">
            Thank you for applying to <span className="font-bold text-blue-600">{jobDetails.title}</span> at {jobDetails.company}.
          </p>
          
          <div className="bg-gray-50 rounded-xl p-6 mb-6">
            <div className="flex items-center justify-between mb-4">
              <span className="text-gray-500">Application ID:</span>
              <span className="font-mono font-bold text-blue-600">{applicationId}</span>
            </div>
            <div className="flex items-center justify-between mb-4">
              <span className="text-gray-500">Position:</span>
              <span className="font-semibold">{jobDetails.title}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-500">Submission Date:</span>
              <span className="font-semibold">{new Date().toLocaleDateString()}</span>
            </div>
          </div>
          
          <p className="text-gray-600 mb-8">
            We've sent a confirmation email to <span className="font-bold">{formData.email}</span>. 
            Our team will review your application and get back to you within 5-7 business days.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => window.print()}
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition flex items-center justify-center gap-2"
            >
              <Download className="w-5 h-5" />
              Save Confirmation
            </button>
            <button
              onClick={() => window.location.href = '/jobs'}
              className="px-6 py-3 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition"
            >
              Browse More Jobs
            </button>
          </div>
          
          <div className="mt-8 pt-8 border-t border-gray-200">
            <p className="text-sm text-gray-500">
              Need help? Contact us at <span className="text-blue-600">careers@techvision.com</span>
            </p>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <Briefcase className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">Career Portal</h1>
                <p className="text-sm text-gray-500">Application ID: {applicationId}</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="hidden sm:block">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-gray-400" />
                  <span className="text-sm text-gray-600">Auto-saved {savedProgress}%</span>
                </div>
              </div>
              <button className="text-sm text-blue-600 hover:text-blue-800">
                Save & Exit
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - Job Details & Progress */}
          <div className="lg:col-span-1 space-y-6">
            {/* Job Card */}
            <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-200">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-2">
                    {jobDetails.type}
                  </span>
                  <h2 className="text-xl font-bold text-gray-900">{jobDetails.title}</h2>
                  <p className="text-gray-600 flex items-center gap-1 mt-1">
                    <Building className="w-4 h-4" />
                    {jobDetails.company}
                  </p>
                </div>
                <Heart className="w-6 h-6 text-gray-400 hover:text-red-500 cursor-pointer" />
              </div>
              
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-2 text-gray-600">
                  <MapPin className="w-4 h-4" />
                  <span>{jobDetails.location}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <DollarSign className="w-4 h-4" />
                  <span>{jobDetails.salary}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <Briefcase className="w-4 h-4" />
                  <span>{jobDetails.experience} experience</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <Calendar className="w-4 h-4" />
                  <span>Apply by {jobDetails.deadline}</span>
                </div>
              </div>
              
              <div className="pt-4 border-t">
                <p className="text-sm text-gray-500 mb-3">Perks & Benefits:</p>
                <div className="flex flex-wrap gap-2">
                  {jobDetails.perks.map((perk, index) => (
                    <span key={index} className="px-3 py-1 bg-green-50 text-green-700 rounded-full text-xs">
                      {perk}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Progress Steps */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <div className="mb-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-bold text-gray-900">Application Progress</h3>
                  <span className="text-sm font-medium text-blue-600">{Math.round(progress)}%</span>
                </div>
                <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-blue-500 to-purple-500"
                    initial={{ width: 0 }}
                    animate={{ width: `${progress}%` }}
                    transition={{ duration: 0.5 }}
                  />
                </div>
              </div>

              <div className="space-y-3">
                {steps.map((s) => (
                  <div
                    key={s.number}
                    className={`flex items-center gap-3 p-3 rounded-lg cursor-pointer transition-all ${
                      step === s.number
                        ? 'bg-blue-50 border border-blue-200'
                        : step > s.number
                        ? 'bg-green-50 border border-green-200'
                        : 'hover:bg-gray-50'
                    }`}
                    onClick={() => step >= s.number && setStep(s.number)}
                  >
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                      step === s.number
                        ? 'bg-blue-600 text-white'
                        : step > s.number
                        ? 'bg-green-600 text-white'
                        : 'bg-gray-200 text-gray-600'
                    }`}>
                      {step > s.number ? <CheckCircle className="w-5 h-5" /> : s.icon}
                    </div>
                    <div>
                      <p className="font-medium">Step {s.number}</p>
                      <p className="text-sm text-gray-600">{s.title}</p>
                    </div>
                    {step > s.number && (
                      <div className="ml-auto">
                        <CheckCircle className="w-5 h-5 text-green-600" />
                      </div>
                    )}
                  </div>
                ))}
              </div>

              <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                <div className="flex items-center gap-3">
                  <Shield className="w-5 h-5 text-blue-600" />
                  <div>
                    <p className="text-sm font-medium text-gray-900">Your data is secure</p>
                    <p className="text-xs text-gray-600">We use 256-bit SSL encryption</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Application Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              {/* Form Header */}
              <div className="border-b border-gray-200 p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900">
                      {steps[step - 1]?.title}
                    </h2>
                    <p className="text-gray-600">Step {step} of {totalSteps}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Lock className="w-5 h-5 text-green-600" />
                    <span className="text-sm text-green-600">Secure form</span>
                  </div>
                </div>
              </div>

              {/* Form Content */}
              <form onSubmit={handleSubmit} className="p-6">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={step}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* Step 1: Personal Info */}
                    {step === 1 && (
                      <div className="space-y-6">
                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                              First Name *
                            </label>
                            <input
                              type="text"
                              name="firstName"
                              value={formData.firstName}
                              onChange={handleChange}
                              className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition ${
                                errors.firstName ? 'border-red-500' : 'border-gray-300'
                              }`}
                              placeholder="DASYNOMA"
                            />
                            {errors.firstName && (
                              <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                                <AlertCircle className="w-4 h-4" /> {errors.firstName}
                              </p>
                            )}
                          </div>
                          
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                              Last Name *
                            </label>
                            <input
                              type="text"
                              name="lastName"
                              value={formData.lastName}
                              onChange={handleChange}
                              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                              placeholder="Technology"
                            />
                          </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                              Email Address *
                            </label>
                            <input
                              type="email"
                              name="email"
                              value={formData.email}
                              onChange={handleChange}
                              className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition ${
                                errors.email ? 'border-red-500' : 'border-gray-300'
                              }`}
                              placeholder="yadstechnology2.0@gmail.com"
                            />
                            {errors.email && (
                              <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                                <AlertCircle className="w-4 h-4" /> {errors.email}
                              </p>
                            )}
                          </div>
                          
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                              Phone Number *
                            </label>
                            <input
                              type="tel"
                              name="phone"
                              value={formData.phone}
                              onChange={handleChange}
                              className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition ${
                                errors.phone ? 'border-red-500' : 'border-gray-300'
                              }`}
                              placeholder="+91 98765 43210"
                            />
                            {errors.phone && (
                              <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                                <AlertCircle className="w-4 h-4" /> {errors.phone}
                              </p>
                            )}
                          </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                              Country
                            </label>
                            <div className="relative">
                              <select
                                name="country"
                                value={formData.country}
                                onChange={handleChange}
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition appearance-none"
                              >
                                <option value="">Select Country</option>
                                {countries.map(country => (
                                  <option key={country} value={country}>{country}</option>
                                ))}
                              </select>
                              <ChevronDown className="w-5 h-5 absolute right-3 top-3.5 text-gray-400 pointer-events-none" />
                            </div>
                          </div>
                          
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                              City
                            </label>
                            <input
                              type="text"
                              name="city"
                              value={formData.city}
                              onChange={handleChange}
                              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                              placeholder="Bangalore"
                            />
                          </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                              LinkedIn Profile
                            </label>
                            <input
                              type="url"
                              name="linkedin"
                              value={formData.linkedin}
                              onChange={handleChange}
                              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                              placeholder="https://linkedin.com/in/username"
                            />
                          </div>
                          
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                              Portfolio Website
                            </label>
                            <input
                              type="url"
                              name="portfolio"
                              value={formData.portfolio}
                              onChange={handleChange}
                              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                              placeholder="https://yourportfolio.com"
                            />
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Step 2: Professional Info */}
                    {step === 2 && (
                      <div className="space-y-6">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Current Role *
                          </label>
                          <input
                            type="text"
                            name="currentRole"
                            value={formData.currentRole}
                            onChange={handleChange}
                            className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition ${
                              errors.currentRole ? 'border-red-500' : 'border-gray-300'
                            }`}
                            placeholder="Senior Frontend Developer"
                          />
                          {errors.currentRole && (
                            <p className="mt-1 text-sm text-red-600">{errors.currentRole}</p>
                          )}
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                              Years of Experience *
                            </label>
                            <select
                              name="yearsOfExperience"
                              value={formData.yearsOfExperience}
                              onChange={handleChange}
                              className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition ${
                                errors.yearsOfExperience ? 'border-red-500' : 'border-gray-300'
                              }`}
                            >
                              <option value="">Select</option>
                              {[0, 1, 2, 3, 4, 5, '5+'].map(year => (
                                <option key={year} value={year}>{year} {year === 1 ? 'year' : 'years'}</option>
                              ))}
                            </select>
                            {errors.yearsOfExperience && (
                              <p className="mt-1 text-sm text-red-600">{errors.yearsOfExperience}</p>
                            )}
                          </div>
                          
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                              Current Company
                            </label>
                            <input
                              type="text"
                              name="currentCompany"
                              value={formData.currentCompany}
                              onChange={handleChange}
                              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                              placeholder="Current company name"
                            />
                          </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                              Expected Salary (₹)
                            </label>
                            <input
                              type="number"
                              name="expectedSalary"
                              value={formData.expectedSalary}
                              onChange={handleChange}
                              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                              placeholder="1500000"
                            />
                          </div>
                          
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                              Notice Period
                            </label>
                            <select
                              name="noticePeriod"
                              value={formData.noticePeriod}
                              onChange={handleChange}
                              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                            >
                              <option value="">Select</option>
                              <option value="immediate">Immediate</option>
                              <option value="15days">15 Days</option>
                              <option value="30days">30 Days</option>
                              <option value="60days">60 Days</option>
                              <option value="90days">90 Days</option>
                            </select>
                          </div>
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Why do you want to join us? *
                          </label>
                          <textarea
                            name="whyApply"
                            value={formData.whyApply}
                            onChange={handleChange}
                            rows="4"
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition resize-none"
                            placeholder="Tell us what excites you about this role and our company..."
                          />
                        </div>
                      </div>
                    )}

                    {/* Step 3: Education */}
                    {step === 3 && (
                      <div className="space-y-6">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Highest Degree *
                          </label>
                          <select
                            name="highestDegree"
                            value={formData.highestDegree}
                            onChange={handleChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                          >
                            <option value="">Select Degree</option>
                            {degrees.map(degree => (
                              <option key={degree} value={degree}>{degree}</option>
                            ))}
                          </select>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                              University/College *
                            </label>
                            <input
                              type="text"
                              name="university"
                              value={formData.university}
                              onChange={handleChange}
                              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                              placeholder="University name"
                            />
                          </div>
                          
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                              Graduation Year *
                            </label>
                            <input
                              type="number"
                              name="graduationYear"
                              value={formData.graduationYear}
                              onChange={handleChange}
                              min="1900"
                              max={new Date().getFullYear() + 5}
                              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                              placeholder="2020"
                            />
                          </div>
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Key Strengths & Skills *
                          </label>
                          <textarea
                            name="strengths"
                            value={formData.strengths}
                            onChange={handleChange}
                            rows="4"
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition resize-none"
                            placeholder="List your key technical skills, certifications, and strengths..."
                          />
                        </div>
                      </div>
                    )}

                    {/* Step 4: Documents */}
                    {step === 4 && (
                      <div className="space-y-6">
                        {/* Resume Upload */}
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Resume/CV *
                          </label>
                          <div className="border-2 border-dashed border-gray-300 rounded-xl p-8 text-center hover:border-blue-500 transition-colors">
                            <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                            <input
                              type="file"
                              name="resume"
                              onChange={handleChange}
                              accept=".pdf,.doc,.docx"
                              className="hidden"
                              id="resume-upload"
                            />
                            <label htmlFor="resume-upload" className="cursor-pointer">
                              <p className="text-lg font-medium text-gray-700 mb-2">
                                Upload your resume
                              </p>
                              <p className="text-sm text-gray-500 mb-4">
                                Supports PDF, DOC, DOCX (Max 5MB)
                              </p>
                              <span className="inline-block px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
                                Choose File
                              </span>
                            </label>
                            {formData.resume && (
                              <div className="mt-4 p-4 bg-green-50 rounded-lg flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                  <FileText className="w-5 h-5 text-green-600" />
                                  <div>
                                    <p className="font-medium">{formData.resume.name}</p>
                                    <p className="text-sm text-gray-500">
                                      {(formData.resume.size / 1024 / 1024).toFixed(2)} MB
                                    </p>
                                  </div>
                                </div>
                                <button
                                  type="button"
                                  onClick={() => setFormData(prev => ({ ...prev, resume: null }))}
                                  className="text-red-600 hover:text-red-800"
                                >
                                  <Trash2 className="w-5 h-5" />
                                </button>
                              </div>
                            )}
                            {uploadProgress.resume !== undefined && uploadProgress.resume < 100 && (
                              <div className="mt-4">
                                <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                                  <div
                                    className="h-full bg-blue-500 transition-all duration-300"
                                    style={{ width: `${uploadProgress.resume}%` }}
                                  />
                                </div>
                                <p className="text-sm text-gray-500 mt-2">
                                  Uploading... {uploadProgress.resume}%
                                </p>
                              </div>
                            )}
                          </div>
                        </div>

                        {/* Cover Letter Upload */}
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Cover Letter (Optional)
                          </label>
                          <div className="border-2 border-dashed border-gray-300 rounded-xl p-6 text-center hover:border-blue-500 transition-colors">
                            <input
                              type="file"
                              name="coverLetter"
                              onChange={handleChange}
                              accept=".pdf,.doc,.docx"
                              className="hidden"
                              id="cover-upload"
                            />
                            <label htmlFor="cover-upload" className="cursor-pointer">
                              <p className="text-sm text-gray-500">
                                Add a cover letter to stand out
                              </p>
                            </label>
                          </div>
                        </div>

                        {/* Portfolio Upload */}
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Portfolio/Work Samples (Optional)
                          </label>
                          <div className="border-2 border-dashed border-gray-300 rounded-xl p-6 text-center hover:border-blue-500 transition-colors">
                            <input
                              type="file"
                              name="portfolioFile"
                              onChange={handleChange}
                              accept=".pdf,.zip,.rar"
                              className="hidden"
                              id="portfolio-upload"
                            />
                            <label htmlFor="portfolio-upload" className="cursor-pointer">
                              <p className="text-sm text-gray-500">
                                Upload portfolio or project files
                              </p>
                            </label>
                          </div>
                        </div>

                        <div className="bg-blue-50 p-4 rounded-lg">
                          <p className="text-sm text-blue-800">
                            <span className="font-bold">Tip:</span> Make sure your resume is up-to-date and tailored to this position.
                          </p>
                        </div>
                      </div>
                    )}

                    {/* Step 5: Review */}
                    {step === 5 && (
                      <div className="space-y-6">
                        <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-xl">
                          <div className="flex items-center gap-3 mb-4">
                            <CheckCircle className="w-6 h-6 text-green-600" />
                            <h3 className="text-lg font-bold text-gray-900">
                              Ready to Submit?
                            </h3>
                          </div>
                          <p className="text-gray-600">
                            Please review your application before submitting. Once submitted, you cannot make changes.
                          </p>
                        </div>

                        {/* Review Summary */}
                        <div className="space-y-4">
                          <div className="border border-gray-200 rounded-xl overflow-hidden">
                            <div className="bg-gray-50 px-6 py-3 border-b">
                              <h4 className="font-bold text-gray-900">Personal Information</h4>
                            </div>
                            <div className="p-6">
                              <div className="grid md:grid-cols-2 gap-4">
                                <div>
                                  <p className="text-sm text-gray-500">Full Name</p>
                                  <p className="font-medium">{formData.firstName} {formData.lastName}</p>
                                </div>
                                <div>
                                  <p className="text-sm text-gray-500">Email</p>
                                  <p className="font-medium">{formData.email}</p>
                                </div>
                                <div>
                                  <p className="text-sm text-gray-500">Phone</p>
                                  <p className="font-medium">{formData.phone}</p>
                                </div>
                                <div>
                                  <p className="text-sm text-gray-500">Location</p>
                                  <p className="font-medium">{formData.city}, {formData.country}</p>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="border border-gray-200 rounded-xl overflow-hidden">
                            <div className="bg-gray-50 px-6 py-3 border-b">
                              <h4 className="font-bold text-gray-900">Professional Information</h4>
                            </div>
                            <div className="p-6">
                              <div className="grid md:grid-cols-2 gap-4">
                                <div>
                                  <p className="text-sm text-gray-500">Current Role</p>
                                  <p className="font-medium">{formData.currentRole}</p>
                                </div>
                                <div>
                                  <p className="text-sm text-gray-500">Experience</p>
                                  <p className="font-medium">{formData.yearsOfExperience} years</p>
                                </div>
                              </div>
                            </div>
                          </div>

                          {/* Consent Checkboxes */}
                          <div className="space-y-4">
                            <div className="flex items-start gap-3">
                              <input
                                type="checkbox"
                                id="terms"
                                name="termsAccepted"
                                checked={formData.termsAccepted}
                                onChange={handleChange}
                                className="mt-1"
                              />
                              <label htmlFor="terms" className="text-sm text-gray-700">
                                I confirm that all information provided is accurate and complete. *
                              </label>
                            </div>
                            
                            <div className="flex items-start gap-3">
                              <input
                                type="checkbox"
                                id="privacy"
                                name="privacyAccepted"
                                checked={formData.privacyAccepted}
                                onChange={handleChange}
                                className="mt-1"
                              />
                              <label htmlFor="privacy" className="text-sm text-gray-700">
                                I agree to the Privacy Policy and Terms of Service. *
                              </label>
                            </div>
                            
                            <div className="flex items-start gap-3">
                              <input
                                type="checkbox"
                                id="alerts"
                                name="jobAlerts"
                                checked={formData.jobAlerts}
                                onChange={handleChange}
                                className="mt-1"
                              />
                              <label htmlFor="alerts" className="text-sm text-gray-700">
                                I want to receive job alerts and updates from Career Portal.
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </motion.div>
                </AnimatePresence>

                {/* Form Navigation */}
                <div className="flex justify-between mt-8 pt-6 border-t border-gray-200">
                  <button
                    type="button"
                    onClick={prevStep}
                    disabled={step === 1}
                    className={`px-6 py-3 rounded-lg transition ${
                      step === 1
                        ? 'text-gray-400 cursor-not-allowed'
                        : 'text-blue-600 hover:bg-blue-50'
                    }`}
                  >
                    ← Previous
                  </button>
                  
                  {step < totalSteps ? (
                    <button
                      type="button"
                      onClick={nextStep}
                      className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition flex items-center gap-2"
                    >
                      Continue
                      <ChevronDown className="w-4 h-4 rotate-270" />
                    </button>
                  ) : (
                    <button
                      type="submit"
                      disabled={isSubmitting || !formData.termsAccepted || !formData.privacyAccepted}
                      className={`px-8 py-3 rounded-lg transition flex items-center gap-2 ${
                        isSubmitting || !formData.termsAccepted || !formData.privacyAccepted
                          ? 'bg-gray-400 cursor-not-allowed'
                          : 'bg-gradient-to-r from-blue-600 to-purple-600 hover:opacity-90'
                      } text-white`}
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                          Submitting...
                        </>
                      ) : (
                        <>
                          <Zap className="w-5 h-5" />
                          Submit Application
                        </>
                      )}
                    </button>
                  )}
                </div>
              </form>
            </div>

            {/* Bottom Note */}
            <div className="mt-6 text-center">
              <p className="text-sm text-gray-500">
                Need help? Contact our support team at{' '}
                <a href="mailto:support@careerportal.com" className="text-blue-600 hover:underline">
                  support@careerportal.com
                </a>
              </p>
              <p className="text-xs text-gray-400 mt-2">
                Your application is saved automatically. You can return anytime to complete it.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ApplicationPage;