import { Link } from "react-router-dom";
import { Api } from "../../../api/Api";
import InputMask from "react-input-mask";
import './CreateUser.css'

export default function CreateUser(props) {
  const handleSubmit = async (event) => {
    event.preventDefault();

    const name = event.target.name.value;
    const surname = event.target.surname.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    const cpf = event.target.cpf.value;

    const payload = {
      name,
      surname,
      email,
      password,
      cpf,
    };

    const response = await Api.buildApiPostRequest(
      Api.createUserUrl(),
      payload
    );

    const body = await response.json();

    if (response.status === 201) {
      const id = body.idUser;

      props.history.push("/");
    } else {
    }
  };

  return (
    <div className="container">
    <div className="form__card--create">
      <form onSubmit={handleSubmit}>
        <div className="input__group--create">
          <input
            className="form__input_text--create"
            type="text"
            id="name"
            name="name"
            placeholder="Name"
          />
        </div>
        <div className="input__group--create">
          <input
            className="form__input_text--create"
            type="text"
            id="surname"
            name="surname"
            placeholder="Surname"
          />
        </div>

        <div className="input__group--create">
          <input
            className="form__input_text--create"
            type="text"
            id="email"
            name="email"
            placeholder="E-mail"
          />
        </div>

        <div className="input__group--create">
          <input
            className="form__input_text--create"
            type="password"
            id="password"
            name="password"
            placeholder="Password"
          />
        </div>
        <div className="input__group--create">
          <InputMask mask="999.999.999-99"
            className="form__input_text--create"
            type="text"
            id="cpf"
            name="cpf"
            placeholder="CPF"
          />
        </div>

        <div className="input__group--create">
          <input
            className="form__subbutton--create"
            type="submit"
            value="Confirm"
          />
        </div>
        <div  className="form__group--create">
        </div>
      </form>
    </div>
  </div>
  );
}
