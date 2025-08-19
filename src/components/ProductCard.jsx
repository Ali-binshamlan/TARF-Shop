const truncateText = (text, maxLength) => {
  if (!text) return "";
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength) + "...";
};

const ProductCard = ({
  image,
  category,
  title,
  description,
  price,
  isNew = false,
  onAddToCart,
  onToggleFavorite,
}) => {
  return (
    <div dir="ltr" className="w-[278px] h-[380px] rounded-sm border border-gray-100 overflow-hidden shadow-sm flex flex-col justify-start items-end bg-white">
      {/* صورة المنتج والعلامة */}
      <div className="w-full flex items-center justify-center relative h-[180px]">
        <img className="h-full object-cover" src={image} alt={title}   loading="lazy" />
        {isNew && (
          <div className="absolute right-3 top-3 bg-green-400 text-white text-xs px-2 py-0.5 rounded">
            جديد
          </div>
        )}
      </div>

      {/* تفاصيل المنتج */}
      <div className="w-full p-3 flex flex-col justify-start items-end gap-3">
        <div className="w-full flex flex-col items-end gap-1 text-right">
          <span className="text-xs text-green-600">{category}</span>
          <h2 className="text-sm font-medium text-gray-800">
            {truncateText(title, 20)}
          </h2>
          <p className="text-xs text-gray-500 overflow-hidden text-ellipsis max-h-[2.4rem] leading-6 text-right">
            {truncateText(description, 40)}
          </p>
          <span className="text-sm font-medium text-gray-700">{price} رس</span>
        </div>

        {/* الأزرار */}
        <div className="w-full flex justify-start items-center gap-2">
          <button
            onClick={onToggleFavorite}
            className="p-3 border border-gray-200 rounded-sm flex justify-center items-center cursor-pointer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5 text-gray-400"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.752 6.238a5.994 5.994 0 00-10.716-1.398 5.994 5.994 0 00-10.716 1.398C.235 8.61.93 11.275 3.247 13.23L10.82 21l7.573-7.77c2.316-1.955 3.012-4.62 2.36-6.992z"
              />
            </svg>
          </button>

          <button
            onClick={onAddToCart}
            className="flex-1 p-3 border border-[#ec6531] rounded-sm flex justify-center items-center gap-2 bg-[#ec6531] cursor-pointer"
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
    </div>
  );
};

export default ProductCard;
