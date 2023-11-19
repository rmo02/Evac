import { ContainerBusca, ContainerInput, Input } from "./styles";
import { FiSearch } from 'react-icons/fi';

export function SearchBar({ type, placeholder, value, onChange }) {
  const handleChange = (event) => {
    if (onChange) {
      onChange(event);
    }
  };

  return (
    <ContainerBusca>
      <ContainerInput>
        <FiSearch size={16} color="#1D4ED8" />
        <Input
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={handleChange}
        />
      </ContainerInput>
    </ContainerBusca>
  );
}