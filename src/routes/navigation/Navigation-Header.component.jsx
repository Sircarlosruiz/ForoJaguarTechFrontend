import { useCallback, useContext, useEffect, useState } from "react";
// import logo from '../assets/logos/logo.jpg'
import { Outlet } from "react-router-dom";
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

import "./Navigation-Header.component.scss";
import UserIcon from "../../components/user-icon/user.icon.component";
import UserMenu from "../../components/user-nav-menu/user-nav-menu.component";
import { logOutUser } from "../../utils/firebase/firebase.utils";

const NavigationHeader = () => {
  const [showSignInModal, setShowSignInModal] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);

  const { currentUser } = useContext(UserContext);

  console.log(currentUser);

  //Effects
  useEffect(() => {
    currentUser && setShowSignInModal(false);
  }, [currentUser]);

  //callbacks functions
  const showMenu = useCallback(() => {
    setShowUserMenu(true)
  }, [])

  const hideMenu = useCallback(() => {
    setTimeout(() => setShowUserMenu(false), 600)
  });

  //Event handlers
  const handleLogOutUser = async () => {
    try {
      await logOutUser();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="navigation">
      <div className="menu-container">
        <div className="logo">JaguarTech</div>

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
          <div className="icon-user">
            <AiOutlineUser />
          </div>
        ) : (
          <>
            <UserIcon user={currentUser} showMenu={showMenu} />
            <UserMenu
              show={showUserMenu}
              logOutUser={handleLogOutUser}
              hideMenu={hideMenu}
              user={currentUser}
            />
          </>
        )}

        <div className="add-question">
          <label className="text-question">Añade tu pregunta</label>
          <AiOutlineQuestion className="icon-question-mark" />
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default NavigationHeader;
