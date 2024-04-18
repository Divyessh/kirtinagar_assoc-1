'use client';

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useSession } from 'next-auth/react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function SuperAdminTable() {
  const { data: session } = useSession();
  const [selectedLetter, setSelectedLetter] = useState('');
  const [selectedMembers, setSelectedMembers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

  const getMembers = async () => {
    try {
      const response = await axios.get('api/provider');
      setSelectedMembers(response.data.data);
    } catch (error) {
      console.error('Error fetching members:', error);
    }
  };

  const removeUser = async (id) => {
    try {
      const response = await axios.post(`api/unlistProvider/${id}`);
      toast.success('User removed successfully!');
      getMembers();
    } catch (error) {
      console.error('Error deleting user:', error);
      toast.error('Error removing user!');
    }
  };

  const featuredUser = async (id) => {
    try {
      const response = await axios.post(`api/activateFeatured/${id}`);
      if (selectedMembers.some((member) => member._id === id && member.isFeatured)) {
        toast.error('User is already Featured!');
      } else {
        toast.success('User is now Featured!');
        getMembers();
      }
    } catch (error) {
      console.error('Error activating user:', error);
      toast.error('Error activating user!');
    }
  };
  const featuredUserRemove = async (id) => {
    try {
      const response = await axios.post(`api/deactivateFeatured/${id}`);
      if (!selectedMembers.some((member) => member._id === id && member.isFeatured)) {
        toast.error('User is not Featured!');
      } else {
        toast.success('User is no longer Featured!');
        getMembers();
      }
    } catch (error) {
      console.error('Error deactivating user:', error);
      toast.error('Error deactivating user!');
    }
  };

  const activeUser = async (id) => {
    try {
      const response = await axios.post(`api/activateProvider/${id}`);
      if (selectedMembers.some((member) => member._id === id && member.isVerified)) {
        toast.error('User is already Active!');
      } else {
        toast.success('User Activated!');
        getMembers();
      }
    } catch (error) {
      console.error('Error activating user:', error);
      toast.error('Error activating user!');
    }
  };

  useEffect(() => {
    getMembers();
  }, []);

  const filterMembersByLetter = (letter) => {
    setSelectedLetter(letter);
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredMembers = selectedMembers.filter(
    (member) =>
      (selectedLetter === '' || member.nameOftheFirm.startsWith(selectedLetter)) &&
      (searchTerm === '' || member.nameOftheFirm.toLowerCase().includes(searchTerm.toLowerCase())),
  );

  return (
    <div>
      <ToastContainer />
      <div className="flex justify-center items-center py-4 text-lg">SuperAdmin Panel</div>

      <div className="bg-primary space-x-1 w-full flex flex-wrap justify-center items-center pt-1">
        <button
          type="button"
          responsive="true"
          className={`btn btn-primary border-1 border-secondary ${selectedLetter === '' ? 'btn-secondary' : ''}`}
          value=""
          onClick={() => filterMembersByLetter('')}
        >
          All
        </button>
        {letters.split('').map((letter) => (
          <button
            type="button"
            responsive="true"
            className={`btn btn-primary border-1 border-secondary ${selectedLetter === letter ? 'btn-secondary' : ''}`}
            key={letter}
            value={letter}
            onClick={() => filterMembersByLetter(letter)}
          >
            {letter}
          </button>
        ))}
        <input
          type="text"
          placeholder="Search by name..."
          value={searchTerm}
          onChange={handleSearch}
          className="p-2 m-2 border border-gray-300 rounded input input-group-lg"
        />
      </div>
      <div className="overflow-x-auto bg-primary flex w-full items-center justify-center px-12 py-4 ">
        <table className="table bg-primary text-black">
          <thead aria-label="members-table" className="text-lg text-black">
            <tr>
              <th aria-label="Member table Head" />
              <th>Name</th>
              <th>Status</th>
              <th>Ads Status</th>
              <th>Address</th>
              {session?.user?.role === 'superadmin' && session && <th className="text-center">Actions</th>}
              {session?.user?.role === 'superadmin' && session && <th className="text-center">Advertisement Actions</th>}
            </tr>
          </thead>
          <tbody>
            {filteredMembers.map((member, index) => (
              <tr key={member._id}>
                <th>{index}</th>
                <td>{member.nameOftheFirm}</td>
                <td>
                  <div className={`badge badge-outline ${member.isVerified ? 'text-green-500' : 'text-red-500'}`}>
                    {member.isVerified ? 'Active' : 'Inactive'}
                  </div>
                </td>
                <td>
                  <div className={`badge badge-outline ${member.isFeatured ? 'text-green-500' : 'text-red-500'}`}>
                    {member.isFeatured ? 'Active' : 'Inactive'}
                  </div>
                </td>
                <td>{member.address}</td>
                {session && session?.user?.role === 'superadmin' && (
                  <td className="flex justify-center items-center space-x-4">
                    <button type="button" className="btn btn-success" onClick={() => activeUser(member._id)}>
                      Active
                    </button>
                    <button type="button" className="btn btn-error" onClick={() => removeUser(member._id)}>
                      Remove
                    </button>
                  </td>
                )}
                <td className="">
                  <button
                    type="button"
                    className={`btn ${member.isFeatured ? 'btn-error' : 'btn-success'}`}
                    onClick={() => (member.isFeatured ? featuredUserRemove(member._id) : featuredUser(member._id))}
                  >
                    {member.isFeatured ? 'Deactivate' : 'Activate'}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
