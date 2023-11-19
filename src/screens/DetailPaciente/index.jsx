import { useParams } from 'react-router-dom';
import { Header } from '../../components/Header';
import api from '../../api';
import { useContext, useEffect, useState } from 'react';
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
import { AuthContext } from '../../context/AuthContext';

export function DetailPaciente(){
    const { id } = useParams();
    const [paciente, setPaciente]= useState();
    const { token } = useContext(AuthContext);

    useEffect(() => {
        getPaciente()
    }, [])
    

    const getPaciente = async() => {
        try {
            const res = await api.get(`/usuario/${id}`, {
                headers: {
                  Authorization: `Bearer ${token}`
                }
              })
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