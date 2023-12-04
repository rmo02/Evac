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
  Input,
  Title,
  TitleBy,
  TitleEmpresa,
  TitleEntrar,
  TitleError,
  TitleForms,
  TitleTrocarSenha,
} from "./styles";
import { useForm, Controller } from "react-hook-form";
import { useContext, useState } from "react";
import { InputArea } from "../../components/Input";
import { AuthContext } from "../../context/AuthContext";
import api from "../../api";
import { useNavigate } from "react-router-dom";

export function Login() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({});

  const [loginError, setloginError] = useState(false);
  const { setToken } = useContext(AuthContext);
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      const res = await api.post("/login", data);
      const token = res.data["token"];
      sessionStorage.setItem("token", token);
      setToken(token);
      navigate('/home');
    } catch (error) {
      setloginError(true);
      console.log("error ao fazer login", error);
    } finally {
      setTimeout(() => {
        setloginError(false);
      }, 3000);
    }
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
            {loginError && (
              <ContainerError>
                <Icon />
                <TitleError>Username ou senha incorretos</TitleError>
              </ContainerError>
            )}
            <Input>
              <TitleForms>Email</TitleForms>
              <Controller
                control={control}
                name="username"
                rules={{ required: "Informe o user" }}
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
              <BntTrocarSenha
                onClick={() => navigate("/register")}
              >
                <TitleTrocarSenha>Cadastrar</TitleTrocarSenha>
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
