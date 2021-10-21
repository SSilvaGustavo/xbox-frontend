import { useEffect, useState } from "react";
import { Api } from "../../../../api/Api";
import ProfileCard from "../ProfileCard/ProfileCard";
import "./ProfileList.css";

export const ProfileList = () => {
  const id = localStorage.getItem("ID_USER")

  const [profiles, setProfiles] = useState([]);

  useEffect(() => {
    const loadProfileList = async () => {
      const response = await Api.buildApiGetRequest(Api.readAllProfileByUserId(id));

      const results = await response.json();

      setProfiles(results);
    };

    loadProfileList();
  }, [id]);

  return (
    <div className="list">
      {profiles.map((profile, index) => (
          <ProfileCard key={`profile_list_${index}`} profile={profile}/>
      ))}
    </div>
  );
};
