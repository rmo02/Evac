import { useEffect, useState } from "react";
import api from "../../api";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Card, Container, ContainerButton, Image, SubTitle, Title } from "./styles";



export function Home() {
  const [pacientes, setPacientes] = useState();

  const getUsuario = async() => {
    const response = api.get('/usuario')
    setPacientes(response)
    console.log('usuarios', response.data);

  }

  useEffect(() => {
    getUsuario();
  }, [])
  




  return (
    <div>
      <Header />
      <Container>

      </Container>
    </div>
  );
}
