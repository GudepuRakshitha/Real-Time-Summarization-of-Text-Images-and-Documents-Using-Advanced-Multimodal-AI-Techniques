
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { FileUp, File, AlertCircle } from "lucide-react";
import { toast } from "sonner";

interface FileUploadProps {
  onTextExtracted: (text: string) => void;
}

const FileUpload = ({ onTextExtracted }: FileUploadProps) => {
  const [file, setFile] = useState<File | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const selectedFile = e.target.files[0];
      
      // Check file type - allow text files, PDFs, DOCs, etc.
      const validTypes = ['text/plain', 'application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
      
      if (!validTypes.includes(selectedFile.type)) {
        toast.error("Please upload a text, PDF, or Word document");
        return;
      }
      
      // Check file size (limit to 5MB for this demo)
      if (selectedFile.size > 5 * 1024 * 1024) {
        toast.error("File size should be less than 5MB");
        return;
      }
      
      setFile(selectedFile);
      
      // For this demo we'll just read text files
      // In a real app, you'd need to use libraries to extract text from PDFs/DOCs
      if (selectedFile.type === 'text/plain') {
        const reader = new FileReader();
        reader.onload = (event) => {
          if (event.target && typeof event.target.result === 'string') {
            onTextExtracted(event.target.result);
          }
        };
        reader.readAsText(selectedFile);
      } else {
        // Mock extraction for non-text files
        setIsLoading(true);
        setTimeout(() => {
          setIsLoading(false);
          // Simulate extracted text
          onTextExtracted(`This is extracted text from ${selectedFile.name}. In a real application, we would use a document processing library to extract text from this ${selectedFile.type} file. For this demo, we're simulating the extraction process.`);
          toast.success("File content extracted successfully");
        }, 1500);
      }
    }
  };

  return (
    <div className="space-y-4">
      <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
        <input
          type="file"
          id="file-upload"
          className="hidden"
          onChange={handleFileChange}
          accept=".txt,.pdf,.doc,.docx"
          disabled={isLoading}
        />
        <label
          htmlFor="file-upload"
          className="cursor-pointer flex flex-col items-center justify-center"
        >
          {isLoading ? (
            <div className="animate-pulse flex flex-col items-center">
              <div className="h-10 w-10 rounded-full bg-maroon-200 mb-3"></div>
              <div className="h-4 w-32 bg-maroon-200 rounded mb-2"></div>
              <div className="h-3 w-24 bg-maroon-100 rounded"></div>
            </div>
          ) : file ? (
            <div className="flex flex-col items-center">
              <File className="h-10 w-10 text-maroon-500 mb-2" />
              <span className="text-sm font-medium text-gray-700">{file.name}</span>
              <span className="text-xs text-gray-500">{(file.size / 1024).toFixed(1)} KB</span>
            </div>
          ) : (
            <>
              <FileUp className="h-10 w-10 text-maroon-500 mb-2" />
              <p className="text-sm font-medium text-gray-700">
                Click to upload or drag and drop
              </p>
              <p className="text-xs text-gray-500 mt-1">
                Supports TXT, PDF, DOC, DOCX (max 5MB)
              </p>
            </>
          )}
        </label>
      </div>
      
      {file && !isLoading && (
        <div className="flex justify-center">
          <Button
            variant="outline"
            size="sm"
            onClick={() => {
              setFile(null);
              onTextExtracted("");
            }}
          >
            Remove file
          </Button>
        </div>
      )}
      
      <div className="text-xs flex items-center text-gray-500 justify-center">
        <AlertCircle className="h-3 w-3 mr-1" />
        <span>Note: Text extraction works best with plain text files in this demo</span>
      </div>
    </div>
  );
};

export default FileUpload;
