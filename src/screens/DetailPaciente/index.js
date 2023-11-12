import { useParams } from 'react-router-dom';
import { Header } from '../../components/Header';

export function DetailPaciente(){
    const { id } = useParams();

    return (
        <div>
            <Header />
            <h2>Detalhes do Paciente {id}</h2>
        </div>
    );
}