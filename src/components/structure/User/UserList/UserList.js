import { useEffect, useState } from "react"
import { Api } from "../../../../api/Api";
import UserCard from "../UserCard/UserCard";

export const UserList = () => {
    const [users, setUsers] = useState([]);


    useEffect(() => {
        const loadUserList = async () =>{
            const response = await Api.buildApiGetRequest(Api.readAllUserUrl());

            const results = await response.json();

            setUsers(results);
        };

        loadUserList()
    }, []);

    return(

        <div>
            {users.map((user, index) => (
                <UserCard key={`user_list_${index}`} user={user}></UserCard>
            ))}

        </div>


    )

}