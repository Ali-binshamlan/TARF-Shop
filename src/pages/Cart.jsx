import { useSelector, useDispatch } from "react-redux";
import { incrementQuantity, decrementQuantity, removeItem } from "../slices/cartSlice";
import { AiOutlineClose } from "react-icons/ai";
import Header from "../components/Header";
import FooterSection from "../components/FooterSection";
import { useState } from "react";

export default function CartPage() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.items);

  const [openModal, setOpenModal] = useState(false);

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

      <div className="flex flex-col md:flex-row gap-6 p-4 md:px-10 lg:px-20">
        {/* ملخص الطلب */}
        <div
          dir="rtl"
          className="w-full md:w-[280px] p-4 bg-white rounded border border-gray-200 flex flex-col items-end gap-4"
        >
          <h2 className="text-right w-full font-bold text-lg mb-4 font-[DIN_Next_LT_Arabic]">
            ملخص الطلب
          </h2>

          <div className="w-full flex justify-between text-gray-600 font-[DIN_Next_LT_Arabic] mb-2">
            <span>عدد العناصر:</span>
            <span>{totalItems}</span>
          </div>

          <div className="w-full flex justify-between text-gray-600 font-[DIN_Next_LT_Arabic] mb-4">
            <span>السعر الإجمالي:</span>
            <span>{(totalPrice).toFixed(2)} ر.س</span>
          </div>

          <button
            className="w-full bg-blue-600 text-white py-2 rounded-sm font-[DIN_Next_LT_Arabic] hover:bg-blue-700 transition"
            onClick={() => setOpenModal(true)}
          >
            إتمام الطلب
          </button>
        </div>

        {/* قائمة المنتجات */}
        <div dir="rtl" className="flex-1 flex flex-col gap-4 w-full">
  {cart.map((item, index) => (
    <div
      key={item.id || index}
      className="w-full p-4 bg-white rounded-2xl border border-gray-200 shadow-sm flex flex-col md:flex-row md:items-center gap-4 relative transition hover:shadow-md"
    >
      {/* صورة المنتج */}
      <div className="flex-shrink-0">
        <img
          className="w-16 h-16 md:w-[95px] md:h-20 rounded-xl border border-gray-200 object-cover shadow-sm"
          src={item.image || "https://placehold.co/95x80"}
          alt={item.title}
          loading="lazy"
        />
      </div>

      {/* اسم المنتج والتفاصيل */}
      <div className="flex-1 flex flex-col items-end gap-1 text-right">
        <div className="text-gray-800 text-base font-medium font-[DIN_Next_LT_Arabic] leading-snug">
          {item.title}
        </div>
        <div className="text-gray-500 text-sm font-[DIN_Next_LT_Arabic]">
          السعر: {(item.price).toFixed(2)} ر.س
        </div>
      </div>

      {/* التحكم بالكمية */}
      <div className="flex justify-between items-center gap-4 border rounded-lg px-3 py-1.5 w-full md:w-auto bg-gray-50">
        <button
          onClick={() => dispatch(decrementQuantity(item.id))}
          disabled={item.quantity <= 1}
          className="cursor-pointer text-gray-400 text-lg font-bold font-[DIN_Next_LT_Arabic] hover:text-red-500 disabled:opacity-50"
        >
          -
        </button>

        <div className="text-gray-700 text-base font-[DIN_Next_LT_Arabic] font-semibold">
          {item.quantity}
        </div>

        <button
          onClick={() => dispatch(incrementQuantity(item.id))}
          className="cursor-pointer text-gray-400 text-lg font-bold font-[DIN_Next_LT_Arabic] hover:text-green-500"
        >
          +
        </button>
      </div>

      {/* السعر الإجمالي للمنتج */}
      <div className="text-gray-900 text-lg font-semibold font-[DIN_Next_LT_Arabic] whitespace-nowrap">
        {(item.price * item.quantity ).toFixed(2)} ر.س
      </div>

      {/* زر الحذف */}
      <button
        onClick={() => dispatch(removeItem(item.id))}
        className="bg-white border border-gray-200 rounded-full p-2 shadow-sm text-red-500 hover:bg-red-50 hover:text-red-600 transition self-end md:self-auto"
        aria-label={`حذف ${item.title}`}
      >
        <AiOutlineClose size={18} />
      </button>
    </div>
  ))}
</div>

      </div>

      {/* مودال الدفع */}
      {openModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-6">
            <h2 className="text-xl font-bold mb-4 text-right font-[DIN_Next_LT_Arabic]">
              اختر طريقة الدفع
            </h2>

            {/* الدفع بالبطاقة */}
            <div className="flex flex-col gap-3 text-right">
              <span className="font-medium font-[DIN_Next_LT_Arabic]">الدفع عبر البطاقة</span>
              <input
                type="text"
                placeholder="رقم البطاقة"
                className="w-full p-2 border rounded"
              />
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="MM/YY"
                  className="flex-1 p-2 border rounded"
                />
                <input
                  type="text"
                  placeholder="CVV"
                  className="flex-1 p-2 border rounded"
                />
              </div>
              <button
                className="w-full py-2 bg-green-600 text-white rounded hover:bg-green-700 transition"
                onClick={() => {
                  alert("تم الدفع بنجاح!");
                  setOpenModal(false);
                }}
              >
                دفع البطاقة
              </button>

              <span className="font-medium mt-4 font-[DIN_Next_LT_Arabic]">أو الدفع عند الاستلام</span>
              <button
                className="w-full py-2 bg-gray-600 text-white rounded hover:bg-gray-700 transition"
                onClick={() => {
                  alert("تم اختيار الدفع عند الاستلام");
                  setOpenModal(false);
                }}
              >
                الدفع عند الاستلام
              </button>

              <button
                className="w-full py-2 text-gray-600 rounded hover:bg-gray-200 transition mt-2"
                onClick={() => setOpenModal(false)}
              >
                إلغاء
              </button>
            </div>
          </div>
        </div>
      )}

      <FooterSection />
    </div>
  );
}
