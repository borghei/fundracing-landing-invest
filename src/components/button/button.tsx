import './button.scss'
import {ButtonHTMLAttributes, FC, ReactNode} from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
    text?: string;
    icon?: ReactNode;
    variant?: "primary" | "transparent" | "success"
}

export const Button: FC<Props> = ({text, icon, variant, ...rest}) => {
    return (
        <button className={`fund-racing-button ${variant ? variant : ""}`} {...rest} >
            {text && <span>{text}</span>}
            {icon && icon}
        </button>
    )
}