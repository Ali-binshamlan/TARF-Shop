import { Link } from "react-router-dom";

import clothesImage from "../assets/stylish-gray-overcoat-hanger-winter-fashion.png";
import braceletImage from "../assets/408654795_0ac8e185-ec2e-4436-9497-0e47af1d2207-removebg-preview.png";
import shoesImage from "../assets/shoes-removebg-preview.png";
import retroImage from "../assets/beautiful-elegance-luxury-fashion-green-handbag-removebg-preview.png";
import hatImage from "../assets/green-cap-fashion-white-elegance-removebg-preview.png";

const categories = [
  { id: "clothes", name: "ملابس", productsCount: 120, image: clothesImage },
  { id: "bracelets", name: "أساور", productsCount: 85, image: braceletImage },
  { id: "shoes", name: "أحذية", productsCount: 90, image: shoesImage },
  { id: "bags", name: "حقائب", productsCount: 70, image: retroImage },
  { id: "hats", name: "قبعات", productsCount: 40, image: hatImage },
];

export default function Categories() {
  return (
    <div className="max-w-[1200px] mx-auto p-4">
      <div className="w-full flex justify-between items-end flex-wrap mb-8">
        <div className="flex-1 text-right">
          <div className="text-2xl font-medium font-['DIN_Next_LT_Arabic'] text-gray-600 leading-[35px]">
            تسوق حسب الفئات
          </div>
          <div className="text-base font-normal font-['DIN_Next_LT_Arabic'] text-gray-400 leading-[25px]">
            اكتشف أحدث المنتجات في عالم الملابس والاكسسوارات
          </div>
        </div>
      </div>

      <div dir="rtl" className="w-full flex flex-wrap justify-center gap-12">
        {categories.map((cat) => (
          <Link
            key={cat.id}
            to={`/category/${cat.id}`} // هنا غيرت href إلى to
            className="w-[180px] flex flex-col items-center gap-4 text-center cursor-pointer"
          >
            <div className="w-[120px] h-[120px] bg-gray-200 rounded-full flex items-center justify-center">
              <img
                src={cat.image}
                alt={cat.name}
                width={110}
                height={110}
                className="object-contain"
                loading="eager"
              />
            </div>
            <div className="text-xl text-gray-600 font-['DIN_Next_LT_Arabic']">
              {cat.name}
            </div>
            <div className="text-base text-gray-400 font-['DIN_Next_LT_Arabic']">
              {cat.productsCount} منتج
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
