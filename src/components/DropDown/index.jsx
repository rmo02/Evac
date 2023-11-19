import { Select } from "./styles";

export function Dropdown({ options, value, onChange, style }) {
  return (
    <label>
      <Select
        name="Status"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        style={style}
      >
        <option value="">--</option>
        {options?.map((option) => (
          <option key={option.value} value={option.value} style={{ fontFamily: "Lato, sans-serif" }}>
            {option.title}
          </option>
        ))}
      </Select>
    </label>
  );
}