
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-sm border-b py-4">
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
          <Button variant="outline" className="border-brand-teal text-brand-teal hover:bg-brand-teal hover:text-white">
            Login
          </Button>
          <Button className="bg-brand-teal hover:bg-brand-green text-white">
            Register
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
