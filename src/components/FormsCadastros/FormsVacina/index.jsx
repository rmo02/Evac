import { Controller } from "react-hook-form";
import { InputArea } from "../../Input";
import { Form, Subtitle } from "./styles";
import api from "../../../api";
import { useContext, useEffect, useState } from "react";
import { Dropdown } from "../../DropDown";
import { AuthContext } from "../../../context/AuthContext";
import { vacinasLists } from "../../../data/vacinasLists";
import CreatableSelect from 'react-select/creatable';


export function FormsVacina({ control, setValue }) {
  const [paciente, setPaciente] = useState();
  const [medico, setMedico] = useState();
  const { token } = useContext(AuthContext);

  useEffect(() => {
    getPaciente();
    getMedico();
  }, []);

  const getPaciente = async () => {
    try {
      const res = await api.get("/usuario", {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      setPaciente(res.data);
    } catch (error) {
      console.log("Erro ao carregar responsáveis", error);
    }
  };

  const findPaciente = async (id) => {
    try {
      const res = await api.get(`/usuario/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      setValue('numTelefone', res.data.numTelefone || "");
      setValue('cpf', res.data.cpf || "");
    } catch (error) {
      console.log("Erro ao carregar responsáveis", error);
    }
  };

  const getMedico = async () => {
    try {
      const res = await api.get("/medico", {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      setMedico(res.data);
    } catch (error) {
      console.log("Erro ao carregar responsáveis", error);
    }
  };


  const customStyles = {
    control: (provided) => ({
      ...provided,
      width: '9.875rem',
      height: '1.875rem',
    }),
  };

  return (
    <>
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
                findPaciente(selectedId); // Call findPaciente when the patient changes
              }}
            />
          )}
        />
      </Form>
      <Form>
        <Subtitle>Contato</Subtitle>
        <Controller
          disabled={true}
          control={control}
          name="numTelefone"
          rules={{ required: "Informe o contato" }}
          render={({ field: { onChange, value } }) => (
            <InputArea
              disabled={true}
              type="text"
              placeholder="9812345678"
              value={value}
              onChange={onChange}
            />
          )}
        />
      </Form>
      <Form>
        <Subtitle>CPF</Subtitle>
        <Controller
          disabled={true}
          control={control}
          name="cpf"
          rules={{ required: "Informe o cpf" }}
          render={({ field: { onChange, value } }) => (
            <InputArea
              disabled={true}
              type="text"
              placeholder="123.456.789-00"
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
            <CreatableSelect
              options={vacinasLists.map((vacina) => ({
                label: vacina.title,
                value: vacina.value,
              }))}
              isClearable
              placeholder="Selecione"
              value={value}
              onChange={(selectedId) => {
                onChange(selectedId);
              }}
              styles={customStyles}
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

    </>
  );
}
