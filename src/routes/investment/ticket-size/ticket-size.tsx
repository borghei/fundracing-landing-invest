import './ticket-size.scss';
import {Dispatch, FC, SetStateAction} from "react";

// Swiper Imports
import 'swiper/css'
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore from 'swiper';


// Images
import twenty from 'assets/images/20k.png';
import forty from 'assets/images/40k.png';
import sixty from 'assets/images/60k.png';
import eighty from 'assets/images/80k.png';
import hundred from 'assets/images/100k.png';
import twohundred from 'assets/images/200k.png';

import {ReactComponent as NextIcon} from 'assets/icons/next.svg'
import {ReactComponent as PrevIcon} from 'assets/icons/prev.svg'

import { Navigation, Pagination, EffectFade } from 'swiper/modules';

interface Props {
    setTicketSize: Dispatch<SetStateAction<number>>
}

SwiperCore.use([Navigation, Pagination, EffectFade]);

export const TicketSize: FC<Props> = ({setTicketSize}) => {

    const handleSlideChange = (swiper: SwiperCore) => {
        const sizes = [20000, 40000, 60000, 80000, 100000, 200000];
        setTicketSize(sizes[swiper.realIndex]);
    };

    return (
        <div className="fund-racing-ticket-size">
            <p>SELECT TICKET SIZE</p>
            <Swiper
                modules={[Pagination, Navigation]}
                navigation={{
                    nextEl: '.swiper-arrow-next',
                    prevEl: '.swiper-arrow-prev'
                }}
                pagination={{
                    clickable: true,
                    renderBullet: (index, className) => {
                        return `<span class="${className}">${[20, 40, 60, 80, 100, 200][index]}K</span>`;
                    },
                }}
                centeredSlides={true}
                slidesPerView={1}
                loop={true}
                onSlideChange={handleSlideChange}
                breakpoints={
                {
                    0: {
                      slidesPerView: "1.25"
                    },
                    992: {
                        slidesPerView: "2"
                    }
                }
                }
            >
                <SwiperSlide><img src={twenty} alt="20k" /></SwiperSlide>
                <SwiperSlide><img src={forty} alt="40k" /></SwiperSlide>
                <SwiperSlide><img src={sixty} alt="60k" /></SwiperSlide>
                <SwiperSlide><img src={eighty} alt="80k" /></SwiperSlide>
                <SwiperSlide><img src={hundred} alt="100k" /></SwiperSlide>
                <SwiperSlide><img src={twohundred} alt="200k" /></SwiperSlide>

                <NextIcon className={"swiper-arrow-next"} />
                <PrevIcon className={"swiper-arrow-prev"}/>
            </Swiper>
        </div>
    );
};