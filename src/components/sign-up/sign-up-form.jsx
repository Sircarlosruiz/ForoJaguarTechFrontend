import { useState } from "react";
import axios from "axios";

import "./sign-up-form.scss";

const SignUp = () => {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmation, setConfirmation] = useState("");

  const handleRegister = () => {
    if (
      !name ||
      !lastName ||
      !email ||
      !username ||
      !password ||
      !confirmation
    ) {
      alert("No blanks!");
      return;
    }
    if (password !== confirmation) {
      alert("passwords must match");
      return;
    }
    axios
      .post("http://localhost:8000/register/", {
        first_name: name,
        last_name: lastName,
        username: username,
        password: password,
        email: email,
      })
      .then(function (response) {
        const token = `Token ${response.data.token}`;
        window.localStorage.setItem("token", token);
        document.location.reload();
      })
      .catch(function (error) {
        console.log(error);
        error.response.data.username
          ? alert(error.response.data.username)
          : console.log("username passed");
        error.response.data.email
          ? alert(error.response.data.email)
          : console.log("email passed");
      });
  };

  return (
    <div className="register">
      <p className="title">Registrarse</p>

      <div className="form">
        <p>Primer Nombre</p>
        <input
          onChange={(e) => setName(e.target.value)}
          type="text"
          placeholder="Carlos"
        ></input>

        <p>Segundo Nombre</p>
        <input
          onChange={(e) => setLastName(e.target.value)}
          type="text"
          placeholder="Ruiz"
        ></input>

        <p>Correo Electronico</p>
        <input
          onChange={(e) => setEmail(e.target.value)}
          type="text"
          placeholder="ceruiz@uamv.edu.ni"
        ></input>

        <p>Nombre de usuario</p>
        <input
          onChange={(e) => setUsername(e.target.value)}
          type="text"
          placeholder="cruiz"
        ></input>

        <p>Contraseña</p>
        <input
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="********"
        ></input>

        <p>Verifica la contraseña</p>
        <input
          onChange={(e) => setConfirmation(e.target.value)}
          type="password"
          placeholder="********"
        ></input>
      </div>

      <button onClick={handleRegister} className="btn">
        Siguiente
      </button>
    </div>
  );
};

export default SignUp;
