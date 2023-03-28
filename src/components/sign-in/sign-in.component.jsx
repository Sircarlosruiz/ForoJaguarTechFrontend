import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import Axios from "axios";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";

import { UserContext } from "../../context/user.context";

import backgroungImg from "../../assets/logo.png";

import "./sign-in.component.scss";

const SignIn = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const {login} = useContext(UserContext)

  console.log(login);

  const handleLogin = () => {
    console.log({
      username: username,
      password: password,
    });
    if (!username || !password) {
      alert("No blanks!");
      return;
    }
    Axios.post("http://localhost:8000/login/", {
      username: username,
      password: password,
    })
      .then(function (response) {
        const token = `Token ${response.data.token}`;
        window.localStorage.setItem("token", token);
        window.localStorage.setItem("isLoggedIn", "true");
        document.location.reload();
      })
      .catch(function (error) {
        console.log(error);
        error.response.data.non_field_errors
          ? alert(error.response.data.non_field_errors)
          : console.log("credentials are okay");
      });
  };

  return (
    <div className="login">
      <img src={backgroungImg} alt="logo" className="backgroung-img" />
      <div className="login-form">
        <div className="header-form">
          <p className="title-form">JaguarTech</p>
          <p className="subtitle-form">
            Un lugar para compartir conocimientos y entender mejor tus clases
          </p>
        </div>

        <div className="body-form">
          <div className="login-action">
            <p className="login-text">Iniciar Sesion</p>

            <div className="email-input">
              <p className="email-text">Correo electronico</p>
              <input
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="email-input"
              ></input>
            </div>

            <div className="password-input">
              <p className="password-text">Contraseña</p>
              <input
                value={password}
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                className="password-input"
              ></input>
            </div>

            <div className="sesion-closed">
              <p>
                Has cerrado sesion en este navegador pero sigues conectado con
                otros navegadores
              </p>
              <a href="/">Cerrar sesion en todos los navegadores</a>
            </div>

            <p className="forgot-password">¿Has olvidado la contraseña?</p>

            <input
              className="btn-login"
              type="button"
              value="Iniciar Sesion"
              onClick={handleLogin}
            ></input>
          </div>

          <div className="social-login">
            <p className="condition-text">
              Al continuar indicas que aceptas las condiciones de sevicio y la
              politica de privacidad de JaguarTech.
            </p>
            <div className="google-form">
              <FcGoogle className="google-icon" />
              <p className="google-text">Continuar con Google</p>
            </div>
            <div className="facebook-form">
              <FaFacebook className="facebook-icon" />
              <p className="facebook-text">Continuar con Facebook</p>
            </div>
            <Link to={"/sign-up"}>
              <p className="email-login">
                Registrate con el correo electronico
              </p>
            </Link>
          </div>
        </div>

        <div className="footer-form">
          <p className="footer-text">
            Sobre este espacio - Empleo - Privacidad - Condiciones - Contacto -
            Idiomas - Tus opciones de anuncios - Prensa - JaguarTech, 2023
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
