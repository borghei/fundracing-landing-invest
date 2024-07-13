import './footer.scss'
import {FC} from "react";
import {ReactComponent as MouseIcon} from "assets/icons/mouse.svg"
import {ReactComponent as DownIcon} from "assets/icons/down.svg"
import {ReactComponent as EmailIcon} from "assets/icons/email.svg"
import {ReactComponent as ThreeArrowsIcon} from "assets/icons/3arrow.svg"
import {ReactComponent as InstagramIcon} from "assets/icons/instagram.svg"
import {ReactComponent as TelegramIcon} from "assets/icons/telegram.svg"
import {ReactComponent as TwitterIcon} from "assets/icons/twitter.svg"
import {ReactComponent as LinkedInIcon} from "assets/icons/linkedin.svg"
import {ReactComponent as HeartIcon} from "assets/icons/heart.svg"
import {scrollToTop} from "../../core/utilities/scrollToTop";
import {Button} from "../button/button";
import {Input} from "../input/input";

interface Props {
}

export const Footer: FC<Props> = () => {

    return (
        <footer className={"fund-racing-footer"}>
            <div className={"up"} onClick={scrollToTop}>
                <DownIcon style={{transform: "rotate(180deg)"}}/>
                <MouseIcon/>
                <span>Go Up</span>
            </div>
            <div className={"text"}>
                <p>FUNDRACING</p>
                <p>Learn to trade on our simulated trading platform and get an opportunity to trade up to $1,000,000 on
                    the FundRacing Account. Receive up to 70% of profits from your simulated trades. Join
                    FundRacing!</p>
            </div>
            <div className={"row"}>
                <div className={"links"}>
                    <ul>
                        <span>COMPANY</span>
                        <a href={"#"}>Plans</a>
                        <a href={"#"}>Contact us</a>
                        <a href={"#"}>Privacy policy</a>
                    </ul>
                    <ul>
                        <span>COMPANY</span>
                        <a href={"#"}>About us</a>
                        <a href={"#"}>Contact us</a>
                        <a href={"#"}>Careers</a>
                    </ul>
                </div>
                <div className={"socials"}>
                    <p>STAY UPDATED WITH OUR NEWSLETTER!</p>
                    <div className={"email-row"}>
                        <Input placeholder={"Email address"} after={<EmailIcon/>} className={"email-input"}/>
                        <Button text={"Subscribe"} variant={"primary"}/>
                    </div>
                    <div className={"socials-row"}>
                        <p>SOCIAL <ThreeArrowsIcon/></p>
                        <div className={"social-media"}>
                            <InstagramIcon/>
                            <TelegramIcon/>
                            <TwitterIcon/>
                            <LinkedInIcon/>
                        </div>
                    </div>
                </div>
            </div>
            <div className={"copyright"}>
                2024 © Copyright - Fundarcing.co Made with <HeartIcon/> for trading
            </div>
        </footer>
    )
}