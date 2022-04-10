import React from 'react'
import User from './User'

export default function UserList({users, toggleUser}) {
    
    
    
    return (

        users.map(user => {
            return <User key={user.name} toggleUser={toggleUser} user={user}/>
        })
        
    )
}

