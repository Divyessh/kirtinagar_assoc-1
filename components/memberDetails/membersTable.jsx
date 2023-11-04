'use client';

import React, { useState } from 'react';

export default function MembersTable() {
  const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const initialLetter = ''; // Initial selected letter
  const [selectedLetter, setSelectedLetter] = useState(initialLetter);
  const [filteredMembers, setFilteredMembers] = useState([]);

  // Sample data (you can replace this with your actual data)
  const members = [
    { id: 1, name: 'Amit', phoneNumber: '9876543210', address: 'Delhi, India' },
    { id: 2, name: 'Bhavesh', phoneNumber: '8765432109', address: 'Mumbai, India' },
    { id: 3, name: 'Chetna', phoneNumber: '7654321098', address: 'Bangalore, India' },
    { id: 4, name: 'Divya', phoneNumber: '6543210987', address: 'Chennai, India' },
    { id: 5, name: 'Esha', phoneNumber: '5432109876', address: 'Hyderabad, India' },
    { id: 6, name: 'Firoz', phoneNumber: '4321098765', address: 'Kolkata, India' },
    { id: 7, name: 'Ganesh', phoneNumber: '3210987654', address: 'Pune, India' },
    { id: 8, name: 'Harshita', phoneNumber: '2109876543', address: 'Jaipur, India' },
    { id: 9, name: 'Ishaan', phoneNumber: '1098765432', address: 'Ahmedabad, India' },
    { id: 10, name: 'Jyoti', phoneNumber: '9876543211', address: 'Lucknow, India' },
    { id: 11, name: 'Kavita', phoneNumber: '8765432100', address: 'Chandigarh, India' },
    { id: 12, name: 'Lakshmi', phoneNumber: '7654321099', address: 'Mysore, India' },
    { id: 13, name: 'Manish', phoneNumber: '6543210988', address: 'Kochi, India' },
    { id: 14, name: 'Neha', phoneNumber: '5432109877', address: 'Jaipur, India' },
    { id: 15, name: 'Ojas', phoneNumber: '4321098766', address: 'Goa, India' },
    { id: 16, name: 'Prateek', phoneNumber: '3210987655', address: 'Varanasi, India' },
    { id: 17, name: 'Quincy', phoneNumber: '2109876544', address: 'Bhubaneswar, India' },
    { id: 18, name: 'Ritu', phoneNumber: '1098765433', address: 'Indore, India' },
    { id: 19, name: 'Sarika', phoneNumber: '9876543212', address: 'Amritsar, India' },
    { id: 20, name: 'Tanmay', phoneNumber: '8765432101', address: 'Ranchi, India' },
  ];

  const filterMembersByLetter = (letter) => {
    setSelectedLetter(letter);
    // Filter the members array based on the selected letter
    filteredMembers = members.filter((member) => selectedLetter === '' || member.name.startsWith(selectedLetter));
    // Update the state with the filtered members
    setFilteredMembers(filteredMembers);
  };

  return (
    <div>
      <div className="bg-primary space-x-1 w-full flex flex-wrap justify-center items-center pt-1">
        <button
        type='button'
          responsive="true"
          className={`btn btn-primary border-1 border-secondary ${selectedLetter === '' ? 'btn-secondary' : ''}`}
          value=""
          onClick={() => filterMembersByLetter('')}
        >
          All
        </button>
        {letters.split('').map((letter) => (
          <button
          type='button'
            responsive="true"
            className={`btn btn-primary border-1 border-secondary ${selectedLetter === letter ? 'btn-secondary' : ''}`}
            key={letter}
            value={letter}
            onClick={() => filterMembersByLetter(letter)}
          >
            {letter}
          </button>
        ))}
      </div>
      <div className="overflow-x-auto bg-primary flex w-full items-center justify-center px-12 py-4 ">
        <table className="table bg-primary">
          {/* head */}
          <thead aria-label="members-table" className="text-lg text-black">
            <tr>
              <th />
              <th>Name</th>
              <th>Phone Number</th>
              <th>Address</th>
            </tr>
          </thead>
          <tbody>
            {members
              .filter((member) => selectedLetter === '' || member.name.startsWith(selectedLetter))
              .map((member) => (
                <tr key={member.id}>
                  <th>{member.id}</th>
                  <td>{member.name}</td>
                  <td>{member.phoneNumber}</td>
                  <td>{member.address}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
