
import { User, Users, UserCog } from "lucide-react";

const UserRoles = () => {
  const roles = [
    {
      title: "Customers",
      description: "Access your ration entitlements, track deliveries, and manage your profile with an intuitive interface.",
      icon: <User className="h-12 w-12 text-white" />,
      bgColor: "bg-brand-teal",
      benefits: [
        "View available ration items",
        "Track delivery status",
        "Digital ration card management",
        "Notification alerts for distribution"
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
        "Distribution planning",
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
        "Dealer performance analytics",
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

export default UserRoles;
