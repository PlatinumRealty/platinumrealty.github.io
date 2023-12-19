"use client";
import React, { useState, useEffect } from "react";

import TeamCard from "@/components/TeamCard";
import Link from "next/link";
import house from "../../../assets/house.jpeg";
import AddTeamModal from "@/components/AddTeamModal";
import Navigation from "@/components/Navigation";

import { db } from "@/firebase/config";

const TeamPage = () => {
  const [addModalOpen, setAddModalOpen] = useState(false);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [teamMembers, setTeamMembers] = useState([]);

  const teamRef = db.collection("team");

  const handleSignOut = () => {
    // firebase sign out here
  };

  const getTeamMembers = () => {
    teamRef.onSnapshot((snapshot) => {
      let teamData = snapshot.docs.map((doc) => {
        const data = doc.data();
        const id = doc.id;
        return { id, ...data };
      });
      setTeamMembers(teamData);
    });
  };

  useEffect(() => {
    getTeamMembers();
  }, []);
  return (
    <div className="flex min-h-screen flex-col items-center bg-black text-white md:px-20">
      {addModalOpen && <AddTeamModal setAddModalOpen={setAddModalOpen} />}
      <div className="max-w-[1366px] w-full">
        <Navigation />

        <div
          className=" flex justify-end"
          onClick={() => setAddModalOpen(true)}
        >
          <button className="p-2 bg-white text-black font-bold text-[14px] rounded-xl">
            Add Team Member
          </button>
        </div>
        {teamMembers.length === 0 ? (
          <div>No Team Members Added</div>
        ) : (
          <div className=" flex flex-wrap justify-between gap-10">
            {/* - upload property modal - show all properties - when property is
          clicked open edit modal */}
            {teamMembers.map((member) => {
              return (
                <>
                  <TeamCard
                    key={member.name}
                    member={member}
                    setEditModalOpen={setEditModalOpen}
                    editModalOpen={editModalOpen}
                  />
                </>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default TeamPage;
