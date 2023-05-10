import React from "react";
import Navbar from "./Navbar";

const About = () => {
  return (
    <>
    <Navbar/>
    <div className="flex flex-col items-center justify-center py-10 mt-20">
      <h1 className="text-4xl font-bold mb-6">About Us</h1>
      <div className="max-w-2xl text-center mb-6">
        <p className="mb-4">
        Chit funds are key instruments of financial inclusion for millions in India, especially for low
budget investors who do not have access to formal institutions like banks and NBFCs. Chit
fund is a very traditional and indigenous financial instrument helping subscribers to
inculcate the habit of saving. India is home to millions of such subscribers who have been
doing this for many decades now, but on the other hand chit fund system is also susceptible
to fraud. With news reports claiming that between `1.2 to 1.4 lacs crores of public money is
lost to various chit fund schemes. Upwards of 350 scams, impacting 15 crore families,
across 17 states were identified which targeted primarily low budget investors by several
chit fund companies. </p>
        <p className="mb-4">
          Blockchain technology offers numerous advantages over traditional chit funds, including increased transparency, security, and efficiency. By decentralizing the process, we're able to eliminate the need for intermediaries and reduce the risk of fraud or corruption.
        </p>
       
        
      </div>
      <div className="max-w-2xl text-center border-2 p-4">
        <h2 className="text-2xl font-bold mb-4">Tech Stack</h2>
        <p className="mb-2">
          Our platform is built using the following technologies:
        </p>
        <ul className="ml-6">
          <li>React</li>
          <li>Polygon</li>
          <li>Solidity</li>
          <li>ThirdWeb</li>
          <li>Tailwind CSS</li>
          
        </ul>
      </div>
    </div>
    </>
  );
};

export default About;
