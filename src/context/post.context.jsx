import { createContext, useEffect, useState } from "react";

export const PostContext = createContext({
  posts: [],
  categories:[],
});

export const PostProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);
  const [categories, setcategories] = useState([])
  let value = [];
  
  useEffect(() => {
    const getPosts = async() => {
      const response = await fetch("http://localhost:8000/all-posts");
      const posts = await response.json();
      setPosts(posts);
    //   console.log(response);
    //   console.log(response);
      // console.log(posts);
    };

    const getCategories = async() => {
      const response = await fetch("http://localhost:8000/all-categories");
      const categories = await response.json();
      setcategories(categories);
    }

    getPosts();
    getCategories();
  }, []);

  value = ({
    posts,
    categories,
  })


  return <PostContext.Provider value={value}>{children}</PostContext.Provider>;
};
