
import React from "react";
import { Button } from "@/components/ui/button";
import {
  CheckCircle2,
  ShieldCheck,
  Zap,
  BarChart3,
  ClipboardList,
  UserCheck,
  Truck,
  CheckCircle,
  User,
  Users,
  UserCog,
  Facebook,
  Twitter,
  Instagram,
  Mail,
  Phone
} from "lucide-react";

// Navbar Component
const Navbar = () => {
  return (
    <div className="bg-white shadow-sm border-b py-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-1">
          <h1 className="text-2xl font-bold text-brand-teal">
            RationHub
          </h1>
        </div>

        <div className="hidden md:flex items-center space-x-8">
          <a href="#features" className="text-gray-600 hover:text-brand-teal transition-colors">
            Features
          </a>
          <a href="#how-it-works" className="text-gray-600 hover:text-brand-teal transition-colors">
            How It Works
          </a>
          <a href="#users" className="text-gray-600 hover:text-brand-teal transition-colors">
            User Roles
          </a>
        </div>

        <div className="flex items-center space-x-4">
          <Button asChild variant="outline" className="border-brand-teal text-brand-teal hover:bg-brand-teal hover:text-white">
            <a href="http://localhost/food_management/login.html">Login</a>
          </Button>

          <Button className="bg-brand-teal hover:bg-brand-green text-white">
          <a href="http://localhost/food_management/signup.php">Register</a>
          </Button>
        </div>
      </div>
    </div>
  );
};

// Hero Component
const Hero = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0 animate-fade-in">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight mb-4">
              Efficient Ration Distribution <span className="text-brand-teal">Made Simple</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-md">
              Connecting customers, dealers, and administrators in a seamless ecosystem for efficient public distribution.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Button className="bg-brand-teal hover:bg-brand-green text-white px-8 py-6 text-lg">

                Get Started
              </Button>
              <Button variant="outline" className="border-brand-teal text-brand-teal hover:bg-brand-teal hover:text-white px-8 py-6 text-lg">
                Learn More
              </Button>
            </div>
          </div>
          <div className="md:w-1/2 animate-slide-up">
            <div className="bg-white p-2 rounded-lg shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=1200&q=80"
                alt="Ration Management System Dashboard"
                className="rounded-md"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Features Component
const Features = () => {
  const features = [
    {
      title: "Real-time Tracking",
      description: "Monitor inventory levels and distribution status in real-time across all locations.",
      icon: <Zap className="h-10 w-10 text-brand-teal" />,
    },
    
    {
      title: "Compliance Tracking",
      description: "Ensure all operations comply with local regulations and government policies.",
      icon: <CheckCircle2 className="h-10 w-10 text-brand-teal" />,
    },
  ];

  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Powerful Features for All Users
          </h2>
          <p className="max-w-2xl mx-auto text-xl text-gray-600">
            Our platform is designed to streamline ration distribution while providing a seamless experience for administrators, dealers, and customers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow duration-300 hover:border-brand-teal"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// How It Works Component
const HowItWorks = () => {
  const steps = [
    {
      icon: <ClipboardList className="h-10 w-10 text-white" />,
      title: "Register & Verify",
      description: "Create an account based on your role and complete the verification process.",
      bgColor: "bg-brand-teal"
    },
    {
      icon: <UserCheck className="h-10 w-10 text-white" />,
      title: "Profile Setup",
      description: "Set up your profile with relevant details and preferences.",
      bgColor: "bg-brand-blue"
    },
    {
      icon: <Truck className="h-10 w-10 text-white" />,
      title: "Distribution Process",
      description: "Access or manage the distribution process according to your role.",
      bgColor: "bg-brand-green"
    },
    {
      icon: <CheckCircle className="h-10 w-10 text-white" />,
      title: "Tracking & Feedback",
      description: "Monitor transactions and provide feedback to improve the system.",
      bgColor: "bg-brand-teal"
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            How RationHub Works
          </h2>
          <p className="max-w-2xl mx-auto text-xl text-gray-600">
            A simple process designed to make ration distribution efficient and transparent for everyone involved.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="flex justify-center mb-6">
                <div className={`${step.bgColor} rounded-full p-4 inline-flex`}>
                  {step.icon}
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden lg:block border-t-2 border-dashed border-gray-300 w-full absolute top-10 left-1/2 z-0"></div>
                )}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {step.title}
              </h3>
              <p className="text-gray-600">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// User Roles Component
const UserRoles = () => {
  const roles = [
    {
      title: "Customers",
      description: "Access your ration entitlements, track deliveries, and manage your profile with an intuitive interface.",
      icon: <User className="h-12 w-12 text-white" />,
      bgColor: "bg-brand-teal",
      benefits: [
        "View available ration items",
        "Digital ration card management",
      ]
    },
    {
      title: "Dealers",
      description: "Efficiently manage inventory, process customer requests, and maintain compliance with regulatory requirements.",
      icon: <Users className="h-12 w-12 text-white" />,
      bgColor: "bg-brand-blue",
      benefits: [
        "Inventory management dashboard",
        "Customer verification tools",
        "Real-time stock updates"
      ]
    },
    {
      title: "Administrators",
      description: "Comprehensive control panel for overseeing the entire distribution network, user management, and system configuration.",
      icon: <UserCog className="h-12 w-12 text-white" />,
      bgColor: "bg-brand-green",
      benefits: [
        "Complete system oversight",
        "Policy implementation tools",
        "Advanced reporting capabilities"
      ]
    }
  ];

  return (
    <section id="users" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Tailored for Every User
          </h2>
          <p className="max-w-2xl mx-auto text-xl text-gray-600">
            Our platform provides specialized features for each user type in the ration distribution ecosystem.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {roles.map((role, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className={`${role.bgColor} p-6 flex justify-center`}>
                <div className="rounded-full p-4 bg-white/20 flex items-center justify-center">
                  {role.icon}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{role.title}</h3>
                <p className="text-gray-600 mb-6">{role.description}</p>
                <ul className="space-y-2">
                  {role.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-start">
                      <svg
                        className="h-5 w-5 text-green-500 mr-2 mt-0.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="text-gray-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// CTA Component
const CTA = () => {
  return (
    <section className="py-20 bg-brand-teal">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Transform Your Ration Distribution System?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Join thousands of users who have already streamlined their operations with RationHub.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="http://localhost/food_management/login.html">
                <Button className="bg-white text-brand-teal hover:bg-gray-100 px-8 py-6 text-lg w-full sm:w-auto">
                  Customer Dashboard
                </Button>
              </a>
              <a href="http://localhost/food_management/login.html">
                <Button className="bg-white text-brand-teal hover:bg-gray-100 px-8 py-6 text-lg w-full sm:w-auto">
                  Dealer Dashboard
                </Button>
              </a>
              <a href="http://localhost/food_management/login.html">
                <Button className="bg-white text-brand-teal hover:bg-gray-100 px-8 py-6 text-lg w-full sm:w-auto">
                  Admin Dashboard
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Footer Component
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <h3 className="text-xl font-bold mb-4">RationHub</h3>
            <p className="text-gray-400 mb-4">
              The complete solution for ration distribution management, connecting customers, dealers, and administrators.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Home</a></li>
              <li><a href="#features" className="text-gray-400 hover:text-white transition-colors">Features</a></li>
              <li><a href="#how-it-works" className="text-gray-400 hover:text-white transition-colors">How It Works</a></li>
              <li><a href="#users" className="text-gray-400 hover:text-white transition-colors">User Roles</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">About Us</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">User Types</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Customer Portal</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Dealer Dashboard</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Admin Console</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Government Oversight</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center text-gray-400">
                <Mail size={16} className="mr-2" />
                <span>support@rationhub.com</span>
              </li>
              <li className="flex items-center text-gray-400">
                <Phone size={16} className="mr-2" />
                <span>+1 (555) 123-4567</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} RationHub. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

// Main Landing Page Component
const LandingPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <UserRoles />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default LandingPage;
