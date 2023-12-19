"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import house from "../../../assets/house.jpeg";
import PropertyCard from "@/components/PropertyCard";
import Navigation from "@/components/Navigation";
import { db } from "@/firebase/config";
import Footer from "@/components/Footer";

const Properties = () => {
  const [properties, setProperties] = useState([]);
  const propertiesRef = db.collection("properties");

  const getProperties = () => {
    propertiesRef.onSnapshot((snapshot) => {
      let properties = snapshot.docs.map((doc) => {
        let data = doc.data();
        let id = doc.id;
        return { id, ...data };
      });

      setProperties(properties);
    });
  };

  useEffect(() => {
    getProperties();
  }, []);

  return (
    <div className="flex min-h-screen flex-col items-center bg-black text-white md:px-20 ">
      <div className="max-w-[1366px] w-full ">
        <Navigation role={"user"} />

        {properties.length === 0 ? (
          <div>No Properties</div>
        ) : (
          <div className="w-full bg-black text-white flex  flex-col px-5">
            <div className="font-semibold text-[32px]  mb-5 md:mb-8 flex justify-center">
              Properties
            </div>
            <div className=" flex  flex-col md:grid md:flex-wrap items-center justify-between md:grid-cols-4 gap-5 md:gap-8 md:my-5">
              {properties.map((p) => {
                return (
                  <>
                    <PropertyCard key={p.location} property={p} admin={false} />
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

export default Properties;
