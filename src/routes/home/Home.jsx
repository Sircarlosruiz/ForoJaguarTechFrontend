import { useEffect, useState, useContext } from "react";
import "./Home.scss";
import Posts from "../../components/posts/Posts";
import Comments from "../../components/comments/Comments";
import Filters from "../../components/filters/Filters";
import { CategoriesContext } from "../../context/category.context";
import { PostContext } from "../../context/post.context";

import Axios from "axios";
import { AiOutlineUser, AiOutlineQuestion } from "react-icons/ai";
import { BsPencilSquare } from "react-icons/bs";
import { FaPenFancy } from "react-icons/fa";

const Home = () => {
  const [showComments, setShowComments] = useState(false);
  const [post, setPost] = useState([]);

  // const { categories } = useContext(CategoriesContext);
  const { posts } = useContext(PostContext);
  // console.table(categories);
  console.table(posts);

  const sortedPosts = posts.sort((a, b) => b.likes - a.likes);


  //  useEffect(() => {
  //     const fetchData = async () => {
  //        try {
  //           Axios.get('http://localhost:8000/all-posts/')
  //              .then(function (response) {
  //                 const postArray = response.data
  //                 postArray.forEach((post) => {
  //                    let newPost = {}
  //                    Axios.post('http://localhost:8000/postData/', {
  //                       post_id: post.id
  //                    }).then(function (response) {
  //                       newPost = {
  //                          ...post,
  //                          likes: response.data.likes,
  //                          dislikes: response.data.dislikes,
  //                          comments: response.data.comments
  //                       }
  //                       setPosts(!post.isStudent ? posts => [...posts, newPost] : posts => [...posts])
  //                       setAllPosts(!post.isStudent ? posts => [...posts, newPost] : posts => [...posts])
  //                    }).catch(function (error) {
  //                       console.log(error)
  //                    });
  //                 })
  //              }).catch(function (error) {
  //                 console.log(error);
  //              });
  //        } catch (error) {
  //           console.error(error)
  //        }
  //     }
  //     fetchData()
  //  }, [currentUser])

  // useEffect(() => {
  //   if (activeFilter.length === 0) {
  //     setPosts(allPosts);
  //   }
  //   activeFilter.length === 0
  //     ? setPosts(allPosts)
  //     : console.log(activeFilter[0].name);
  //   if (activeFilter.length === 1) {
  //     let array = [];
  //     setPosts(allPosts);
  //     allPosts.forEach((post) => {
  //       const categories = post.categories;
  //       activeFilter.forEach((category) => {
  //         if (categories.indexOf(category.name) !== -1) {
  //           console.log(post);
  //           array.unshift(post);
  //         }
  //       });
  //     });
  //     setPosts(array);
  //   }
  // }, [activeFilter, allPosts, filteredPosts]);

  // useEffect(() => {}, [posts]);

  return (
    <div className="write-post-container">
      <div className="home-container">
        <div className="icon-user">
          <AiOutlineUser className="icon-question-mark" />
        </div>
        <div className="input-container">
          <textarea
            rows="4"
            cols="50"
            placeholder="¿Qué quieres preguntar o compartir?"
            className="input-text-post"
          />
        </div>
        <div className="question-container">
          <AiOutlineQuestion className="icon-question-mark" />
          <label>Preguntar</label>
        </div>
        <div className="reply-container">
          <BsPencilSquare className="icon-reply" />
          <label>Responder</label>
        </div>
        <div className="post-container">
          <FaPenFancy className="icon-post" />
          <label>Publicación</label>
        </div>
      </div>
      <div className="sand-box">
        {!showComments && (
          <>
            <div>
              <h1>Here's what's new!</h1>
              {sortedPosts.length > 0 &&
                posts.map((post) => (
                  <Posts
                    setPost={setPost}
                    showCommets={showComments}
                    setShowComments={setShowComments}
                    key={post.id}
                    post={post}
                  />
                ))}
              {sortedPosts.length === 0 && <h1>nooOF</h1>}
            </div>
          </>
        )}
        {showComments && (
          <Comments currentPost={post} setShowComments={setShowComments} />
        )}
      </div>
    </div>
  );
};

export default Home;
