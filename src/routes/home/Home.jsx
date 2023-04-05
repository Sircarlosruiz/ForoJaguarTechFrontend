import { useContext, useEffect, useState } from "react";
import Posts from "../../components/posts/Posts";

import { AiOutlineUser, AiOutlineQuestion } from "react-icons/ai";
import { BsPencilSquare } from "react-icons/bs";
import { FaPenFancy } from "react-icons/fa";
import { PostContext } from "../../context/post.context";

import UserIcon from "../../components/user-icon/user.icon.component";
import "./Home.scss";
import { UserContext } from "../../context/user.context";

const Home = () => {
  const [postsList, setpostsList] = useState([]);


  const { currentUser } = useContext(UserContext);
  const { posts } = useContext(PostContext);

  useEffect(() => {
    let post = posts.map((x) => ({
      isStudent: x.isStudent,
      creator: x.creator,
      categories: x.categories,
      content: x.content,
      isActive: x.isActive,
      title: x.title,
    }));

    setpostsList(post);
  }, [posts]);

  return (
    <div className="navigation-container">

      <div className="home-container">

        <div className="write-post-icon">

          {/* <div className="icon-user">
            <AiOutlineUser className="icon-question-mark" />
          </div> */}

          {!currentUser ? (<div>
            <AiOutlineUser/>
          </div>) : (
            <UserIcon user={currentUser}/>
          )}

          <div className="input-icon">
            <textarea
              rows="4"
              cols="50"
              placeholder="¿Qué quieres preguntar o compartir?"
              className="input-text-post"
            />
          </div>

          <div className="question-icon">
            <AiOutlineQuestion className="icon-question-mark" />
            <label>Preguntar</label>
          </div>

          <div className="reply-icon">
            <BsPencilSquare className="icon-reply" />
            <label>Responder</label>
          </div>

          <div className="post-icon">
            <FaPenFancy className="icon-post" />
            <label>Publicación</label>
          </div>

        </div>

        {Object.entries(postsList).map((item, idx) => (
          <Posts key={idx} posts={item} user={currentUser}/>
        ))}

      </div>

    </div>
  );
};

export default Home;
