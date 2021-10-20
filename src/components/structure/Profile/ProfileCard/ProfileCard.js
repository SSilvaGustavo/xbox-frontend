import { useHistory } from "react-router";
import "./ProfileCard.css"


export default function ProfileCard ({ profile }){

    const history = useHistory();

    const handleClick = () => {
        history.push(`/profile/view/${profile.idProfile}`);
    };

    return(
        <div className="card" onClick={handleClick}>
            <div className="cont__image">
            <img className= "card__image" src={profile.image} alt={`${profile.nickname}'s cover`}/>
            </div>

            <div className="cont__title">
            <h1 className="card__title">{profile.nickname}</h1>
            </div>
        </div>
    )

}