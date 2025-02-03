import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "./carousel.css"; // Import the custom styles

const Carousel = () => {
  const slides = [
    {
      id: 1,
      image: "https://rukminim2.flixcart.com/fk-p-flap/1620/270/image/b534ac69003a5693.jpg?q=20",
      title: "Sale is Live",
    },
    {
      id: 2,
      image: "https://rukminim2.flixcart.com/fk-p-flap/1620/270/image/6a0b08a518b223cc.png?q=20",
      title: "Flights",
    },
    {
      id: 3,
      image: "https://rukminim2.flixcart.com/fk-p-flap/1620/270/image/04e14d58c474db75.jpg?q=20",
      title: "Dor Play",
    },
    {
      id: 4,
      image: "https://rukminim2.flixcart.com/fk-p-flap/1620/270/image/a19748ac5ccc2021.jpg?q=20",
      title: "Nothing(R) Phone 3",
    },
  ];

  return (
    <div className="relative w-full mx-auto pt-3">
      <div className="relative overflow-hidden">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation={{ nextEl: ".next-btn", prevEl: ".prev-btn" }}
          pagination={{ clickable: true, el: ".pagination-dots" }}
          autoplay={{ delay: 3000 }}
          loop
          className="relative"
        >
          {slides.map((slide) => (
            <SwiperSlide key={slide.id}>
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-64 object-cover"
              />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Navigation Buttons */}
        <button className="prev-btn absolute left-2 top-1/2 transform -translate-y-1/2 z-10 bg-white p-3 rounded-full shadow-lg hover:bg-gray-200">
          <ChevronLeft size={24} />
        </button>
        <button className="next-btn absolute right-2 top-1/2 transform -translate-y-1/2 z-10 bg-white p-3 rounded-full shadow-lg hover:bg-gray-200">
          <ChevronRight size={24} />
        </button>
      </div>

      {/* Pagination Dots Below Carousel */}
      <div className="pagination-dots flex justify-center mt-4 space-x-2"></div>
    </div>
  );
};

export default Carousel;
