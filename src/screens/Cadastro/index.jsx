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
  Input,
  Title,
  TitleBy,
  TitleEmpresa,
  TitleEntrar,
  TitleForms,
  TitleTrocarSenha,
} from "./styles";

import { useForm, Controller } from "react-hook-form";

import { InputArea } from "../../components/Input";
import { useNavigate } from "react-router-dom";
import api from "../../api";

export function Cadastrar() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({});

  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      const res = await api.post("/register", data);
      navigate('/login');
    } catch (error) {
      console.log("error ao fazer cadastro", error);
    }
  };



  return (
    <div>
      <Container>
          <Frame201>
            <Frame187>
              <Title>Cadastre-se</Title>
            </Frame187>
            <Content>
              <Input>
                <TitleForms>Username</TitleForms>
                <Controller
                  control={control}
                  name="username"
                  rules={{ required: "Informe o email" }}
                  render={({ field: { onChange, value } }) => (
                    <InputArea
                      type="text"
                      placeholder="user"
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
                  <TitleEntrar>Registrar</TitleEntrar>
                </BntEntrar>
                <BntTrocarSenha onClick={()=>navigate('/login')}>
                  <TitleTrocarSenha>Voltar</TitleTrocarSenha>
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
