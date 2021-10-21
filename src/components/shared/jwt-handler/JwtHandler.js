export const JwtHandler = {
    JWT_KEY: "JWT",

    onChangeEvent: new CustomEvent("onJwtChange"),

    onChange: () => {
        window.dispatchEvent(JwtHandler.onChangeEvent);
    },

    setJwt: value => {
        localStorage.setItem(JwtHandler.JWT_KEY, value);

        JwtHandler.onChange();
    },

    getJwt: () => {
        return localStorage.getItem(JwtHandler.JWT_KEY)
    },

    clearJwt: () => {
        localStorage.removeItem(JwtHandler.JWT_KEY);

        JwtHandler.onChange();
    },

    isJwtValid: () => Boolean(JwtHandler.getJwt()),
}