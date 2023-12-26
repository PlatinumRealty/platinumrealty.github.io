"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { auth, db } from "../../firebase/config";

import AddPropertyModal from "@/components/AddPropertyModal";
import PropertyCard from "@/components/PropertyCard";

import Navigation from "@/components/Navigation";

const AdminPage = () => {
  const [addPropertyModal, setAddPropertyModal] = useState(false);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [homes, setHomes] = useState([] as any);
  {
    /* TODO: Create Add Property Page
            TODO: Create Add Team Member Page
            TODO: Import property item
            TODO: ADD Edit property modal -> delete button, update options */
  }
  const router = useRouter();

  const propertiesRef = db.collection("properties");

  const handleSignOut = () => {
    // firebase sign out here
    auth.signOut().then(() => router.push("/"));
  };
  const navLinks = [
    {
      name: "Properties",
      route: "/propertiesAdmin",
    },
    {
      name: "Team",
      route: "/team",
    },
    {
      name: "Sign Out",
      signOut: () => handleSignOut(),
    },
  ];

  const getProperties = () => {
    propertiesRef.onSnapshot((snapshot) => {
      let homes = snapshot.docs.map((doc) => {
        let data = doc.data();
        let id = doc.id;
        return { id, ...data };
      });
      setHomes(homes);
    });
  };

  useEffect(() => {
    getProperties();
  }, []);

  return (
    <div className="flex min-h-screen flex-col items-center bg-black text-white md:px-20">
      {addPropertyModal && (
        <AddPropertyModal setAddPropertyModal={setAddPropertyModal} />
      )}
      <div className="max-w-[1366px] w-full">
        <Navigation />
        <div
          className=" flex justify-end"
          onClick={() => setAddPropertyModal(true)}
        >
          <button className="p-2 bg-white text-black font-bold text-[14px] rounded-xl">
            Add Property
          </button>
        </div>
        {homes.length === 0 ? (
          <div>No Properties Added</div>
        ) : (
          <div className=" flex flex-wrap justify-between gap-10">
            {homes.map((p, index) => {
              return (
                <>
                  <PropertyCard
                    key={index}
                    property={p}
                    admin={true}
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

export default AdminPage;
