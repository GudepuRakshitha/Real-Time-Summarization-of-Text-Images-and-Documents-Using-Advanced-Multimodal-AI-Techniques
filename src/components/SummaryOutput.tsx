
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Copy, Download, WandSparkles } from "lucide-react";
import { toast } from "sonner";

interface SummaryOutputProps {
  result: string;
  isLoading: boolean;
  onSummarize: () => void;
}

const SummaryOutput = ({ result, isLoading, onSummarize }: SummaryOutputProps) => {
  const handleCopy = () => {
    navigator.clipboard.writeText(result);
    toast.success("Summary copied to clipboard");
  };

  const handleDownload = () => {
    const blob = new Blob([result], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "summary.txt";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    toast.success("Summary downloaded successfully");
  };

  return (
    <div className="mt-6 space-y-4">
      <div className="flex justify-center">
        <Button 
          onClick={onSummarize} 
          disabled={isLoading}
          className="bg-maroon-600 hover:bg-maroon-700 text-white"
        >
          {isLoading ? (
            <>
              <span className="animate-spin mr-2">⏳</span>
              Generating Summary...
            </>
          ) : (
            <>
              <WandSparkles className="mr-2 h-4 w-4" />
              Generate Summary
            </>
          )}
        </Button>
      </div>
      
      {result && (
        <div className="mt-6 border-t border-gray-200 pt-6">
          <div className="flex justify-between items-center mb-2">
            <h3 className="text-lg font-medium text-gray-900">Summary Result</h3>
            <div className="flex space-x-2">
              <Button variant="outline" size="sm" onClick={handleCopy}>
                <Copy className="h-4 w-4 mr-1" />
                Copy
              </Button>
              <Button variant="outline" size="sm" onClick={handleDownload}>
                <Download className="h-4 w-4 mr-1" />
                Download
              </Button>
            </div>
          </div>
          <Textarea
            value={result}
            readOnly
            className="min-h-[150px] bg-gray-50"
          />
        </div>
      )}
    </div>
  );
};

export default SummaryOutput;
