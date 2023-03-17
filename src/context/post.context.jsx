import { createContext, useEffect, useState } from "react";

export const PostContext = createContext({
  posts: [],
});

export const PostProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);
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

    getPosts();
  }, []);

  value = ({
    posts,
  })


  return <PostContext.Provider value={value}>{children}</PostContext.Provider>;
};
