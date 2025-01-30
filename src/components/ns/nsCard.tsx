import { cn } from "@/lib/utils";
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
const borderVariants = {
  initial: {
    backgroundPosition: "0 50%",
  },
  animate: {
    backgroundPosition: ["0 50%", "100% 50%", "0 50%"],
  },
};

export const NsCard = ({
  children,
  className,
  childContainerClassName,
  animate = true,
  showImage = false,
  id,
}: {
  children?: React.ReactNode;
  className?: string;
  childContainerClassName?: string;
  animate?: boolean;
  showImage?: boolean;
  id?: string;
}) => {
  const { ref, inView, entry } = useInView({
    /* Optional options */
    rootMargin: "0px 0px 0px 0px",
    threshold: 0,
  });
  return (
    <motion.div
      id={id}
      ref={ref}
      className={cn("group relative min-h[50px] w-full p-[2px]", className)}
      initial={{ opacity: 0 }} //
      animate={{
        opacity: inView ? 1 : 0,
      }}
      transition={{ duration: 0.2 }}
    >
      {inView && (
        <>
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
        </>
      )}
      {
        showImage ? (
          <div
            className={cn(
              "relative z-10 h-full w-full rounded-[22px] overflow-auto bg-cover ",
              childContainerClassName,
            )}
            style={{
              background:
                `linear-gradient(rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.8)), url(/backgrounds/pexels-cottonbro2.png)`
            }}
          >
            {children}
          </div>
        ) : (
          <div
            className={cn(
              "relative z-10 h-full w-full rounded-[22px] overflow-auto bg-cover bg-[var(--ns-background)] ",
              childContainerClassName,
            )}
            style={{
              background: "",
            }}
          >
            {children}
          </div>
        )
      }
    </motion.div>
  );
};
