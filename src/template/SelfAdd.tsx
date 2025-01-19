import { NsCard } from "@/components/ns/nsCard";
import { Title1, Title2, Title3 } from "@/Title";
import casualHeadshot from "/casualHeadshotBlue.png";

export default function SelfAdd() {
	return (
		<>
			<div
				id="aboutme"
				className="scroll-mt-16 col-start-1 col-span-12 2xl:col-start-2 2xl:col-span-10 flex flex-col lg:flex-row items-start gap-6 min-h-[calc(100vh-84px)] "
			>
				<NsCard
					className="h-auto lg:min-w-[30em]"
					childContainerClassName="p-6 flex flex-col justify-between "
				>
					<div>
						<Title1 className="pb-12 ">A Bit About Me</Title1>
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
				<div className="flex flex-shrink-0">
					<NsCard
						className="h-full"
						childContainerClassName="h-[calc((100vh-64px)*0.95)] min-h-[calc((100vh-64px)*0.95)] max-h-[calc((100vh-64px)*0.95)] px-5 flex flex-col items-center justify-center"
					>
						<img
							src={casualHeadshot}
							// src="https://images.unsplash.com/photo-1461988320302-91bde64fc8e4?ixid=2yJhcHBfaWQiOjEyMDd9"
							className="w-auto h-full"
							alt="profile-picture"
						/>
					</NsCard>
				</div>
			</div>
		</>
	);
}
