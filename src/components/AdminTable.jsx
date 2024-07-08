
import { useState } from 'react';
import AddUserForm from './AddUserForm';

const initialUsersData = [
  { userName: 'Ankur Sharma', email: 'Ankur@test.com', phoneNumber: '1234567890', designation: 'Designer', accessStatus: 'Active', userId: '1' },
  { userName: 'Mukul Sharma', email: 'Mukul@test2.com', phoneNumber: '0987654321', designation: 'Developer', accessStatus: 'Inactive', userId: '2' },
];

const AdminTable = () => {
  const [users, setUsers] = useState(initialUsersData);
  const [searchItem, setSearchItem] = useState('');
  const [filterStatus, setFilterStatus] = useState('');

  const handleSearch = (event) => {
    setSearchItem(event.target.value);
  };

  const handleFilter = (event) => {
    setFilterStatus(event.target.value);
  };

  const handleAddUser = (newUser) => {
    const newUserId = (users.length + 1).toString();
    setUsers([...users, { ...newUser, userId: newUserId }]);
  };

  const handleDeleteUser = (userId) => {
    setUsers(users.filter(user => user.userId !== userId));
  };

  const filteredUsers = users.filter((user) => {
    return (
      user.userName.toLowerCase().includes(searchItem.toLowerCase()) ||
      user.email.toLowerCase().includes(searchItem.toLowerCase()) ||
      user.phoneNumber.includes(searchItem) ||
      user.designation.toLowerCase().includes(searchItem.toLowerCase())
    );
  }).filter((user) => {
    return filterStatus === '' || user.accessStatus === filterStatus;
  });

  return (
    <div className="container mx-auto p-4">
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search..."
          value={searchItem}
          onChange={handleSearch}
          className="border p-2 mr-2"
        />
        <select onChange={handleFilter} className="border p-2">
          <option value="">All</option>
          <option value="Active">Active</option>
          <option value="Inactive">Inactive</option>
        </select>
      </div>

      <AddUserForm onAddUser={handleAddUser} />

      

      <table className="min-w-full bg-white border border-gray-200">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">User Name</th>
            <th className="py-2 px-4 border-b">Email</th>
            <th className="py-2 px-4 border-b">Phone Number</th>
            <th className="py-2 px-4 border-b">Designation</th>
            <th className="py-2 px-4 border-b">Access Status</th>
            <th className="py-2 px-4 border-b">User ID</th>
            <th className="py-2 px-4 border-b">Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredUsers.map((user) => (
            <tr key={user.userId}>
              <td className="py-2 px-4 border-b">{user.userName}</td>
              <td className="py-2 px-4 border-b">{user.email}</td>
              <td className="py-2 px-4 border-b">{user.phoneNumber}</td>
              <td className="py-2 px-4 border-b">{user.designation}</td>
              <td className="py-2 px-4 border-b">{user.accessStatus}</td>
              <td className="py-2 px-4 border-b">{user.userId}</td>
              <td className="py-2 px-4 border-b">
               
                <button onClick={() => handleDeleteUser(user.userId)} className="bg-red-500 text-white p-1">
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminTable;
