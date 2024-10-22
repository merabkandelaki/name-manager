import React from 'react';
import { AiTwotoneDelete } from "react-icons/ai";
import { FaRegEdit } from "react-icons/fa";

const UserTable = ({ users, deleteUser, displayUser }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Age</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <tr key={user.id}>
            <td>{user.id}</td>
            <td>{user.name}</td>
            <td>{user.age}</td>
            <td>
              <span className="delete-icon" onClick={() => deleteUser(user.id)}>
                <AiTwotoneDelete />
              </span>
              <span className="edit-icon" onClick={() => displayUser(user.id)}>
                <FaRegEdit />
              </span>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default UserTable;
