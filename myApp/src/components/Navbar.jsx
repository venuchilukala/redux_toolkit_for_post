import React from "react";
import { useSelector } from "react-redux";

const Navbar = () => {
  const count = useSelector((state) => state.counter.count);
  const users = useSelector((state) => state.newSubscriber.users);
  const comments = useSelector((state) => state.newComment.comment);

  return (
    <div className="navBar">
      <div>Redux</div>
      <div>Subscribers : {users.length}</div>
      <div>Comment : {comments.length}</div>
      <div>Likes : {count}</div>
    </div>
  );
};

export default Navbar;
