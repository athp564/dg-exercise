import React, { useState, useRef, useEffect } from 'react';
import UserList from './UserList';

// this is to be used with useEffect below
const LOCAL_STORAGE_KEY = 'userApp.users'

function App() {
  
  const [users, setUsers] = useState([])
  const newUserRef = useRef()
  const newEmailRef = useRef()

  // these useEffect() are currently for saving/reading users to/from local storage
  useEffect(() => {
    const storedUsers = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    if (storedUsers) setUsers(storedUsers)
  }, [])

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(users))
  }, [users])


  function handleAddUser(e){
    const name = newUserRef.current.value
    const emailAddress = newEmailRef.current.value
    if(isInvalidUser(name,emailAddress)) return alert('User must have a name and email address')
    
    setUsers(prevUsers => {
      return [...prevUsers, {name:name,email:emailAddress,selected:false}]
    })
    
    newUserRef.current.value = null
    newEmailRef.current.value = null
  }

  function isInvalidUser(name,emailAddress){
    if(name===''||emailAddress==='') {
      return true
    // other invalid entries: spaces, special characters (except @. email), duplicate
    } else {
      return false
    }
  }

  function toggleUser(name) {
    const newUsers = [...users]
    const user = newUsers.find(user => user.name === name)
    user.selected = !user.selected
    setUsers(newUsers)
  }

  function handleRemoveUsers(e){
    const newUsers = users.filter(user => !user.selected)
    
    setUsers(newUsers)
  }

  return (
    <>
      <h1>Manage Users</h1>
      <h2>Add New User</h2>

      <input ref={newUserRef} type="text" placeholder="Enter User..."/>
      <input ref={newEmailRef} type="text" placeholder="Enter Email Address..."/>
      <button onClick={handleAddUser}>Add</button>

      <h2>Existing Users</h2>
      <button onClick={handleRemoveUsers}>Remove Selected Users</button>
      
      <UserList users={users} toggleUser={toggleUser} />
  </>
  );
}

export default App;
