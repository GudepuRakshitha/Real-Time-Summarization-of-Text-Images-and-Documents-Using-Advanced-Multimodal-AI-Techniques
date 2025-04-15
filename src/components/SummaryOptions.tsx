
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import type { SummaryOptions as SummaryOptionsType } from "./SummarizationPanel";

interface SummaryOptionsProps {
  options: SummaryOptionsType;
  onChange: (options: SummaryOptionsType) => void;
}

const SummaryOptions = ({ options, onChange }: SummaryOptionsProps) => {
  return (
    <div className="mt-6 border-t border-gray-200 pt-6">
      <h3 className="text-lg font-medium text-gray-900 mb-4">Summarization Options</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Summary Length */}
        <div className="space-y-2">
          <Label className="text-sm font-medium text-gray-700">Summary Length</Label>
          <RadioGroup
            value={options.length}
            onValueChange={(value) => 
              onChange({ ...options, length: value as "short" | "medium" | "detailed" })
            }
            className="flex flex-col space-y-1"
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="short" id="short" />
              <Label htmlFor="short" className="cursor-pointer">Short</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="medium" id="medium" />
              <Label htmlFor="medium" className="cursor-pointer">Medium</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="detailed" id="detailed" />
              <Label htmlFor="detailed" className="cursor-pointer">Detailed</Label>
            </div>
          </RadioGroup>
        </div>
        
        {/* Summarization Technique */}
        <div className="space-y-2">
          <Label className="text-sm font-medium text-gray-700">Technique</Label>
          <RadioGroup
            value={options.technique}
            onValueChange={(value) => 
              onChange({ ...options, technique: value as "extractive" | "abstractive" })
            }
            className="flex flex-col space-y-1"
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="extractive" id="extractive" />
              <Label htmlFor="extractive" className="cursor-pointer">Extractive</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="abstractive" id="abstractive" />
              <Label htmlFor="abstractive" className="cursor-pointer">Abstractive</Label>
            </div>
          </RadioGroup>
        </div>
        
        {/* Language */}
        <div className="space-y-2">
          <Label htmlFor="language" className="text-sm font-medium text-gray-700">Language</Label>
          <Select
            value={options.language}
            onValueChange={(value) => onChange({ ...options, language: value })}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select Language" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="english">English</SelectItem>
              <SelectItem value="spanish">Spanish</SelectItem>
              <SelectItem value="french">French</SelectItem>
              <SelectItem value="german">German</SelectItem>
              <SelectItem value="chinese">Chinese</SelectItem>
              <SelectItem value="japanese">Japanese</SelectItem>
              <SelectItem value="russian">Russian</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  );
};

export default SummaryOptions;
