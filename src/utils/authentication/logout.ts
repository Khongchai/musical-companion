export default function logout() {
  localStorage.removeItem("login-token");
  window.location.reload();
}
