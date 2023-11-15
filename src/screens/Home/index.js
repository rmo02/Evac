import { useEffect, useState } from "react";
import api from "../../api";
import { Header } from "../../components/Header";
import {
  Box,
  Center,
  Container,
  ContainerBox,
  ContainerDasEscolhas,
  ContainerEletrica,
  SubTitle,
  Title,
} from "./styles";

export function Home() {
  const [pacientes, setPacientes] = useState();
  const [vacinas, setVacinas] = useState();
  const [medico, setMedico] = useState();

  const getUsuario = async () => {
    try {
      const res = await api.get("/usuario");
      setPacientes(res.data);
      console.log("usuarios", res.data);
    } catch (error) {
      console.log("Erro ao retornar usuários");
    }
  };

  const getVacina = async () => {
    try {
      const res = await api.get("/vacina");
      setVacinas(res.data);
      console.log("vacinas", res.data);
    } catch (error) {
      console.log("Erro ao retornar usuários");
    }
  };

  const getMedico = async () => {
    try {
      const res = await api.get("/medico");
      setMedico(res.data);
      console.log("medicos", res.data);
    } catch (error) {
      console.log("Erro ao retornar usuários");
    }
  };

  useEffect(() => {
    getUsuario();
    getVacina();
    getMedico();
  }, []);

  return (
    <div>
      <Header />
      <Container>
        <Center>
          <Title>Resumo</Title>
          <ContainerBox>
            <ContainerEletrica>
              <ContainerDasEscolhas>
                <Box>
                  <SubTitle>{pacientes?.length} Crianças</SubTitle>
                </Box>
                <Box>
                  <SubTitle>{vacinas?.length} Vacinas</SubTitle>
                </Box>
                <Box>
                  <SubTitle>{medico?.length} Vacinas</SubTitle>
                </Box>
              </ContainerDasEscolhas>
            </ContainerEletrica>
          </ContainerBox>
        </Center>
      </Container>
    </div>
  );
}
