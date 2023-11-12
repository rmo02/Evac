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
                                <Box>
                                    <SubTitle>Responsavel</SubTitle>
                                </Box>
                                <Box>
                                    <SubTitle>Criança</SubTitle>
                                </Box>
                                <Box>
                                    <SubTitle>Médico</SubTitle>
                                </Box>
                            </ContainerDasEscolhas>
                        </ContainerEletrica>
                    </ContainerBox>
                </Center>
            </Container>
        </div>
    );
}