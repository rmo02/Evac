import { useContext, useEffect, useState } from "react";
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
import { AuthContext } from "../../context/AuthContext";

export function Home() {
  const [pacientes, setPacientes] = useState();
  const [vacinas, setVacinas] = useState();
  const [medico, setMedico] = useState();
  const { token } = useContext(AuthContext);

  const getUsuario = async () => {
    try {
      const res = await api.get("/usuario", {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      setPacientes(res.data);
    } catch (error) {
      console.log("Erro ao retornar usuários");
    }
  };

  const getVacina = async () => {
    try {
      const res = await api.get("/vacina", {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      setVacinas(res.data);
    } catch (error) {
      console.log("Erro ao retornar usuários");
    }
  };

  const getMedico = async () => {
    try {
      const res = await api.get("/medico", {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      setMedico(res.data);
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
                  <SubTitle>{medico?.length} Medicos</SubTitle>
                </Box>
              </ContainerDasEscolhas>
            </ContainerEletrica>
          </ContainerBox>
        </Center>
      </Container>
    </div>
  );
}
