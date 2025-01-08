import TextWriter from "@/components/uiBeats/TextWriter.tsx";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
// import { motion } from 'framer-motion'
// import React from 'react'
import ThemeSwitch from "./ThemeSwitch";

import "./HeroBackgroundStars.css";

export function Hero() {
	return (
		<div
			id="hero"
			className="flex min-h-[calc(100vh-64px)] flex-col justify-between bg-opacity-20 pt-[60px]"
		>
			<div className="flex flex-grow flex-row justify-between">
				<div className="flex flex-col justify-between">
					<TextWriter
						text="Hello World"
						className="text-text h-32 bg-gradient-to-t from-border to-black bg-clip-text px-6 py-0 text-8xl font-bold text-transparent shadow-[0_35px_45px_-35px_rgba(127,229,255,0.9),inset_0_-55px_35px_-35px_rgba(0,0,0,0.9)]"
						delay={0.1}
					/>
					<div className="mb-6 mt-0 min-h-32 max-w-[600px] px-6">
						<TextWriter
							text="
        My name is Nicholas Stafford. I am a developer based in Cleveland,
        Ohio. Let me tell you a bit about myself. . .
      "
							className="bg-clip-text p-3 text-2xl font-medium text-foreground"
							delay={0.01}
						/>
					</div>
				</div>
				{/* <ThemeSwitch></ThemeSwitch> */}
			</div>
			<div className="flex flex-row items-center justify-between py-10">
				<div className="flex flex-grow flex-col justify-center align-middle">
					<a href="#experience">
						<span className="text-text text-3xl">Learn More:</span>
						<br />
						<FaChevronDown className="text-text text-[8em] opacity-30"></FaChevronDown>{" "}
					</a>
				</div>
				<span className="align-center text-text text-2xl">- or -</span>
				<div className="flex flex-grow flex-col">
					<a href="#" className="flex flex-col items-end align-bottom">
						<FaChevronUp className="text-text text-[8em] opacity-30"></FaChevronUp>{" "}
						<br />
						<span className="text-text text-3xl">Contact Me</span>
					</a>
				</div>
			</div>
		</div>
	);
}
