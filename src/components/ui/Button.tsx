import type { ReactElement } from "react"

interface ButtonProps{
    variant: 'primary'|'secondary',
    size: "sm" | "md" | "lg",
    text: string,
    startIcon?: ReactElement,
    endIcon?: ReactElement,
    onClick: ()=> void,

}

const variantStyles = {
    "primary":"bg-[#5046e4] text-white",
    "secondary": "bg-[#e0e7fe] text-[#5046e4]",
}

const sizeStyles = {
    "sm": "py-1 px-2 ",
    "md": "py-2 px-4 ",
    "lg": "py-4 px-6 ",
}

const defaultStyles ="rounded-md flex gap-2  "

export const Button = (props: ButtonProps) =>{
    return<button className={`${variantStyles[props.variant]} ${defaultStyles} ${sizeStyles[props.size]}`}>{props.startIcon} {props.text}</button>
}