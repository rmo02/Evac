import { Controller } from "react-hook-form";
import { InputArea } from "../../Input";
import { Form, Subtitle } from "./styles";

export function FormsResponsavel({control}){
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
            <Subtitle>CPF</Subtitle>
            <Controller
            control={control}
            name="cpf"
            rules={{ required: "Informe o cpf" }}
            render={({ field: { onChange, value } }) => (
              <InputArea
                type="text"
                placeholder="123.456.789-00"
                value={value}
                onChange={onChange}
              />
            )}
          />
        </Form>
        <Form>
            <Subtitle>Endereço</Subtitle>
            <Controller
            control={control}
            name="endereco"
            rules={{ required: "Informe o endereço" }}
            render={({ field: { onChange, value } }) => (
              <InputArea
                type="text"
                placeholder="Rua beta, Qd Alfa"
                value={value}
                onChange={onChange}
              />
            )}
          />
        </Form>
        </>
    );
}