import quadrado from "../../assets/quadrado.png";
import { ContainerImage, Image, InfoDocs, TitleDoc, TitleDocAutor, TitleDocData } from "./styles";

function formatDataVacinacao(dataVacinacao) {
    const date = new Date(dataVacinacao);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-based
    const year = date.getFullYear();
  
    return `${day}-${month}-${year}`;
  }

export function CardVacina({data}){
    return (
        <ContainerImage>
            <Image alt="quadrado" src={quadrado}/>
            <InfoDocs>
                <TitleDoc>Nome: {data?.nomeVacina}</TitleDoc>
                <TitleDocAutor>Data: {formatDataVacinacao(data?.dataVacinacao)}</TitleDocAutor>
                <TitleDocData>Medico: {data?.medico?.nome} </TitleDocData>
            </InfoDocs>
        </ContainerImage>
    );
}