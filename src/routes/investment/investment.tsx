import './investment.scss'
import {FC, useState} from "react";
import {Page} from "../../components/page/page";
import {Landing} from "./landing/landing";
import {TicketSize} from "./ticket-size/ticket-size";
import {Calculator} from "./calculator/calculator";
import {Advantage} from "./advantage/advantage";

interface Props {
}

export const Investment: FC<Props> = () => {
    const [ticketSize, setTicketSize] = useState<number>(20)

    return (
        <Page className={"fund-racing-investment"}>
            <Landing />
            <TicketSize setTicketSize={setTicketSize} />
            <Calculator ticketSize={ticketSize} />
            <Advantage />
        </Page>
    )
}