import React from "react";
import { FaGithub } from "react-icons/fa";
import { cn } from "@/lib/utils";
import { NsCard } from "@/components/ns/nsCard";

interface GithubProps extends React.HTMLProps<HTMLAnchorElement> {
	href: string;
	name: string;
}

export const GithubLink = ({
	className,
	href,
	name,
	...props
}: GithubProps) => {
	return (
		<a className={cn("", className)} {...props} href={href}>
			<NsCard
				className="w-fit"
				childContainerClassName="flex flex-row min-w-48 rounded-3xl py-2 px-3 gap-3 w-fit"
				showImage={false}
			>
				<FaGithub className="h-12 w-12 text-primary" />
				<div className="flex flex-col">
					<h3 className="text-2xl">Github:</h3>
					<span className="text-sm">{name}</span>
				</div>
			</NsCard>
		</a>
	);
};
