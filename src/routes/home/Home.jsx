import { useContext, useEffect, useState } from "react";
import Posts from "../../components/posts/Posts";

import { AiOutlineUser, AiOutlineQuestion } from "react-icons/ai";
import { BsPencilSquare } from "react-icons/bs";
import { FaPenFancy } from "react-icons/fa";
import { PostContext } from "../../context/post.context";

import "./Home.scss";

const Home = () => {
  const [postsList, setpostsList] = useState([]);
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
          <div className="icon-user">
            <AiOutlineUser className="icon-question-mark" />
          </div>
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
          <Posts key={idx} posts={item} />
        ))}
      </div>
    </div>
  );
};

export default Home;
