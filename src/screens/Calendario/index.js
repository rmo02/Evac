import { Header } from "../../components/Header";
import { Container, Content, SubTitle, Title } from "./styles";
import data from '../../data/calendario.json'  

export function Calendario () {
    
    const [calendario , setCalendario] = (data)
    console.log(calendario.calendario_vacinacao.ao_nascer.BCG)

    return (
        <div>
            <Header />
            <Container>
                <Content>
                <Title>Calendario de Vacinação nacional</Title>
                
                </Content>
            </Container>
        </div>
    );
}