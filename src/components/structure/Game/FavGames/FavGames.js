import { useEffect, useState } from "react"
import { Api } from "../../../../api/Api";
import GameCard from "../GameCard/GameCard";

export const FavGames = () => {
    const id = localStorage.getItem("ID_PROFILE")

    const [profile, setProfile] = useState(undefined);


    useEffect(() => {
        const loadGameList = async () =>{
            const response = await Api.buildApiGetRequest(Api.readByProfileId(id), true);

            const results = await response.json();

            setProfile(results);
        };

        loadGameList()
    }, [id]);

    if(profile){
    return(
        <div className="list">
            {profile.games.map((game, index) => (
                <GameCard key={`game_list_${index}`} games={game}/>
            ))}

        </div>

    )
    }
    return(
        <div>Loading...</div>
        )
}