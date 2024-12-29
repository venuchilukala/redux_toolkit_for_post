import { createSlice } from "@reduxjs/toolkit";

const commentSlice = createSlice({
    name : 'newComment',
    initialState : {
        comment : [],
    },
    reducers : {
        addNewComment : (state, action) => {
            state.comment.push(action.payload)
        }
    }
})

export const {addNewComment} = commentSlice.actions 
export default commentSlice.reducer