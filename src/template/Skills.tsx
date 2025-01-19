import { SkillCard } from "@/template/SkillCard";
import { FaPhp } from "react-icons/fa";
import { FaFlask, FaGit, FaLinux } from "react-icons/fa";
import { SiFlask } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { RiAngularjsLine } from "react-icons/ri";
import { SiNeovim, SiTypescript } from "react-icons/si";
import { FaAngular, FaGithub } from "react-icons/fa";
import { FaPython } from "react-icons/fa6";
import { SiJavascript } from "react-icons/si";
import { TbBrandCpp } from "react-icons/tb";
import NsSkill from "@/components/ns/NsSkill";
import { OptionTwo } from "./gravity/OptionTwo";
import { Title1, Title2 } from "@/Title";
import { NsCard } from "@/components/ns/nsCard";
import NsIcon from "@/components/ns/NsIcon";

const skills = [
	{
		title: "Javascript",
		icon: <SiJavascript />,
		value: 80,
		description: "4 years",
	},
	{
		title: "Python",
		icon: <FaPython />,
		value: 40,
		description: "2 years",
	},
	{
		title: "Typescript",
		icon: <SiTypescript />,
		value: 40,
		description: "3 years",
	},
	{
		title: "Neovim",
		icon: <SiNeovim />,
		value: 40,
		description: "6 months daily",
	},
	{
		title: "Git",
		icon: <FaGit />,
		value: 80,
		description: "5 years",
	},
	// {
	// 	title: "GitHub",
	// 	icon: <FaGithub  />,
	// 	value: 60,
	// 	description: "3 years",
	// },
	// {
	// 	title: "C++",
	// 	icon: <TbBrandCpp  />,
	// 	value: 60,
	// 	description: "2 years",
	// },
	// {
	// 	title: "AngularJs",
	// 	icon: <RiAngularjsLine  />,
	// 	value: 85,
	// 	description: "3 years",
	// },
	// {
	// 	title: "Angular",
	// 	icon: <FaAngular  />,
	// 	value: 40,
	// 	description: "2 years",
	// },
	// {
	// 	title: "React",
	// 	icon: <FaReact  />,
	// 	value: 25,
	// 	description: "2 months recent",
	// },
	// {
	// 	title: "Flask",
	// 	icon: <SiFlask  />,
	// 	value: 30,
	// 	description: "4 months",
	// },
	{
		title: "Linux",
		icon: <FaLinux />,
		value: 80,
		description: "10 years",
	},
];

export function Skills() {
	return (
		<>
			<Title1
				id="skills"
				className="scroll-mt-6 pb-6 col-start-1 lg:col-start-2 pt-36"
			>
				Skills
			</Title1>
			<div className="row-start-4 col-start-1 lg:col-start-2 col-span-12 lg:col-span-11">
				<NsCard
					className="w-full flex flex-col"
					childContainerClassName="p-4 pr-[10vw]"
				>
					<Title2 className="pb-4">Current Stack</Title2>
					<div className="flex flex-row justify-between">
						<div>
							<p>For most code, I use Python. (until Mojo is ready)</p>
							<p>
								For websites, I use React with Typescript for the frontend, and
								Python with Flask for the Backend.
							</p>
						</div>
						<div className="flex flex-row gap-2">
							<NsIcon svg={<FaReact></FaReact>}></NsIcon>
							<NsIcon svg={<SiTypescript></SiTypescript>}></NsIcon>
							<NsIcon svg={<SiFlask></SiFlask>}></NsIcon>
							<NsIcon svg={<FaPython></FaPython>}></NsIcon>
						</div>
					</div>
				</NsCard>
			</div>
			<div className="row-start-5 col-start-1 lg:col-start-2 col-span-12 lg:col-span-10 flex flex-col xl:flex-row gap-6 pt-10">
				<div className="w-fit">
					<NsCard childContainerClassName="overflow-hidden">
						<OptionTwo></OptionTwo>
					</NsCard>
				</div>
				<NsCard childContainerClassName="p-4 min-w-[20em]">
					<Title2 className="pb-6">
						But the important stuff you remember.
					</Title2>
					<div className="flex flex-row flex-wrap justify-start">
						{skills.map((skill) => (
							<NsSkill
								key={skill.title}
								svg={skill.icon}
								description={skill.description}
								title={skill.title}
								skill={skill.value}
							></NsSkill>
						))}
					</div>
				</NsCard>
			</div>
			<div className="row-start-6 col-start-1 lg:col-start-2 col-span-12 lg:col-span-11 my-6">
				<div>
					<NsCard
						className="w-full flex flex-col "
						childContainerClassName="p-4"
					>
						<Title2 className="pb-4">So much rust.</Title2>
						<div className="flex flex-row justify-between">
							<div>
								<p>
									I have been programming for years. I have used a ton of
									frameworks and languages. I use to know C++ incredibly well,
									but I haven't used it in years. I am glad I started with C,
									because it really made me learn the fundimentals.
								</p>
							</div>
							<div className="flex flex-row gap-2">
								<NsIcon svg={<TbBrandCpp></TbBrandCpp>}></NsIcon>
								<NsIcon svg={<FaPhp></FaPhp>}></NsIcon>
								<NsIcon svg={<FaAngular></FaAngular>}></NsIcon>
								<NsIcon svg={<RiAngularjsLine></RiAngularjsLine>}></NsIcon>
							</div>
						</div>
					</NsCard>
				</div>
			</div>
		</>
	);
}
