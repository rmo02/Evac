import { Controller } from "react-hook-form";
import { InputArea } from "../../Input";
import { Form, Subtitle } from "./styles";
import api from "../../../api";
import { useContext, useEffect, useState } from "react";
import { Dropdown } from "../../DropDown";
import { AuthContext } from "../../../context/AuthContext";

export function FormsPaciente({control}){
   const [responsavel, setResponsavel] = useState();
   const { token } = useContext(AuthContext);

   useEffect(() => {
    getResponsavel()
  }, [])

   const getResponsavel = async () => {
    try {
      const res = await api.get("/responsavel", {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      setResponsavel(res.data);
      console.log(res.data)
    } catch (error) {
      console.log("Erro ao carregar responsáveis", error)
    }
  }

    return (
        <>
        <Form>
            <Subtitle>Nome</Subtitle>
            <Controller
            control={control}
            name="nome"
            rules={{ required: "Informe o nome" }}
            render={({ field: { onChange, value } }) => (
              <InputArea
                type="text"
                placeholder="Digite o nome"
                value={value}
                onChange={onChange}
              />
            )}
          />
        </Form>
        <Form>
            <Subtitle>Contato</Subtitle>
            <Controller
            control={control}
            name="numTelefone"
            rules={{ required: "Informe o contato" }}
            render={({ field: { onChange, value } }) => (
              <InputArea
                type="text"
                placeholder="98912345678"
                value={value}
                onChange={onChange}
              />
            )}
          />
        </Form>
        <Form>
            <Subtitle>CPF</Subtitle>
            <Controller
            control={control}
            name="cpf"
            rules={{ required: "Informe seu cpf" }}
            render={({ field: { onChange, value } }) => (
              <InputArea
                type="txt"
                placeholder="123.456.789-99"
                value={value}
                onChange={onChange}
              />
            )}
          />
        </Form>
        <Form>
            <Subtitle>Data Nacimento</Subtitle>
            <Controller
            control={control}
            name="dataNascimento"
            rules={{ required: "Informe sua data de nascimento" }}
            render={({ field: { onChange, value } }) => (
              <InputArea
                type="txt"
                placeholder="12-25-2020"
                value={value}
                onChange={onChange}
              />
            )}
          />
        </Form>
        <Form>
            <Subtitle>Responsavel</Subtitle>
            <Controller
            control={control}
            name="responsavelId"
            rules={{ required: "Informe o responsavel" }}
            render={({ field: { onChange, value } }) => (
              <Dropdown
              options={responsavel?.map((resp) => ({
                title:resp.nome,
                value:resp.id
              }))}
              value={value}
              onChange={(selectedId) => {
                onChange(selectedId);
              }}
            />
            )}
          />
        </Form>
        </>
    );
}

