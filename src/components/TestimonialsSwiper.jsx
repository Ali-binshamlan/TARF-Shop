
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const testimonials = [
    {
      id: 1,
      name: "محمد السيد",
      role: "مهندس استشاري لدى متجر اكسوارا",
      comment:
        "اشتريت ملابس من اكسوارا وكانت جودة رائعة وسرعة في التوصيل.",
      rating: 4,
      image: "https://placehold.co/48x48",
    },
    {
      id: 2,
      name: "أحمد القحطاني",
      role: "مدير متجر إلكتروني",
      comment:
        "التجربة مع اكسوارا مذهلة! ملابس أنيقة وخدمة ممتازة.",
      rating: 5,
      image: "https://placehold.co/48x48",
    },
    {
      id: 3,
      name: "نورة العتيبي",
      role: "صاحبة مشروع ملابس",
      comment:
        "أنصح الجميع بشراء الملابس من اكسوارا، جودة عالية وأسعار مناسبة.",
      rating: 5,
      image: "https://placehold.co/48x48",
    },
    {
      id: 4,
      name: "سعيد عمر",
      role: "مشتري",
      comment: "التنوع في الملابس رائع، وسهولة التصفح في الموقع ممتازة.",
      rating: 4,
      image: "https://placehold.co/48x48",
    },
    {
      id: 5,
      name: "ليلى حسن",
      role: "موظفة",
      comment: "خدمة العملاء ودودة والتوصيل سريع جدًا.",
      rating: 5,
      image: "https://placehold.co/48x48",
    },
    {
      id: 6,
      name: "خالد علي",
      role: "طالب",
      comment: "الملابس مريحة وجودتها عالية جداً.",
      rating: 4,
      image: "https://placehold.co/48x48",
    },
    {
      id: 7,
      name: "رنا محمد",
      role: "ربة منزل",
      comment: "أحببت اختيار الألوان والتصاميم المعروضة.",
      rating: 5,
      image: "https://placehold.co/48x48",
    },
    {
      id: 8,
      name: "طارق عبد الله",
      role: "مصمم أزياء",
      comment: "الموقع سهل الاستخدام ويوفر ملابس عصرية.",
      rating: 5,
      image: "https://placehold.co/48x48",
    },
    {
      id: 9,
      name: "سلمى عبد الرحمن",
      role: "مدونة موضة",
      comment: "أوصي به لكل من يبحث عن ملابس ذات جودة وتصاميم مميزة.",
      rating: 5,
      image: "https://placehold.co/48x48",
    },
    {
      id: 10,
      name: "ياسر منصور",
      role: "مهندس",
      comment: "تجربة شراء سلسة وملابس مناسبة لجميع المناسبات.",
      rating: 4,
      image: "https://placehold.co/48x48",
    },
  ];

// دالة لتحويل رقم التقييم إلى نجوم ملونة ذهبية
function renderStars(rating) {
  const totalStars = 5;
  const stars = [];

  for (let i = 1; i <= totalStars; i++) {
    if (i <= rating) {
      stars.push(
        <span key={i} style={{ color: "#fbbf24", fontSize: "1.2rem" /* أصفر ذهبي */ }}>
          ★
        </span>
      );
    } else {
      stars.push(
        <span key={i} style={{ color: "#d1d5db", fontSize: "1.2rem" /* رمادي فاتح */ }}>
          ★
        </span>
      );
    }
  }
  return stars;
}

export default function TestimonialsSwiper() {
    return (
      <section className="max-w-6xl mx-auto px-4 py-8">
        <h2 className="text-3xl font-bold text-center mb-8">آراء العملاء</h2>
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={3}
          loop={true}
          autoplay={{ delay: 4000 }}
          breakpoints={{
            320: { slidesPerView: 1, spaceBetween: 10 },
            640: { slidesPerView: 2, spaceBetween: 20 },
            1024: { slidesPerView: 3, spaceBetween: 30 },
          }}
          className="mySwiper"
        >
          {testimonials.map(({ id, name, role, comment, rating, image }) => (
            <SwiperSlide key={id} className="p-4 border rounded shadow-sm bg-white">
              <div className="flex items-center space-x-4 mb-4">
                <img
                  src={image}
                  alt={name}
                  className="w-12 h-12 rounded-full object-cover"
                  loading="lazy"
                />
                <div>
                  <h3 className="font-bold">{name}</h3>
                  <p className="text-sm text-gray-600">{role}</p>
                </div>
              </div>
              <p className="mb-4 text-gray-800">{comment}</p>
              <div>{renderStars(rating)}</div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    );
  }
  
