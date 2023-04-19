import React, { useCallback, useRef, useState } from "react";

import { AiOutlineUser, AiOutlineQuestion } from "react-icons/ai";
import { BsPencilSquare } from "react-icons/bs";
import { FaPenFancy } from "react-icons/fa";

import UserIcon from "../user-icon/user.icon.component";
import ModalContainer from "../modal-container/modal-container.component";

import { useOnClickOutside } from "../utils/helpers";

import "./post-write.styles.scss";
import ModalPost from "../modal-post/modal-post.component";

const PostWrite = ({ currentUser }) => {
  const [showPostModal, setShowPostModal] = useState(false);

  const postModalRef = useRef();

  const hideModal = useCallback(({ target }) => {
    //Do nothing If the click comes from any link in nav component
    if (target.closest(".link")) return;
    setShowPostModal(false);
  }, []);

  useOnClickOutside(postModalRef, hideModal);
  return (
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
        <div
          onClick={() => setShowPostModal(!showPostModal)}
          className="question-icon"
        >
          <AiOutlineQuestion className="icon-question-mark" />
          <label>Preguntar</label>
        </div>

        <div className="reply-icon">
          <BsPencilSquare className="icon-reply" />
          <label>Responder</label>
        </div>

        <div
          onClick={() => setShowPostModal(!showPostModal)}
          className="post-icon"
        >
          <FaPenFancy className="icon-post" />
          <label>Publicación</label>
        </div>
      </div>

      <ModalContainer
        show={showPostModal}
        className={"modal-container post"}
        component={<ModalPost/>}
        modalRef={postModalRef}
      />
    </div>
  );
};

export default PostWrite;
