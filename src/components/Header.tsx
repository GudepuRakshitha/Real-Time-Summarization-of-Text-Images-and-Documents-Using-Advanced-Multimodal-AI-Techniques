
import { Button } from "@/components/ui/button";
import { FileText, Image, Github } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-white border-b border-maroon-100 shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <FileText className="h-6 w-6 text-purple-600" />
            <span className="font-bold text-xl text-purple-700">GUDEPU RAKSHITHA REDDY</span>
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#" className="text-maroon-700 hover:text-maroon-900 transition-colors">Home</a>
            <a href="#about" className="text-maroon-700 hover:text-maroon-900 transition-colors">About</a>
            <a href="#" className="text-maroon-700 hover:text-maroon-900 transition-colors">Try It Free</a>
          </nav>
          <div className="flex items-center space-x-2">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="sm" className="flex items-center gap-1">
                <Github className="h-4 w-4" />
                <span className="hidden sm:inline">GitHub</span>
              </Button>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
