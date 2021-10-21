import { useHistory } from "react-router";
import "./ViewGameCard.css";
import "../../Genre/GenreCard/GenreCard.css"

export default function ViewGameCard ({ games }){

    const color = games.genre === "FPS"? "fps" : games.genre === "Aventura"? "aventura" : "fantansia"

    const history = useHistory();

    const handleClick = () => {
        history.push(`/game/view/${games.idGame}`);
    };

    return(
        <div className="card--games" onClick={handleClick}>
        <h1 className="card__title--games">{games.title}</h1>
            <div className="cont__image--games">
            <img className= "card__image--games" src={games.cover} alt={`${games.title}'s cover`}/>
            <h2 className="card__description--games">{games.description}</h2>
            </div>
            <div className="card__genre--games">
            {games.genre.map((genre, index) => (
                <div key={`game_genre_${index}`} className="card__span--games">
                    <span className="span--games">{genre.name}</span>
                </div>
            ))}
            </div>
            <div className="card__infos--games">
            <h2 className="card__year--games">Ano de lançamento: {games.year}</h2>
            <iframe width="560" height="315" src={games.linkyt} title="YouTube video player"></iframe>
            </div>
            <div className="card__imdb--games">
            <h2>IMDB: {games.imdb}</h2>
            </div>
        </div>
    )

}