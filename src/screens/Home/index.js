import { Button } from "../../components/Button";
import { Container } from "./styles";

export function Home() {
  return (
    <div>
      <Container>
        <h1>Welcome to My App</h1>
        <Button title='Entrar'/>
      </Container>
    </div>
  );
}
