import React from 'react'
import {Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/swiper.min.css'
import 'swiper/components/navigation/navigation.min.css'
import 'swiper/components/pagination/pagination.min.css'
import SwiperCore, { Navigation, Pagination } from 'swiper'
import '../style/brand.css'

SwiperCore.use([Navigation, Pagination])

const carousel = [
    {
        img: './images/remmers.png'
    },
    {
        img: './images/sadolin.png'
    },
    {
        img: './images/pinotex.png'
    },
    {
        img: './images/adler.png'
    },
    {
        img: './images/sadolin.png'
    },
    {
        img: './images/pinotex.png'
    },
]
export default function Brand() {
    return (
        <>
            <div className="container py-3">
                <div className="row">
                    <div className="col-12 brand_theme text-center py-lg-5 py-2">
                        <p>Используем только <span>экологически чистые и профессиональные материалы</span></p>
                    </div>
                </div>
                <Swiper
                        navigation={true}
                        pagination={{ clickable: true }}
                        className={'mySwiper'}
                        slidesPerView={4}
                        spaceBetween={20}
                        autoplay={true}
                        breakpoints={{
                            0: {
                                slidesPerView: 1,
                            },
                            776: {
                                slidesPerView: 3,
                            },
                            1200: {
                                slidesPerView: 4,
                            },
                        }}
                    >
                        {carousel.map(({img}) => (
                            <SwiperSlide key = {img}>
                                <img src={img} alt="" />
                            </SwiperSlide>
                        ))}
                    </Swiper>
            </div>
        </>
    )
}
