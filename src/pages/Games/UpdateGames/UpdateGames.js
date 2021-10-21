import { useEffect, useState } from "react";
import InputMask from "react-input-mask";
import Select from "react-select";
import { Api } from "../../../api/Api";

export default function UpdateGames(props) {
  const id = props.match.params.id;

  const [games, setGames] = useState(undefined);
  const [genres, setGenres] = useState([]);
  const [genreIds, setGenreIds] = useState([]);

  useEffect(() => {
    const loadGames = async () => {
      const response = await Api.buildApiGetRequest(Api.readByGamesId(id), true);

      const results = await response.json();

      setGames(results);
    };
    loadGames();
  }, [id]);

  useEffect(() => {
    const loadGenres = async () => {
      const response = await Api.buildApiGetRequest(Api.readAllGenreUrl(), true);

      const results = await response.json();

      setGenres(results);
    };

    loadGenres();
  }, []);

  if (!games) {
    return <div>Skeleton</div>;
  }

//   const firstGenre = games.genre[0];

  const handleSubmit = async (event) => {
    event.preventDefault();

    const title = event.target.title.value;
    const cover = event.target.cover.value;
    const description = event.target.description.value;
    const year = event.target.year.value;
    const imdb = event.target.imdb.value;
    const linkyt = event.target.linkyt.value;
    const linkgameplay = event.target.linkgameplay.value;

    const payload = {
      title,
      cover,
      description,
      year,
      imdb,
      linkyt,
      linkgameplay,
      genreIds,
    };

    const response = Api.buildApiPatchRequest(
      Api.updateGamesUrl(id),
      payload,
      true
    );

    const body = response.json();

    if (response.status === 200) {
      const id = body.id;

      props.history.push(`/game/view/${id}`);
    } else {

    }
  };
  const options = genres.map((genre) => ({
    value: genre.idGenre,
    label: genre.name,
  }));

  const handleGenreOption = (selectedOption) => {
    setGenreIds(selectedOption.map((option) => option.value));
  };

  return (
    <div className="container">
      <div className="form__card--create">
        <form onSubmit={handleSubmit}>
          <div className="input__group--create">
            <input
              className="form__input_text--create"
              type="text"
              id="title"
              name="title"
              placeholder="Title"
              defaultValue={games.title}
            />
          </div>
          <div className="input__group--create">
            <input
              className="form__input_text--create"
              type="text"
              id="cover"
              name="cover"
              placeholder="Cover"
              defaultValue={games.cover}
            />
          </div>

          <div className="input__group--create">
            <input
              className="form__input_text--create"
              type="text"
              id="description"
              name="description"
              placeholder="Description"
              defaultValue={games.description}
            />
          </div>

          <div className="input__group--create">
            <input
              className="form__input_text--create"
              type="text"
              id="year"
              name="year"
              placeholder="Year"
              maxLength="4"
              defaultValue={games.year}
            />
          </div>
          <div className="input__group--create">
            <InputMask
              mask="9.9"
              className="form__input_text--create"
              type="text"
              id="imdb"
              name="imdb"
              placeholder="IMDB"
              defaultValue={games.imdb}
            />
          </div>

          <div className="input__group--create">
            <input
              className="form__input_text--create"
              type="text"
              id="linkyt"
              name="linkyt"
              placeholder="Link Trailer (Embed)"
              defaultValue={games.linkyt}
            />
          </div>
          <div>
            <input
              className="form__input_text--create"
              type="text"
              id="linkgameplay"
              name="linkgameplay"
              placeholder="Link Gameplay (Embed)"
              defaultValue={games.linkyt}
            />
          </div>

          <div>
            <label>Genres: </label>
          </div>
          <div>
            <Select isMulti options={options} onChange={handleGenreOption} isSearchable={true}/>
          </div>

          <div className="input__group--create">
            <input
              className="form__subbutton--create"
              type="submit"
              value="Update"
            />
          </div>
          <div className="form__group--create"></div>
        </form>
      </div>
    </div>
  );
}
