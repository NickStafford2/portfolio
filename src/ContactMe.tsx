import { NsCard } from "./components/ns/nsCard";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface props {
	toggle: boolean;
}

export default function ContactMe({ toggle }: props) {
	const [isVisible, setIsVisible] = useState<boolean>(true);
	useEffect(() => {
		console.log(isVisible);
		setIsVisible(!isVisible);
	}, [toggle]);
	return (
		<div className="h-[22em] pr-2 self-end max-w-[35em]">
			<NsCard
				className="h-full"
				childContainerClassName="grid place-items-center overflow-hidden p-6"
			>
				<motion.div
					className=" h-full flex flex-row justify-center overflow-hidden"
					initial={{ width: "4em", maxWidth: "4em" }}
					animate={{
						width: isVisible ? "35em" : "4em",
						maxWidth: isVisible ? "35em" : "4em",
					}}
				>
					<div className="flex flex-col py-6 text-primary justify-around ">
						<div className="flex flex-row items-center gap-4">
							<a
								href="mailto:ngstafford1@gmail.com"
								className=" hover:text-accent"
							>
								<MdOutlineEmail className="w-12 h-12" />
							</a>
							{isVisible && "ngstafford1@gmail.com"}
						</div>
						<a
							href="https://github.com/NickStafford2"
							className="flex flex-row items-center gap-4 hover:text-accent"
						>
							<FaGithub className="w-12 h-12" />
							{isVisible && "https://github.com/NickStafford2"}
						</a>
						<a
							href="https://www.linkedin.com/in/nicholas-stafford-3ba90018a/"
							className="flex flex-row items-center gap-4 hover:text-accent"
						>
							<FaLinkedin className="w-12 h-12" />
							{isVisible &&
								"https://www.linkedin.com/in/nicholas-stafford-3ba90018a/"}
						</a>
					</div>
				</motion.div>
			</NsCard>
		</div>
	);
}
