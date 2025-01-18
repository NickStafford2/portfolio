import React from "react";

export default function NsIcon({
	svg,
	name,
}: {
	svg: React.ReactNode;
	name?: string;
}) {
	const className = "h-12 w-12 text-primary";
	const svgElement = React.isValidElement(svg)
		? React.cloneElement(svg, { className })
		: svg;
	return (
		<div className="flex flex-col gap-2 items-center">
			<div className="border-[var(--ns-primary)] border-4 rounded-full h-20 min-h-20 max-h-20 w-20 min-w-20 max-w-20 flex items-center justify-center">
				<div className="color-[var(--ns-primary)]">{svgElement}</div>
			</div>
			{name ? <span className="text-nowrap">{name}</span> : ""}
		</div>
	);
}
