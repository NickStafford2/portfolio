import { NsCard } from "@/components/ns/nsCard";
import { Title1, Title2, Title3 } from "@/Title";
import casualHeadshot from "/casualHeadshotBlue.png";

export default function SelfAdd() {
	return (
		<>
			<div
				id="aboutme"
				className="scroll-mt-16 col-start-1 col-span-12 flex items-start gap-6 h-[calc(100vh-84px)] min-h-[calc(100vh-84px)] "
			>
				<NsCard
					className="h-full"
					childContainerClassName="p-6 flex flex-col justify-between"
				>
					<Title1 className="pb-12 ">A Bit About Me</Title1>
					<div>
						<p className="py-4">
							Solving problems and helping others are my true passions. When I
							have spare time, you will find me reading about some obscure
							subject. Ancient history, quantum mechanics, I love it all.
						</p>
					</div>
					<div className="">
						<div>
							<Title2>Education</Title2>
							<Title3>
								M.S in Computer Science from Kent State University. GPA: 3.8 (in
								progress)
							</Title3>
							<p>Full time graduate student while working at Amazon. </p>
							{/* Current Courses: */}
							{/* <ul className="list-desc"> */}
							{/* 	<li>- Artificial Intelligence</li> */}
							{/* 	<li>- Secure Programming</li> */}
							{/* 	<li>- Cryptography</li> */}
							{/* 	<li>- Graph Algorithms</li> */}
							{/* 	<li>- iOS Programming</li> */}
							{/* </ul> */}
							<Title3 className="pt-4">
								B.S in Computer Science from Kent State University. GPA: 3.98
							</Title3>
							<p>
								You have no idea how much that A- in Latin class still urks me.
							</p>
						</div>
					</div>
					<div className="py-4">
						<Title2>My Best Work</Title2>
						<Title3 className="pt-2">
							<a href="#dependencyInspection" className="underline">
								Dependecy Inspection
							</a>
						</Title3>
						Analyzes and visualizes NPM dependency graph.
						<br />
						<Title3 className="pt-4">
							<a href="#inflatableOffice" className="underline">
								InflatableOffice.com
							</a>
						</Title3>
						Hired as a web developer, I ended up working as a software
						architect. Successfully converted the companies main website from
						AngularJs to Angular.
					</div>
				</NsCard>
				<div className="flex flex-col flex-shrink-0 flex-grow-0  h-full min-h-full justify-end">
					<NsCard
						className="h-full"
						childContainerClassName="px-5 flex flex-col flex-shrink-0 flex-grow-0  h-full min-h-full justify-end"
					>
						<img
							src={casualHeadshot}
							// src="https://images.unsplash.com/photo-1461988320302-91bde64fc8e4?ixid=2yJhcHBfaWQiOjEyMDd9"
							className="h-[calc((100vh-64px)*0.95)] min-h-[calc((100vh-64px)*0.95)] max-h-[calc((100vh-64px)*0.95)]object-contain"
							alt="profile-picture"
						/>
					</NsCard>
				</div>
			</div>
		</>
	);
}
