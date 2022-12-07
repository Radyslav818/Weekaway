import React from "react";

function Hero() {
  return (
    <div className="w-full h-[90vh]">
      <img
        src="https://images.unsplash.com/photo-1530053969600-caed2596d242?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjJ8fHNlYXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1200&q=60"
        alt=""
        className="w-full h-full object-cover"
      />
      <div className="max-w-[1140px] m-auto">
        <div className="absolute top-[40%] w-full md:-[50%] max-w-[600px] h-full flex flex-col text-white p-4">
          <h1 className="font-bold text-4xl">Find You Special Trip</h1>
          <h2 className="text-4xl py-4 italic">With Weekaway</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
            odio placeat explicabo totam porro, officia sequi et nesciunt velit
            maxime dolores sunt debitis voluptates quasi expedita voluptatum
            minima repudiandae. Delectus!
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
