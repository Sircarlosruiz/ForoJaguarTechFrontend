import { useContext } from "react";
import Posts from "../../components/posts/Posts";

import { AiOutlineUser, AiOutlineQuestion } from "react-icons/ai";
import { BsPencilSquare } from "react-icons/bs";
import { FaPenFancy } from "react-icons/fa";
import { PostContext } from "../../context/post.context";

import "./Home.scss";

const Home = () => {
  const { posts } = useContext(PostContext);

  // console.log("====================================");
  // console.log(posts);
  // console.log("====================================");

  // console.log(posts);

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
      <div className="sand-box">{posts.map((x) => console.log(x.id))}</div>
    </div>
  );
};

export default Home;
