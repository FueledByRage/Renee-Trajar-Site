import react from "react";
import { CircleAvatar } from "./circle_avatar";
import placeholder from '../../assets/placeholder.png';
import './style.css'

export function Carousel(props){


    return(
        <div className="body">
            <h3>Depoimentos</h3>
            <CircleAvatar background={placeholder}/>
            <span>
                "Seu corte tanto de camisas, bem como de ternos são impecáveis, muitos dos meus amigos
                tem elogiado a vestimenta.
                Recomendo para quem gosta de perfeição. Estamos nos servindo do trabalho do Renee Trajar há 
                mais de 20 anos."
            </span>
            <span>Domingos Orestes Chiomento</span>
            <span>DOC Contabilidade Empresarial</span>
        </div>
    );

}