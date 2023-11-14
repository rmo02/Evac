import { Link } from "react-router-dom";
import { Header } from "../../components/Header";
import { Box, Center, Container, ContainerBox, ContainerDasEscolhas, ContainerEletrica, SubTitle, Title } from "./styles";

export function Cadastro () {
    return (
        <div>
        <Header />
        <Container>
            <Center>
                <Title>Cadastro</Title>
                <ContainerBox>
                    <ContainerEletrica>
                        <Title>Criar</Title>
                        <ContainerDasEscolhas>
                            <a href="/criarUsers/Responsavel">
                                <Box>
                                    <SubTitle>Responsavel</SubTitle>
                                </Box>
                            </a>
                            <a href="/criarUsers/Crianca">
                                <Box>
                                    <SubTitle>Criança</SubTitle>
                                </Box>
                            </a>
                            <a href="/criarUsers/Medico">
                                <Box>
                                    <SubTitle>Médico</SubTitle>
                                </Box>
                            </a>
                            <a href="/criarUsers/Vacina">
                                <Box>
                                    <SubTitle>Vacina</SubTitle>
                                </Box>
                            </a>
                        </ContainerDasEscolhas>
                    </ContainerEletrica>
                </ContainerBox>
            </Center>
        </Container>
    </div>
    );
}