import { useContext, useEffect } from "react";
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
import {UserContext} from '../../context/user.context'

import "./Navigation-Header.component.scss";



const NavigationHeader = () => {
  const {currentUser}= useContext(UserContext);


  useEffect(() => {
    // currentUser && n
  
    return () => {
      
    }
  }, [currentUser])
  
  
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
