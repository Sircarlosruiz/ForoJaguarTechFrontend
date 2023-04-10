import { useState } from "react";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import "./sign-in.component.scss";
import {
  signInUserWithEmailAndPassword,
  signInUserWithGooglePopup,
  createUserDocFromAuth,
  FIREBASE_ERROR_CODES,
} from "../../utils/firebase/firebase.utils";


const defaultFormFields = {
  email: "",
  password: "",
};

const { NOT_ALLOWED, NOT_FOUND, WRONG_PASSWORD } = FIREBASE_ERROR_CODES;

// import backgroungImg from "../../assets/logo.png";

const SignIn = ({ className, hideModal, setCurrentUser }) => {
  const isAuthPage = window.location.pathname.includes("sign-up");
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const logUserGooglePopUp = async () => {
    try {
      const userAuth = await signInUserWithGooglePopup();
      await createUserDocFromAuth(userAuth.user);
    } catch (error) {
      switch (error.code) {
        case NOT_FOUND:
          alert("NOT_FOUND");
          break;
        case WRONG_PASSWORD:
          alert("WRONG PASS");
          break;
        case NOT_ALLOWED:
          alert("YOU SHALL NOT PASS");
          break;
        default:
          console.log(error);
      }
    }
  };

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const handleSubmit = async () => {
    try {
      const user = await signInUserWithEmailAndPassword(email, password);
      setCurrentUser(user);
    } catch (error) {
      switch (error.code) {
        case NOT_FOUND:
          alert("NOT_FOUND");
          break;
        case WRONG_PASSWORD:
          alert("WRONG PASS");
          break;
        default:
          console.log(error);
      }
    }
    setFormFields(defaultFormFields);
  };

  return (
    <div className="login">
      {/* <img src={backgroungImg} alt="logo" className="backgroung-img" /> */}
      <div className="login-form">
        <div className="header-form">
          <p className="title-form">JaguarTech</p>
          <p className="subtitle-form">
            Un lugar para compartir conocimientos y entender mejor tus clases
          </p>
        </div>

        <div className="body-form">
          <div className="login-action">
            <div className="email-input">
              <p className="email-text">Correo electronico</p>
              <input
                // value={username}
                // onChange={(e) => setUsername(e.target.value)}
                className="email-input"
              ></input>
            </div>

            <div className="password-input">
              <p className="password-text">Contraseña</p>
              <input
                // value={password}
                type="password"
                // onChange={(e) => setPassword(e.target.value)}
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
              // onClick={handleLogin}
            ></input>
          </div>

          <div className="social-login">
            <p className="condition-text">
              Al continuar indicas que aceptas las condiciones de sevicio y la
              politica de privacidad de JaguarTech.
            </p>
            <div className="button btn-google" >
              <button onClick={logUserGooglePopUp}>
                <FcGoogle className="google-icon" />
                <p className="google-text">Continuar con Google</p>
              </button>
            </div>
            
            {!isAuthPage && (
              <div className="sign-up">
                <Link to={"/sign-up"}>
                  <p className="email-login">
                    Registrate con el correo electronico
                  </p>
                </Link>
              </div>
            )}
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
