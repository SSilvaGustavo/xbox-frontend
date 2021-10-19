import { Api } from "../../api/Api";
import { JwtHandler } from "../../components/shared/jwt-handler/JwtHandler";


export default function Login(props) {
    const handleSubmit = async event => {
        event.preventDefault();

        const email = event.target.email.value
        const password = event.target.password.value
        

        const payload = {
            email,
            password
        };

        const response = await Api.buildApiPostRequest(Api.loginUrl(), payload);

        const result = await response.json();

        if (response.status === 201){
            const accessToken  = result.accessToken;

            JwtHandler.setJwt({ accessToken });

            props.history.push('/')
        }else{

        }
    };


    return(
        <div>
            <form className ="form" onSubmit={handleSubmit}>
                    <div><label class="form__label" htmlFor="email">Email</label></div>
                    <div><input className="form__input" type="text" id="email" name="email"/></div>

                    <div><label class="form__label" htmlFor="password">Password</label></div>
                    <div><input className="form__input" type="text" id="password" name="password"/></div>

                    <div><input className="form__submit button--primary" type="submit" value="Login"/></div>
            </form>
        </div>
    )

}