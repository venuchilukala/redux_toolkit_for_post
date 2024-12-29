import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addNewComment } from '../slices/commentSlice'

const CommentForm = () => {
  const [comment, setComment] = useState("")
  const dispatch = useDispatch()

const commentSubmitHandler = (event) =>{
  event.preventDefault()
  dispatch(addNewComment(comment))
  setComment("")
}

const commentHandler = (event) =>{
  setComment(event.target.value)
}

  return (
    <div>
      <form onSubmit={commentSubmitHandler}>
        <h4>Comment</h4>
        <div>
          <textarea value={comment} onChange={commentHandler}></textarea>
          <br/>
          <button type='submit'>Submit</button>
        </div>
      </form>
    </div>
  )
}

export default CommentForm
