import { useEffect, useState } from "react";
import { Api } from "../../../api/Api";
import ViewProfileCard from "../../../components/structure/Profile/ProfileCard/ViewProfileCard";


export default function ViewProfile(props){
    const id = props.match.params.id;

    const [profile, setProfile] = useState(undefined);
    const [games, setGames] = useState(undefined);

    useEffect(() => {
        const loadProfile = async () => {
            const response = await Api.buildApiGetRequest(Api.readByProfileId(id), true);

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
            <ViewProfileCard profile={profile}/>
        </div>


    )
    
}