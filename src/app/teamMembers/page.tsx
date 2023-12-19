"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import house from "../../../assets/house.jpeg";
import PropertyCard from "@/components/PropertyCard";
import Navigation from "@/components/Navigation";
import { db } from "@/firebase/config";
import Footer from "@/components/Footer";
import TeamCard from "@/components/TeamCard";

const TeamMembers = () => {
  const [teamMembers, setTeamMembers] = useState([]);

  const teamRef = db.collection("team");

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
    <div className="flex min-h-screen flex-col items-center bg-black text-white md:px-20 ">
      <div className="max-w-[1366px] w-full ">
        <Navigation role={"user"} />

        {teamMembers.length === 0 ? (
          <div>No Team </div>
        ) : (
          <div className="w-full bg-black text-white flex  flex-col px-5">
            <div className="font-semibold text-[32px]  mb-5 md:mb-8 flex justify-center">
              PRI Team
            </div>
            <div className=" flex  flex-col md:grid md:flex-wrap items-center justify-between md:grid-cols-4 gap-5 md:gap-8 md:my-5">
              {teamMembers.map((member) => {
                return (
                  <>
                    <TeamCard key={member.name} member={member} admin={false} />
                  </>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TeamMembers;
