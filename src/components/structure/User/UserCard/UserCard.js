import { useHistory } from "react-router";

export default function UserCard ({ user }){

    const history = useHistory();

    const handleClick = () => {
        history.push(`/user/view/${user.idUser}`);
    };

    return(
        <div className = "card" onClick={handleClick}>
            <h1>{user.name}</h1>
            <img src={user.image} alt={`${user.name}'s cover'`}/>
        </div>
    )

}