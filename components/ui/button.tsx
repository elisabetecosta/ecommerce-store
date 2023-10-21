import { forwardRef } from "react";

import { cn } from "@/lib/utils";

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(({
    className,
    children,
    disabled,
    type = "button",
    ...props
}, ref) => {

    return (
        <button
            ref={ref}
            className={cn(
                `
                w-auto
                rounded-full
                bg-black
                text-white
                font-semibold
                border-transparent
                px-5
                py-3
                hover:opacity-75
                disabled:cursor-not-allowed
                disabled:opacity-50
                transition
                `,
                className
            )}
        >
            {children}
        </button>
    );
});

Button.displayName = "Button";

export default Button;