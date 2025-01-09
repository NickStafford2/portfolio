import TextWriter from "@/components/uiBeats/TextWriter.tsx";
import { BiChevronDown, BiChevronUp } from "react-icons/bi";
// import { motion } from 'framer-motion'
// import React from 'react'
// import ThemeSwitch from "./ThemeSwitch";

import "./HeroBackgroundStars.css";

export function Hero() {
	return (
		<div
			id="hero"
			className="flex min-h-[calc(100vh-64px)] flex-col justify-between bg-opacity-20 pt-[60px] "
		>
			<div className="flex flex-grow flex-row justify-between">
				<div className="flex flex-col justify-between pt-12">
					<div>
						<TextWriter
							text="Hello World"
							// className="text-text h-32 bg-gradient-to-t from-border to-black bg-clip-text px-6 py-0 text-8xl font-bold text-transparent shadow-[0_55px_65px_-25px_rgba(127,229,255,0.9)]"
							className="text-text h-32 bg-gradient-to-t from-border to-black bg-clip-text  text-[7em] font-bold text-transparent"
							delay={0.1}
						/>
					</div>
					<div className="mb-6 mt-0 min-h-32 max-w-[600px]">
						<TextWriter
							text="
                My name is Nicholas Stafford. I am a developer based in Cleveland,
                Ohio. Let me tell you a bit about myself. . .
              "
							className="bg-clip-text p-3 text-2xl font-medium foreground text-accent"
							delay={0.01}
						/>
					</div>
				</div>
				{/* <ThemeSwitch></ThemeSwitch> */}
				<span className="text-destructive text-3xl font-bold text-right bg-black/50 h-fit">
					Work in progress. <br />
					Definitly not finished!
					<br />
					<br />I am still playing around <br />
					with the background <br />
					vertex shaders, <br /> so for now, you get this.
				</span>
			</div>
			<div className="flex flex-row items-center justify-between py-10  font-light text-[var(--ns-primary)]">
				<a
					href="#experience"
					className="flex flex-row justify-start flex-grow hover:translate-y-4 transition-transform duration-300 hover:font-bold"
				>
					<div className="flex flex-col justify-center items-center ">
						<span className="text-text text-3xl">Learn More:</span>
						<BiChevronDown className="text-text text-[12em] "></BiChevronDown>{" "}
					</div>
				</a>
				<span className="align-center text-text text-3xl text-accent">
					- or -
				</span>
				<a
					href="#"
					className="flex flex-row justify-end flex-grow hover:translate-y-[-1rem] transition-transform duration-300 hover:font-bold"
				>
					<div className="flex flex-col justify-center items-center ">
						<BiChevronUp className="text-text text-[12em] "></BiChevronUp>{" "}
						<span className="text-text text-3xl">Contact Me</span>
					</div>
				</a>
			</div>
		</div>
	);
}
