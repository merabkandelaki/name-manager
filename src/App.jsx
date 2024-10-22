import React, { useEffect, useState } from 'react';
import {
  fetchUsers,
  createUser as createUserService,
  updateUser as updateUserService,
  deleteUser as deleteUserService,
} from './services/userService';
import CreateUserForm from './components/CreateUserForm';
import EditUserForm from './components/EditUserForm';
import UserTable from './components/UserTable';
import './App.css';

const App = () => {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({
    name: '',
    age: '',
  });
  const [user2, setUser2] = useState({
    id: '',
    name: '',
    age: '',
  });

  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    fetchUsers().then((data) => setUsers(data));
  }, []);

  function handleChange(event) {
    setUser((prevFormData) => {
      return {
        ...prevFormData,
        [event.target.name]: event.target.value,
      };
    });
  }

  function handleChange2(event) {
    setUser2((prevFormData) => {
      return {
        ...prevFormData,
        [event.target.name]: event.target.value,
      };
    });
  }

  async function createUser(e) {
    e.preventDefault();
    await createUserService({ name: user.name, age: user.age });
    const data = await fetchUsers();
    setUsers(data);
    setUser({ name: '', age: '' });
    window.history.replaceState(null, '', window.location.pathname);
  }

  async function deleteUser(userId) {
    const { error } = await deleteUserService(userId);
    if (error) {
      console.log(error);
    } else {
      const data = await fetchUsers();
      setUsers(data);
    }
  }

  function displayUser(userId) {
    const userToEdit = users.find((user) => user.id === userId);
    if (userToEdit) {
      setUser2(userToEdit);
      setIsEditing(true);
    }
  }

  async function updateUser(userId) {
    const { error } = await updateUserService(userId, {
      name: user2.name,
      age: user2.age,
    });

    if (error) {
      console.log(error);
    } else {
      const data = await fetchUsers();
      setUsers(data);
      setUser2({ id: '', name: '', age: '' });
      setIsEditing(false);
    }
  }

  return (
    <div className="app">
      <h1>React-Supabase Name Manager</h1>
      <CreateUserForm
        handleChange={handleChange}
        createUser={createUser}
        user={user}
      />

      {isEditing && (
        <EditUserForm
          user={user2}
          handleChange={handleChange2}
          updateUser={updateUser}
        />
      )}

      <UserTable
        users={users}
        deleteUser={deleteUser}
        displayUser={displayUser}
      />
    </div>
  );
};

export default App;
