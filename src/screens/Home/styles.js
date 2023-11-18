import styled from "styled-components";

export const Container = styled.div`
background-color: ${({ theme }) => theme['white']};
display: flex;
justify-content: flex-start;
align-items: flex-start;
padding-left: 5rem;
width: 100vw;
flex-direction: column;
`;

export const Center = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin-left: 10rem;
  gap: 1.5rem;
`;

export const ContainerBox = styled.div`
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

export const ContainerDasEscolhas = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
`;

export const Box = styled.button`
  border-width: 0px;
  display: flex;
  width: 3.8125rem;
  padding: 0.5625rem 5.3125rem;
  justify-content: center;
  align-items: center;
  border-radius: 0.5rem;
  background-color: #E0EBFF;
`;

export const Card = styled.div`
display: inline-flex;
padding: 2.25rem 2.25rem 1.5rem 2.25rem;
flex-direction: column;
align-items: center;
border-radius: 0.5rem;
background: var(--Slate-200, #E2E8F0);
box-shadow: 0px 5px 40px -5px rgba(255, 255, 255, 0.50);
width: 20rem;
height: 25rem;
`;

export const Image = styled.img`
width: 13rem;
`;

export const Title = styled.h2`
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-align: right;
  color:  ${({ theme }) => theme.black};
  font-family: "Lato", sans-serif;
`;

export const SubTitle = styled.h3`
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-align: right;
  color:  ${({ theme }) => theme.gradientblue100};
  font-family: "Lato", sans-serif;
`;

export const ContainerButton = styled.div`
margin-top: 2rem;
`;

