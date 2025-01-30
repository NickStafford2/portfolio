// import TextWriter from "@/components/uiBeats/TextWriter.tsx";
// import { BiChevronDown, BiChevronUp } from "react-icons/bi";
// import { motion } from 'framer-motion'
// import React from 'react'
// import ThemeSwitch from "./ThemeSwitch";
import { useState } from "react";
import ContactMe from "./ContactMe";
import "./HeroBackgroundStars.css";
import HeroSvgText from "./HeroSvgText";
import { NsCard } from "./components/ns/nsCard";

export function Hero() {
  const [showContacts, setShowContacts] = useState<boolean>(false);
  return (
    <div
      id="hero"
      className=" py-24 col-start-2 col-span-11 flex items-start gap-6 min-h-[calc(100vh-64px)] flex-row justify-between"
    >
      <div className=" flex gap-5 flex-col flex-grow-0 justify-between h-full w-full">
        <HeroSvgText />
        <div className=" flex flex-col lg:flex-row pt-16 gap-6 justify-between flex-grow">
          <div className="flex-col flex justify-between ">
            <div>
              <br />
              <button
                onClick={() => {
                  setShowContacts(!showContacts);
                }}
                className="self-start mt-16 text-4xl"
              >
                <NsCard className="p-[4px] " childContainerClassName="p-2 text-nowrap bg-transparent text-6xl font-bold text-[var(--ns-background)]">
                  Contact Me
                </NsCard>
              </button>
            </div>

            <div className="invisible lg:visible w-[15em] xl:w-[12em] 2xl:w-[30em] max-w-[30em]">
              <div className="font-light text-[var(--ns-primary)]">
                <a
                  href="#aboutme"
                  className="py-6 pr-6 text-text text-3xl text-nowrap hover:text-accent"
                >
                  See what else I do...
                </a>
              </div>
            </div>
          </div>
          <ContactMe toggle={showContacts} />
        </div>
      </div>
      {/* <div className="flex flex-grow flex-row justify-between bg-red-600/50"> */}
      {/* 	<div className="flex flex-col justify-between pt-12"> */}
      {/* 		<TextWriter */}
      {/* 			text="Hello World" */}
      {/* 			// className="text-text h-32 bg-gradient-to-t from-border to-black bg-clip-text px-6 py-0 text-8xl font-bold text-transparent shadow-[0_55px_65px_-25px_rgba(127,229,255,0.9)]" */}
      {/* 			className="text-text h-32 bg-gradient-to-t from-border to-black bg-clip-text  text-[7em] font-bold text-transparent" */}
      {/* 			delay={0.1} */}
      {/* 		/> */}
      {/* 		<div className="mb-6 mt-0 min-h-32 max-w-[600px]"></div> */}
      {/* 	</div> */}
      {/* 	<ThemeSwitch></ThemeSwitch> */}
      {/* </div> */}

      {/* <span className=" absolute top-64 right-12 text-destructive text-3xl font-bold text-right bg-black/50 h-fit"> */}
      {/* 	<NsCard childContainerClassName="p-4"> */}
      {/* 		Work in progress. <br /> */}
      {/* 		Definitly not finished! */}
      {/* 		<br /> */}
      {/* 		<br />I am still playing around <br /> */}
      {/* 		with the background <br /> */}
      {/* 		vertex shaders, <br /> so for now, you get this. */}
      {/* 	</NsCard> */}
      {/* </span> */}
    </div>
  );
}
