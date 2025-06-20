
import { Button } from "@/components/ui/button";

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

export default Hero;
