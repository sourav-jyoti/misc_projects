
import { ClipboardList, UserCheck, Truck, CheckCircle } from "lucide-react";

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

export default HowItWorks;
