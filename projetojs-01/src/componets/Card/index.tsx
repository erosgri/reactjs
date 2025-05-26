import { useEffect, useState } from "react";
import "./styles.css";

//PROPS => propriedade que um component pode receber (parametro)
//INTERPOLAÇÃO => colocar uma variavel dentro de um jsx 

interface CardProps {
    imageUrl: string;
    name: string;

}

export function Card(props: CardProps) {
    //let follow = false;

    // usestate => retorna 0 valor original e 1 valor secundario
    const [follow, setFollow] = useState(false)


    function clicar() {
        setFollow((prevState) => !prevState);
    }

    // //observa o comportamento geral observa qualquer atualização

    // useEffect(() => {
    //     console.log("chamou o useEffect 1");
    // });

    // chama apenas a primeira renderização e depois causa um erro

    // // useEffect(() => {
    // //     console.log("chamou useEffect 2");
    // // },[]);

    //observa as mudanças de estado do follow

    useEffect(() => {
        console.log("Montou o componente");
        localStorage.setItem("card", "o card está aberto");

        if (follow === true) {
            alert("Voce está seguindo mais uma pessoa...")
        }

        return () => {
            console.log("Desmontou o componente");
            localStorage.removeItem("card");
        }
    }, [follow]);




    return (
        <div className='card'>
            <div>
                <img src={props.imageUrl} alt={props.name} />
                <strong>{props.name}</strong>
            </div>
            <button
                onClick={clicar}
                className={`${follow ? "btn-follow" : "btn"}`}
            >{follow ? "UnFollow" : "Follow"}</button>
        </div>

    )
}






