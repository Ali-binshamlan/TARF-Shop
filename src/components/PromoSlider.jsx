
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import Fashion from "../assets/alyssa-strohmann-TS--uNw-JqE-unsplash.jpg"
import Hats from"../assets/clem-onojeghuo-vU2MmvDCmUo-unsplash.jpg"
import shoes from"../assets/jayson-hinrichsen-qLs4WYXqLNY-unsplash.jpg"
import accessories from"../assets/harper-sunday-O1DhTK0_1iQ-unsplash.jpg"

const slides = [
  {
    title: "أحدث صيحات الأزياء",
    description: "اكتشف تشكيلتنا الراقية من الملابس العصرية لكل المناسبات.",
    image: Fashion,
  },
  {
    title: "قبعات أنيقة لكل موسم",
    description: "أضف لمسة من الأناقة لمظهرك مع قبعاتنا الفريدة.",
    image: Hats,
  },
  {
    title: "تشكيلة الأحذية الجديدة",
    description: "احصل على الراحة والأناقة مع أحدث موديلات الأحذية.",
    image: shoes,
  },
  {
    title: "إكسسوارات تكمّل أناقتك",
    description: "زَيّن إطلالتك بإكسسوارات مميزة تبرز أسلوبك الخاص.",
    image: accessories,
  },
];

const PromoSlider = () => {
  return (
    <div className="w-full bg-white">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        loop={true}
        autoplay={{ delay: 4000 }}
        pagination={{ clickable: true }}
        navigation
        className="w-full !pb-12"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-[500px]">
              <img
                src={slide.image}
                alt={slide.title}
                className="object-cover w-full h-full"

              />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 md:px-20 bg-black/40">
                <div className="p-6 rounded-lg max-w-xl ">
                  <h2 className="text-2xl md:text-4xl font-bold text-white leading-tight">
                    {slide.title}
                  </h2>
                  <p className="text-sm md:text-lg text-white  mt-2">
                    {slide.description}
                  </p>
                  <button className="mt-4 px-6 py-3 bg-[#ec6531] text-white rounded shadow hover:bg-[#282f63] transition">
                    اكتشف المزيد
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default PromoSlider;
