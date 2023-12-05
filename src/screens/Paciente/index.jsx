import { Link } from "react-router-dom";
import { Header } from "../../components/Header";
import { Box, Center, Container, ContainerBox, ContainerDasEscolhas, ContainerEletrica, SubTitle, Title } from "./styles";
import {  User, Baby, Syringe, FirstAid } from "phosphor-react";

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
                                    <User size={28} />
                                    <SubTitle>Responsavel</SubTitle>
                                </Box>
                            </a>
                            <a href="/criarUsers/Crianca">
                                <Box>
                                    <Baby size={28} />
                                    <SubTitle>Criança</SubTitle>
                                </Box>
                            </a>
                            <a href="/criarUsers/Medico">
                                <Box>
                                <FirstAid size={32} />
                                    <SubTitle>Médico</SubTitle>
                                </Box>
                            </a>
                            <a href="/criarUsers/Vacina">
                                <Box>
                                <Syringe size={28} />
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