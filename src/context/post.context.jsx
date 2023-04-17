import { createContext, useEffect, useState } from "react";
import { removeDuplicatesByKey } from "../components/utils/helpers";

export const PostContext = createContext({
  posts: [],
  categories: [],
});

export const PostProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);
  const [categories, setcategories] = useState([]);
  let value = { posts, categories };

  useEffect(() => {
    const getPosts = async () => {
      const response = await fetch("http://localhost:8000/all-posts");
      const posts = await response.json();
      setPosts(posts);
    };

    const getCategories = async () => {
      const response = await fetch("http://localhost:8000/all-categories");
      const categories = await response.json();
      setcategories(categories);
    };

    getPosts();
    getCategories();
  }, []);

  useEffect(() => {
    if (posts.length > 0 && categories.length > 0) {

      let post = posts.map((item) => ({
        id: item.id,
        isStudent: item.isStudent,
        creator: item.creator,
        categories: item.categories,
        title: item.title,
        content: item.content,
        timestamp: item.timestamp,
        isActive: item.isActive,
      }));

      let category = categories.map((item) => ({
        id: item.id,
        name: item.name,
        followers: item.followers
      }));

      post     = removeDuplicatesByKey(post, Object.keys(post[0])[0]);
      category = removeDuplicatesByKey(category, Object.keys(category[0])[0]);

      setPosts(post);
      setcategories(category)

    } else return;
  }, []);

  return <PostContext.Provider value={value}>{children}</PostContext.Provider>;
};
