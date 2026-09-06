import React, { createContext } from 'react'

export const userDataContext = createContext()

const UserContext = (props) => {
    let user = 'Indrajeet'
  return (
    <div>
       <userDataContext.Provider value={user}>
        {props.children}
       </userDataContext.Provider>
    </div> 
  )
}

export default UserContext