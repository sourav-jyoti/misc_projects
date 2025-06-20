
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

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
              <Link to="/customer">
                <Button className="bg-white text-brand-teal hover:bg-gray-100 px-8 py-6 text-lg w-full sm:w-auto">
                  Customer Dashboard
                </Button>
              </Link>
              <Link to="/dealer">
                <Button className="bg-white text-brand-teal hover:bg-gray-100 px-8 py-6 text-lg w-full sm:w-auto">
                  Dealer Dashboard
                </Button>
              </Link>
              <Link to="/admin">
                <Button className="bg-white text-brand-teal hover:bg-gray-100 px-8 py-6 text-lg w-full sm:w-auto">
                  Admin Dashboard
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
