import './page.scss'
import {FC, ReactNode} from "react";
import {Navbar} from "../navbar/navbar";
import './page.scss'
import {Footer} from "../footer/footer";

interface Props {
    children?: ReactNode
    className?: string
}

export const Page: FC<Props> = ({children, className}) => {
    return (
        <main className={`fund-racing-page ${className}`}>
            <Navbar />
            {children}
            <Footer />
        </main>
    )
}