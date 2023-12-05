import quadrado from "../../assets/quadrado.png";
import { format, parseISO } from "date-fns";
import { ContainerImage, Image, InfoDocs, TitleDoc, TitleDocAutor, TitleDocData } from "./styles";

function formatDataVacinacao(dataVacinacao) {
    const parsedDate = parseISO(dataVacinacao);
    const formattedDate = format(parsedDate, "dd-MM-yyyy");
    return formattedDate;
}

export function CardVacina({ data }) {
    return (
        <ContainerImage>
            <Image alt="quadrado" src={quadrado} />
            <InfoDocs>
                <TitleDoc>Nome: {data?.nomeVacina}</TitleDoc>
                <TitleDocAutor>Data: {formatDataVacinacao(data?.dataVacinacao)}</TitleDocAutor>
                <TitleDocData>Medico: {data?.medico?.nome} </TitleDocData>
            </InfoDocs>
        </ContainerImage>
    );
}
