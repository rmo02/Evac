import { useContext, useEffect, useState } from "react";
import { CardUsuario } from "../../components/CardUsuario";
import { Header } from "../../components/Header";
import { SearchBar } from "../../components/SearchBar";
import {
  Ativos,
  Center,
  Container,
  Content,
  Content2,
  Eletrica,
  FilterPai,
  Title,
} from "./styles";
import api from "../../api";
import { AuthContext } from "../../context/AuthContext";

export function Usuarios() {
  const [pesquisar, setPesquisar] = useState("");
  const [pacientes, setPacientes] = useState([]);
  const { token } = useContext(AuthContext);

  useEffect(() => {
    getPacientes();
  }, []);

  async function getPacientes() {
    try {
      const res = await api.get("/usuario", {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      setPacientes(res.data);
    } catch (error) {
      console.log('Erro ao careggar todos os usuários');
    }
  }

  // Função para filtrar as estações com base no nome
  function filtrarPacientes() {
    if (pesquisar === "") {
      // Se o campo de pesquisa estiver vazio, retorna todas as estações
      return pacientes;
    } else {
      // Filtra as estações com base no nome
      return pacientes.filter((paciente) =>
        paciente.nome.toLowerCase().includes(pesquisar.toLowerCase())
      );
    }
  }

  return (
    <div>
      <Header />
      <Container>
        <Center>
          <Content>
            <Title>{filtrarPacientes().length} Crianças</Title>
            <Content2>
              <Eletrica>
                <Ativos>
                  {filtrarPacientes().map((user, index) => {
                      return (
                        <a key={index} href={`/userDetail/${user.id}`}>
                        <CardUsuario title={user.nome} />
                      </a>
                      );
                  })}
                </Ativos>
              </Eletrica>
            </Content2>
          </Content>
          <FilterPai>
            <SearchBar
              placeholder="Pesquisar"
              type="text"
              value={pesquisar}
              onChange={(text) => setPesquisar(text.target.value)}
            />
          </FilterPai>
        </Center>
      </Container>
    </div>
  );
}
