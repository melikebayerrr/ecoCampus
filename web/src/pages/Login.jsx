
import api from "../services/api";

export default function Login() {
  const login = async () => {
    const res = await api.post("/auth/login", {
      email: "test@test.com",
      password: "1234"
    });
    localStorage.setItem("token", res.data.token);
    window.location.href = "/dashboard";
  };

  return (
    <div>
      <h2>Giriş Yap</h2>
      <button onClick={login}>Giriş</button>
    </div>
  );
}
