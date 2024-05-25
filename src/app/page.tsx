"use client";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
// import { db } from "@/firebase/config";
import { useEffect, useRef, useState } from "react";
import { ArrowRight } from "react-feather";
import { Carousel } from "react-responsive-carousel";

import useIsVisble from "../customHooks/useIsVisible";
import Image from "next/image";

import jaylin from "../../assets/Jaylin.jpg";
import tina from "../../assets/Tina.jpg";

import aboutImg from "../../assets/About.jpg";
import lifeImg from "../../assets/Life insurance Pic.jpg";
import propPic from "../../assets/Property Acquisitions Pic.jpg";

import CarouselContainer from "@/components/carousel/CarouselContainer";

export default function Home() {
  // const [properties, setProperties] = useState([]);
  // const [teamMembers, setTeamMembers] = useState([]);
  //comment
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

  // const propertiesRef = db.collection("properties");
  // const teamRef = db.collection("team");

  // const getProperties = () => {
  //   propertiesRef.limit(4).onSnapshot((snapshot) => {
  //     let properties = snapshot.docs.map((doc) => {
  //       let data = doc.data();
  //       let id = doc.id;
  //       return { id, ...data };
  //     });

  //     setProperties(properties);
  //   });
  // };

  // const getTeamMembers = () => {
  //   teamRef.limit(4).onSnapshot((snapshot) => {
  //     let teamData = snapshot.docs.map((doc) => {
  //       const data = doc.data();
  //       const id = doc.id;
  //       return { id, ...data };
  //     });
  //     setTeamMembers(teamData);
  //   });
  // };

  // useEffect(() => {
  //   getProperties();
  //   getTeamMembers();
  // }, []);

  return (
    <main className="flex min-h-screen flex-col items-center bg-black text-[#ffc107]  md:px-20">
      <div className="max-w-[1366px] w-full">
        <Navigation role={"user"} />

        <CarouselContainer />
        <div
          ref={ref1}
          className={`w-full flex items-center justify-center   md:[50vh] mb-10 transition-opacity ease-in duration-700 rounded-t-2xl ${
            view1.isIntersecting ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className=" md:h-full flex flex-col md:justify-center items-center">
            <div className=" flex flex-col items-center justify-center text-[24px] md:text-[50px] md:w-full font-bold  mb-5 md:mb-8 ">
              <h1 className="">Platinum Realty Investments</h1>
              <h6 className=" text-[18px] md:text-[24px]">
                Real Estate Solutions Specialist
              </h6>
            </div>
            <p className="text-[16px] md:text-[18px] w-full px-5 text-center mb-5 md:mb-0">
              We are your trusted partners for real estate investment, wealth
              growth, passive income, and financial freedom.
            </p>
          </div>
        </div>
        <div
          ref={ref2}
          className={`w-full  items-center justify-center hidden md:block  mb-10  ${
            view1.isIntersecting ? "opacity-100" : "opacity-50"
          }`}
        >
          <div className=" md:h-full flex flex-col md:justify-center items-center ">
            <div className="flex">
              <Image
                src={jaylin}
                alt="Jaylin Picture"
                style={{
                  objectFit: "contain",
                  borderRadius: 20,
                  height: 300,
                  width: 300,
                }}
              />
              <Image
                src={tina}
                alt="Tina Picture"
                style={{
                  objectFit: "contain",
                  borderRadius: 20,
                  height: 300,
                  width: 300,
                }}
              />
            </div>
            <div className="flex flex-col  w-full items-center mt-5">
              <div className="font-bold text-lg">Founders</div>
              <div className="flex  w-[650px] justify-around">
                <p className="font-bold">Mr. Jaylin McCuff</p>{" "}
                <p className="font-bold"> Mrs. Tina Jackson</p>
              </div>
            </div>
          </div>
        </div>
        <div
          ref={ref2}
          className={`transition-opacity ease-in duration-700 ${
            view2.isIntersecting ? "opacity-100" : "opacity-80"
          } w-full justify-between items-center md:mb-5 px-3 flex flex-col md:flex-row `}
        >
          <Image
            src={aboutImg}
            alt="About Picture"
            style={{
              objectFit: "contain",
              borderRadius: 10,
              height: 400,
              width: 600,
            }}
          />

          <div className="md:w-1/2 md:ml-5">
            <h1 className="font-semibold text-[25px] md:text-[35px]">
              About Platinum
            </h1>
            <div className="text-[14px] md:text-[18px]">
              Platinum Realty Investments is a premier real estate acquisition
              group dedicated to maximizing the potential of every investment.
              With a proven track record of success, we specialize in
              identifying lucrative properties and implementing strategic
              investment strategies to generate substantial returns for our
              clients. With our expertise, integrity, and client-focused
              approach, we aim to build long-lasting relationships and help you
              thrive in the dynamic world of real estate investing.
            </div>
          </div>
        </div>
        <div
          ref={ref3}
          className={`transition-opacity ease-in duration-700 ${
            view2.isIntersecting ? "opacity-100" : "opacity-90"
          } w-full justify-between items-center md:mb-5 px-3 flex flex-col-reverse md:flex-row `}
        >
          <div className="md:w-1/2 mr-5 ">
            <h1 className="font-semibold text-[25px] md:text-[35px]">
              Property Acquisition{" "}
            </h1>
            <div className="text-[14px] md:text-[18px]">
              We take pride in our comprehensive property finding services. Our
              experienced team utilizes their extensive market knowledge and
              network to identify properties that align with your investment
              goals. Whether you're searching for residential, commercial
              multifamily, self storage or mixed-use properties, we employ a
              meticulous approach to locate opportunities that offer excellent
              potential for growth and profitability. We conduct thorough market
              research ensuring that you have access to the most promising
              investment options available.
            </div>
          </div>

          <Image
            src={propPic}
            alt="Prop Picture"
            style={{
              objectFit: "contain",
              borderRadius: 10,
              height: 400,
              width: 600,
            }}
          />
        </div>
        <div
          ref={ref4}
          className={`transition-opacity ease-in duration-700 ${
            view2.isIntersecting ? "opacity-100" : "opacity-100"
          } w-full justify-between items-center md:mb-5 px-3 flex flex-col md:flex-row `}
        >
          <Image
            src={lifeImg}
            alt="About Picture"
            style={{
              objectFit: "contain",
              borderRadius: 10,
              height: 400,
              width: 600,
            }}
          />

          <div className="md:w-1/2 md:ml-5 ">
            <h1 className="font-semibold text-[25px] md:text-[35px]">
              Life Insurance Policies{" "}
            </h1>
            <div className="text-[14px] md:text-[18px]">
              In addition to our real estate investment services, we recognizes
              the importance of protecting your financial future. That's why we
              offer life insurance policies tailored strictly for real estate
              investors. Life insurance provides a safety net for your loved
              ones, ensuring financial stability in the event of an unfortunate
              circumstance. Our team of insurance specialists works closely with
              you to understand your unique requirements, providing personalized
              solutions that offer comprehensive coverage and peace of mind. By
              integrating life insurance into your investment strategy, you can
              safeguard your assets and secure a stable future for your family.
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </main>
  );
}
