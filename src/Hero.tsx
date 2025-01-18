import TextWriter from "@/components/uiBeats/TextWriter.tsx";
// import { BiChevronDown, BiChevronUp } from "react-icons/bi";
// import { motion } from 'framer-motion'
// import React from 'react'
// import ThemeSwitch from "./ThemeSwitch";

import "./HeroBackgroundStars.css";
import { NsCard } from "./components/ns/nsCard";

export function Hero() {
	return (
		<div
			id="hero"
			className=" py-24 col-start-2 col-span-10 flex items-start gap-6 h-[calc(100vh-64px)] min-h-[calc(100vh-64px)] flex-row justify-between "
		>
			<div className="flex gap-5 flex-col flex-grow justify-between h-full">
				<NsCard childContainerClassName="p-6 py-24 flex flex-row justify-center">
					<span className="text-[8rem] leading-[8rem] text-accent">
						I write Code
					</span>
				</NsCard>

				<div className="flex flex-row justify-start items-end">
					<div>
						<NsCard
							className="flex-grow-0 flex-shrink"
							childContainerClassName="p-6 text-3xl flex flex-col gap-4"
						>
							<span className=" text-primary">
								Want me to write something for you?
							</span>
							<span className="text-accent self-end">Contact me.</span>
						</NsCard>
					</div>
				</div>
				<NsCard>
					<div className="flex flex-row items-center justify-between p-10 font-light text-[var(--ns-primary)]">
						<a
							href="#aboutme"
							className="flex flex-row justify-center flex-grow "
						>
							<span className="text-text text-3xl">Learn More</span>
						</a>
					</div>
				</NsCard>
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
