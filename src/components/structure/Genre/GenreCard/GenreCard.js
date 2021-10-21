import { useHistory } from "react-router";
import "./GenreCard.css"


export default function GenreCard ({ genre }){

    
    const color =  genre.name === "FPS"? "fps" : genre.name === "Aventura"? "aventura" : "fantansia"

    const history = useHistory();

    const handleClick = () => {
        history.push(`/genre/view/${genre.idGenre}`);
    };

    return(
        <div className={color} onClick={handleClick}>
            <span className={color}>{genre.name}</span>
            </div>
    )

}