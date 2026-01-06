import type { ReactElement } from "react"

interface ButtonProps{
    variant: 'primary'|'secondary',
    size: "sm" | "md" | "lg",
    text: string,
    startIcon?: ReactElement,
    endIcon?: ReactElement,
    onClick?: ()=> void,

}

const variantStyles = {
    "primary":"bg-primary text-white",
    "secondary": "bg-secondary text-primary",
}

const sizeStyles = {
    "sm": "py-1 px-2 ",
    "md": "py-2 px-4 ", 
    "lg": "py-4 px-6 ",
}

const defaultStyles ="rounded-md flex gap-2 text-light "

export const Button = (props: ButtonProps) =>{
    return<button className={`${variantStyles[props.variant]} ${defaultStyles} ${sizeStyles[props.size]}`} onClick={props.onClick}>{props.startIcon} {props.text}</button>
}