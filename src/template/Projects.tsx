import { NsCard } from "@/components/ns/nsCard";
import { PiNetworkX } from "react-icons/pi";
import NsCollapse from "@/components/ns/NsCollapse";
import { Title1 } from "@/Title";
import { GithubLink } from "./GithubLink";
import NsIcon from "@/components/ns/NsIcon";
import {
	SiFlask,
	SiNeo4J,
	SiPython,
	SiReact,
	SiTypescript,
} from "react-icons/si";
import { TbBrandThreejs } from "react-icons/tb";
// import nvimImage from '@/assets/NvimScreenshot.png'

export function Projects() {
	return (
		<>
			<Title1 id="projects" className="pb-16  pt-48 row-start-7 col-start-2">
				Projects
			</Title1>

			<div className="row-start-8 col-start-2 col-span-10 flex flex-col gap-8">
				<NsCard id="dependencyInspection" className="scroll-mt-24">
					<NsCollapse
						title="Dependency Inspection"
						description="Inspect and visualize your NPM dependencies."
						startVisible={true}
					>
						<div className="flex flex-col">
							<div className="flex flex-col xl:flex-row justify-between py-3 pb-6">
								<p className="py-4 pr-4">
									Visualize and inspect the resulting ego network of their npm
									dependencies. Analyzes the network and searches for
									vulnerabilities.
								</p>
								<div className="flex flex-row justify-around xl:justify-end gap-8">
									<GithubLink
										name="Dependency Inspection"
										href="https://github.com/NickStafford2/DependencyInspection"
									/>
									<NsCard
										className="w-fit"
										childContainerClassName="p-4 flex flex-col"
										showImage={false}
									>
										Currently in Development{" "}
										<a
											className="text-xl text-accent hover:text-destructive underline"
											href="dependencyinspection.com"
										>
											dependencyinspection.com
										</a>
									</NsCard>
								</div>
							</div>

							<div className="flex flex-col xl:flex-row py-3 gap-4">
								<img className="w-[30em]" src="dependencyInspectionGraph.png" />
								<div className="min-w-48 xl:flex xl:flex-col gap-4">
									<p className="order-1 lg:order-2">
										We all know that frontend dependencies have gone a little
										insane lately. We have thousands of dependencies and have to
										update all the time to identify security vulnerabilities.
									</p>
									<img
										className="pt-4 w-80 float-right self-end order-1 xl:order-1"
										src="dependencyInspectionMotivation2.png"
									/>
									<p>
										DependencyInspection allows users to inspect each of these
										dependencies for vulnerabilities.
									</p>
								</div>
							</div>
							<div className="flex flex-col gap-8  items-end">
								<div className="min-w-48">
									<p className="pt-4">
										DependencyInspection acceps the name of any number of npm
										repository names, and recursivly scrapes relevant data for
										all packages and dependencies.{" "}
									</p>
									<p className="pt-4">
										A cypher graph database stores project data. Frontend
										written in React+Typescript. Backend written in Python and
										Quart (async Flask). Neomodel is used as an ORM. Pydantic is
										used for data validation.{" "}
									</p>
								</div>
								<div className="flex flex-row gap-3">
									<NsIcon name="Flask/Quart" svg={<SiFlask />} />
									<NsIcon name="Python" svg={<SiPython />} />
									<NsIcon name="NetworkX" svg={<PiNetworkX />} />
									<NsIcon name="Typescript" svg={<SiTypescript />} />
									<NsIcon name="React" svg={<SiReact />} />
									<NsIcon name="Neo4j" svg={<SiNeo4J />} />
								</div>
							</div>
						</div>
						{/* <img src="dependencyInspectionLogo.png" width={70} height={70} /> */}
					</NsCollapse>
				</NsCard>
				<NsCard>
					<NsCollapse
						title="Portfolio"
						description="You are currently looking at it."
					>
						<p className="text-2xl text-destructive">Work in Progress!</p>
						<p className="pt-4">
							I am starting simple. Hoping to make this pretty nice as time goes
							on. I am working on the animations currently with three.js.
							Written in React, Typescript, and GLSL.
						</p>
						<div className="flex flex-row justify-between gap-4">
							<p className="pt-4">
								Used Gpu Acceleration for animations. Writing the fragment and
								vertex shaders for animations has been plenty of fun. I am still
								working on it though.
							</p>
							<div className=" pt-4 flex flex-row gap-3">
								<NsIcon name="ThreeJs" svg={<TbBrandThreejs />} />
								<NsIcon name="React" svg={<SiReact />} />
								<NsIcon name="Typescript" svg={<SiTypescript />} />
								<NsIcon name="Flask/Quart" svg={<SiFlask />} />
								<NsIcon name="Python" svg={<SiPython />} />
							</div>
						</div>
					</NsCollapse>
				</NsCard>
				<NsCard>
					<NsCollapse
						title="IO Architecture rewrite"
						description="I can't believe this actually worked."
					>
						<p>
							Hired as a web developer, I ended up working the role of a
							software architect. I was granted permission to rewrite and
							redesign the companies primary website and build process. I made
							some serious changes:
						</p>
						<ul>
							<li>- Converted Javascript to Typescript.</li>
							<li>- Converted AngularJs to Angular</li>
						</ul>
						<img className="pb-4" src="IoLogo.png" />
						<p>
							Without a question, my most successful programming project of my
							life. Currenty used by InflatableOffice.com. Copy description from
							linkedin and fix it.
						</p>
					</NsCollapse>
				</NsCard>

				<NsCard>
					<NsCollapse
						title="CCounter Dev"
						description="Too nerdy and useful not to mention"
					>
						<p>
							This program has made a bigger impact on my life than anything one
							this list. I worked on this for at least five minutes a day for
							seven months. Built with the glorious power of google sheets, this
							solved a real life problem of mine and I use it every day.{" "}
						</p>
					</NsCollapse>
				</NsCard>
				<NsCard>
					<NsCollapse
						title="NBA Goat Calculator"
						description="Objective value measurements, but with basketball"
					>
						<p>
							Generations have argued. Is anyone right? Who you consider the
							greatest depends on your values. This app asks what you value, and
							with the power of advanced analytics, ranks players accordingly.
							Written in C# and Asp.net. I became so frustrated at Microsoft
							Visual Studio, I ended up restarting the entire project in react,
							and Python Flask.{" "}
						</p>
					</NsCollapse>
				</NsCard>
				<NsCard>
					<NsCollapse
						title="NSVim"
						description="Neovim configuration is no joke."
					>
						<img className="pb-4" src="NvimScreenshot.png" />
						<p>
							These configurations contain serious Lua code. I am returning to
							the church of vi after many years away. It is glorious. I don't
							want to use the mouse ever again. I have spent way too many hours
							configuring my neovim setup. I started with kickstarter, then I
							ruined that configuration. Now I switched to my own customized
							version. My perfect IDE.
						</p>
						{/* <img src={nvimImage} alt="" /> */}
						<br />
						<p>
							Insert image of google search "vi: did you mean emacs?" and the
							reverse
						</p>
					</NsCollapse>
				</NsCard>
				<NsCard>
					<NsCollapse
						title="Undergrad Portfolio"
						description="Great work for the time"
					>
						<p>
							Built entirely in Python flask and lots of very clever CSS, this
							was my first serious website attempt. I was proud when I made this
							as an undergrad, but I have no desire to make websites again with
							simple templating engines. I no longer host this anymore, but I
							still have some pretty pictures.{" "}
						</p>
					</NsCollapse>
				</NsCard>
				<NsCard>
					<NsCollapse title="Syllahub" description="Undergrad Senior Project">
						<p>
							Syllahub is a platform to standardize syllabus formats. Syllahub
							scrapes uploaded syllabi, stores their content, indexes them, and
							outputs them into a standardized format.{" "}
						</p>
					</NsCollapse>
				</NsCard>
				<NsCard>
					<NsCollapse
						title="Simple C++ Parcer"
						description="A tool I built in university to help me learn C++"
					></NsCollapse>
				</NsCard>
				<NsCard>
					<NsCollapse
						title="Rainmeter Desktop"
						description="My first successful pet project"
					>
						<img src="desktop_lg.jpg" />
						<p>
							A whole lot of Lua code. I wish I still had access to this old
							passion project. I was not happy with any of the windows 8
							customization options, I made my perfect desktop with every
							feature I ever wanted. Customizing the volume bars was a total
							pain.{" "}
						</p>
					</NsCollapse>
				</NsCard>
				<NsCard>
					<NsCollapse
						title="Vpython Tic Tac Toe"
						description="My first pet project"
					>
						<p>
							I wrote this before I knew what for loops were. I was so excited
							to learn to program, I made the first thing that came to mind.
							This is completely overengineered, written in a 3d Vpython engine,
							and I absolutely loved it. I even made an opponent program that
							would play against you. It is great seeing how far I have come.{" "}
						</p>
					</NsCollapse>
				</NsCard>
				<NsCard>
					<NsCollapse title="NN Code Injection">
						<p>
							Project in planning. Experimental idea to do AI where nodes
							contain pointers that execute arbitrary small code snippits and
							then pass the result to the next node.{" "}
						</p>
					</NsCollapse>
				</NsCard>
				<NsCard>
					<NsCollapse title="Physics Fundamental Finder">
						<p>
							This may be crazy, but has anyone tried brute force approach to
							see if any unexpected relationship exists between physics
							consants? Is the plank's constant 1/2 of Newton's constant? How
							about the square root? There are infinite potential relationships,
							but since the number of constants is not too large, I think we can
							get away with a brute force search with some dynamic programming.
							An api would also exist so that more advanced relationships
							between constants could be checked. Work in progress.
						</p>
					</NsCollapse>
				</NsCard>
			</div>
		</>
	);
}
