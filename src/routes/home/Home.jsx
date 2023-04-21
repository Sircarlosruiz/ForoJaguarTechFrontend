import { useContext, useEffect, useState } from "react";

import { PostContext } from "../../context/post.context";
import { UserContext } from "../../context/user.context";

import Posts from "../../components/posts/Posts";
import Category from "../../components/category/category.component";
import PostWrite from "../../components/post-write/post-write.component";

import "./Home.scss";

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
      <Category categories={categoriesList} />

      <div className="posts-container">
        <PostWrite currentUser={currentUser} />

        {Object.entries(postsList).map((item, idx) => (
          <Posts key={idx} posts={item} user={currentUser} />
        ))}
      </div>

      <div className="publicity-container">publicidad del email</div>
    </div>
  );
};

export default Home;
