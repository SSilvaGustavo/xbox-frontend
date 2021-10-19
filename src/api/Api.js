import { JwtHandler } from "../components/shared/jwt-handler/JwtHandler";

export const Api = {
  devUrl: "http://localhost:3000",

  loginUrl: () => Api.devUrl + "/login",

  // User Endpoint

  readAllUserUrl: () => Api.devUrl + "/user",

  readByUserId: (id) => Api.devUrl + "/user/" + id,

  createUserUrl: (id) => Api.devUrl + "/user/" + id,

  updateUserUrl: (id) => Api.devUrl + "/user/" + id,

  deleteUserUrl: (id) => Api.devUrl + "/user/" + id,

  // Profile Endpoint

  readAllProfileUrl: () => Api.devUrl + "/profile",

  readByProfileId: (id) => Api.devUrl + "/profile/" + id,

  createProfileUrl: (id) => Api.devUrl + "/profile/" + id,

  updateProfileUrl: (id) => Api.devUrl + "/profile/" + id,

  deleteProfileUrl: (id) => Api.devUrl + "/profile/" + id,

  // Games Endpoint

  readAllGamesUrl: () => Api.devUrl + "/games",

  readByGamesId: (id) => Api.devUrl + "/games/" + id,

  createGamesUrl: (id) => Api.devUrl + "/games/" + id,

  updateGamesUrl: (id) => Api.devUrl + "/games/" + id,

  deleteGamesUrl: (id) => Api.devUrl + "/games/" + id,

  // Genre Endpoint

  readAllGenreUrl: () => Api.devUrl + "/genre",

  readByGenreId: (id) => Api.devUrl + "/genre/" + id,

  createGenreUrl: (id) => Api.devUrl + "/genre/" + id,

  updateGenreUrl: (id) => Api.devUrl + "/genre/" + id,

  deleteGenreUrl: (id) => Api.devUrl + "/genre/" + id,

  //Auth Header

  authHeader: () => ({
    Authorization: "Bearer " + JwtHandler.getJwt(),
  }),

  //BUILD'S

  //GET
  buildApiGetRequest: (url, auth) =>
    fetch(url, {
      method: "GET",
      headers: auth ? new Headers(Api.authHeader()) : undefined,
    }),

  //POST
  buildApiPostRequest: (url, body, auth) =>
    fetch(url, {
      method: "POST",
      headers: new Headers({
        "Content-Type": "application/json",
        ...(auth ? Api.authHeader() : {}),
      }),
      body: JSON.stringify(body),
    }),

  //PATCH
  buildApiPatchRequest: (url, body, auth) =>
    fetch(url, {
      method: "PATCH",
      headers: new Headers({
        "Content-Type": "application/json",
        ...(auth ? Api.authHeader() : {}),
      }),
      body: JSON.stringify(body),
    }),

  //DELETE
  buildApiDeleteRequest: (url, auth) => {
    fetch(url, {
      method: "DELETE",
      headers: auth ? new Headers(Api.authHeader()) : undefined,
    });
  },
};
