import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addToCart } from '../slices/cartSlice';
import { toast } from "sonner";



function Countdown({ time }) {
  const calculateTimeLeft = () => {
    const now = new Date();
    const endTime = new Date(now);
    endTime.setSeconds(endTime.getSeconds() + time.seconds);
    endTime.setMinutes(endTime.getMinutes() + time.minutes);
    endTime.setHours(endTime.getHours() + time.hours);
    endTime.setDate(endTime.getDate() + time.days);

    const difference = endTime - now;

    if (difference <= 0) {
      return null;
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [time]);

  if (!timeLeft) {
    return <div className="text-red-600 font-semibold mt-2">انتهى العرض</div>;
  }

  return (
    <div className="text-sm text-gray-600 font-semibold mt-2">
      ينتهي خلال:{" "}
      {timeLeft.days > 0 && `${timeLeft.days} يوم `}
      {timeLeft.hours.toString().padStart(2, "0")}:
      {timeLeft.minutes.toString().padStart(2, "0")}:
      {timeLeft.seconds.toString().padStart(2, "0")}
    </div>
  );
}

export default function OffersSoonEnding() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();


  useEffect(() => {
    axios.get("https://dummyjson.com/products").then((res) => {
      const products = res.data.products.slice(0, 2).map((p) => ({
        ...p,
        oldPrice: (p.price * 1.25).toFixed(2),
        discount: 20,
        time: { seconds: 30, minutes: 15, hours: 3, days: 1 }, 
      }));
      setProducts(products);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center py-20">
        <p className="text-gray-500 text-lg">جاري التحميل...</p>
      </div>
    );
  }
  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    toast.success(`أضفت المنتج "${product.title}" إلى السلة`, {
      duration: 3000,
      position: "bottom-right",
    });
      };

  return (
    <div className="px-4 sm:px-6 md:px-10 py-14 max-w-screen-xl mx-auto flex flex-col gap-8">
      <div dir="rtl" className="flex justify-between items-end">
        <div  className="flex flex-col text-right">
          <h2 className="text-2xl font-medium text-gray-700 leading-9">
            عروض تنتهي قريبًا
          </h2>
          <p className="text-base text-gray-400 mt-1">
            تسوق أحدث العروض المميزة  
          </p>
        </div>
    
      </div>

      <div className="flex flex-wrap gap-6 justify-start">
        {products.map((product) => (
          <div
            key={product.id}
            className="flex bg-white rounded shadow border border-[#ec6531] overflow-hidden max-w-full md:max-w-[588px] h-auto"
            dir="rtl"
          >
            {/* الصورة */}
            <div  className="relative flex-shrink-0 w-48 h-auto">
                    <img style={{ width: "100%" ,height:"71%"}}
                src={product.thumbnail}
                alt={product.title}
                className="w-full h-full object-cover rounded-tr rounded-br"
                  loading="lazy"

              />
              {product.discount && (
                <div className="absolute top-2 right-24 bg-red-600 rounded px-2 py-1 text-white text-sm font-semibold shadow">
                  خصم {product.discount}%
                </div>
              )}
            </div>

            {/* المحتوى */}
            <div className="flex flex-col justify-between p-6 text-right flex-1">
              <div>
                <h3 className="text-lg font-semibold text-gray-700 mb-2">
                  {product.title}
                </h3>
                <p className="text-gray-500 mb-4 line-clamp-4">
                  {product.description}
                </p>

                <div className="flex items-center gap-3 mb-5">
                  <span className="line-through text-gray-300">
                    {product.oldPrice} ر.س
                  </span>
                  <span className="text-red-600 font-semibold text-2xl">
                    {product.price} ر.س
                  </span>
                </div>

                {/* العد التنازلي */}
                <Countdown time={product.time} />
              </div>

              <button 
                className="flex-1 p-3 border border-[#ec6531] bg-[#ec6531] rounded-sm flex justify-center items-center gap-2 cursor-pointer"
                onClick={() => handleAddToCart(product)}  // هنا ربطت بالفعلي

            >
              <span className="text-base font-medium text-white">أضف للسلة</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.5 6h13m-6.5-6v6"
                />
              </svg>
            </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
