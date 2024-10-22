import React from 'react';

const EditUserForm = ({ user, handleChange, updateUser }) => {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        updateUser(user.id);
      }}
    >
      <input
        type="text"
        name="name"
        onChange={handleChange}
        value={user.name}
      />
      <input
        type="number"
        name="age"
        onChange={handleChange}
        value={user.age}
      />
      <button type="submit">Save</button>
    </form>
  );
};

export default EditUserForm;
