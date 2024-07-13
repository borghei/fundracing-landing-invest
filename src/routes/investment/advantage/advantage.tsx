import './advantage.scss'
import {FC} from "react";

interface Props {

}

export const Advantage: FC<Props> = () => {
    return (
        <div className={"fund-racing-advantage"}>
            <p>FUNDRACING ADVANTAGE</p>
            <div className={"advantages"}>
                <div className={"advantage-background"}>
                    <div className={"advantage"}>
                        <p>
                            EXPERT SELECTION
                        </p>
                        <p>
                            We identify and vet talented prop traders through a rigorous screening process. You invest
                            in
                            pre-qualified individuals with a history of success.
                        </p>
                    </div>
                </div>
                <div className={"advantage-background"}>
                    <div className={"advantage"}>
                        <p>
                            PORTFOLIO MANAGEMENT ON AUTOPILOT
                        </p>
                        <p>
                            Fundracing handles the allocation and management of your investment across different
                            traders. You choose the risk profile, and we take care of the rest.
                        </p>
                    </div>
                </div>
                <div className={"advantage-background"}>
                    <div className={"advantage"}>
                        <p>
                            TRANSPARENCY & CONTROL
                        </p>
                        <p>
                            Our platform provides real-time performance tracking and detailed reports on each trader's
                            activity. Maintain complete transparency and control over your investment.
                        </p>
                    </div>
                </div>

            </div>
        </div>
    )
}