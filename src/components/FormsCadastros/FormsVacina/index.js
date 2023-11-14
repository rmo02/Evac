import { Controller } from "react-hook-form";
import { InputArea } from "../../Input";
import { Form, Subtitle } from "./styles";
import api from "../../../api";
import { useEffect, useState } from "react";
import { Dropdown } from "../../DropDown";

export function FormsVacina({ control }) {
  const [paciente, setPaciente] = useState();
  const [medico, setMedico] = useState();

  useEffect(() => {
    getPaciente();
    getMedico();
  }, []);

  const getPaciente = async () => {
    try {
      const res = await api.get("/usuario");
      setPaciente(res.data);
      console.log(res.data);
    } catch (error) {
      console.log("Erro ao carregar responsáveis", error);
    }
  };

  const getMedico = async () => {
    try {
      const res = await api.get("/medico");
      setMedico(res.data);
      console.log(res.data);
    } catch (error) {
      console.log("Erro ao carregar responsáveis", error);
    }
  };

  return (
    <>
      <Form>
        <Subtitle>Email</Subtitle>
        <Controller
          control={control}
          name="email"
          rules={{ required: "Informe o email" }}
          render={({ field: { onChange, value } }) => (
            <InputArea
              type="email"
              placeholder="example@gmail.com"
              value={value}
              onChange={onChange}
            />
          )}
        />
      </Form>
      <Form>
        <Subtitle>Nome da Vacina</Subtitle>
        <Controller
          control={control}
          name="nomeVacina"
          rules={{ required: "Informe o nome da vacina" }}
          render={({ field: { onChange, value } }) => (
            <InputArea
              type="text"
              placeholder="Testo 100ml"
              value={value}
              onChange={onChange}
            />
          )}
        />
      </Form>
      <Form>
        <Subtitle>Data da aplicação</Subtitle>
        <Controller
          control={control}
          name="dataVacinacao"
          rules={{ required: "Informe a data de aplicação" }}
          render={({ field: { onChange, value } }) => (
            <InputArea
              type="text"
              placeholder="DD-MM-AAAA"
              value={value}
              onChange={onChange}
            />
          )}
        />
      </Form>
      <Form>
        <Subtitle>Medico apli.</Subtitle>
        <Controller
          control={control}
          name="medicoId"
          rules={{ required: "Informe seu CRM" }}
          render={({ field: { onChange, value } }) => (
            <Dropdown
              options={medico?.map((medic) => ({
                title: medic.nome,
                value: medic.id,
              }))}
              value={value}
              onChange={(selectedId) => {
                onChange(selectedId);
              }}
            />
          )}
        />
      </Form>
      <Form>
        <Subtitle>Paciente</Subtitle>
        <Controller
          control={control}
          name="usuarioId"
          rules={{ required: "Informe o paciente que irá receber a dose" }}
          render={({ field: { onChange, value } }) => (
            <Dropdown
              options={paciente?.map((resp) => ({
                title: resp.nome,
                value: resp.id,
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
