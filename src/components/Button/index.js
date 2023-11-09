import { Botao } from "./styles";

export function Button ({title, onClick}){
    return (
        <Botao onClick={onClick}>
            {title}
        </Botao>
    )
}