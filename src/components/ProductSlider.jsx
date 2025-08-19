
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useDispatch } from "react-redux";
import { addToCart } from '../slices/cartSlice';
import { toast } from "sonner";


import ProductCard from "./ProductCard";

const ProductSlider = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
   

  const fetchProducts = async () => {
    try {
      const res = await axios.get("https://fakestoreapi.com/products?limit=8");
      setProducts(res.data);
    } catch (error) {
      console.error("Failed to fetch products:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    toast.success(`أضفت المنتج "${product.title}" إلى السلة`, {
      duration: 3000,
      position: "bottom-right",
    });
      };

  return (
    <div className="py-8 px-4 bg-gray-100  ">
      <div dir="rtl" className="flex flex-col text-right mb-4 mr-11">
        <h2 className="text-2xl font-medium text-gray-700 leading-9">
          وصل حديثا
        </h2>
        <p className="text-base text-gray-400 mt-1">
          تسوق أحدث المنتجات المميزة المضافة حديثًا
        </p>
      </div>

      {loading ? (
        <p className="text-center text-gray-500">Loading products...</p>
      ) : (
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          loop={true}
          autoplay={{ delay: 4000 }}
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 16,
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 24,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 30,
            },
          }}
        >
          {products.map((product) => (
            <SwiperSlide
              key={product.id}
              className="flex flex-col items-center justify-center "
            >
              <ProductCard
                key={product.id}
                image={product.image}
                category={product.category}
                title={product.title}
                description={product.description}
                price={product.price}
                isNew={true}
                onAddToCart={() => handleAddToCart(product)}  // هنا ربطت بالفعلي
                onToggleFavorite={() =>
                  alert(`تم التبديل على المفضلة للمنتج "${product.title}"`)
                }
              />

            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </div>
  );
};

export default ProductSlider;
