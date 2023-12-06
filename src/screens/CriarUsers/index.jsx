import { Header } from "../../components/Header";
import {
  Buttons,
  Card,
  Center,
  Container,
  Content,
  Forms,
  Image,
  Title,
} from "./styles";
import quadrado from "../../assets/quadrado.png";
import { Button } from "../../components/Button";
import { useParams } from "react-router-dom";
import { FormsMedico } from "../../components/FormsCadastros/FormsMedico";
import { useForm } from "react-hook-form";
import { FormsPaciente } from "../../components/FormsCadastros/FormsPaciente";
import { FormsResponsavel } from "../../components/FormsCadastros/FormsResponsavel";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import api from "../../api";
import { FormsVacina } from "../../components/FormsCadastros/FormsVacina";
import { AuthContext } from "../../context/AuthContext";
import { useContext } from "react";

export function CriarUsers() {
  const { title } = useParams();
  const { control, handleSubmit, setValue } = useForm({});
  const { token } = useContext(AuthContext);

  const notify = () => {
    toast.success("Cadastrado com sucesso", {
      position: "top-right",
      autoClose: 3500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

    setTimeout(() => {
      window.location.href = "/cadastro";
    }, 3500);
  };

  const onSubmit = async (data) => {
    title === "Medico" && (await PostMedico(data, notify, token));
    title === "Responsavel" && (await PostResponsavel(data, notify, token));
    title === "Crianca" && (await PostPaciente(data, notify, token));
    title === "Vacina" && (await PostVacina(data, notify, token));
  };


  const Voltar = () => {
    window.location.href = "/cadastro";
  };

  return (
    <div>
      <Header />
      <Container>
        <Center>
          <Title>{title}</Title>
          <Content>
            <Card>
              <Forms>
                {title === "Medico" && <FormsMedico control={control} />}
                {title === "Crianca" && <FormsPaciente control={control} />}
                {title === "Responsavel" && (
                  <FormsResponsavel control={control} />
                )}
                {title === "Vacina" && <FormsVacina control={control} setValue={setValue} />}
              </Forms>
              <Image src={quadrado} alt="quadrado" />
            </Card>
            <Buttons>
              <Button title="Salvar" onClick={handleSubmit(onSubmit)} />
              <Button title="Cancelar" onClick={() => Voltar()} />
            </Buttons>
          </Content>
        </Center>
      </Container>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
}

const PostMedico = async (data, notify, token) => {
  try {
    const res = await api.post("/medico", data, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    notify();
  } catch (error) {
    if (error.response && error.response.data && error.response.data.errors) {
      const errorMessage = error.response.data.errors[0].defaultMessage;
      toast.error(errorMessage, {
        position: "top-right",
        theme: "light",
      });
    }
    toast.error("Erro ao cadastrar médico", {
      position: "top-right",
      theme: "light",
    });
  }
};

const PostResponsavel = async (data, notify, token) => {
  try {
    const res = await api.post("/responsavel/", data, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    notify();
  } catch (error) {
    if (error.response && error.response.data && error.response.data.errors) {
      const errorMessage = error.response.data.errors[0].defaultMessage;
      toast.error(errorMessage, {
        position: "top-right",
        theme: "light",
      });
    }
    toast.error("Erro ao cadastrar responsável", {
      position: "top-right",
      theme: "light",
    });
  }
};

const PostPaciente = async (data, notify, token) => {
  try {
    const res = await api.post("/usuario/", data, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    notify();
  } catch (error) {
    console.log(error)
    if (error.response && error.response.data && error.response.data.errors) {
      const errorMessage = error.response.data.errors[0].defaultMessage;
      toast.error(errorMessage, {
        position: "top-right",
        theme: "light",
      });
    } else {
      toast.error("Erro ao cadastrar Paciente", {
        position: "top-right",
        theme: "light",
      });
    }
  }
};

const PostVacina = async (data, notify, token) => {
  const dados = {...data, nomeVacina: data.nomeVacina?.label}
  try {
    const res = await api.post("/vacina/", dados, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    notify();

    let link = `https://wa.me/55${data.numTelefone}?text=Ol%C3%A1,%20A%20vacina%20aplicada%20foi:%20${data.nomeVacina?.label}%0ANa%20data:%20${data.dataVacinacao}%0AFique%20informado%20sobre%20o%20calend%C3%A1rio%20de%20vacina%C3%A7%C3%A3o:%20https://www.gov.br/saude/pt-br/vacinacao/calendario`
    
    setTimeout(() => {
      window.open(link);
    }, 2000);

  } catch (error) {
    if (error.response && error.response.data && error.response.data.errors) {
      const errorMessage = error.response.data.errors[0].defaultMessage;
      toast.error(errorMessage, {
        position: "top-right",
        theme: "light",
      });
    }
    console.error(error);
    toast.error("Erro ao cadastrar vacina", {
      position: "top-right",
      theme: "light",
    });
  }
};

