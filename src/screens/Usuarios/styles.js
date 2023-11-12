import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  padding-top: 7rem;
  flex-direction: column;
  align-items: center;
`;

export const Center = styled.div`
  display: flex;
  width: 93rem;
  min-width: 58.5625rem;
  max-width: 93rem;
  justify-content: center;
  align-items: flex-start;
  gap: 1.5rem;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.5rem;
  flex: 1 0 0;
`;

export const FilterPai = styled.div`
  display: flex;
  max-width: 14.25rem;
  flex-direction: column;
  align-items: flex-end;
  gap: 1.5rem;
  flex: 1 0 0;
`;

export const Title = styled.h2`
  font-family: "Lato", sans-serif;
  font-size: 1rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  color: ${(props) => props.theme["text-color"]};
`;

export const Content2 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  align-self: stretch;
`;

export const Eletrica = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.75rem;
  align-self: stretch;
`;

export const Ativos = styled.div`
  display: flex;
  max-width: 69.25rem;
  align-items: flex-start;
  align-content: flex-start;
  gap: 0.75rem;
  align-self: stretch;
  flex-wrap: wrap;
`;

export const Pesquisa = styled.div`
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme["white"]};
  width: 200px;
  border-radius: 10rem;
`;