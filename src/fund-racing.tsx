import './fund-racing.scss';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Investment} from "./routes/investment/investment";

function FundRacing() {
    return (
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Investment />} />
                </Routes>
            </BrowserRouter>
    );
}

export default FundRacing;
