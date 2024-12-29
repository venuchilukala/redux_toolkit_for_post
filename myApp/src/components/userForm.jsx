import React, { useState } from "react";
import { useDispatch} from "react-redux";
import { addUser } from "../slices/userSlices";

const UserForm = () => {
    const [username, setUsername] = useState("")
    const dispatch = useDispatch()

    const submitHandler = (event) => {
        event.preventDefault()
        dispatch(addUser(username)) 
        setUsername("")
    }

    const usernameHandler = (event)=>{
        setUsername(event.target.value)
    }
  return (
    <div>
      <form onSubmit={submitHandler}>
        <h4>User Name</h4>
        <div>
            <input type="text" value={username} onChange={usernameHandler}/>
            <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default UserForm;
