import React from 'react'
import {useSelector} from 'react-redux'

const NewUsers = () => {

  const newUsers = useSelector((state) => state.newSubscriber.users)

  return (
    <div style={{minHeight : 150}}>
      Subcribers : 
      <ul>
        {
          newUsers.map((user, index) => (
            <li key={index}>{user}</li>
          ))
        }
      </ul>
    </div>
  )
}

export default NewUsers
