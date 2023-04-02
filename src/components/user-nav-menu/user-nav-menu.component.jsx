import { Link } from "react-router-dom";
import UserIcon from "../user-icon/user.icon.component";

import "./user-nav-menu.styles.scss";

const UserMenu = ({ user, show, hideMenu, logOutUser }) => {
  return (
    show && (
      <div onMouseLeave={hideMenu} className="modal-container userMenu">
        <section className="user-header">
          <UserIcon user={user} photoSize="4rem" />

          <div className="user-info">
            <span className="user-name">{user.displayName}</span>
            <span className="user-email">{user.email}</span>
          </div>

          <div onClick={logOutUser}>
          <p className="logOut">Cerrar Sesion</p>
          </div>
        </section>
      </div>
    )
  );
};

export default UserMenu;
