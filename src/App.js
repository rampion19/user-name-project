import React, { useState } from 'react';
import UserForm from './components/User/UserForm';
import UserList from './components/User/UserList';

function App() {

  const [usersList, setUsersList] = useState([])

  const saveUserDataHandler = (uName, uAge, uCollage) => {
    setUsersList((prev) => {
      return [...prev, { name: uName, age: uAge, collage : uCollage, id: Math.random().toString()}]
    })
  }
  return (
    <div>
      <UserForm onSaveUserdata={saveUserDataHandler} />
      <UserList users={usersList} />
    </div>
  );
}

export default App;
