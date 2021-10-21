import { useEffect, useState } from "react";
import { Api } from "../../../../api/Api";
import LinkButton from "../../../shared/LinkButton/LinkButton";
import GameCard from "../GameCard/GameCard";

export const GameList = () => {
  const [games, setGames] = useState([]);

  useEffect(() => {
    const loadGameList = async () => {
      const response = await Api.buildApiGetRequest(Api.readAllGamesUrl());

      const results = await response.json();

      setGames(results);
    };

    loadGameList();
  }, []);

  return (
    <div className="list">
      <LinkButton to="/game/create">Cadastrar Jogo</LinkButton>
      {games.map((games, index) => (
        <GameCard key={`game_list_${index}`} games={games} />
      ))}
    </div>
  );
};
