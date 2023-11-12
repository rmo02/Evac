import { Button } from "../../components/Button";
import {
  BntEntrar,
  BntTrocarSenha,
  Container,
  ContainerButtons,
  ContainerBy,
  ContainerError,
  Content,
  Frame187,
  Frame201,
  Icon,
  Image,
  Input,
  Title,
  TitleBy,
  TitleEmpresa,
  TitleEntrar,
  TitleError,
  TitleForms,
  TitleTrocarSenha,
} from "./styles";
import medicoLogo from "../../assets/medicoLogo.png";
import { useForm, Controller } from "react-hook-form";
import { useState } from "react";
import { InputArea } from "../../components/Input";

export function Login() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({});

  const [loginError, setloginError] = useState(false);

  const onSubmit = async (data) => {
    console.log(data)
  };


  return (
    <div>
      <Container>
          <Frame201>
            <Frame187>
              <Title>Bem-vindo ao</Title>
              <Title>E-vac</Title>
            </Frame187>
            <Content>
              
            <ContainerError>
                <Icon />
                <TitleError>Email ou senha incorretos</TitleError>
            </ContainerError>
          
              <Input>
                <TitleForms>Email</TitleForms>
                <Controller
                  control={control}
                  name="email"
                  rules={{ required: "Informe o email" }}
                  render={({ field: { onChange, value } }) => (
                    <InputArea
                      type="text"
                      placeholder="email"
                      value={value}
                      onChange={onChange}
                      style={{ width: "17.5rem" }}
                    />
                  )}
                />
              </Input>
              <Input>
                <TitleForms>Senha</TitleForms>
                <Controller
                  control={control}
                  name="password"
                  rules={{ required: "Informe a senha" }}
                  render={({ field: { onChange, value } }) => (
                    <InputArea
                      type="password"
                      placeholder="Senha"
                      value={value}
                      onChange={onChange}
                      style={{ width: "17.5rem" }}
                    />
                  )}
                />
              </Input>
              <ContainerButtons>
                <BntEntrar type="submit" onClick={handleSubmit(onSubmit)}>
                  <TitleEntrar>Entrar</TitleEntrar>
                </BntEntrar>
                <BntTrocarSenha>
                  <TitleTrocarSenha>Esqueci minha senha</TitleTrocarSenha>
                </BntTrocarSenha>
              </ContainerButtons>
            </Content>
            <ContainerBy>
              <TitleBy>By</TitleBy>
              <TitleEmpresa>UNDB</TitleEmpresa>
            </ContainerBy>
          </Frame201>
      </Container>
    </div>
  );
}
