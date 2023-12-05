import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
`;

export const Center = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.5rem;
  margin-top: 110px;
`;

export const ContainerBox = styled.div`
  margin-top: 20px;
  height: auto;
  display: flex;
  padding: 1.5rem 1.5rem 3.5rem 2.25rem;
  flex-direction: column;
  align-items: flex-start;
  gap: 2.25rem;
  border-radius: 0.5rem;
  background-color: #fff;
  /* Shadow Blue 0.3 */
  box-shadow: 0px 5px 40px -5px rgba(59, 130, 246, 0.3);
`;

export const ContainerEletrica = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
`;

export const Title = styled.h2`
  color: #1D4ED8;
  font-family: "Lato", sans-serif;
  font-size: 1rem;
  font-weight: 700;
`;

export const ContainerDasEscolhas = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
`;

export const Box = styled.button`
  border-width: 0px;
  width: 14.8125rem;
  padding: 0.5625rem 5.3125rem;
  justify-content: center;
  align-items: flex-start;
  border-radius: 0.5rem;
  background-color: ${(props) => props.theme["box"]};
  cursor: pointer;
`;

export const SubTitle = styled.p`
  color: ${(props) => props.theme["text-color"]};
  font-family: "Lato", sans-serif;
  font-size: 0.875rem;
  font-weight: 700;
`;

export const ContainerRefrigeracao = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
`;

export const ContainerIrradiacao = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
`;

export const ContainerDasEscolhasIrradiacao = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  flex-wrap: wrap;
  .wrapper {
    display: grid;
  }
`;