export default function redirectAfterTokenAuth(token: string) {
  localStorage.setItem("login-token", token);
  window.location.reload();
}
