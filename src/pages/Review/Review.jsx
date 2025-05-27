import './review.css'

import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

const Review = () => {
  const [review, setReview] = useState([]);

  useEffect(() => {
    fetch('/public/review.json')
      .then(res => res.json())
      .then(data => setReview(data));
  }, []);

  return (
    <div className="review text-center py-10 px-[5%]">
      <h2 className="text-3xl font-bold mb-6">OUR HAPPY CUSTOMERS</h2>

      <Swiper
      breakpoints={{
          320: { slidesPerView: 1, spaceBetween: 20 },
          640: { slidesPerView: 2, spaceBetween: 20 },
          1024: { slidesPerView: 3, spaceBetween: 30 },
          1280: { slidesPerView: 4, spaceBetween: 30 },
        }}
        pagination={{ clickable: true }}
        modules={[Pagination,Autoplay]}
        autoplay={{
          delay:3000,
          disableOnInteraction:false,
        }}    speed={2300}
        className="mySwiper px-[5%]  pb-5!"
      >
        {
          review.map((review) => (
            
            <SwiperSlide key={review.id} className="bg-white2 w-[200px]  min-h-[200px]! flex flex-col justify-between   rounded-xl p-6">
              <h3 className="font-semibold text-lg">{review.user}</h3>
              <p className="text-yellow-500 my-2 text-xl">
                {(review.rating)}
              </p>
              <p className="text-gray-600">{review.comment}</p>
            </SwiperSlide>
          ))
        }
      </Swiper>
    </div>
  );
};

export default Review;
