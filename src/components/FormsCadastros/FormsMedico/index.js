import { Controller } from "react-hook-form";
import { InputArea } from "../../Input";
import { Form, Subtitle } from "./styles";

export function FormsMedico({control}){
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
            <Subtitle>CRM</Subtitle>
            <Controller
            control={control}
            name="crm"
            rules={{ required: "Informe seu CRM" }}
            render={({ field: { onChange, value } }) => (
              <InputArea
                type="txt"
                placeholder="CRM123"
                value={value}
                onChange={onChange}
              />
            )}
          />
        </Form>
        </>
    );
}