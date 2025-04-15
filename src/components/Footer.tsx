
import { Github } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-maroon-100 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <span className="text-maroon-800 font-semibold">LLM Summarizer</span>
            <p className="text-sm text-gray-600 mt-1">
              Simplify text content using advanced AI models
            </p>
          </div>
          
          <div id="features" className="mb-4 md:mb-0">
            <h3 className="font-medium text-maroon-800 mb-2">Features</h3>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Text & Document Summarization</li>
              <li>• Multiple LLM Models Support</li>
              <li>• Customizable Summary Options</li>
              <li>• Multi-language Support</li>
            </ul>
          </div>
          
          <div id="about">
            <h3 className="font-medium text-maroon-800 mb-2">About</h3>
            <p className="text-sm text-gray-600 max-w-xs">
              This project was created to demonstrate the capabilities of Large Language Models
              in text summarization tasks.
            </p>
            <div className="mt-3 flex items-center">
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-maroon-600 hover:text-maroon-800 flex items-center text-sm"
              >
                <Github className="h-4 w-4 mr-1" />
                View on GitHub
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-6 border-t border-gray-200 text-center text-sm text-gray-600">
          <p>© {new Date().getFullYear()} LLM Summarizer. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
