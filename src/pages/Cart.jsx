import { useSelector, useDispatch } from "react-redux";
import { incrementQuantity, decrementQuantity, removeItem } from "../slices/cartSlice";
import { AiOutlineClose } from "react-icons/ai";
import Header from "../components/Header";
import FooterSection from "../components/FooterSection";

export default function CartPage() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.items);
  

  const totalPrice = cart?.reduce((sum, item) => sum + item.price * item.quantity, 0) || 0;
  const totalItems = cart?.reduce((sum, item) => sum + item.quantity, 0) || 0;

  if (!cart || cart.length === 0) {
    return (
      <div>
        <Header />
        <div className="flex justify-center items-center h-screen text-gray-500 text-lg font-semibold">
          سلة المشتريات فارغة
        </div>
        <FooterSection />
      </div>
    );
  }

  return (
    <div>
      <Header />

      <div className="flex flex-col md:flex-row justify-start items-start gap-6 p-6 md:px-20 lg:px-40">
        {/* ملخص الطلب */}
        <div dir="rtl" className="w-full md:w-[280px] p-4 bg-white rounded-sm border border-gray-200 flex flex-col items-end gap-4">
          <h2 className="text-right w-full font-bold text-lg mb-4 font-[DIN_Next_LT_Arabic]">ملخص الطلب</h2>

          <div className="w-full flex justify-between text-gray-600 font-[DIN_Next_LT_Arabic] mb-2">
            <span>عدد العناصر:</span>
            <span>{totalItems}</span>
          </div>

          <div className="w-full flex justify-between text-gray-600 font-[DIN_Next_LT_Arabic] mb-4">
            <span>السعر الإجمالي:</span>
            <span>{totalPrice} ر.س</span>
          </div>

          <button
            className="w-full bg-blue-600 text-white py-2 rounded-sm font-[DIN_Next_LT_Arabic] hover:bg-blue-700 transition"
            onClick={() => alert("تم الضغط على إتمام الطلب")}
          >
            إتمام الطلب
          </button>
        </div>

        {/* قائمة المنتجات */}
        <div className="flex-1 flex flex-col justify-start items-start gap-4 w-full">
          {cart.map((item, index) => (
            <div
              key={item.id || index}
              className="w-full p-4 bg-white rounded-sm border border-gray-200 flex justify-between items-center gap-4 relative flex-row-reverse"
            >
              {/* صورة المنتج */}
              <div className="flex items-center gap-4 w-[120px]">
                <img
                  className="w-[95px] h-20 rounded-sm border border-gray-200 object-cover"
                  src={item.image || "https://placehold.co/95x80"}
                  alt={item.title}
                  loading="lazy"
                />
              </div>

              {/* اسم المنتج والتفاصيل */}
              <div className="flex-1 flex flex-col items-end gap-1">
                <div className="text-right text-gray-800 text-base font-medium font-[DIN_Next_LT_Arabic]">
                  {item.title}
                </div>
                <div className="text-right text-gray-500 text-sm font-normal font-[DIN_Next_LT_Arabic]">
                  السعر: {item.price} ر.س
                </div>
              </div>

              {/* التحكم بالكمية */}
              <div className="w-[174px] h-[50px] p-4 bg-white rounded-sm border border-gray-200 flex justify-between items-center gap-6">
                <button
                  onClick={() => dispatch(decrementQuantity(item.id))}
                  disabled={item.quantity <= 1}
                  className="cursor-pointer text-gray-400 text-xl font-bold font-[DIN_Next_LT_Arabic]"
                >
                  -
                </button>

                <div className="flex-1 text-center text-gray-600 text-base font-[DIN_Next_LT_Arabic]">
                  {item.quantity}
                </div>

                <button
                  onClick={() => dispatch(incrementQuantity(item.id))}
                  className="cursor-pointer text-gray-400 text-xl font-bold font-[DIN_Next_LT_Arabic]"
                >
                  +
                </button>
              </div>

              {/* السعر الإجمالي لهذا المنتج */}
              <div className="text-gray-800 text-lg font-medium font-[DIN_Next_LT_Arabic] whitespace-nowrap">
                {item.price * item.quantity} ر.س
              </div>

              {/* زر الحذف */}
              <button
                onClick={() => dispatch(removeItem(item.id))}
                className="bg-gray-50 rounded-full p-1 shadow-md text-red-500 hover:text-red-700"
                aria-label={`حذف ${item.title}`}
                title={`حذف ${item.title}`}
              >
                <AiOutlineClose size={18} />
              </button>
            </div>
          ))}
        </div>
      </div>

      <FooterSection />
    </div>
  );
}
