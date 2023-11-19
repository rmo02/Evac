import { Input } from "./styles";

export function InputArea({ disabled = false, type, placeholder, value, onChange, style, pattern }) {
  const handleChange = (event) => {
    if (onChange) {
      onChange(event);
    }
  };

  return (
    <Input
      disabled={disabled}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={handleChange}
      style={style}
      pattern={pattern}
    />
  );
}