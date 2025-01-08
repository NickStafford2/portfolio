import { cn } from "@/lib/utils";
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const borderVariants = {
	initial: {
		backgroundPosition: "0 50%",
	},
	animate: {
		backgroundPosition: ["0, 50%", "100% 50%", "0 50%"],
	},
};

export const NsCard = ({
	children,
	className,
	childContainerClassName,
	animate,
	id,
}: {
	children?: React.ReactNode;
	className?: string;
	childContainerClassName?: string;
	animate?: boolean;
	id?: string;
}) => {
	// useOutsideClick(ref, () => setIsVisible(false))

	return (
		<motion.div
			id={id}
			// onClick={() => setIsVisible(!isVisible)}
			className={cn("group relative w-full p-[2px]", className)}
		>
			<motion.div
				variants={animate ? borderVariants : undefined}
				initial={animate ? "initial" : undefined}
				animate={animate ? "animate" : undefined}
				transition={
					animate
						? {
								duration: 5,
								repeat: Infinity,
								repeatType: "reverse",
							}
						: undefined
				}
				style={{
					backgroundSize: animate ? "400% 400%" : undefined,
				}}
				className={cn(
					"absolute inset-0 z-[1] rounded-3xl opacity-60 blur-xl transition duration-500 will-change-transform group-hover:opacity-100",
					"bg-[radial-gradient(circle_farthest-side_at_0_100%,var(--ns-accent),transparent),radial-gradient(circle_farthest-side_at_100%_0,var(--ns-primary),transparent),radial-gradient(circle_farthest-side_at_100%_100%,var(--ns-primary),transparent),radial-gradient(circle_farthest-side_at_0_0,var(--ns-accent),#141316)]",
				)}
			/>
			<motion.div
				variants={animate ? borderVariants : undefined}
				initial={animate ? "initial" : undefined}
				animate={animate ? "animate" : undefined}
				transition={
					animate
						? {
								duration: 5,
								repeat: Infinity,
								repeatType: "reverse",
							}
						: undefined
				}
				style={{
					backgroundSize: animate ? "400% 400%" : undefined,
				}}
				className={cn(
					"absolute inset-0 z-[1] rounded-3xl will-change-transform",
					"bg-[radial-gradient(circle_farthest-side_at_0_100%,var(--ns-accent),transparent),radial-gradient(circle_farthest-side_at_100%_0,var(--ns-primary),transparent),radial-gradient(circle_farthest-side_at_100%_100%,var(--ns-primary),transparent),radial-gradient(circle_farthest-side_at_0_0,var(--ns-accent),#141316)]",
				)}
			/>

			<div
				className={cn(
					"relative z-10 h-full w-full rounded-[22px] bg-background overflow-auto",
					childContainerClassName,
				)}
			>
				{children}
			</div>
		</motion.div>
	);
};
