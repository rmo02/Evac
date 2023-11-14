import { useParams } from 'react-router-dom';
import { Header } from '../../components/Header';
import api from '../../api';
import { useEffect, useState } from 'react';
import {
    ContainerAvo,
    ContainerFilho,
    ContainerPai,
    SubPages,
    Title,
    TitleInfo,
    ContainerAnexos,
  } from "./styles";
import { CardPacienteDetails } from '../../components/CardPacienteDetails';
import { CardVacina } from '../../components/CardVacinas';

export function DetailPaciente(){
    const { id } = useParams();
    const [paciente, setPaciente]= useState();

    useEffect(() => {
        getPaciente()
    }, [])
    

    const getPaciente = async() => {
        try {
            const res = await api.get(`/usuario/${id}`)
            console.log(res.data)
            setPaciente(res.data);
        } catch (error) {
            console.log("Erro ao pegar dados do usuário")
        }
    }

    return (
        <div>
            <Header />
            <ContainerAvo>
                <ContainerPai>
                    <Title>Detalhes</Title>
                    <ContainerFilho>
                        <CardPacienteDetails data={paciente}/>
                        <SubPages>
                            <TitleInfo>Vacinas</TitleInfo>
                        </SubPages>
                            <ContainerAnexos>
                                {
                                    paciente?.vacinas.map((vac, i) =>{
                                        return (
                                            <CardVacina data={vac} key={i}/>
                                        );
                                    })
                                }
                                

                            </ContainerAnexos>
                    </ContainerFilho>
                </ContainerPai>
            </ContainerAvo>
        </div>
    );
}