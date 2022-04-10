import React from 'react'

export default function User({user, toggleUser}) {
    
    function handleUserSelect() {
        toggleUser(user.name)
    }
    
    return (

        <div>
            <label>
                <input type="checkbox" checked={user.selected} onChange={handleUserSelect}/>
                {user.name} {'('+user.email+')'} 
            </label>
            
        </div>
        
    )
}

