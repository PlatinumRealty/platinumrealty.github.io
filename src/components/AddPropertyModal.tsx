import React, { useState, useEffect } from "react";
import { db, uid } from "../firebase/config";

import Link from "next/link";
const AddPropertyModal = ({ setAddPropertyModal }) => {
  const [propertyData, setPropertyData] = useState({
    price: "",
    description: "",
    location: "",
    image: "",
  });

  const propertiesRef = db.collection("properties");

  const handleInputChange = (e) => {
    setPropertyData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = () => {
    // create new proprty
    const { price, description, location, image } = propertyData;
    propertiesRef.add({
      price,
      description,
      location,
      image,
    });
    setAddPropertyModal(false);
  };

  console.log(propertyData);

  return (
    <div
      className="fixed z-10 inset-0 overflow-y-auto"
      id="error-modal"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div
          className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
          aria-hidden="true"
        ></div>
        <span
          className="hidden sm:inline-block sm:align-middle sm:h-screen"
          aria-hidden="true"
        >
          &#8203;
        </span>
        <div className="inline-block align-bottom bg-[#222222] rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6">
          <div className="sm:flex sm:items-start">
            <div className="mt-3  sm:mt-0  sm:text-left flex  w-full mb-3 justify-between">
              <div className="w-1/2">
                <h3 className="text-lg leading-6 font-medium" id="modal-title">
                  Add New Property
                </h3>
              </div>
            </div>
          </div>
          <div className="flex flex-col">
            <label className="block mb-2 text-md font-medium">Price</label>
            <input
              placeholder="$5,000,000 "
              value={propertyData.price}
              name="price"
              type="number"
              onChange={(e) => handleInputChange(e)}
              className="mb-3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
            <label className="block mb-2 text-md font-medium">
              Description
            </label>
            <input
              placeholder="Description"
              value={propertyData.description}
              name="description"
              onChange={(e) => handleInputChange(e)}
              className="mb-3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
            <label className="block mb-2 text-md font-medium">Location</label>
            <input
              placeholder="Location"
              value={propertyData.location}
              name="location"
              onChange={(e) => handleInputChange(e)}
              className="mb-3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>
          <div className="mt-5 sm:mt-4 sm:flex sm:flex-row justify-between">
            <button
              onClick={() => setAddPropertyModal(false)}
              type="button"
              className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-gray-600 text-base font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
            >
              Close
            </button>
            <button
              onClick={handleSubmit}
              type="button"
              className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
            >
              Upload
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AddPropertyModal;
