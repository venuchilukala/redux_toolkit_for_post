import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment } from "../slices/counterSlice";
import UserForm from "./userForm";
import NewUsers from "./NewUsers";
import CommentForm from "./CommentForm";
import Comments from "./Comments";

const DisplayPost = () => {
  const [showUser, setShowUser] = useState(false)
  const [showComment, setShowComment] = useState(false)
  const dispatch = useDispatch();

  const handleShowUser = () =>{
    setShowUser(prevState => !prevState)
  }
  
  const handleShowComment = () =>{
    setShowComment(prevState => !prevState)

  }

  return (
    <div className="post-section">
      <div>
        <img src="/Pasta.jpg" alt="post" />
        <div>
          <div className="post-buttons">
            <button onClick={() => dispatch(increment())}>Like</button>
            <button onClick={handleShowComment}>Comment</button>
            <button onClick={handleShowUser}>Subscribe</button>
          </div>
        </div>
        <div className="user-comment">
          {showUser && <UserForm />}
          {showComment && <CommentForm />}
        </div>
      </div>
      <div>
        <NewUsers />
        <Comments />
      </div>
    </div>
  );
};

export default DisplayPost;
