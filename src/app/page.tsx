"use client";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import { db } from "@/firebase/config";
import { useEffect, useRef, useState } from "react";
import { ArrowRight } from "react-feather";
import useIsVisble from "../customHooks/useIsVisible";

export default function Home() {
  const [properties, setProperties] = useState([]);
  const [teamMembers, setTeamMembers] = useState([]);

  const ref1 = useRef();
  const view1 = useIsVisble(ref1);

  const ref2 = useRef();
  const view2 = useIsVisble(ref2);

  const ref3 = useRef();
  const view3 = useIsVisble(ref3);

  const ref4 = useRef();
  const view4 = useIsVisble(ref4);
  const ref5 = useRef();
  const view5 = useIsVisble(ref5);
  const ref6 = useRef();
  const view6 = useIsVisble(ref6);

  const propertiesRef = db.collection("properties");
  const teamRef = db.collection("team");

  const getProperties = () => {
    propertiesRef.limit(4).onSnapshot((snapshot) => {
      let properties = snapshot.docs.map((doc) => {
        let data = doc.data();
        let id = doc.id;
        return { id, ...data };
      });

      setProperties(properties);
    });
  };

  const getTeamMembers = () => {
    teamRef.limit(4).onSnapshot((snapshot) => {
      let teamData = snapshot.docs.map((doc) => {
        const data = doc.data();
        const id = doc.id;
        return { id, ...data };
      });
      setTeamMembers(teamData);
    });
  };

  useEffect(() => {
    getProperties();
    getTeamMembers();
  }, []);
  const info = [
    {
      title: "Property Acquisition",
      description:
        "Our experienced team finds properties that align with your goals. With thorough market research and evaluations, we offer access to promising residential, commercial, and mixed-use investment options.",
    },
    {
      title: "Life Insurance Policies",
      description:
        "We understand the significance of securing your financial future. We offer tailored life insurance policies exclusively for real estate investors, providing comprehensive coverage and peace of mind. Safeguard your assets and ensure stability for your loved ones with our personalized solutions.",
    },
  ];

  return (
    <main className="flex min-h-screen flex-col items-center bg-black text-white  md:px-20">
      <div className="max-w-[1366px] w-full">
        <Navigation role={"user"} />
        <div
          ref={ref1}
          className={`w-full flex items-center justify-center bg-gradient-to-t from-transparent to-amber-500 bg-opacity-50 h-[100vh] mb-10 md:mb-0 transition-opacity ease-in duration-700 rounded-t-2xl  ${
            view1.isIntersecting ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className=" md:h-full flex flex-col md:justify-center items-center ">
            <div className=" flex flex-col items-center justify-center text-[30px] md:text-[70px] md:w-[80%] font-bold  mb-5 md:mb-8 md:leading-[1]">
              <h1>Platinum Realty</h1> <h1>Investments</h1>
            </div>
            <p className="text-[14px] md:text-[18px] w-full px-5 text-center mb-5 md:mb-0">
              We are your trusted partner for real estate investment, wealth
              growth, passive income, and financial freedom.
            </p>
            <button
              className=" rounded-3xl  md:px-10   h-12 px-10 mt-20 md:mt-10 text-black bg-white  text-[18px] flex justify-center items-center"
              onClick={() => {
                window.location.href = "mailto:platinumrealty23@gmail.com";
              }}
            >
              <div className="mr-2">Contact</div>
              <ArrowRight size={22} />
            </button>
          </div>
        </div>
        <div
          ref={ref2}
          className={`transition-opacity ease-in duration-700 ${
            view2.isIntersecting ? "opacity-100" : "opacity-0"
          } md:w-full md:flex md:h-[150px] mb-10 px-5`}
        >
          <div className="w-1/2">
            <h1 className="font-semibold text-[25px] md:text-[35px]">
              About Us
            </h1>
          </div>
          <div className="text-[14px] md:text-[18px]">
            Platinum Realty Investments is a premier real estate acquisition
            group dedicated to maximizing the potential of every investment
            opportunity. With a proven track record of success, we specialize in
            identifying lucrative properties and implementing strategic
            investment strategies to generate substantial returns for our
            clients.
          </div>
        </div>
        <div className="flex justify-center px-5 md:px-0" ref={ref3}>
          <div
            className={`transition-opacity ease-in duration-700 ${
              view3.isIntersecting ? "opacity-100" : "opacity-0"
            } md:w-3/4 w-full bg-white text-black flex flex-col justify-center items-center py-5 md:px-5 rounded-md mb-8 md:pb-5`}
          >
            <div className="flex flex-col  md:w-[80%] ">
              <h1 className="md:text-[30px] font-bold  text-center">
                Creation of investment opportunities
              </h1>
              <p className="text-[14px] md:text-[18px] md:full text-center">
                Empowering wealth creation through diverse investment
                opportunities for long-term financial success.
              </p>
            </div>
          </div>
        </div>

        <div className="flex md:justify-center px-5 md:px-0" ref={ref3}>
          <div
            ref={ref4}
            className={`transition-opacity ease-in duration-700 ${
              view4.isIntersecting ? "opacity-100" : "opacity-0"
            } w-full md:w-3/4 text-black flex  flex-col  rounded-md md:mt-8`}
          >
            <div className="flex  flex-col md:flex-row justify-between md:justify-between  items-center">
              {info.map((tab) => {
                return (
                  <div
                    key={tab.title}
                    className="bg-white text-black rounded-md mb-8 md:mb-0 md:w-[400px] md:h-[200px] h-full flex flex-col p-5 
              "
                  >
                    <div className="font-bold text-[22px] md:text-[30px] ">
                      {tab.title}
                    </div>
                    <p className="text-[14px] leading-5">{tab.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        {/* {properties.length > 0 && (
          <div
            className={`w-full bg-black text-white flex  flex-col px-5 md:mt-10  `}
          >
            <div className="font-semibold text-[45px]">Properties</div>
            <div className=" flex flex-col md:flex-row items-center justify-start  gap-5 md:gap-10 my-5">
              {properties.map((p) => {
                return (
                  <div
                    onClick={() => router.push("/properties")}
                    key={p.location}
                  >
                    <PropertyCard property={p} admin={false} />
                  </div>
                );
              })}
            </div>
          </div>
        )} */}
        {/* 
        {teamMembers.length > 0 && (
          <div
            className={`w-full bg-black text-white flex flex-col px-5 md:mt-10 `}
          >
            <div className="font-semibold text-[45px]">Team Members</div>
            <div className=" flex flex-col md:flex-row items-center justify-start  gap-5 md:gap-10 my-5">
              {teamMembers.map((member) => {
                return (
                  <div
                    onClick={() => router.push("/teamMembers")}
                    key={member.name}
                  >
                    <TeamCard member={member} admin={false} />
                  </div>
                );
              })}
            </div>
          </div>
        )} */}
        <Footer />
      </div>
    </main>
  );
}
