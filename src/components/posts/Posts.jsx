import React  from "react";
import {
  AiOutlineUser,
  AiFillLike,
  AiFillDislike,
  AiOutlineReload,
} from "react-icons/ai";
import { BsFillChatSquareDotsFill } from "react-icons/bs";

import "./Posts.scss";
import UserIcon from "../user-icon/user.icon.component";

const Posts = ({ _, posts, user }) => {
  let postsLists = posts[1];
  let [categories] = postsLists.categories;
  let content = postsLists.content;
  let title = postsLists.title;


  return (
    <div className="post-container">

      <div className="header-post">

      {!user ? (
        <div> <AiOutlineUser/> </div>
      ) : (<UserIcon user={user}/>)}

        <div class="post-user">

          <div className="name-user">{!user ? <>Nombre de estudiante</> : user.displayName}</div>

          <div className="status-user">Estudiante - Justo Ahora</div>

        </div>

      </div>

      <div class="post-content">

        <div className="categories-post">{categories}</div>

        <div className="title-post">{title}</div>

        <div className="content-post">{content}</div>

      </div>

      <div className="action-post">
        <div className="interaction-post">
          <AiFillLike />
          <AiFillDislike />
        </div>
        <div className="more-post">
          <BsFillChatSquareDotsFill />
          <AiOutlineReload />
        </div>
      </div>

    </div>
  );
};

export default Posts;
