import React from "react";

import "./Posts.scss";
// import Axios from "axios";


const Posts = () => {
  // const [likeFill, setLikeFill] = useState(false);
  // const [likeCount, setLikeCount] = useState(likes.length);
  // const [dislikeFill, setDislikeFill] = useState(false);
  // const [dislikeCount, setDislikeCount] = useState(dislikes.length);

  // const [currentPost, setCurrentPost] = useState(null);

  // // const likeHandler = (likes) => {
  //   if (!likeFill) {
  //     /*likes.indexOf(currentUser.id) === -1*/
  //     if (dislikeFill) {
  //       setDislikeCount(dislikeCount - 1);
  //       setDislikeFill(false);
  //       Axios.post("http://localhost:8000/dislike/", {
  //         undislike: true,
  //         post: post,
  //         user: currentUser,
  //       })
  //         .then(function (response) {
  //           console.log("boom");
  //         })
  //         .catch(function (error) {
  //           console.log(error);
  //         });
  //     }
  //     setLikeCount(likeCount + 1);
  //     setLikeFill(true);
  //     Axios.post("http://localhost:8000/like/", {
  //       unlike: false,
  //       post: post,
  //       user: currentUser,
  //     })
  //       .then(function (response) {
  //         console.log("boom");
  //       })
  //       .catch(function (error) {
  //         console.log(error);
  //       });
  //   } else {
  //     setLikeCount(likeCount - 1);
  //     setLikeFill(false);
  //     Axios.post("http://localhost:8000/like/", {
  //       unlike: true,
  //       post: post,
  //       user: currentUser,
  //     })
  //       .then(function (response) {
  //         console.log("boom");
  //       })
  //       .catch(function (error) {
  //         console.log(error);
  //       });
  //   }
  //   console.log(likes);
  // };

  // const dislikeHandler = (dislikes) => {
  //   if (!dislikeFill) {
  //     if (likeFill) {
  //       setLikeCount(likeCount - 1);
  //       setLikeFill(false);
  //       Axios.post("http://localhost:8000/like/", {
  //         unlike: true,
  //         post: post,
  //         user: currentUser,
  //       })
  //         .then(function (response) {
  //           console.log("boom");
  //         })
  //         .catch(function (error) {
  //           console.log(error);
  //         });
  //     }
  //     setDislikeCount(dislikeCount + 1);
  //     setDislikeFill(true);
  //     Axios.post("http://localhost:8000/dislike/", {
  //       undislike: false,
  //       post: post,
  //       user: currentUser,
  //     })
  //       .then(function (response) {
  //         console.log("boom");
  //       })
  //       .catch(function (error) {
  //         console.log(error);
  //       });
  //   } else {
  //     setDislikeCount(dislikeCount - 1);
  //     setDislikeFill(false);
  //     Axios.post("http://localhost:8000/dislike/", {
  //       undislike: true,
  //       post: post,
  //       user: currentUser,
  //     })
  //       .then(function (response) {
  //         console.log("boom");
  //       })
  //       .catch(function (error) {
  //         console.log(error);
  //       });
  //   }
  //   console.log(dislikes);
  // };

  // const commentsHandler = () => {
  //   setCurrentPost(post);
  //   setShowComments(true);
  //   setPost(post);
  // };

  // useEffect(() => {
  //   likes.forEach((like) => {
  //     if (like.profile === currentUser.username) {
  //       return setLikeFill(true);
  //     }
  //   });
  //   dislikes.forEach((dislike) => {
  //     if (dislike.profile === currentUser.username) {
  //       return setDislikeFill(true);
  //     }
  //   });
  // }, [currentPost, currentUser, likes, dislikes]);

  return <>hola</>;
};

export default Posts;
