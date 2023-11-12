import { styled } from "styled-components";

export const ContainerBusca = styled.div`
  display: flex;
  padding: 0.4375rem 0.75rem;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.625rem;

  border-radius: 20px;
  background-color:  ${(props) => props.theme["white"]};
  box-shadow: 0px 5px 40px -5px rgba(59, 130, 246, 0.30);
`;
export const ContainerInput = styled.div`
  display: flex;
  align-items: center;
  gap: 0.375rem;
`;

export const Input = styled.input`
    height: 1.125rem;
    width: 11.375rem;
    border-width: 0px;
    padding-left: 10px;
    border-radius: 4px;
    outline: none;
    &::placeholder {
      font-size: 0.875rem;
      font-size: 'Lato',sans-serif;
      color: ${(props) => props.theme["main-blue"]};
    }
`;