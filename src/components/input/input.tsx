import './input.scss'
import {FC, InputHTMLAttributes, ReactNode} from "react";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
    variant?: "primary" | "transparent"
    before?: ReactNode
    after?: ReactNode
}

export const Input: FC<Props> = ({variant, before, after, className, ...rest}) => {
    return (
        <div className={`fund-racing-input ${variant ? variant : ''} ${className ? className : ""}`}>
            {before && before}
            <input {...rest} />
            {after && after}
        </div>
    )
}