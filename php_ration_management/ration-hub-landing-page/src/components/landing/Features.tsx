
import { CheckCircle2, ShieldCheck, Zap, BarChart3 } from "lucide-react";

const Features = () => {
  const features = [
    {
      title: "Real-time Tracking",
      description: "Monitor inventory levels and distribution status in real-time across all locations.",
      icon: <Zap className="h-10 w-10 text-brand-teal" />,
    },
    {
      title: "Secure Transactions",
      description: "End-to-end encryption ensures all transactions and personal data remain secure.",
      icon: <ShieldCheck className="h-10 w-10 text-brand-teal" />,
    },
    {
      title: "Smart Analytics",
      description: "Gain insights from comprehensive reports and analytics to optimize distribution.",
      icon: <BarChart3 className="h-10 w-10 text-brand-teal" />,
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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

export default Features;
