import * as React from "react"
import { cn } from "@/lib/utils"

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "danger" | "success" | "warning" | "neutral" | "white"
    shape?: "default" | "round" | "pill" | "action" | "start-select" | "shoulder"
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = "neutral", shape = "default", ...props }, ref) => {
        const variants = {
            primary: "bg-btn-blue text-white border-blue-800 hover:bg-blue-500",
            danger: "bg-btn-red text-white border-red-800 hover:bg-red-500",
            success: "bg-btn-green text-white border-green-800 hover:bg-green-500",
            warning: "bg-btn-yellow text-yellow-900 border-yellow-600 hover:bg-yellow-300",
            neutral: "bg-plastic-subtext text-gray-200 border-gray-800 hover:bg-[#626262]",
            white: "bg-white text-gray-800 border-gray-300 hover:bg-gray-50",
        }

        const shapes = {
            default: "px-8 py-3 rounded-xl border-b-4",
            round: "w-16 h-16 rounded-full flex items-center justify-center p-0 border-b-[6px]",
            pill: "px-6 py-2 rounded-full border-b-4",
            action: "w-full py-3 rounded-full flex justify-between px-6 border-b-4",
            "start-select": "w-24 h-8 rounded-full border-b-2 -rotate-12 border-gray-900", // Angled pill
            shoulder: "w-32 h-10 rounded-t-xl rounded-b-none border-b-[6px] active:border-b-0 active:translate-y-[6px]", // Long shoulder button
        }

        return (
            <button
                className={cn(
                    "snes-btn font-bold shadow-lg",
                    variants[variant],
                    shapes[shape],
                    className
                )}
                style={
                    {
                        "--btn-border-height": shape === "round" ? "6px" : "4px",
                    } as React.CSSProperties
                }
                ref={ref}
                {...props}
            />
        )
    }
)
Button.displayName = "Button"

export { Button }
