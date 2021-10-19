import { useHistory } from "react-router";

export default function ProfileCard ({ profile }){

    const history = useHistory();

    const handleClick = () => {
        history.push(`/profile/view/${profile.idProfile}`);
    };

    return(
        <div className = "card" onClick={handleClick}>
            <h1>{profile.nickname}</h1>
        </div>
    )

}