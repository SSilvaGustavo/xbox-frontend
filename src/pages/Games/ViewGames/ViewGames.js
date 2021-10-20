import { useEffect, useState } from "react";
import { Api } from "../../../api/Api";


export default function ViewGame(props){
    const id = props.match.params.id;

    const [game, setGame] = useState(undefined);

    useEffect(() => {
        const loadGame = async () => {
            const response = await Api.buildApiGetRequest(Api.readByGamesId(id), true);

            const results = await response.json();

            setGame(results);

        };

        loadGame()
    }, [id]);

    if(!game){
        return <div>Loading...</div>
    }

    return (
        <div className="games">
        </div>


    )
    
}