import { useState, useRef, useCallback } from "react";
import { Link } from "react-router-dom";
import Axios from "axios";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { useOnClickOutside } from "../utils/helpers";

import backgroungImg from "../../assets/logo.png";

import ModalContainer from "../modal-container/modal-container.component";
import SignUp from "../sign-up/sign-up-form";

import "./sign-in.component.scss";

const SignIn = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showRegisterModal, setShowRegisterModal] = useState(false);

  const registerModalRef = useRef();

  const hideRegisterModal = useCallback(({ target }) => {
    if (target.closest(".link")) return;
    setShowRegisterModal(false);
  }, []);

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

  useOnClickOutside(registerModalRef, hideRegisterModal);
  return (
    <div className="login">
      <img src={backgroungImg} alt="logo" className="backgroung-img" />
      <div className="login-form">
        <div className="header-form">
          <p className="tittle-form">JaguarTech</p>
          <p className="subtitle-form">
            Un lugar para compartir conocimientos y entender mejor tus clases
          </p>
        </div>
        <div className="body-form">
          <p className="login-text">Iniciar Sesion</p>

          <div className="email-form">
            <p className="email-text">Correo electronico</p>
            <input
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="email-input"
            ></input>
          </div>

          <div className="password-form">
            <p className="password-text">Contraseña</p>
            <input
              value={password}
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              className="password-input"
            ></input>
          </div>

          <div className="action-form">
            <p className="forgot-password">¿Has olvidado la contraseña?</p>
            <input
              className="btn-login"
              type="button"
              value="Iniciar Sesion"
              onClick={handleLogin}
            ></input>
          </div>

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
          <p
            onClick={() => setShowRegisterModal(!showRegisterModal)}
            className="email-login"
          >
            Registrate con el correo electronico
          </p>

          <div className="sesion-closed">
            <p>
              Has cerrado sesion en este navegador pero sigues conectado con
              otros navegadores
            </p>
            <a href="/">Cerrar sesion en todos los navegadores</a>
          </div>
        </div>
        <div className="footer-form">
          <p className="footer-text">
            Sobre este espacio - Empleo - Privacidad - Condiciones - Contacto -
            Idiomas - Tus opciones de anuncios - Prensa - JaguarTech, 2023
          </p>
        </div>
      </div>
      <ModalContainer
        show={showRegisterModal}
        modalRef={registerModalRef}
        component={<SignUp />}
        className={"modal-container darken"}
      />
    </div>
  );
};

export default SignIn;
