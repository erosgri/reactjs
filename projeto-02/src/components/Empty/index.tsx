import VazioImg from '../../assets/vazio.png';
import "./style.css";

export function Empty() {
    return (
        <div className='container-empty'>
            <img src={VazioImg} alt="Nada encontrado ainda" width={200} />
            <p>Usuário Inexistente ou Não encontrado</p>
        </div>
    )
}