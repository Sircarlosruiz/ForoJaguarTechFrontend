import { useCallback, useContext, useEffect, useRef, useState } from "react";
// import logo from '../assets/logos/logo.jpg'
import { Link, Outlet } from "react-router-dom";
import {
  AiOutlineHome,
  AiOutlineSearch,
  AiOutlineUser,
  AiOutlineQuestion,
} from "react-icons/ai";
import { FaClipboardList } from "react-icons/fa";
import { MdWorkspacesFilled } from "react-icons/md";
import { IoMdNotifications } from "react-icons/io";
import { UserContext } from "../../context/user.context";

import ModalContainer from "../../components/modal-container/modal-container.component";
import UserIcon from "../../components/user-icon/user.icon.component";
import UserMenu from "../../components/user-nav-menu/user-nav-menu.component";
import SignIn from "../../components/sign-in/sign-in.component";
import { logOutUser } from "../../utils/firebase/firebase.utils";
import { useOnClickOutside } from "../../components/utils/helpers";

import "./Navigation-Header.component.scss";

const NavigationHeader = () => {
  const [showSignInModal, setShowSignInModal] = useState(false);
  // const [showSignUpModal, setShowSignUpModal] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);

  const { currentUser } = useContext(UserContext);

  const signInModalRef = useRef();

  //Effects
  useEffect(() => {
    currentUser && setShowSignInModal(false);

  }, [currentUser]);

  //callbacks functions
  const hideMenu = useCallback(() => {
    setTimeout(() => setShowUserMenu(false), 600);
  }, []);

  const showMenu = useCallback(() => {
    setShowUserMenu(true);
  }, []);

  const hideModal = useCallback(({ target }) => {
    //Do nothing If the click comes from any link in nav component
    if (target.closest(".link")) return;
    setShowSignInModal(false);
  }, []);

  //Event handlers
  const handleLogOutUser = async () => {
    try {
      await logOutUser();
    } catch (error) {
      console.error(error);
    }
  };

  useOnClickOutside(signInModalRef, hideModal);
  return (
    <div className="navigation">

      <div className="menu-container">

      <Link to={"/"}>
        <div className="logo">JaguarTech</div>
      </Link>

        <div className="icon-home">
          <AiOutlineHome />
        </div>

        <div className="icon-follows">
          <FaClipboardList />
        </div>

        <div className="icon-spaces">
          <MdWorkspacesFilled />
        </div>

        <div className="icon-notifications">
          <IoMdNotifications />
        </div>

        <div className="search-bar">
          <AiOutlineSearch className="icon-search-bar" />
          <input type="text" name="input-search" className="input-search-bar" />
        </div>

        {!currentUser ? (
          <div
            onClick={() => setShowSignInModal(!showSignInModal)}
            className="icon-user"
          >
            <AiOutlineUser />
            <p>Cuenta</p>
          </div>
        ) : (
          <>
            <UserIcon user={currentUser} showMenu={showMenu} />
            <UserMenu
              show={showUserMenu}
              user={currentUser}
              hideMenu={hideMenu}
              logOutUser={handleLogOutUser}
            />
          </>
        )}

        <div className="add-question">
          <AiOutlineQuestion className="icon-question-mark" />
          <label className="text-question">Añade tu pregunta</label>
        </div>

        <ModalContainer
          show={showSignInModal}
          className={"modal-container signIn"}
          component={<SignIn/>}
          modalRef={signInModalRef}
        />

      </div>

      <Outlet />
      
    </div>
  );
};

export default NavigationHeader;
