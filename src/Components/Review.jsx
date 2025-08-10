// ReviewSection.jsx
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { FaStar, FaRegStar, FaStarHalfAlt } from 'react-icons/fa';

const reviews = [
  {
    name: 'Ayaan Rahman',
    image: 'https://i.pravatar.cc/150?img=10',
    rating: 5,
    comment: 'Absolutely fantastic service! Everything worked smoothly and exceeded my expectations.',
  },
  {
    name: 'Mehjabin Akter',
    image: 'https://i.pravatar.cc/150?img=25',
    rating: 4.5,
    comment: 'Beautiful interface and quick responses from support. I would definitely recommend it.',
  },
  {
    name: 'Tanvir Hasan',
    image: 'https://i.pravatar.cc/150?img=7',
    rating: 4,
    comment: 'The platform is quite useful. I wish it had a few more customization options though.',
  },
];

const renderStars = (rating) => {
  const stars = [];
  const full = Math.floor(rating);
  const half = rating - full >= 0.5;
  for (let i = 0; i < full; i++) {
    stars.push(<FaStar key={`full-${i}`} className="text-yellow-500" />);
  }
  if (half) {
    stars.push(<FaStarHalfAlt key="half" className="text-yellow-500" />);
  }
  while (stars.length < 5) {
    stars.push(<FaRegStar key={`empty-${stars.length}`} className="text-yellow-400" />);
  }
  return stars;
};

const Review = () => {
  return (
    <div className="max-w-6xl mx-auto py-16 px-4">
      <h2 className="text-4xl font-bold text-center mb-12 ">What Our Customers Say</h2>

      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        pagination={{ clickable: true }}
        modules={[Pagination]}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {reviews.map((review, index) => (
          <SwiperSlide key={index}>
            <div className="card bg-base-100 shadow-xl border border-base-300 hover:shadow-2xl transition-all duration-300 h-full">
              <div className="card-body">
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src={review.image}
                    alt={review.name}
                    className="w-16 h-16 rounded-full border-2 border-primary"
                  />
                  <div>
                    <h3 className="font-semibold text-lg">{review.name}</h3>
                    <div className="flex">{renderStars(review.rating)}</div>
                  </div>
                </div>
                <p className="text-base text-gray-600 leading-relaxed">"{review.comment}"</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Review;