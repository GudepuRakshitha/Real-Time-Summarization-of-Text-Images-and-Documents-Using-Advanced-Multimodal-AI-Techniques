
import { useState } from "react";
import { Button } from "@/components/ui/button";
import SummarizationPanel from "@/components/SummarizationPanel";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-maroon-50">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <section className="mb-8 text-center">
          <h1 className="text-4xl font-bold mb-4 text-purple-800">Text & Images Summarization</h1>
          <p className="text-xl text-purple-700 max-w-2xl mx-auto">
            Simplify complex content with our advanced summarization tool powered by Large Language Models.
          </p>
          <div className="mt-4 bg-blue-100 text-blue-800 rounded-full px-4 py-1 inline-block">
            AI-Powered Summarizer
          </div>
          <h2 className="text-3xl font-bold mt-8 text-purple-900">Transform Content Effortlessly</h2>
          <p className="text-gray-600 mt-2 max-w-3xl mx-auto">
            Summarize text or images, customize your preferences, and get concise results in seconds.
          </p>
          
          {/* Add image feature display */}
          <div className="mt-8 max-w-3xl mx-auto bg-white p-4 rounded-lg shadow-md">
            <AspectRatio ratio={16/9} className="bg-muted overflow-hidden rounded">
              <img 
                src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=2070" 
                alt="AI content summarization illustration" 
                className="object-cover w-full h-full transition-all hover:scale-105" 
              />
            </AspectRatio>
            <p className="text-sm text-gray-500 mt-2 italic text-center">
              Our AI technology can process both text and images for comprehensive summarization
            </p>
          </div>
        </section>
        
        <SummarizationPanel />
        
        <section className="mt-8 text-center">
          <p className="text-purple-800 font-medium">Built by GUDEPU RAKSHITHA REDDY</p>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
