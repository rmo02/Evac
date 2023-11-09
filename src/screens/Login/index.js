import { Button } from "../../components/Button";
import { Card, Container, ContainerButton, Image, SubTitle, Title } from "./styles";
import medicoLogo from '../../assets/medicoLogo.png';


export function Login() {
  return (
    <div>
      <Container>
        <Card>
          <Image 
          src={medicoLogo}
          />
          <Title>Bem-Vindo ao</Title>
          <SubTitle>E- Vac</SubTitle>

          <ContainerButton>
            <Button title='Entrar' onClick={() => console.log('clicou')}/>
          </ContainerButton>
        </Card>
      </Container>
    </div>
  );
}
