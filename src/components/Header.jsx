import { FiMail, FiPhone, FiSearch, FiShoppingCart, FiUser , FiLogOut } from "react-icons/fi";
import HeaderCategories from "./HeaderCategories";
import Logo from "./Logo";
import { useAuth } from "../context/AuthContext"; // استيراد هوك useAuth
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";


export default function Header() {
  const { user, logout } = useAuth();  // جلب بيانات المستخدم من السياق
const totalQuantity = useSelector((state) =>
  state.cart.items.reduce((sum, item) => sum + item.quantity, 0)
);
  const totalPrice = useSelector((state) =>
    state.cart.items.reduce((sum, item) => sum + item.price * item.quantity, 0)
  );
  
  return (
    <div dir="rtl" className="w-full flex flex-col items-start font-sans">
      {/* الشريط العلوي */}
      <div className="w-full bg-gray-100 text-sm">
        <div className="max-w-screen-xl mx-auto px-4 py-2 flex flex-col md:flex-row justify-between items-start md:items-center gap-2">
          {/* الروابط */}
          <div className="flex flex-wrap items-center gap-2 text-gray-400">
            <Link to="/contact" className="hover:text-gray-600">تواصل معنا</Link>
            <span className="hidden md:inline w-2.5 h-px bg-gray-200 rotate-90" />
            <Link to="/returns-policy" className="hover:text-gray-600">سياسة الإستبدال أو الاسترجاع</Link>
            <span className="hidden md:inline w-2.5 h-px bg-gray-200 rotate-90" />
            <Link to="/favorites" className="hover:text-gray-600">المفضلة</Link>
            <span className="hidden md:inline w-2.5 h-px bg-gray-200 rotate-90" />
            <span>العربية - رس</span>
          </div>

          {/* الاتصال */}
          <div className="flex items-center gap-4 text-sm text-gray-400">
            <a href="mailto:Support@salla.sa" className="hidden md:flex items-center gap-2 hover:text-gray-600">
              <span>TARF-shoping@gmail.com</span>
              <FiMail className="text-blue-600 w-4 h-4" />
            </a>
            <a href="tel:+966556754472" className="hidden md:flex items-center gap-2 hover:text-gray-600">
              <span>+96777777777</span>
              <FiPhone className="text-blue-600 w-4 h-4" />
            </a>
          </div>
        </div>
      </div>

      {/* الشريط السفلي */}
      <div className="w-full bg-white border-b">
        <div className="max-w-screen-xl mx-auto px-4 py-6 flex flex-col lg:flex-row items-center">
          <div>
            <Logo />
          </div>

          {/* حقل البحث */}
          <div className="w-full lg:w-1/2 ml-8">
            <div className="flex items-center bg-white border border-gray-200 rounded-sm px-4 py-2">
              <FiSearch className="w-4 h-4 text-gray-400 ml-2" />
              <input
                type="text"
                className="flex-1 text-right text-sm text-gray-400 outline-none"
                placeholder="ابحث عما تريد"
              />
            </div>
          </div>

          {/* حساب وسلة */}
          <div className="flex gap-6">
            {/* سلة المشتريات */}
            <Link to="/cart" className="flex items-center gap-2 cursor-pointer">
            <div className="flex flex-col items-end text-right">
              <span className="text-sm text-gray-400">سلة المشتريات</span>
              <span className="text-base text-gray-600">
                {totalPrice.toFixed(2)} رس
              </span>
            </div>
            <div className="relative p-2 bg-gray-100 rounded-full">
              <FiShoppingCart className="w-6 h-6 text-gray-600" />
              <div className="absolute -top-1 -left-1 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
                {totalQuantity}
              </div>
            </div>
          </Link>


            {/* حالة تسجيل الدخول */}
            {user ? (
              <div className="flex items-end text-right cursor-pointer space-y-1">
                <div>
                  <span className="text-sm text-gray-400">مرحبا بك</span>
                  <div className="flex items-center gap-1">
                    <FiUser className="text-sm text-gray-600" />
                    <span className="text-base text-gray-600">{user.name}</span>
                  </div>
                </div>

                {/* الأيقونة خارج div الاسم */}
                <button
                  onClick={logout}
                  className="p-1.5 mr-2 bg-gray-100 rounded-full mt-1 flex items-center gap-1 text-gray-600 hover:text-red-600"
                  aria-label="تسجيل خروج"
                >
                  <FiLogOut className="w-6 h-6" />
                </button>
              </div>
              ) : (
                <Link to="/login" className="flex items-center text-right cursor-pointer gap-2">
                  <span className="text-sm text-gray-400">تسجيل دخول</span>
                  <div className="p-2 bg-gray-100 rounded-full mt-1">
                    <FiUser className="w-6 h-6 text-gray-600" />
                  </div>
                </Link>
              )}

          </div>
        </div>
      </div>

      {/* تصنيفات الهيدر */}
      <HeaderCategories />
    </div>
  );
}
