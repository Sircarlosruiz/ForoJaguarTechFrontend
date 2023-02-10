import { createContext, useEffect, useState } from "react";

export const PostContext = createContext({
  posts: [],
});

export const PostProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);
  const value = { posts };

  useEffect(() => {
    const getPosts = async() => {
      const response = await fetch("http://localhost:8000/all-posts");
    //   const posts = await response.json();
      setPosts(response);
    //   console.log(response);
    //   console.log(response);
      console.log(posts);
    };

    getPosts();
  }, []);

  return <PostContext.Provider value={value}>{children}</PostContext.Provider>;
};
