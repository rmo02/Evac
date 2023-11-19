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

export function CardPacienteDetails({ data }) {
  const age = useMemo(
    () => calculateAge(data?.dataNascimento),
    [data?.dataNascimento]
  );

  const formattedDate = useMemo(() => {
    if (data?.dataNascimento) {
      const date = new Date(`${data.dataNascimento}T00:00:00`);
      return date.toLocaleDateString("pt-BR", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
      });
    }
    return "";
  }, [data?.dataNascimento]);

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
              <Title>Contato</Title>
              <Subtitle>{data?.numTelefone}</Subtitle>
            </DetalhesEquipamento>
            <DetalhesEquipamento>
              <Title>Nascimento</Title>
              <Subtitle>{formattedDate}</Subtitle>
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
