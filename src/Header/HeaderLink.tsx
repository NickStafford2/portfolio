import * as React from "react";

import { cn } from "@/lib/utils";

export interface HeaderLinkProps
  extends React.LinkHTMLAttributes<HTMLAnchorElement> { }

const HeaderLink = React.forwardRef<HTMLAnchorElement, HeaderLinkProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <a
        className={cn(
          "h-full min-w-28 text-[var(--ns-primary)] font-semibold flex flex-row justify-center items-center hover:bg-[var(--ns-primary)] hover:text-black transition-[background-color] hover:duration-0 duration-700 bg-background flex-grow",
          className,
        )}
        ref={ref}
        {...props}
      >
        <span className="">{children}</span>
      </a>
    );
  },
);
export default HeaderLink;
