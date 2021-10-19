import { useEffect } from "react";
import { Redirect } from "react-router";
import { JwtHandler } from "../../components/shared/jwt-handler/JwtHandler";


export default function Logout() {
    useEffect(() => {
        JwtHandler.clearJwt();
    });

    return <Redirect to="/login"/>
}