import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = ({ handleToken }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        "https://site--marvel-backend--6826hc4vnxlk.code.run/user/login",
        {
          email: email,
          password: password,
        }
      );
      console.log(response.data);
      //   Cookies.set("vinted-token", response.data.token, { expires: 15 });
      //   setToken(response.data.token);
      handleToken(response.data.token);
      navigate("/");
    } catch (error) {
      console.log(error.response.data);
    }
  };
  return (
    <main>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Adresse email"
          name="email"
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
          }}
        />
        <input
          type="password"
          placeholder="Mot de passe"
          name="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        <input type="submit" value="Enter the Marvel Multiverse ⚡️" />
      </form>
    </main>
  );
};

export default Login;
