"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { db } from "../../firebase/config";

import AddPropertyModal from "@/components/AddPropertyModal";
import PropertyCard from "@/components/PropertyCard";

import Navigation from "@/components/Navigation";

const AdminPage = () => {
  const [addPropertyModal, setAddPropertyModal] = useState(false);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [properties, setProperties] = useState([]);
  {
    /* TODO: Create Add Property Page
            TODO: Create Add Team Member Page
            TODO: Import property item
            TODO: ADD Edit property modal -> delete button, update options */
  }
  const router = useRouter();

  const propertiesRef = db.collection("properties");

  // const handleSignOut = () => {
  //   // firebase sign out here
  //   auth.signOut().then(() => router.push("/"));
  // };
  // const navLinks = [
  //   {
  //     name: "Properties",
  //     route: "/propertiesAdmin",
  //   },
  //   {
  //     name: "Team",
  //     route: "/team",
  //   },
  //   {
  //     name: "Sign Out",
  //     signOut: () => handleSignOut(),
  //   },
  // ];

  // const getProperties = () => {
  //   propertiesRef.onSnapshot((snapshot) => {
  //     let properties = snapshot.docs.map((doc) => {
  //       let data = doc.data();
  //       let id = doc.id;
  //       return { id, ...data };
  //     });
  //     setProperties(properties);
  //   });
  // };

  // useEffect(() => {
  //   getProperties();
  // }, []);

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
        {/* {properties.length === 0 ? (
          <div>No Properties Added</div>
        ) : (
          <div className=" flex flex-wrap justify-between gap-10">
            {properties.map((p, index) => {
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
        )} */}
      </div>
    </div>
  );
};

export default AdminPage;
