import { Link } from "react-router-dom";
import { Api } from "../../api/Api";
import { JwtHandler } from "../../components/shared/jwt-handler/JwtHandler";
import "./Login.css"

export default function Login(props) {
  const handleSubmit = async (event) => {
    event.preventDefault();

    const email = event.target.email.value;
    const password = event.target.password.value;

    const payload = {
      email,
      password,
    };

    const response = await Api.buildApiPostRequest(Api.loginUrl(), payload);

    const result = await response.json();

    if (response.status === 201) {
      const accessToken = result.accessToken;

      JwtHandler.setJwt({ accessToken });

      props.history.push("/");
    } else {
    } 
  };

  return (
    <div className="container">
      <div className="form__card">
        <form className="form" onSubmit={handleSubmit}>
          <div className="input__group">
            <input
              className="form__input"
              type="text"
              id="email"
              name="email"
              placeholder="E-mail"
            />
          </div>
          <div className="input__group">
            <input
              className="form__input"
              type="password"
              id="password"
              name="password"
              placeholder="Password"
            />
          </div>

          <div className="input__group">
            <input
              className="form__submit"
              type="submit"
              value="Login"
            />
          </div>
          <div  className="form__group"> 
          <button  className="form__button"> 
          <Link to="/">Create New Account</Link>
          </button>
          </div>
        </form>
      </div>
    </div>
  );
}
