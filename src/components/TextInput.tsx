
import { Textarea } from "@/components/ui/textarea";

interface TextInputProps {
  value: string;
  onChange: (value: string) => void;
}

const TextInput = ({ value, onChange }: TextInputProps) => {
  return (
    <div className="space-y-2">
      <label htmlFor="input-text" className="block text-sm font-medium text-gray-700">
        Enter your text to summarize
      </label>
      <Textarea
        id="input-text"
        placeholder="Paste or type your text here (articles, papers, documents, etc.)..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="min-h-[200px]"
      />
    </div>
  );
};

export default TextInput;
