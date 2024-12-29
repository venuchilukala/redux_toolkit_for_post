import {configureStore} from '@reduxjs/toolkit'
import counterReducer from './slices/counterSlice'
import userReducer from './slices/userSlices'
import commentReducer from './slices/commentSlice'

export const store  = configureStore({
    reducer : {
        counter : counterReducer,
        newSubscriber : userReducer,
        newComment : commentReducer,
    },
})