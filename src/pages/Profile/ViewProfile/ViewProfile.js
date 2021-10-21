import { useEffect, useState } from "react";
import { Api } from "../../../api/Api";
import GameCard from "../../../components/structure/Game/GameCard/GameCard";
import ViewProfileCard from "../../../components/structure/Profile/ProfileCard/ViewProfileCard";


export default function ViewProfile(props){
    const id = localStorage.getItem("ID_PROFILE");

    const [profile, setProfile] = useState(undefined);

    useEffect(() => {
        const loadProfile = async () => {
            const response = await Api.buildApiGetRequest(Api.readAllGamesByProfileId(id), true);

            const results = await response.json();

            setProfile(results);

        };

        loadProfile()
    }, [id]);

    if(!profile){
        return <div>Loading...</div>
    }

    return (
        <div className="profile">
            <GameCard games={profile}/>
        </div>


    )
    
}