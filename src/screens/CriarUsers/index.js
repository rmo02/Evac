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

export function CriarUsers() {
  const { title } = useParams();
  const { control, handleSubmit, setValue } = useForm({});

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
    title === "Medico" && (await PostMedico(data, notify));
    title === "Responsavel" && (await PostResponsavel(data, notify));
    title === "Crianca" && (await PostPaciente(data, notify));
    title === "Vacina" && (await PostVacina(data, notify));
  };

  // const wpp = async () => {
  //   // https://api.whatsapp.com/send?phone=5511912345678&text=Olá.%20Vi%20o%20produto%20no%20Facebook,%20aguardo%20mais%20informações.
  //   let link = `https://api.whatsapp.com/send?phone=5598984324158&text=Olá.%20Vi%20o%20produto%20no%20Facebook,%20aguardo%20mais%20informações.`
    
  //   window.open(link)
  
  // };

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
                {title === "Vacina" && <FormsVacina control={control} />}
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

const PostMedico = async (data, notify) => {
  try {
    const res = await api.post("/medico", data);
    notify();
  } catch (error) {
    toast.error("Erro ao cadastrar médico", {
      position: "top-right",
      theme: "light",
    });
  }
};

const PostResponsavel = async (data, notify) => {
  try {
    const res = await api.post("/responsavel/", data);
    notify();
  } catch (error) {
    toast.error("Erro ao cadastrar responsável", {
      position: "top-right",
      theme: "light",
    });
  }
};

const PostPaciente = async (data, notify) => {
  try {
    const res = await api.post("/usuario/", {
      nome: data.nome,
      email: data.email,
      cpf: data.cpf,
      dataNascimento: data.dataNascimento,
      responsavelId: data.responsavelId,
    });
    notify();
  } catch (error) {
    toast.error("Erro ao cadastrar Paciente", {
      position: "top-right",
      theme: "light",
    });
  }
};

const PostVacina = async (data, notify) => {
  try {
    const res = await api.post("/vacina/", data);
    notify();

    let link = `https://wa.me/5598984324158?text=Ol%C3%A1,%20A%20vacina%20aplicada%20foi:%20${data.nomeVacina}%0ANa%20data:%20${data.dataVacinacao}%0AFique%20informado%20sobre%20o%20calend%C3%A1rio%20de%20vacina%C3%A7%C3%A3o:%20https://www.gov.br/saude/pt-br/vacinacao/calendario`
    

    setTimeout(() => {
      window.open(link);
    }, 2000);

    
  } catch (error) {
    console.error(error);
    toast.error("Erro ao cadastrar vacina", {
      position: "top-right",
      theme: "light",
    });
  }
};

//   // Corrigindo a ordem para "ano-mês-dia"
//   const [dia, mes, ano] = data.split('-');

//   // Mês no JavaScript é baseado em zero, então subtrai 1 do valor do mês
//   const dataFormatada = new Date(`${ano}-${mes - 1}-${dia}`);

//   const anoFormatado = dataFormatada.getFullYear();
//   const mesFormatado = (dataFormatada.getMonth() + 1).toString().padStart(2, '0');
//   const diaFormatado = dataFormatada.getDate().toString().padStart(2, '0');

//   return `${anoFormatado}-${mesFormatado}-${diaFormatado}`;
// };

// const formatarDataNascimento = (data) => {
//   console.log(data);

//   // Verificar se a data de nascimento não está vazia ou nula
//   if (!data) {
//     return null;
//   }

//   // Corrigindo a ordem para "dia-mês-ano"
//   const [dia, mes, ano] = data.split('-');

//   // Verificar se dia, mês e ano são números válidos
//   if (isNaN(dia) || isNaN(mes) || isNaN(ano)) {
//     console.error('Formato inválido para a data de nascimento.');
//     return null;
//   }

//   // Mês no JavaScript é baseado em zero, então subtrai 1 do valor do mês
//   const dataFormatada = new Date(ano, mes - 1, dia);

//   const anoFormatado = dataFormatada.getFullYear();
//   const mesFormatado = (dataFormatada.getMonth() + 1).toString().padStart(2, '0');
//   const diaFormatado = dataFormatada.getDate().toString().padStart(2, '0');

//   return `${diaFormatado}-${mesFormatado}-${anoFormatado}`;
// };
