import { NsCard } from "@/components/ns/nsCard";
import casualHeadshot from "/casualHeadshotBlue.png";
import { Title1, Title2, Title3 } from "@/Title";

export default function SelfAdd() {
	return (
		<div
			id="aboutme"
			className="scroll-mt-32 flex min-h-[calc(100vh-var(--header-height)-4rem)] flex-col text-foreground"
		>
			<Title1>A Bit About Me</Title1>
			<div className="flex flex-grow flex-row gap-6 py-10">
				<img
					src={casualHeadshot}
					// src="https://images.unsplash.com/photo-1461988320302-91bde64fc8e4?ixid=2yJhcHBfaWQiOjEyMDd9"
					className="max-h-[800px] w-full basis-1/3 object-cover"
					alt="profile-picture"
				/>
				<NsCard className="basis-2/3 ">
					<div className="p-4 flex h-full flex-col justify-between">
						<div>
							<Title2>I write code and do nerd stuff</Title2>
							<p className="py-4">
								Solving problems and helping others are my true passions. When I
								have spare time, you will find me reading about some obscure
								subject. Ancient history, quantum mechanics, I love it all.
							</p>
						</div>
						<div className="py-4">
							<div>
								<Title2>Education</Title2>
								<Title3>
									M.S in Computer Science from Kent State University. GPA: 3.8
									(in progress)
								</Title3>
								<p>Full time graduate student while working at Amazon. </p>
								Current Courses:
								<ul className="list-desc">
									<li>- Artificial Intelligence</li>
									<li>- Secure Programming</li>
									<li>- Cryptography</li>
									<li>- Graph Algorithms</li>
									<li>- iOS Programming</li>
								</ul>
								<Title3 className="pt-4">
									B.S in Computer Science from Kent State University. GPA: 3.98
								</Title3>
								<p>
									You have no idea how much that A- in Latin class still urks
									me.
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
					</div>
				</NsCard>
			</div>
		</div>
	);
}
