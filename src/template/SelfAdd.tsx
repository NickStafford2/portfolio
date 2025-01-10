import { NsCard } from "@/components/ns/nsCard";
import { Title1, Title2, Title3 } from "@/Title";

export default function SelfAdd() {
	return (
		<>
			<div className="contents">
				<div className="col-start-1 col-span-7 z-10 row-start-2">
					<NsCard className="h-full"></NsCard>
				</div>
			</div>
			<div className="contents">
				<div className="col-start-2 col-span-6 row-start-2 z-20 my-8 mr-8">
					<Title1 id="aboutme" className=" scroll-mt-36">
						A Bit About Me
					</Title1>
					<div>
						<Title2>I write code and do nerd stuff</Title2>
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
				</div>
			</div>
		</>
	);
}
