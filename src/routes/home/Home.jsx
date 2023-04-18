import { useContext, useEffect, useState } from "react";
import Posts from "../../components/posts/Posts";

import { AiOutlineUser, AiOutlineQuestion } from "react-icons/ai";
import { BsPencilSquare } from "react-icons/bs";
import { FaPenFancy } from "react-icons/fa";
import { PostContext } from "../../context/post.context";

import UserIcon from "../../components/user-icon/user.icon.component";
import "./Home.scss";
import { UserContext } from "../../context/user.context";
import Category from "../../components/category/category.component";

const Home = () => {
  const [postsList, setpostsList] = useState([]);
  const [categoriesList, setCategoriesList] = useState([]);

  const { currentUser } = useContext(UserContext);
  const { posts } = useContext(PostContext);
  const { categories } = useContext(PostContext);

  useEffect(() => {
    let post = posts.map((post) => ({
      isStudent: post.isStudent,
      creator: post.creator,
      categories: post.categories,
      content: post.content,
      isActive: post.isActive,
      title: post.title,
    }));

    let category = categories.map((categories) => ({
      name: categories.name,
      followers: categories.followers,
    }));

    setpostsList(post);
    setCategoriesList(category);
  }, [posts, categories]);

  return (
    <div className="home-container">
      <Category categories={categoriesList}/>

      <div className="posts-container">
        <div className="write-post">
          <div className="perfil-writer">
            {!currentUser ? (
              <div className="user-icon">
                <AiOutlineUser />
              </div>
            ) : (
              <UserIcon user={currentUser} className="user-icon" />
            )}

            <div className="input-post">
              <input
                placeholder="¿Qué quieres preguntar o compartir?"
                className="input-text-post"
              />
            </div>
          </div>

          <div className="action-writer">
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
        </div>
        
      {Object.entries(postsList).map((item, idx) => (
        <Posts key={idx} posts={item} user={currentUser} />
      ))}

      </div>

      <div className="email-container">contenedor del email</div>

    </div>
  );
};

export default Home;
