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
import { Navigation, Pagination, EffectFade } from 'swiper/modules';

interface Props {
    setTicketSize: Dispatch<SetStateAction<number>>
}

SwiperCore.use([Navigation, Pagination, EffectFade]);

export const TicketSize: FC<Props> = ({setTicketSize}) => {

    const handleSlideChange = (swiper: SwiperCore) => {
        const sizes = [20000, 40000, 60000, 80000, 100000];
        setTicketSize(sizes[swiper.realIndex]);
    };

    return (
        <div className="fund-racing-ticket-size">
            <p>SELECT TICKET SIZE</p>
            <Swiper
                navigation={true}
                pagination={{
                    clickable: true,
                    renderBullet: (index, className) => {
                        return `<span class="${className}">${[20, 40, 60, 80, 100][index]}K</span>`;
                    },
                }}
                centeredSlides={true}
                slidesPerView={2}
                loop={true}
                onSlideChange={handleSlideChange}
            >
                <SwiperSlide><img src={twenty} alt="20k" /></SwiperSlide>
                <SwiperSlide><img src={forty} alt="40k" /></SwiperSlide>
                <SwiperSlide><img src={sixty} alt="60k" /></SwiperSlide>
                <SwiperSlide><img src={eighty} alt="80k" /></SwiperSlide>
                <SwiperSlide><img src={hundred} alt="100k" /></SwiperSlide>
            </Swiper>
        </div>
    );
};