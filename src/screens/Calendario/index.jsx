import { Header } from "../../components/Header";
import { Container, Content, SubTitle, Table, Title } from "./styles";
import data from "../../data/calendario.json";

export function Calendario() {
  const calendario = data[0].calendario_vacinacao;
  const formatText = (text) => text.replace(/_/g, ' ');

  return (
    <div>
      <Header />
      <Container>
        <Content>
          <Title>Calendario de Vacinação nacional</Title>
          {Object.keys(calendario).map((faixaEtaria) => (
            <div key={faixaEtaria}>
              <SubTitle>{formatText(faixaEtaria)}</SubTitle>
              <Table>
                <thead>
                  <tr>
                    <th>Vacina</th>
                    <th>Dose</th>
                    <th>Indicação</th>
                  </tr>
                </thead>
                <tbody>
                  {Object.keys(calendario[faixaEtaria]).map((vacina) => (
                    <tr key={vacina}>
                      <td>{formatText(vacina)}</td>
                      <td>{calendario[faixaEtaria][vacina].dose}</td>
                      <td>{calendario[faixaEtaria][vacina].indicacao}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>
          ))}
        </Content>
      </Container>
    </div>
  );
}
