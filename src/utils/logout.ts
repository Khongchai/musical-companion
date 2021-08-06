import { client } from "./apolloClient";

export default function logout() {
  localStorage.removeItem("login-token");
  client.resetStore();
}
