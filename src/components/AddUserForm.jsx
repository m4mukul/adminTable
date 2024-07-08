/* eslint-disable react/prop-types */
import { useState } from 'react';

const AddUserForm = ({ onAddUser }) => {
  const [newUser, setNewUser] = useState({
    userName: '',
    email: '',
    phoneNumber: '',
    designation: '',
    accessStatus: 'Active',
  });
  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;
    setNewUser({ ...newUser, [name]: value });
  };

  const validate = () => {
    const newErrors = {};
    if (!newUser.userName) newErrors.userName = 'User name is required';
    if (!newUser.email) newErrors.email = 'Email is required';
    if (!newUser.phoneNumber) newErrors.phoneNumber = 'Phone number is required';
    if (!newUser.designation) newErrors.designation = 'Designation is required';
    return newErrors;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      onAddUser(newUser);
      setNewUser({
        userName: '',
        email: '',
        phoneNumber: '',
        designation: '',
        accessStatus: 'Active',
      });
      setErrors({});
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4 flex justify-center items-start">
      <div>
        <input
          type="text"
          name="userName"
          placeholder="User Name"
          value={newUser.userName}
          onChange={handleChange}
          className="border p-2 mr-2"
        />
        {errors.userName && <div className="text-red-500">{errors.userName}</div>}
      </div>
      <div>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={newUser.email}
          onChange={handleChange}
          className="border p-2 mr-2"
        />
        {errors.email && <div className="text-red-500">{errors.email}</div>}
      </div>
      <div>
        <input
          type="text"
          name="phoneNumber"
          placeholder="Phone Number"
          value={newUser.phoneNumber}
          onChange={handleChange}
          className="border p-2 mr-2"
        />
        {errors.phoneNumber && <div className="text-red-500">{errors.phoneNumber}</div>}
      </div>
      <div>
        <input
          type="text"
          name="designation"
          placeholder="Designation"
          value={newUser.designation}
          onChange={handleChange}
          className="border p-2 mr-2"
        />
        {errors.designation && <div className="text-red-500">{errors.designation}</div>}
      </div>
      <div>
        <select
          name="accessStatus"
          value={newUser.accessStatus}
          onChange={handleChange}
          className="border p-2 mr-2"
        >
          <option value="Active">Active</option>
          <option value="Inactive">Inactive</option>
        </select>
      </div>
      <button type="submit" className="bg-teal-500 text-white p-2">
        Add User
      </button>
    </form>
  );
};

export default AddUserForm;
