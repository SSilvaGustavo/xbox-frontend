import { useEffect, useState } from "react";
import { Api } from "../../../api/Api";
import Select from "react-select";
import InputMask from "react-input-mask";

export default function CreateGames(props) {
  const [genres, setGenres] = useState([]);
  const [genreIds, setGenreIds] = useState([]);

  useEffect(() => {
    const loadGenres = async () => {
      const response = await Api.buildApiGetRequest(
        Api.readAllGenreUrl(),
        true
      );

      const results = await response.json();

      setGenres(results);
    };

    loadGenres();
  }, []);



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
      genreIds
    };

    const response = await Api.buildApiPostRequest(
      Api.createGamesUrl(),
      payload,
      true
    );

    const body = await response.json();

    if (response.status === 201) {
      const id = body.idGame;

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

  return(
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
            />
          </div>
          <div className="input__group--create">
            <input
              className="form__input_text--create"
              type="text"
              id="cover"
              name="cover"
              placeholder="Cover"
            />
          </div>

          <div className="input__group--create">
            <input
              className="form__input_text--create"
              type="text"
              id="description"
              name="description"
              placeholder="Description"
            />
          </div>

          <div className="input__group--create">
            <input
              className="form__input_text--create"
              type="number"
              id="year"
              name="year"
              placeholder="Year"
              maxlength="4"
            />
          </div>
          <div className="input__group--create">
            <input
              className="form__input_text--create"
              type="number"
              id="imdb"
              name="imdb"
              maxLength="2"
              placeholder="IMDB"
            />
          </div>

          <div className="input__group--create">
            <input
              className="form__input_text--create"
              type="text"
              id="linkyt"
              name="linkyt"
              placeholder="Link Trailer Embed"
            />
          </div>
          <div>
            <input
              className="form__input_text--create"
              type="text"
              id="linkgameplay"
              name="linkgameplay"
              placeholder="Link Gameplay Embed (Opcional)"
            />
          </div>

          <div>
            <label>Genres: </label>
          </div>
          <div>
            <Select isMulti options={options} onChange={handleGenreOption} />
          </div>

          <div className="input__group--create">
            <input
              className="form__subbutton--create"
              type="submit"
              value="Create"
            />
          </div>
          <div className="form__group--create"></div>
        </form>
      </div>
    </div>
  )
}
