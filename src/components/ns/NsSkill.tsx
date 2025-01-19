import React from "react";
import { Progress } from "../ui/progress";

export default function NsSkill({
	title,
	svg,
	skill,
	description,
}: {
	title: string;
	svg: React.ReactNode;
	skill: number;
	description?: string;
}) {
	const className = "h-12 w-12 text-primary";
	const svgElement = React.isValidElement(svg)
		? React.cloneElement(svg, { className })
		: svg;
	return (
		<div className="flex flex-row gap-2 w-[12em] min-w-[12em] max-w-[12em]">
			<div className="border-[var(--ns-primary)] border-4 rounded-full h-20 min-h-20 max-h-20 w-20 min-w-20 max-w-20 flex items-center justify-center">
				<div className="color-[var(--ns-primary)]">{svgElement}</div>
			</div>
			<div className="flex flex-col w-full pt-4">
				<Progress className="color[var(--ns-primary)]" value={skill}></Progress>
				<h2 className="text-xl text-[var(--ns-primary)] font-semibold">
					{title}
				</h2>
				<p>{description}</p>
			</div>
		</div>
	);
}
