import React from "react";
import { useSelector } from "react-redux";

const Comments = () => {
  const newComments = useSelector((state) => state.newComment.comment);
 console.log(newComments)
  return (
    <div>
      Comments
      <ul>
        {newComments.map((comment, index) => (
          <li key={index}>{comment}</li>
        ))}
      </ul>
    </div>
  );
};

export default Comments;
