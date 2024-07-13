import './landing.scss'
import {FC} from "react";
import banner from 'assets/images/investment-banner.png'
import union from 'assets/images/investment-union.png'

interface Props {
}

export const Landing: FC<Props> = () => {
    return (
        <div className={"fund-racing-landing"}>
            <img src={banner} alt={"banner"} className={"investment-banner"}/>
            <img src={union} alt={"union"} className={"investment-union"}/>
            <div className={"investment-content"}>
                <p>START YOUR INVESTMENT TODAY</p>
                <p>INVESTMENT</p>
            </div>
        </div>
    )
}