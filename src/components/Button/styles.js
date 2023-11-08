import styled from "styled-components";

export const Botao = styled.button`
  background-color: ${({ theme }) => theme.ativo};
  color: white;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
  border-radius: 0.5rem;
`;