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

import "./Navigation-Header.component.scss";

const NavigationHeader = () => {
  // const handleLogout = () => {
  //   const token = window.localStorage.getItem("token");
  //   console.log(token);
  //   axios
  //     .post(
  //       "http://localhost:8000/logout/",
  //       {},
  //       {
  //         headers: {
  //           Authorization: token,
  //         },
  //       }
  //     )
  //     .then(function (response) {
  //       window.localStorage.removeItem("token");
  //       window.localStorage.removeItem("isLoggedIn");
  //       document.location.reload();
  //     })
  //     .catch(function (error) {
  //       console.log(error);
  //     });
  // };
  // const handleClick = () => {
  //   window.location.reload();
  // };

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
        <div className="icon-user">
          <AiOutlineUser />
        </div>
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
