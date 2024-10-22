import React from 'react';

const CreateUserForm = ({ handleChange, createUser, user }) => {
  return (
    <form onSubmit={createUser}>
      <input
        type="text"
        placeholder="Enter name"
        name="name"
        value={user.name}
        onChange={handleChange}
      />
      <input
        type="number"
        placeholder="Enter age"
        name="age"
        value={user.age}
        onChange={handleChange}
      />
      <button type="submit">Create</button>
    </form>
  );
};

export default CreateUserForm;
