import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";

import "./ModuleThree.css";

const CarouselItem = ({
	imgURL,
	note,
	heading,
	text,
}: {
	imgURL: string;
	note: string;
	heading: string;
	text: string;
}) => {
	return (
		<div className="carouselItem">
			<img src={imgURL} alt="" />
			<div className="gradient" />
			<div className="content">
				<div className="top">
					<div className="note">{note}</div>
					<div className="heading">{heading}</div>
				</div>
				<div className="text">{text}</div>
			</div>
		</div>
	);
};

export default function ModuleThree() {
	return (
		<div className="moduleThree">
			<div className="moduleWrapper">
				<Swiper
					direction="horizontal"
					loop={true}
					modules={[Navigation, Pagination, Autoplay]}
					className="swiperContainer"
					slidesPerView={1}
					autoplay={{
						delay: 4000,
					}}
					speed={500}
					navigation={{
						prevEl: ".swiper-button-prev",
						nextEl: ".swiper-button-next",
					}}
					pagination
				>
					<SwiperSlide>
						<CarouselItem
							imgURL="/ufo2.png"
							note="Cras ac ipsum"
							heading="Cura sodales."
							text="uspendisse accumsan nibh vitae nisl maximus."
						/>
					</SwiperSlide>
					<SwiperSlide>
						<CarouselItem
							imgURL="/ufo.png"
							note="Cras ac ipsum"
							heading="Cura sodales."
							text="uspendisse accumsan nibh vitae nisl maximus."
						/>
					</SwiperSlide>
					<SwiperSlide>
						<CarouselItem
							imgURL="/planet.png"
							note="Cras ac ipsum"
							heading="Cura sodales."
							text="uspendisse accumsan nibh vitae nisl maximus."
						/>
					</SwiperSlide>
					<div className="navButtons">
						<button
							type="button"
							className="swiper-button-prev"
						/>
						<button
							type="button"
							className="swiper-button-next"
						/>
					</div>
				</Swiper>
			</div>
		</div>
	);
}
