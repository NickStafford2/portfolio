import { NsCard } from "./components/ns/nsCard";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";

export default function ContactMe() {
	return (
		<div className="w-full h-full ">
			<NsCard
				className="h-full"
				childContainerClassName="grid place-items-center"
			>
				<div className="flex flex-col gap-12 text-primary">
					<div className="flex flex-row items-center gap-4 ">
						<a
							href="mailto:ngstafford1@gmail.com"
							className=" hover:text-accent"
						>
							<MdOutlineEmail className="w-12 h-12" />
						</a>
						ngstafford1@gmail.com
					</div>
					<a
						href="https://github.com/NickStafford2"
						className="flex flex-row items-center gap-4 hover:text-accent"
					>
						<FaGithub className="w-12 h-12" />
						https://github.com/NickStafford2
					</a>
					<a
						href="https://www.linkedin.com/in/nicholas-stafford-3ba90018a/"
						className="flex flex-row items-center gap-4 hover:text-accent"
					>
						<FaLinkedin className="w-12 h-12" />
						https://www.linkedin.com/in/nicholas-stafford-3ba90018a/{" "}
					</a>
				</div>
			</NsCard>
		</div>
	);
}
