import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import type { default as SwiperInstance } from "swiper";
import { Navigation } from "swiper/modules";
import "swiper/css";

import Arrow from "./Arrow";

import "./Phone.css";

export default function Phone() {
	const [swiper, setSwiper] = useState<SwiperInstance>();
	const [currentIndex, setCurrentIndex] = useState(0);

	return (
		<div className="phone">
			<div className="content">
				<div className="text">
					<div className="heading">Donec ac neque porta fringilla.</div>
					<div className="subText">
						Nam condimentum lectus vel varius auctor.
						<br /> Maecenas interdum elementum ante, ut consectetur tellus
						laoreet non. Etiam enim leo, efficitur in risus et.
					</div>
				</div>
				<div className="menu">
					<button
						type="button"
						className={`item ${currentIndex === 0 ? "active" : ""}`}
						onClick={() => swiper?.slideTo(0)}
					>
						<div>Nulla dapibus</div>
						<Arrow type="Filled" color="transparent" size={23} />
					</button>
					<button
						type="button"
						className={`item ${currentIndex === 1 ? "active" : ""}`}
						onClick={() => swiper?.slideTo(1)}
					>
						<div>Etiam enim leo, efficitur in risus et.</div>
						<Arrow type="Filled" color="transparent" size={23} />
					</button>
					<button
						type="button"
						className={`item ${currentIndex === 2 ? "active" : ""}`}
						onClick={() => swiper?.slideTo(2)}
					>
						<div>Nam condimentum lectus vel.</div>
						<Arrow type="Filled" color="transparent" size={23} />
					</button>
				</div>
			</div>
			<div className="thePhone">
				<Swiper
					onSwiper={setSwiper}
					onSlideChange={() => {
						setCurrentIndex(swiper?.activeIndex ?? 0);
					}}
					direction="horizontal"
					modules={[Navigation]}
					// spaceBetween={30}
					slidesPerView={1}
					centeredSlides={true}
					navigation={{
						prevEl: ".swiper-button-prev",
						nextEl: ".swiper-button-next",
					}}
				>
					<SwiperSlide>
						<img src="/canyon.png" alt="" />
					</SwiperSlide>
					<SwiperSlide>
						<img src="/gas.png" alt="" />
					</SwiperSlide>
					<SwiperSlide>
						<img src="/dawn.png" alt="" />
					</SwiperSlide>
					<SwiperSlide>
						<img src="/satellite.png" alt="" />
					</SwiperSlide>
				</Swiper>
				<img src="/iphone.png" alt="" className="phoneFrame" />
				<button type="button" className="swiper-button-prev" />
				<button type="button" className="swiper-button-next" />
			</div>
		</div>
	);
}
