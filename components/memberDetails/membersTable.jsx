"use client";

import axios from "axios";
import React, { useState, useEffect } from "react";

export default function MembersTable() {
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const initialLetter = ""; // Initial selected letter
  const [selectedLetter, setSelectedLetter] = useState(initialLetter);
  // const [filteredMembers, setFilteredMembers] = useState([]);
  const [selectedMembers, setSelectedMembers] = useState([]);
  // Sample data (you can replace this with your actual data)
  const getMembers = async () => {
    const response = await axios.get("/api/provider");
    // console.log(response.data.data);
    setSelectedMembers(
      response.data.data.filter((provider) => provider?.isVerified)
    );
  };
  useEffect(() => {
    getMembers();
  }, []);
  const filterMembersByLetter = (letter) => {
    setSelectedLetter(letter);
    // Filter the members array based on the selected letter
    // const filterMembers = members.filter((member) => selectedLetter === '' || member.name.startsWith(selectedLetter));
    // Update the state with the filtered members
    // setFilteredMembers(filterMembers);
  };

  return (
    <div>
      <div className="bg-primary space-x-1 w-full flex flex-wrap justify-center items-center pt-1 ">
        <button
          type="button"
          responsive="true"
          className={`btn btn-primary border-1 border-secondary ${
            selectedLetter === "" ? "btn-secondary" : ""
          }`}
          value=""
          onClick={() => filterMembersByLetter("")}
        >
          All
        </button>
        {letters.split("").map((letter) => (
          <button
            type="button"
            responsive="true"
            className={`btn btn-primary border-1 border-secondary ${
              selectedLetter === letter ? "btn-secondary" : ""
            }`}
            key={letter}
            value={letter}
            onClick={() => filterMembersByLetter(letter)}
          >
            {letter}
          </button>
        ))}
      </div>
      <div className="overflow-x-auto bg-primary flex w-full items-center justify-center md:px-12 py-4 ">
        <table className="table bg-primary text-black">
          {/* head */}
          <thead aria-label="members-table" className="text-lg text-black">
            <tr>
              <th aria-label="Member table Head" />
              <th>Name</th>
              <th>Phone Number</th>
              <th>Address</th>
            </tr>
          </thead>
          <tbody>
            {selectedMembers
              .filter(
                (member) =>
                  selectedLetter === "" ||
                  member.nameOftheFirm.startsWith(selectedLetter)
              )
              .map((member, index) => (
                // eslint-disable-next-line no-underscore-dangle
                <tr key={member._id}>
                  <th>{index}</th>
                  <td>{member.nameOftheFirm}</td>
                  <td>{member.contactNumber}</td>
                  <td>{member.address}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
