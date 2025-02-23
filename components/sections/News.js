
'use client'
import { fetcher } from "@/lib/dataFetcher"
import { fetchHashnodeBlogs } from "@/lib/hasnode"
import { useQuery } from "@tanstack/react-query"
import Link from "next/link"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 1,
    spaceBetween: 20,
    slidesPerGroup: 1,
    direction: 'vertical',
    loop: true,
    navigation: {
        nextEl: ".news-carousel .swiper-prev",
        prevEl: ".news-carousel .swiper-next",
    },
    autoplay: {
        delay: 4000,
        reverseDirection: true,
        disableOnInteraction: false,
    },
    // grabcursor: true,
    speed: 400,
    effect: 'slide',
}
export default function News() {
    const { data, isLoading } = useQuery({
        queryKey: ['news'],
        queryFn: async () => {
            const blogs = await fetcher({ path: "/blog?limit=5" })
            return blogs
        }
    })
    if (isLoading) {
        return null
    }
    return (
        <>
            <section className="news-area">
                <div className="container">
                    <div className="news-carousel swiper">
                        <Swiper {...swiperOptions} className="swiper-wrapper">
                            {
                                data?.map((item, i) => (
                                    <SwiperSlide key={i}>
                                        <div className="hero-text">
                                            <span className="news"><img src="/assets/img/images/news-icon.png" alt="icon" />Top News</span>
                                            <Link href={`/${item?._id}`}>{item?.title}</Link>
                                        </div>
                                    </SwiperSlide>
                                ))
                            }

                        </Swiper>
                        <div className="swiper-arrow">
                            <div className="swiper-nav swiper-next"><i className="las la-angle-left" /></div>
                            <div className="swiper-nav swiper-prev"><i className="las la-angle-right" /></div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
