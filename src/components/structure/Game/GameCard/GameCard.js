import { useState, useEffect} from "react";
import { useHistory } from "react-router";
import { Api } from "../../../../api/Api";
import GenreCard from "../../Genre/GenreCard/GenreCard";


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
            <div>
                {games.genre.map((genre, index) => (
                    <div key={`games_genre_${index}`}>
                        <h1>{genre.name}</h1>    
                    </div>
                ))}
            </div>
            </div>
        </div>
    )

}