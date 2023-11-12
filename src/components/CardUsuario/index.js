import { Container, Frame139, Frame140, Frame61, NomeEstacao, Image } from "./styles";
import quadrado from '../../assets/quadrado.png';

export function CardUsuario({ title, onClick }) {
    return (
        <Container onClick={onClick}>
        <Frame140>
          <Frame139>
            <Image src={quadrado} alt="quadrado" />
            <Frame61>
              <NomeEstacao>{title}</NomeEstacao>
            </Frame61>
          </Frame139>
        </Frame140>
      </Container>
    );
}