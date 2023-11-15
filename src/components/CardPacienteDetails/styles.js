import { styled } from "styled-components";

export const SuperContainer = styled.div`
  display: flex;
  align-self: stretch;
  align-items: flex-start;
  justify-content: space-between;

`;

export const ContainerCard = styled.div`
  display: flex;
  padding: 1.5rem 2.25rem 2.25rem 2.25rem;
  flex-direction: column;
  align-items: flex-start;
  align-self: stretch;
  width: 60rem;
  gap: 0.625rem;
  border-radius: 8px;
  background-color:  ${(props) => props.theme["white"]};
  box-shadow: 0px 5px 40px -5px rgba(59, 130, 246, 0.30);
`;

export const InfoEquipamento = styled.div`
  flex-direction: column;
  display: flex;
  align-items: flex-start;
  gap: 1.5625rem;
`;

export const TitleElementos = styled.div`
  flex-direction: row;
  display: flex;
`;

export const ContainerInfo = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  .wrapper {
    display: grid;
  }
`;

export const DetalhesEquipamento = styled.div`
  flex-direction: column;
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;
`;

export const Title = styled.h2`
  color: #1D4ED8;
  font-family: "Lato", sans-serif;
  font-size: 1rem;
  font-weight: 700;
  margin-right: 10px;
`;

export const Subtitle = styled.p`
  color: #29292E;
  font-weight: 400;
  font-size: 1rem;
  margin-bottom: 8px;
  font-family: "Lato", sans-serif;
`;

export const CodAtivo = styled.h2`
  color: #020617;
  font-family: "Lato", sans-serif;
  font-size: 1rem;
  font-weight: 700;
  margin-right: 10px;
  text-align: end;
`;

export const TitleEstacao = styled.h2`
  color: #F97316;
  font-family: "Lato", sans-serif;
  font-size: 0.875rem;
  font-weight: 700;
  text-align: right;
`;

export const ContainerImage = styled.div`
  display: flex;
  align-items: center;
  @media (max-width: 890px) {
    margin-top: 65px;
  }
`;

export const Image = styled.img`
  width: 11.5rem;
  height: 7.5rem;
  flex-shrink: 0;
  border-radius: 8px;
`;