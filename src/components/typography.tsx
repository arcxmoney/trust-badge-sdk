import { Slot } from "@radix-ui/react-slot";
import { type VariantProps, cva } from "class-variance-authority";
import * as React from "react";

import { cn } from "../utils";

const typographyVariants = cva("", {
  variants: {
    variant: {
      body: "tracking-2%",
      "body-black": "font-extrabold tracking-2%",
      "body-mobile": "text-[16px] leading-[22px]",
      "body-mobile-black": "text-[16px] leading-[22px] font-extrabold",
      title: "font-extrabold text-[56px] leading-[64px] tracking-heading-1",
      "banner-title":
        "text-heading-1 font-extrabold leading-[50px] tracking-heading-2 lg:text-banner-title",
      "banner-title-lg":
        "text-[56px] font-extrabold leading-[50px] tracking-heading-2 lg:text-banner-title-lg",
      heading: "text-heading-2 font-extrabold tracking-heading-2 lg:text-heading-1",
      "heading-2": "text-heading-2 font-extrabold tracking-heading-2",
      subtitle: "text-subtitle tracking-2%",
      "subtitle-black": "text-subtitle font-extrabold",
      small: "text-small tracking-2%",
      "small-black": "text-small font-extrabold tracking-2%",
      "small-caps": "text-small uppercase tracking-2%",
      "small-caps-black": "text-small uppercase font-extrabold tracking-2%",
    },
  },
  defaultVariants: {
    variant: "body",
  },
});

export interface TypographyProps
  extends React.ParamHTMLAttributes<HTMLParagraphElement>,
    VariantProps<typeof typographyVariants> {
  asChild?: boolean;
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span";
}

const Typography = React.forwardRef<HTMLParagraphElement, TypographyProps>(
  ({ className, variant, asChild = false, as = "p", ...props }, ref) => {
    const Comp = asChild ? Slot : as;
    return <Comp className={cn(typographyVariants({ variant, className }))} ref={ref} {...props} />;
  }
);
Typography.displayName = "Typography";

export { Typography, typographyVariants };
