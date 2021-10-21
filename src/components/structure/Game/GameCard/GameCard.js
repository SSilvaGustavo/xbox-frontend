import { useHistory } from "react-router";
import LinkButton from "../../../shared/LinkButton/LinkButton";

export default function GameCard ({ games }){

    const history = useHistory();

    const handleClick = () => {
        history.push(`/game/view/${games.idGame}`);
    };

    return(
        <div className="card" onClick={handleClick}>
            <div className="cont__image">
            <img className= "card__image" src={games.cover} alt={`${games.title}'s cover`}/>
            </div>
            <div className="cont__title">
            <h1 className="card__title">{games.title}</h1>
            </div>
        </div>
    )

}