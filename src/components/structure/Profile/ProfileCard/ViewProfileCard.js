import { Redirect, useHistory } from "react-router";

export default function ViewProfileCard({ profile }, { games }) {
  const history = useHistory();

  const handleClick = () => {
    history.push(`/game/view/${games.idGame}`);
  };

  return (
    <div className="card" onClick={handleClick}>
        {profile.games.map((games, index) => (
          <div key={`profile_games_${index}`}>
            <div className="cont__image">
              <img
                className="card__image"
                src={profile.games.cover}
                alt={`${games.title}'s cover`}
              />
            </div>
            <div className="cont__title">
              <h1 className="card__title">{games.title}</h1>
            </div>
          </div>
        ))}
      </div>
  );
}
