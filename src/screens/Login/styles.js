import { styled } from "styled-components";
import { BiSolidErrorCircle } from "react-icons/bi";


export const Container = styled.div`
  background-color: ${({ theme }) => theme.gradientblue200};
  display: flex;
  justify-content: center; 
  align-items: center; 
  width: 100%;
  height: 100vh;
`;


export const Frame201 = styled.div`
  z-index: 999999;
  display: inline-flex;
  padding: 2.25rem 1.5rem 1.5rem 2.25rem;
  flex-direction: column;
  align-items: center;
  gap: 2.25rem;
  border-radius: 0.5rem;
  background-color: #fff;
  box-shadow: 0px 5px 40px -5px rgba(255, 255, 255, 0.5);
`;

export const Frame187 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ContainerError = styled.div`
  display: flex; 
  align-items: center; 
  width: 17.5rem;
  height: 1rem;
  gap:1rem;
  border-radius: 0.2rem;
  border-width: thin;
`;

export const TitleError = styled.p`
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  color: ${(theme) => theme.red500};
  font-family: "Lato", sans-serif;
`;

export const Title = styled.h2`
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-align: right;
  color: ${(theme) => theme.black};
  font-family: "Lato", sans-serif;
`;

export const Icon = styled(BiSolidErrorCircle)`
  margin-left:1rem;
  color: red;
`;

export const Image = styled.img`
width: 100px;
height: 200px;
`;

export const Content = styled.div`
  display: flex;
  min-width: 17.5625rem;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.75rem;
`;

export const Input = styled.div`
  display: flex;
  min-width: 8.75rem;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.5rem;
  align-self: stretch;
`;

export const TitleForms = styled.p`
  font-size: 1rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-align: right;
  color: ${(theme) => theme.textcolor};
  font-family: "Lato", sans-serif;
`;

export const ContainerButtons = styled.div`
  margin-top: 2rem;
  display: flex;
  padding: 1.5rem 0rem;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.5rem;
  align-self: stretch;
`;

export const BntEntrar = styled.button`
  cursor: pointer;
  display: flex;
  height: 3rem;
  padding: 0.7rem 1rem;
  justify-content: center;
  align-items: center;
  align-self: stretch;
  border-radius: 0.5rem;
  border-width: 0px;
  background: linear-gradient(45deg, #003c78 0%, #36c 100%);
`;

export const TitleEntrar = styled.p`
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-align: right;
  color: #fff;
  font-family: "Inter", sans-serif;
`;

export const BntTrocarSenha = styled.button`
  cursor: pointer;
  display: flex;
  height: 3rem;
  padding: 0.625rem 1.5rem;
  justify-content: center;
  align-items: center;
  align-self: stretch;
  border-radius: 0.5rem;
  border-width: 0px;
  border: 1px solid var(--slate-400, #94a3b8);
`;

export const TitleTrocarSenha = styled.p`
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-align: right;
  color: ${(theme) => theme.slate500};
  font-family: "Inter", sans-serif;
`;

export const ContainerBy = styled.div`
  display: flex;
  flex-direction: row;
`;

export const TitleBy = styled.p`
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  color: ${(theme) => theme.black};
  font-family: "Lato", sans-serif;
`;

export const TitleEmpresa = styled.p`
  margin-left: 3px;
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  color: ${(theme) => theme.textcolor};
  font-family: "Lato", sans-serif;
`;