import {
  CodAtivo,
  ContainerCard,
  SuperContainer,
  ContainerInfo,
  DetalhesEquipamento,
  Image,
  InfoEquipamento,
  Subtitle,
  Title,
  TitleElementos,
  TitleEstacao,
} from "./styles";
import quadrado from "../../assets/quadrado.png";
import { useMemo } from "react";

function calculateAge(birthdate) {
  const today = new Date();
  const birthDate = new Date(birthdate);
  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDiff = today.getMonth() - birthDate.getMonth();

  if (
    monthDiff < 0 ||
    (monthDiff === 0 && today.getDate() < birthDate.getDate())
  ) {
    age--;
  }

  return age;
}

function formatDataVacinacao(dataNascimento) {
  const date = new Date(dataNascimento);
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are zero-based
  const year = date.getFullYear();

  return `${day}-${month}-${year}`;
}

export function CardPacienteDetails({ data }) {
  const age = useMemo(
    () => calculateAge(data?.dataNascimento),
    [data?.dataNascimento]
  );

  return (
    <>
      <ContainerCard>
        <SuperContainer>
          <InfoEquipamento>
            <TitleElementos>
              <Title>{data?.nome}</Title>
            </TitleElementos>
          </InfoEquipamento>
          <ContainerInfo>
            <DetalhesEquipamento>
              <Title>Idade</Title>
              <Subtitle>{age} anos</Subtitle>
            </DetalhesEquipamento>
            <DetalhesEquipamento>
              <Title>Email</Title>
              <Subtitle>{data?.email}</Subtitle>
            </DetalhesEquipamento>
            <DetalhesEquipamento>
              <Title>Nascimento</Title>
              <Subtitle>{formatDataVacinacao(data?.dataNascimento)}</Subtitle>
            </DetalhesEquipamento>
            <DetalhesEquipamento>
              <Title>CPF</Title>
              <Subtitle>{data?.cpf}</Subtitle>
            </DetalhesEquipamento>
            <DetalhesEquipamento>
              <Title>Responsavel</Title>
              <Subtitle>{data?.responsavel?.nome}</Subtitle>
            </DetalhesEquipamento>
          </ContainerInfo>
          <Image src={quadrado} alt="quadrado" />
        </SuperContainer>
      </ContainerCard>
    </>
  );
}
