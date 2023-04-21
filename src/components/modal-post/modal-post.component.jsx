import React from "react";

import UserIcon from "../user-icon/user.icon.component";

import {
  AiFillCaretRight,
  AiOutlineDown,
} from "react-icons/ai";
import { BsFillPeopleFill } from "react-icons/bs";
import { AiOutlineUser } from "react-icons/ai";

import './modal-post.styles.scss' 

const ModalPost = ({ currentUser }) => {
  return (
    <section className="modal-post">
      <div className="body-post">

        <div className="select-action">
          <p>Añadir pregunta</p>
          <p>Crear publicación</p>
        </div>

        <div className="advertising">
          <p>Consejos para recibir buenas respuestas enseguida</p>
          <ul>
            <li>Asegúrate de que tu pregunta no se haya hecho antes</li>
            <li>Haz que tu pregunta sea concisa y que se ciña al tema</li>
            <li>Comprueba que no haya errores ortográficos o gramaticales</li>
          </ul>
        </div>

        <div className="select-privacity">
          {!currentUser ? (
            <div className="user-icon">
              <AiOutlineUser />
            </div>
          ) : (
            <UserIcon user={currentUser} className="user-icon" />
          )}

          <AiFillCaretRight />

          <div className="select-public">
            <BsFillPeopleFill />
            <label>Público</label>
            <AiOutlineDown />
          </div>
        </div>

        <div className="input-modal">
          <input
            type="text"
            id="input-post"
            name="input-post"
            placeholder="Empieza la pregunta con ¿Qué?, ¿Cómo?, ¿Por qué?, etc. "
          />
        </div>

      </div>
      
      <div className="footer-post">
        <input
          type="button"
          onClick={() => console.log("hola mundo")}
          value="Cancelar"
          className="btn-cancell"
        />
        <input
          type="button"
          onClick={() => console.log("hola mundo")}
          value="Añadir pregunta"
          className="btn-ask"
        />
      </div>
    </section>
  );
};

export default ModalPost;
