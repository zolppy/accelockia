interface IInput {
  id: string;
  type: "text" | "email" | "password" | "tel";
  maxLength?: number;
  minLength?: number;
  required: boolean;
  placeholder?: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
}

export default function Input({
  id,
  type,
  maxLength,
  minLength,
  required,
  placeholder,
  handleChange,
  value,
}: IInput): JSX.Element {
  return (
    <input
      className="border-2 border-gray-300 px-2 py-[10px] rounded-md outline-none focus:border-violet-500"
      id={id}
      type={type}
      maxLength={maxLength}
      minLength={minLength}
      required={required}
      placeholder={placeholder}
      onChange={(event) => handleChange(event)}
      value={value}
    />
  );
}
