import { Header } from "../../components/Header";
import {
  Box,
  Center,
  Container,
  Title,
} from "./styles";

export function Noticias() {


  return (
    <div>
      <Header />
      <Container>
        <Center>
        <iframe
           style={{
            position: "absolute",
            top: 150,
            left: 0,
            width: "100%",
            height: "600px",
          }}
            src="https://app.powerbi.com/view?r=eyJrIjoiODI5OWZhMTItZjFkYS00MzI3LThhMDktMDMzNGEwMWY2MjhlIiwidCI6IjlhNTU0YWQzLWI1MmItNDg2Mi1hMzZmLTg0ZDg5MWU1YzcwNSJ9&pageName=ReportSectionf0786dac7c0128492636"
            allowFullScreen
          ></iframe>
        </Center>
      </Container>
    </div>
  );
}
