import TextWriter from "@/components/uiBeats/TextWriter.tsx";
// import { BiChevronDown, BiChevronUp } from "react-icons/bi";
// import { motion } from 'framer-motion'
// import React from 'react'
// import ThemeSwitch from "./ThemeSwitch";
import casualHeadshot from "/casualHeadshotBlue.png";

import "./HeroBackgroundStars.css";

export function Hero() {
	return (
		<div
			id="hero"
			className="col-start-2 col-span-10 flex items-start h-[calc(100vh-64px)] min-h-[calc(100vh-64px)] flex-row justify-between bg-opacity-20  "
		>
			<div className="flex flex-col flex-shrink-0 flex-grow-0  h-full min-h-full justify-end">
				<img
					src={casualHeadshot}
					// src="https://images.unsplash.com/photo-1461988320302-91bde64fc8e4?ixid=2yJhcHBfaWQiOjEyMDd9"
					className="h-[calc((100vh-64px)*0.95)] min-h-[calc((100vh-64px)*0.95)] max-h-[calc((100vh-64px)*0.95)]object-contain"
					alt="profile-picture"
				/>
			</div>
			<div className="flex flex-col flex-grow justify-between h-full">
				<TextWriter
					className="relative top-12 left-[-11rem] text-right min-w-[20em] max-w-[20em] w-[20em]  bg-clip-text p-3 text-2xl font-medium foreground text-accent"
					text="
                My name is Nicholas Stafford. I am a developer based in Cleveland,
                Ohio. Let me tell you a bit about myself.
              "
					delay={0.02}
				/>
				<div className="flex flex-row items-center justify-between py-10 font-light text-[var(--ns-primary)]">
					<a
						href="#aboutme"
						className="flex flex-row justify-start flex-grow hover:margin-b-[-1rem] transition-transform duration-300 "
					>
						<div className="flex flex-col justify-center items-center ">
							<span className="text-text text-3xl">Learn More</span>
							{/* <BiChevronDown className="text-text text-[12em] "></BiChevronDown>{" "} */}
						</div>
					</a>
					<span className="align-center text-text text-3xl text-accent">
						- or -
					</span>
					<a
						href="#"
						className="flex flex-row justify-end flex-grow hover:translate-y-[-1rem] transition-transform duration-300 "
					>
						<div className="flex flex-col justify-center items-center ">
							{/* <BiChevronUp className="text-text text-[12em] "></BiChevronUp>{" "} */}
							<span className="text-text text-3xl">Contact Me</span>
						</div>
					</a>
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
			<span className=" absolute top-64 right-12 text-destructive text-3xl font-bold text-right bg-black/50 h-fit">
				Work in progress. <br />
				Definitly not finished!
				<br />
				<br />I am still playing around <br />
				with the background <br />
				vertex shaders, <br /> so for now, you get this.
			</span>
		</div>
	);
}
