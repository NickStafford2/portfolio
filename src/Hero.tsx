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
			className=" py-24 col-start-2 col-span-11 flex items-start gap-6 h-[calc(100vh-64px)] min-h-[calc(100vh-64px)] flex-row justify-between "
		>
			<div className=" flex gap-5 flex-col flex-grow-0 justify-between h-full w-full">
				<HeroSvgText />

				{/* <span className="text-[8rem] leading-[8rem] text-accent"> */}
				{/* 	Got Code? */}
				{/* </span> */}

				{/* <svg */}
				{/* 	xmlns="http://www.w3.org/2000/svg" */}
				{/* 	viewBox="0 8.859999656677246 236.64999389648438 37.0099983215332" */}
				{/* 	data-asc="0.9052734375" */}
				{/* > */}
				{/* 	<g fill="var(--ns-primary)"> */}
				{/* 		<g fill="var(--ns-primary)" transform="translate(0, 0)"> */}
				{/* 			<path */}
				{/* 				id="gotCode" */}
				{/* 				d="M17.94 31.23L17.94 27.03L33.11 27.00L33.11 40.28Q29.61 43.07 25.90 44.47Q22.19 45.87 18.29 45.87Q13.01 45.87 8.70 43.62Q4.39 41.36 2.20 37.08Q0 32.81 0 27.54Q0 22.31 2.19 17.79Q4.37 13.26 8.47 11.06Q12.57 8.86 17.92 8.86Q21.80 8.86 24.94 10.12Q28.08 11.38 29.86 13.62Q31.64 15.87 32.57 19.48L28.30 20.65Q27.49 17.92 26.29 16.36Q25.10 14.79 22.88 13.85Q20.65 12.92 17.94 12.92Q14.70 12.92 12.33 13.90Q9.96 14.89 8.51 16.50Q7.06 18.12 6.25 20.04Q4.88 23.36 4.88 27.25Q4.88 32.03 6.53 35.25Q8.18 38.48 11.33 40.04Q14.48 41.60 18.02 41.60Q21.09 41.60 24.02 40.42Q26.95 39.23 28.47 37.89L28.47 31.23L17.94 31.23ZM37.89 32.30Q37.89 25.10 41.89 21.63Q45.24 18.75 50.05 18.75Q55.40 18.75 58.79 22.25Q62.18 25.76 62.18 31.93Q62.18 36.94 60.68 39.81Q59.18 42.68 56.31 44.26Q53.44 45.85 50.05 45.85Q44.60 45.85 41.25 42.36Q37.89 38.87 37.89 32.30M42.41 32.30Q42.41 37.28 44.58 39.76Q46.75 42.24 50.05 42.24Q53.32 42.24 55.49 39.75Q57.67 37.26 57.67 32.15Q57.67 27.34 55.48 24.87Q53.30 22.39 50.05 22.39Q46.75 22.39 44.58 24.85Q42.41 27.32 42.41 32.30ZM76.93 41.33L77.56 45.21Q75.71 45.61 74.24 45.61Q71.85 45.61 70.53 44.85Q69.21 44.09 68.68 42.86Q68.14 41.63 68.14 37.67L68.14 22.75L64.92 22.75L64.92 19.34L68.14 19.34L68.14 12.92L72.51 10.28L72.51 19.34L76.93 19.34L76.93 22.75L72.51 22.75L72.51 37.92Q72.51 39.79 72.74 40.33Q72.97 40.87 73.50 41.19Q74.02 41.50 75 41.50Q75.73 41.50 76.93 41.33ZM121.22 32.71L125.95 33.91Q124.46 39.75 120.59 42.81Q116.72 45.87 111.13 45.87Q105.35 45.87 101.72 43.52Q98.10 41.16 96.20 36.69Q94.31 32.23 94.31 27.10Q94.31 21.51 96.45 17.35Q98.58 13.18 102.53 11.02Q106.47 8.86 111.21 8.86Q116.58 8.86 120.24 11.60Q123.90 14.33 125.34 19.29L120.68 20.39Q119.43 16.48 117.07 14.70Q114.70 12.92 111.11 12.92Q106.98 12.92 104.21 14.89Q101.44 16.87 100.32 20.20Q99.19 23.54 99.19 27.08Q99.19 31.64 100.52 35.05Q101.86 38.45 104.66 40.14Q107.47 41.82 110.74 41.82Q114.72 41.82 117.48 39.53Q120.24 37.23 121.22 32.71ZM129.59 32.30Q129.59 25.10 133.59 21.63Q136.94 18.75 141.75 18.75Q147.09 18.75 150.49 22.25Q153.88 25.76 153.88 31.93Q153.88 36.94 152.38 39.81Q150.88 42.68 148.01 44.26Q145.14 45.85 141.75 45.85Q136.30 45.85 132.95 42.36Q129.59 38.87 129.59 32.30M134.11 32.30Q134.11 37.28 136.28 39.76Q138.45 42.24 141.75 42.24Q145.02 42.24 147.19 39.75Q149.37 37.26 149.37 32.15Q149.37 27.34 147.18 24.87Q145.00 22.39 141.75 22.39Q138.45 22.39 136.28 24.85Q134.11 27.32 134.11 32.30ZM175.85 45.26L175.85 41.99Q173.39 45.85 168.60 45.85Q165.50 45.85 162.90 44.14Q160.30 42.43 158.87 39.37Q157.45 36.30 157.45 32.32Q157.45 28.44 158.74 25.28Q160.03 22.12 162.62 20.43Q165.21 18.75 168.41 18.75Q170.75 18.75 172.58 19.74Q174.41 20.73 175.56 22.31L175.56 9.47L179.93 9.47L179.93 45.26L175.85 45.26M161.96 32.32Q161.96 37.30 164.06 39.77Q166.16 42.24 169.02 42.24Q171.90 42.24 173.91 39.88Q175.93 37.52 175.93 32.69Q175.93 27.37 173.88 24.88Q171.83 22.39 168.82 22.39Q165.89 22.39 163.93 24.78Q161.96 27.17 161.96 32.32ZM204.59 36.91L209.13 37.48Q208.06 41.46 205.15 43.65Q202.25 45.85 197.73 45.85Q192.04 45.85 188.71 42.35Q185.38 38.84 185.38 32.52Q185.38 25.98 188.75 22.36Q192.11 18.75 197.49 18.75Q202.69 18.75 205.98 22.29Q209.28 25.83 209.28 32.25Q209.28 32.64 209.25 33.42L189.92 33.42Q190.16 37.70 192.33 39.97Q194.51 42.24 197.75 42.24Q200.17 42.24 201.88 40.97Q203.59 39.70 204.59 36.91M190.16 29.81L204.64 29.81Q204.35 26.54 202.98 24.90Q200.88 22.36 197.53 22.36Q194.51 22.36 192.44 24.39Q190.38 26.42 190.16 29.81ZM222.88 36.45Q222.85 35.57 222.85 35.13Q222.85 32.54 223.58 30.66Q224.12 29.25 225.32 27.81Q226.20 26.76 228.48 24.74Q230.76 22.73 231.45 21.53Q232.13 20.34 232.13 18.92Q232.13 16.36 230.13 14.42Q228.13 12.48 225.22 12.48Q222.41 12.48 220.53 14.23Q218.65 15.99 218.07 19.73L213.55 19.19Q214.16 14.18 217.18 11.52Q220.19 8.86 225.15 8.86Q230.40 8.86 233.52 11.72Q236.65 14.58 236.65 18.63Q236.65 20.97 235.55 22.95Q234.45 24.93 231.25 27.76Q229.10 29.66 228.44 30.57Q227.78 31.47 227.47 32.64Q227.15 33.81 227.10 36.45L222.88 36.45M222.61 45.26L222.61 40.26L227.61 40.26L227.61 45.26L222.61 45.26Z" */}
				{/* 			/> */}
				{/* 		</g> */}
				{/* 	</g> */}
				{/* </svg> */}

				<div className=" flex flex-col lg:flex-row pt-16 gap-6 justify-between flex-grow">
					<div className="flex-col flex justify-between ">
						<div>
							<span className=" text-primary text-wrap lg:text-nowrap text-3xl">
								Need code written?
							</span>
							{/* <svg xmlns="http://www.w3.org/2000/svg"> */}
							{/* 	<g fill="var(--ns-primary)"> */}
							{/* 		<g fill="var(--ns-primary)" transform="translate(0, 0)"> */}
							{/* 			<path d="M9.50 45.26L0 9.47L4.86 9.47L10.30 32.93Q11.18 36.62 11.82 40.26Q13.18 34.52 13.43 33.64L20.24 9.47L25.95 9.47L31.08 27.59Q33.01 34.33 33.86 40.26Q34.55 36.87 35.64 32.47L41.26 9.47L46.02 9.47L36.21 45.26L31.64 45.26L24.10 17.99Q23.14 14.58 22.97 13.79Q22.41 16.26 21.92 17.99L14.33 45.26L9.50 45.26ZM64.94 42.07Q62.50 44.14 60.24 45.00Q57.98 45.85 55.40 45.85Q51.12 45.85 48.83 43.76Q46.53 41.67 46.53 38.43Q46.53 36.52 47.40 34.95Q48.27 33.37 49.67 32.42Q51.07 31.47 52.83 30.98Q54.13 30.64 56.74 30.32Q62.06 29.69 64.58 28.81Q64.60 27.91 64.60 27.66Q64.60 24.98 63.35 23.88Q61.67 22.39 58.35 22.39Q55.25 22.39 53.77 23.47Q52.29 24.56 51.59 27.32L47.29 26.73Q47.88 23.97 49.22 22.28Q50.56 20.58 53.10 19.67Q55.64 18.75 58.98 18.75Q62.30 18.75 64.38 19.53Q66.46 20.31 67.43 21.50Q68.41 22.68 68.80 24.49Q69.02 25.61 69.02 28.54L69.02 34.40Q69.02 40.53 69.30 42.15Q69.58 43.77 70.41 45.26L65.82 45.26Q65.14 43.90 64.94 42.07M64.58 32.25Q62.18 33.23 57.40 33.91Q54.69 34.30 53.56 34.79Q52.44 35.28 51.83 36.22Q51.22 37.16 51.22 38.31Q51.22 40.06 52.55 41.24Q53.88 42.41 56.45 42.41Q58.98 42.41 60.96 41.30Q62.94 40.19 63.87 38.26Q64.58 36.77 64.58 33.86L64.58 32.25ZM75.83 45.26L75.83 19.34L79.79 19.34L79.79 23.02Q82.64 18.75 88.04 18.75Q90.38 18.75 92.35 19.59Q94.31 20.43 95.29 21.80Q96.26 23.17 96.66 25.05Q96.90 26.27 96.90 29.32L96.90 45.26L92.50 45.26L92.50 29.49Q92.50 26.81 91.99 25.48Q91.48 24.15 90.17 23.35Q88.87 22.56 87.11 22.56Q84.30 22.56 82.26 24.34Q80.22 26.12 80.22 31.10L80.22 45.26L75.83 45.26ZM113.23 41.33L113.87 45.21Q112.01 45.61 110.55 45.61Q108.15 45.61 106.84 44.85Q105.52 44.09 104.98 42.86Q104.44 41.63 104.44 37.67L104.44 22.75L101.22 22.75L101.22 19.34L104.44 19.34L104.44 12.92L108.81 10.28L108.81 19.34L113.23 19.34L113.23 22.75L108.81 22.75L108.81 37.92Q108.81 39.79 109.05 40.33Q109.28 40.87 109.80 41.19Q110.33 41.50 111.30 41.50Q112.04 41.50 113.23 41.33ZM131.42 45.26L131.42 19.34L135.35 19.34L135.35 22.97Q136.57 21.07 138.60 19.91Q140.63 18.75 143.21 18.75Q146.09 18.75 147.94 19.95Q149.78 21.14 150.54 23.29Q153.61 18.75 158.54 18.75Q162.40 18.75 164.48 20.89Q166.55 23.02 166.55 27.47L166.55 45.26L162.18 45.26L162.18 28.93Q162.18 26.29 161.76 25.13Q161.33 23.97 160.21 23.27Q159.08 22.56 157.57 22.56Q154.83 22.56 153.03 24.38Q151.22 26.20 151.22 30.20L151.22 45.26L146.83 45.26L146.83 28.42Q146.83 25.49 145.75 24.02Q144.68 22.56 142.24 22.56Q140.38 22.56 138.81 23.54Q137.23 24.51 136.52 26.39Q135.82 28.27 135.82 31.81L135.82 45.26L131.42 45.26ZM190.82 36.91L195.36 37.48Q194.29 41.46 191.38 43.65Q188.48 45.85 183.96 45.85Q178.27 45.85 174.94 42.35Q171.61 38.84 171.61 32.52Q171.61 25.98 174.98 22.36Q178.34 18.75 183.72 18.75Q188.92 18.75 192.21 22.29Q195.51 25.83 195.51 32.25Q195.51 32.64 195.48 33.42L176.15 33.42Q176.39 37.70 178.56 39.97Q180.74 42.24 183.98 42.24Q186.40 42.24 188.11 40.97Q189.82 39.70 190.82 36.91M176.39 29.81L190.87 29.81Q190.58 26.54 189.21 24.90Q187.11 22.36 183.76 22.36Q180.74 22.36 178.67 24.39Q176.61 26.42 176.39 29.81ZM224.37 41.33L225 45.21Q223.14 45.61 221.68 45.61Q219.29 45.61 217.97 44.85Q216.65 44.09 216.11 42.86Q215.58 41.63 215.58 37.67L215.58 22.75L212.35 22.75L212.35 19.34L215.58 19.34L215.58 12.92L219.95 10.28L219.95 19.34L224.37 19.34L224.37 22.75L219.95 22.75L219.95 37.92Q219.95 39.79 220.18 40.33Q220.41 40.87 220.94 41.19Q221.46 41.50 222.44 41.50Q223.17 41.50 224.37 41.33ZM227.03 32.30Q227.03 25.10 231.03 21.63Q234.38 18.75 239.18 18.75Q244.53 18.75 247.92 22.25Q251.32 25.76 251.32 31.93Q251.32 36.94 249.82 39.81Q248.32 42.68 245.45 44.26Q242.58 45.85 239.18 45.85Q233.74 45.85 230.38 42.36Q227.03 38.87 227.03 32.30M231.54 32.30Q231.54 37.28 233.72 39.76Q235.89 42.24 239.18 42.24Q242.46 42.24 244.63 39.75Q246.80 37.26 246.80 32.15Q246.80 27.34 244.62 24.87Q242.43 22.39 239.18 22.39Q235.89 22.39 233.72 24.85Q231.54 27.32 231.54 32.30ZM275.15 45.26L267.21 19.34L271.75 19.34L275.88 34.30L277.42 39.87Q277.51 39.45 278.76 34.52L282.89 19.34L287.40 19.34L291.28 34.38L292.58 39.33L294.07 34.33L298.51 19.34L302.78 19.34L294.68 45.26L290.11 45.26L285.99 29.74L284.99 25.32L279.74 45.26L275.15 45.26ZM306.42 45.26L306.42 19.34L310.38 19.34L310.38 23.27Q311.89 20.51 313.17 19.63Q314.45 18.75 315.99 18.75Q318.21 18.75 320.51 20.17L318.99 24.24Q317.38 23.29 315.77 23.29Q314.33 23.29 313.18 24.16Q312.04 25.02 311.55 26.56Q310.82 28.91 310.82 31.69L310.82 45.26L306.42 45.26ZM323.14 14.53L323.14 9.47L327.54 9.47L327.54 14.53L323.14 14.53M323.14 45.26L323.14 19.34L327.54 19.34L327.54 45.26L323.14 45.26ZM343.82 41.33L344.46 45.21Q342.60 45.61 341.14 45.61Q338.75 45.61 337.43 44.85Q336.11 44.09 335.57 42.86Q335.03 41.63 335.03 37.67L335.03 22.75L331.81 22.75L331.81 19.34L335.03 19.34L335.03 12.92L339.40 10.28L339.40 19.34L343.82 19.34L343.82 22.75L339.40 22.75L339.40 37.92Q339.40 39.79 339.64 40.33Q339.87 40.87 340.39 41.19Q340.92 41.50 341.89 41.50Q342.63 41.50 343.82 41.33ZM365.87 36.91L370.41 37.48Q369.34 41.46 366.43 43.65Q363.53 45.85 359.01 45.85Q353.32 45.85 349.99 42.35Q346.66 38.84 346.66 32.52Q346.66 25.98 350.02 22.36Q353.39 18.75 358.76 18.75Q363.96 18.75 367.26 22.29Q370.56 25.83 370.56 32.25Q370.56 32.64 370.53 33.42L351.20 33.42Q351.44 37.70 353.61 39.97Q355.79 42.24 359.03 42.24Q361.45 42.24 363.16 40.97Q364.87 39.70 365.87 36.91M351.44 29.81L365.92 29.81Q365.63 26.54 364.26 24.90Q362.16 22.36 358.81 22.36Q355.79 22.36 353.72 24.39Q351.66 26.42 351.44 29.81ZM388.06 37.52L392.41 36.84Q392.77 39.45 394.45 40.84Q396.12 42.24 399.12 42.24Q402.15 42.24 403.61 41.00Q405.08 39.77 405.08 38.11Q405.08 36.62 403.78 35.77Q402.88 35.18 399.29 34.28Q394.46 33.06 392.59 32.17Q390.72 31.27 389.76 29.70Q388.79 28.13 388.79 26.22Q388.79 24.49 389.59 23.01Q390.38 21.53 391.75 20.56Q392.77 19.80 394.54 19.27Q396.31 18.75 398.34 18.75Q401.39 18.75 403.70 19.63Q406.01 20.51 407.10 22.01Q408.20 23.51 408.62 26.03L404.32 26.61Q404.03 24.61 402.62 23.49Q401.22 22.36 398.66 22.36Q395.63 22.36 394.34 23.36Q393.04 24.37 393.04 25.71Q393.04 26.56 393.58 27.25Q394.12 27.95 395.26 28.42Q395.92 28.66 399.15 29.54Q403.81 30.79 405.65 31.58Q407.50 32.37 408.54 33.89Q409.59 35.40 409.59 37.65Q409.59 39.84 408.31 41.78Q407.03 43.73 404.61 44.79Q402.20 45.85 399.15 45.85Q394.09 45.85 391.44 43.75Q388.79 41.65 388.06 37.52ZM413.18 32.30Q413.18 25.10 417.19 21.63Q420.53 18.75 425.34 18.75Q430.69 18.75 434.08 22.25Q437.48 25.76 437.48 31.93Q437.48 36.94 435.97 39.81Q434.47 42.68 431.60 44.26Q428.74 45.85 425.34 45.85Q419.90 45.85 416.54 42.36Q413.18 38.87 413.18 32.30M417.70 32.30Q417.70 37.28 419.87 39.76Q422.05 42.24 425.34 42.24Q428.61 42.24 430.79 39.75Q432.96 37.26 432.96 32.15Q432.96 27.34 430.77 24.87Q428.59 22.39 425.34 22.39Q422.05 22.39 419.87 24.85Q417.70 27.32 417.70 32.30ZM442.63 45.26L442.63 19.34L446.56 19.34L446.56 22.97Q447.78 21.07 449.80 19.91Q451.83 18.75 454.42 18.75Q457.30 18.75 459.14 19.95Q460.99 21.14 461.74 23.29Q464.82 18.75 469.75 18.75Q473.61 18.75 475.68 20.89Q477.76 23.02 477.76 27.47L477.76 45.26L473.39 45.26L473.39 28.93Q473.39 26.29 472.96 25.13Q472.53 23.97 471.41 23.27Q470.29 22.56 468.77 22.56Q466.04 22.56 464.23 24.38Q462.43 26.20 462.43 30.20L462.43 45.26L458.03 45.26L458.03 28.42Q458.03 25.49 456.96 24.02Q455.88 22.56 453.44 22.56Q451.59 22.56 450.01 23.54Q448.44 24.51 447.73 26.39Q447.02 28.27 447.02 31.81L447.02 45.26L442.63 45.26ZM502.03 36.91L506.57 37.48Q505.49 41.46 502.59 43.65Q499.68 45.85 495.17 45.85Q489.48 45.85 486.15 42.35Q482.81 38.84 482.81 32.52Q482.81 25.98 486.18 22.36Q489.55 18.75 494.92 18.75Q500.12 18.75 503.42 22.29Q506.71 25.83 506.71 32.25Q506.71 32.64 506.69 33.42L487.35 33.42Q487.60 37.70 489.77 39.97Q491.94 42.24 495.19 42.24Q497.61 42.24 499.32 40.97Q501.03 39.70 502.03 36.91M487.60 29.81L502.08 29.81Q501.78 26.54 500.42 24.90Q498.32 22.36 494.97 22.36Q491.94 22.36 489.88 24.39Q487.82 26.42 487.60 29.81ZM521.68 41.33L522.31 45.21Q520.46 45.61 518.99 45.61Q516.60 45.61 515.28 44.85Q513.96 44.09 513.43 42.86Q512.89 41.63 512.89 37.67L512.89 22.75L509.67 22.75L509.67 19.34L512.89 19.34L512.89 12.92L517.26 10.28L517.26 19.34L521.68 19.34L521.68 22.75L517.26 22.75L517.26 37.92Q517.26 39.79 517.49 40.33Q517.72 40.87 518.25 41.19Q518.77 41.50 519.75 41.50Q520.48 41.50 521.68 41.33ZM525.98 45.26L525.98 9.47L530.37 9.47L530.37 22.31Q533.45 18.75 538.13 18.75Q541.02 18.75 543.14 19.89Q545.26 21.02 546.18 23.02Q547.09 25.02 547.09 28.83L547.09 45.26L542.70 45.26L542.70 28.83Q542.70 25.54 541.27 24.04Q539.84 22.53 537.23 22.53Q535.28 22.53 533.56 23.55Q531.84 24.56 531.10 26.29Q530.37 28.03 530.37 31.08L530.37 45.26L525.98 45.26ZM553.81 14.53L553.81 9.47L558.20 9.47L558.20 14.53L553.81 14.53M553.81 45.26L553.81 19.34L558.20 19.34L558.20 45.26L553.81 45.26ZM564.89 45.26L564.89 19.34L568.85 19.34L568.85 23.02Q571.70 18.75 577.10 18.75Q579.44 18.75 581.41 19.59Q583.37 20.43 584.35 21.80Q585.33 23.17 585.72 25.05Q585.96 26.27 585.96 29.32L585.96 45.26L581.57 45.26L581.57 29.49Q581.57 26.81 581.05 25.48Q580.54 24.15 579.24 23.35Q577.93 22.56 576.17 22.56Q573.36 22.56 571.33 24.34Q569.29 26.12 569.29 31.10L569.29 45.26L564.89 45.26ZM591.89 47.41L596.17 48.05Q596.44 50.02 597.66 50.93Q599.29 52.15 602.12 52.15Q605.18 52.15 606.84 50.93Q608.50 49.71 609.08 47.51Q609.42 46.17 609.40 41.87Q606.52 45.26 602.22 45.26Q596.88 45.26 593.95 41.41Q591.02 37.55 591.02 32.15Q591.02 28.44 592.36 25.31Q593.70 22.17 596.25 20.46Q598.80 18.75 602.25 18.75Q606.84 18.75 609.81 22.46L609.81 19.34L613.87 19.34L613.87 41.75Q613.87 47.80 612.63 50.33Q611.40 52.86 608.73 54.32Q606.05 55.79 602.15 55.79Q597.51 55.79 594.65 53.70Q591.80 51.61 591.89 47.41M595.53 31.84Q595.53 36.94 597.56 39.28Q599.58 41.63 602.64 41.63Q605.66 41.63 607.71 39.29Q609.77 36.96 609.77 31.98Q609.77 27.22 607.65 24.80Q605.54 22.39 602.56 22.39Q599.63 22.39 597.58 24.77Q595.53 27.15 595.53 31.84ZM635.45 45.26L635.45 22.75L631.57 22.75L631.57 19.34L635.45 19.34L635.45 16.58Q635.45 13.96 635.91 12.70Q636.55 10.99 638.15 9.92Q639.75 8.86 642.63 8.86Q644.48 8.86 646.73 9.30L646.07 13.13Q644.70 12.89 643.48 12.89Q641.48 12.89 640.65 13.75Q639.82 14.60 639.82 16.94L639.82 19.34L644.87 19.34L644.87 22.75L639.82 22.75L639.82 45.26L635.45 45.26ZM646.66 32.30Q646.66 25.10 650.66 21.63Q654.00 18.75 658.81 18.75Q664.16 18.75 667.55 22.25Q670.95 25.76 670.95 31.93Q670.95 36.94 669.45 39.81Q667.94 42.68 665.08 44.26Q662.21 45.85 658.81 45.85Q653.37 45.85 650.01 42.36Q646.66 38.87 646.66 32.30M651.17 32.30Q651.17 37.28 653.34 39.76Q655.52 42.24 658.81 42.24Q662.08 42.24 664.26 39.75Q666.43 37.26 666.43 32.15Q666.43 27.34 664.25 24.87Q662.06 22.39 658.81 22.39Q655.52 22.39 653.34 24.85Q651.17 27.32 651.17 32.30ZM676.05 45.26L676.05 19.34L680.00 19.34L680.00 23.27Q681.52 20.51 682.80 19.63Q684.08 18.75 685.62 18.75Q687.84 18.75 690.14 20.17L688.62 24.24Q687.01 23.29 685.40 23.29Q683.96 23.29 682.81 24.16Q681.67 25.02 681.18 26.56Q680.44 28.91 680.44 31.69L680.44 45.26L676.05 45.26ZM706.45 55.25L705.96 51.12Q707.40 51.51 708.47 51.51Q709.94 51.51 710.82 51.03Q711.69 50.54 712.26 49.66Q712.67 49.00 713.60 46.39Q713.72 46.02 713.99 45.31L704.15 19.34L708.89 19.34L714.28 34.35Q715.33 37.21 716.16 40.36Q716.92 37.33 717.97 34.45L723.51 19.34L727.91 19.34L718.04 45.70Q716.46 49.98 715.58 51.59Q714.40 53.76 712.89 54.77Q711.38 55.79 709.28 55.79Q708.01 55.79 706.45 55.25ZM730.00 32.30Q730.00 25.10 734.01 21.63Q737.35 18.75 742.16 18.75Q747.51 18.75 750.90 22.25Q754.30 25.76 754.30 31.93Q754.30 36.94 752.80 39.81Q751.29 42.68 748.43 44.26Q745.56 45.85 742.16 45.85Q736.72 45.85 733.36 42.36Q730.00 38.87 730.00 32.30M734.52 32.30Q734.52 37.28 736.69 39.76Q738.87 42.24 742.16 42.24Q745.43 42.24 747.61 39.75Q749.78 37.26 749.78 32.15Q749.78 27.34 747.60 24.87Q745.41 22.39 742.16 22.39Q738.87 22.39 736.69 24.85Q734.52 27.32 734.52 32.30ZM776.44 45.26L776.44 41.46Q773.41 45.85 768.21 45.85Q765.92 45.85 763.93 44.97Q761.94 44.09 760.97 42.76Q760.01 41.43 759.62 39.50Q759.35 38.21 759.35 35.40L759.35 19.34L763.75 19.34L763.75 33.72Q763.75 37.16 764.01 38.35Q764.43 40.09 765.77 41.08Q767.11 42.07 769.09 42.07Q771.07 42.07 772.80 41.05Q774.54 40.04 775.26 38.29Q775.98 36.55 775.98 33.23L775.98 19.34L780.37 19.34L780.37 45.26L776.44 45.26ZM795.48 36.45Q795.46 35.57 795.46 35.13Q795.46 32.54 796.19 30.66Q796.73 29.25 797.92 27.81Q798.80 26.76 801.09 24.74Q803.37 22.73 804.05 21.53Q804.74 20.34 804.74 18.92Q804.74 16.36 802.73 14.42Q800.73 12.48 797.83 12.48Q795.02 12.48 793.14 14.23Q791.26 15.99 790.67 19.73L786.16 19.19Q786.77 14.18 789.78 11.52Q792.80 8.86 797.75 8.86Q803.00 8.86 806.13 11.72Q809.25 14.58 809.25 18.63Q809.25 20.97 808.15 22.95Q807.06 24.93 803.86 27.76Q801.71 29.66 801.05 30.57Q800.39 31.47 800.07 32.64Q799.76 33.81 799.71 36.45L795.48 36.45M795.21 45.26L795.21 40.26L800.22 40.26L800.22 45.26L795.21 45.26Z" /> */}
							{/* 		</g> */}
							{/* 	</g> */}
							{/* </svg> */}
							<br />
							<button
								onClick={() => {
									setShowContacts(!showContacts);
								}}
								className="text-accent self-start pt-16 text-4xl "
							>
								Contact me.
							</button>
						</div>

						<NsCard className="invisible lg:visible max-w-[20em]">
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
