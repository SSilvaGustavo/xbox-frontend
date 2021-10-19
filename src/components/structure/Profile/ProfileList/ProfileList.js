import { useEffect, useState } from "react"
import { Api } from "../../../../api/Api";import ProfileCard from "../ProfileCard/ProfileCard";


export const ProfileList = () => {
    const [profiles, setProfiles] = useState([]);


    useEffect(() => {
        const loadProfileList = async () =>{
            const response = await Api.buildApiGetRequest(Api.readAllProfileUrl());

            const results = await response.json();

            setProfiles(results);
        };

        loadProfileList()
    }, []);

    return(

        <div>
            {profiles.map((profile, index) => (
                <ProfileCard key={`profile_list_${index}`} profile={profile}/>
            ))}

        </div>


    )

}