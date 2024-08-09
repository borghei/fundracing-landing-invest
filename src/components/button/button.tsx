import './button.scss'
import {ButtonHTMLAttributes, FC, ReactNode} from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
    text?: string;
    icon?: ReactNode;
    variant?: "primary" | "transparent" | "success" | "blurred"
}

export const Button: FC<Props> = ({text, icon, variant, ...rest}) => {
    return (
        <button {...rest} className={`fund-racing-button ${variant ? variant : ""} ${rest.className ? rest.className : ""}`} >
            {text && <span>{text}</span>}
            {icon && icon}
        </button>
    )
}