import { useHistory } from "react-router";


export default function GenreCard ({ genre }){

    const history = useHistory();

    const handleClick = () => {
        history.push(`/genre/view/${genre.idGenre}`);
    };

    return(
        <div className="card" onClick={handleClick}>
            <div className="cont__image">
            <span className="card__title">{genre.name}</span>
            </div>
        </div>
    )

}