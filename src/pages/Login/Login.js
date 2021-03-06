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

    if (response.status === 200) {
      const accessToken = result.accessToken;

      const UserID = result.UserID;

      JwtHandler.setJwt(accessToken);

      localStorage.setItem("ID_USER", UserID)

      props.history.push("/profiles");
    } else {
    } 
  };

  return (
    <div className="container">
      <div className="form__card">
        <form onSubmit={handleSubmit}>
          <div className="input__group">
            <input
              className="form__input_text"
              type="text"
              id="email"
              name="email"
              placeholder="E-mail"
            />
          </div>
          <div className="input__group">
            <input
              className="form__input_text"
              type="password"
              id="password"
              name="password"
              placeholder="Password"
            />
          </div>

          <div className="input__group">
            <input
              className="form__subbutton"
              type="submit"
              value="Login"
            />
          </div>
          <div  className="form__group"> 
          <button  className="form__button"> 
          <Link to="/user/create">Create New Account</Link>
          </button>
          </div>
        </form>
      </div>
    </div>
  );
}
