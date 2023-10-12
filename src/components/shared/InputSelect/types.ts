export type InputSelectProps = {
  displayText: string;
  name: string;
  id: string;
  value: string;
  selectedOption: string;
  handleOptionChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};
