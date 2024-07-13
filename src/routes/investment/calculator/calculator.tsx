import './calculator.scss'
import {FC, useEffect, useState} from "react";
import hamilton from "assets/images/hamilton.png"
import {Slider, UploadProps} from "antd";
import {ReactComponent as ThumbIcon} from 'assets/icons/thumb.svg'
import {ReactComponent as RightIcon} from 'assets/icons/right.svg'
import {ReactComponent as DownIcon} from 'assets/icons/down.svg'
import {ReactComponent as UploadIcon} from 'assets/icons/upload.svg'
import {ReactComponent as ScanIcon} from 'assets/icons/scan.svg'
import {ReactComponent as CopyIcon} from 'assets/icons/copy.svg'
import {Button} from "../../../components/button/button";
import {toast} from "react-toastify";
import {digitSeparator} from "../../../core/utilities/separators";
import {Input} from "../../../components/input/input";
import Dragger from "antd/es/upload/Dragger";
import qr from "assets/images/qr.jpg"
import investment from "assets/images/investment-small.png"
import {CheckOutlined} from "@ant-design/icons";

interface Props {
    ticketSize: number;
}

enum Step {
    CALCULATOR,
    DETAILS,
    CONTRACT,
    WALLET,
    SUCCESS
}

export const Calculator: FC<Props> = ({ticketSize}) => {
    const [risk, setRisk] = useState<number>(1)
    const [profit, setProfit] = useState<number>()
    const [step, setStep] = useState<Step>(Step.CALCULATOR)
    const [isChecked, setIsChecked] = useState<boolean>(false)

    const handleCalculate = () => {
        setProfit(ticketSize * (1.5 - ((5 * risk) / 1000)) * (risk / 100))
    }

    useEffect(() => {
        handleCalculate()
    }, [ticketSize, risk])

    const props: UploadProps = {
        name: 'file',
        multiple: true,
        onChange(info) {
            const {status} = info.file;
            if (status !== 'uploading') {
                console.log(info.file, info.fileList);
            }
            if (status === 'done') {
                toast.success(`${info.file.name} file uploaded successfully.`);
            } else if (status === 'error') {
                toast.error(`${info.file.name} file upload failed.`);
            }
        },
        onDrop(e) {
            console.log('Dropped files', e.dataTransfer.files);
        },
    };

    return (
        <div className={"fund-racing-calculator"}>
            <p>CALCULATE YOUR PROFIT</p>
            <div className={"content"}>
                {step === Step.CALCULATOR &&
                    <div className={`step-calculator`}>
                        <div className={"image-container"}><img src={hamilton}/></div>
                        <div className={"description"}>
                            <p>
                                The default payout ratio for all FTMO Traders is set to 80%, however, an 80% share is
                                not
                                where
                                we draw the line.<br/> All FTMO Traders can request <span>payout on-demand</span>. The
                                payout can be processed
                                just <span>after 14 days</span>, but you also have the ability to <span>cho</span> The
                                default payout ratio for all FTMO
                                Traders is set to 80%, however, an 80% share is not where we draw the line.<br/> The
                                default
                                payout
                                ratio for all FTMO
                            </p>
                            <Slider
                                min={1}
                                max={100}
                                marks={{
                                    1: '1%',
                                    25: '25%',
                                    50: '50%',
                                    75: '75%',
                                    100: '100%',
                                }}
                                defaultValue={1}
                                tooltipVisible={true}
                                tooltip={{
                                    placement: 'bottom',
                                    formatter: (value) => `${value}%`,
                                }}
                                trackStyle={{background: '#3F62FE'}}
                                onChange={(sliderValue) => setRisk(sliderValue)}
                                value={risk}
                            />
                            <div className={"ticket-info"}>
                                <div className={"info"}>
                                    <span>Your ticket size:</span>
                                    <span>{ticketSize / 1000}K</span>
                                </div>
                                <div className={"info"}>
                                    <span>Your profit:</span>
                                    <span>${digitSeparator(profit?.toFixed(2))}
                                        <tspan>({risk}%)</tspan></span>
                                </div>
                                <Button variant={"success"} text={"Next step"} icon={<RightIcon/>}
                                        onClick={() => setStep(Step.DETAILS)}/>
                            </div>
                        </div>
                    </div>
                }
                {step === Step.DETAILS &&
                    <div className={"step-details"}>
                        <p>Fill in the details below to continue</p>
                        <ul className={"details"}>
                            <li>
                                <label>Full name:</label>
                                <Input placeholder={"Enter your name"}/>
                            </li>
                            <li>
                                <label>Email:</label>
                                <Input placeholder={"Enter your Email"}/>
                            </li>
                            <li>
                                <label>Payment method:</label>
                                <Input placeholder={"Crypto currency"} after={<DownIcon/>}/>
                            </li>
                            <li>
                                <label>Risk:</label>
                                <Input placeholder={"1 Month"}/>
                            </li>
                            <li>
                                <label>Reward:</label>
                                <Input placeholder={"1 Month"}/>
                            </li>
                            <li>
                                <label>Investment period:</label>
                                <Input placeholder={"1 Month"}/>
                            </li>
                        </ul>
                        <Button
                            variant={"success"}
                            text={"Next step"}
                            icon={<RightIcon/>}
                            onClick={() => setStep(Step.CONTRACT)}
                        />
                    </div>
                }
                {step === Step.CONTRACT &&
                    <div className={"step-contract"}>
                        <div className={"contract-container"}>
                            <Button text={"Download Contract"} icon={<RightIcon/>} variant={"success"}/>
                        </div>
                        <div className={"description"}>
                            <p>Download the contract, read it carefully, sign it and Upload it</p>
                            <div className={"upload-container"}>
                                <p>Investment period:</p>
                                <Dragger {...props} className={"fund-racing-dragger"}>
                                    <p><UploadIcon/> Upload your contract here</p>
                                </Dragger>
                            </div>
                            <div className={"actions"}>
                                <div className={"agreement"}>
                                    <input type={"checkbox"} checked={isChecked}
                                           onChange={() => setIsChecked(!isChecked)}/>
                                    <p>I agree with the rules and regulations of this contract</p>
                                </div>
                                <Button
                                    variant={"success"}
                                    text={"Next step"}
                                    icon={<RightIcon/>}
                                    onClick={() => setStep(Step.WALLET)}
                                    disabled={!isChecked}
                                />
                            </div>
                        </div>
                    </div>
                }
                {step === Step.WALLET &&
                    <div className={"step-wallet"}>
                        <div className={"qr-code-container"}>
                            <img src={qr}/>
                            <p><ScanIcon/> Scan to connect to wallet</p>
                        </div>
                        <div className={"description"}>
                            <p>The default payout ratio for all FTMO Traders is set to 80%, however, an</p>
                            <ul>
                                <li>
                                    <label>Currency:</label>
                                    <Input placeholder={"Enter your email"} after={<DownIcon/>}/>
                                </li>
                                <li>
                                    <label>Network:</label>
                                    <Input placeholder={"Crypto currency"} after={<DownIcon/>}/>
                                </li>
                                <li>
                                    <label>Address wallet:</label>
                                    <Input placeholder={"98n23y74uthm23y387y357dfkjfhckbnadm,z2t57i2uymgsdv"}
                                           after={<CopyIcon onClick={() => toast.success("Copied.")}/>}/>
                                </li>
                            </ul>
                            <Button
                                variant={"success"}
                                text={"Next step"}
                                icon={<RightIcon/>}
                                onClick={() => setStep(Step.SUCCESS)}
                            />
                        </div>
                    </div>
                }
                {step === Step.SUCCESS &&
                    <div className={"step-success"}>
                        <img src={investment}/>
                        <div className={"description"}>
                            <p>Thank you for your investing</p>
                            <p>Learn to trade on our simulated trading platform and get an opportunity to trade up to
                                $1,000,000 on the FundRacing Account. Receive up to 70% of profits from your simulated
                                trades. Join FundRacing!</p>
                            <Button
                                variant={"success"}
                                text={"Done"}
                                icon={<CheckOutlined />}
                                onClick={() => setStep(Step.CALCULATOR)}
                            />
                        </div>
                    </div>
                }
            </div>
        </div>
    )
}
