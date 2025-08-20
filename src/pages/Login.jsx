import { useLocation, useNavigate, Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useState } from "react";
import { toast } from "sonner";
import Logo2 from "../components/Logo2";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/"; 

  const handleLogin = (e) => {
    e.preventDefault();

    if (email === "user@example.com" && password === "123456") {
      login("fake-jwt-token", { name: "علي بن خالد ", email });
      toast.success("تم تسجيل الدخول بنجاح");
      navigate(from, { replace: true }); 
    } else {
      toast.error("بيانات الدخول غير صحيحة");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-300 font-sans">
      <div dir="rtl" className="flex flex-col md:flex-row shadow-lg rounded-lg overflow-hidden bg-white w-full max-w-5xl">

        {/* الشعار */}
        <div className="md:flex-[1] w-full bg-gradient-to-b from-[#282f63]/30 to-[#ec6531]/60 flex items-center justify-center p-6 text-white">
          <Link to="/">
          <Logo2 className="w-3/4 h-3/4 object-contain" />
          </Link>
        </div>

        {/* الفورم */}
        <div className="flex-1 p-6 md:p-12 flex flex-col justify-center items-center text-right">
          <div className="flex flex-col gap-4 bg-white rounded-lg w-full max-w-md">
            <div className="space-y-2 text-center">
              <h2 className="text-3xl font-bold text-[#0f1728]">تسجيل الدخول</h2>
              <p className="text-[#667084] text-base font-medium">يرجى إدخال بياناتك</p>
            </div>

            <form onSubmit={handleLogin} className="space-y-4 w-full">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="البريد الإلكتروني"
                className="w-full h-10 bg-[#f2f3f6] text-black rounded-lg px-3 text-sm placeholder-gray-500"
                required
              />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="كلمة المرور"
                className="w-full h-10 bg-[#f2f3f6] text-black rounded-lg px-3 text-sm placeholder-gray-500"
                required
              />

              <button
                type="submit"
                className="w-full py-3 bg-[#ec6531] rounded-lg shadow text-white text-base font-medium cursor-pointer hover:bg-[#d95b2a] transition duration-200"
              >
                تسجيل الدخول
              </button>
            </form>

            <div className="pt-4 border-t border-[#cfd4dc] flex flex-col md:flex-row justify-between items-center text-center gap-2">
              <span className="text-[#475466] text-sm font-medium">ليس لديك حساب؟</span>
              <Link to="/signup">
                <span className="text-[#2e90fa] text-sm font-semibold cursor-pointer">إنشاء حساب جديد</span>
              </Link>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
