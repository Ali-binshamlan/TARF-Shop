import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import Logo2 from "../components/Logo2";

export default function SignUp() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    if (data.password1 !== data.password2) {
      alert("كلمتا المرور غير متطابقتين");
      return;
    }

    console.log("بيانات التسجيل:", data);
    alert("تم التسجيل بنجاح (وهميًا)");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-300 font-sans">
      <div dir="rtl" className="w-[70%] h-[553px] flex flex-col md:flex-row shadow-lg rounded-lg overflow-hidden bg-white">
        
        {/* الشعار */}
        <div className="md:w-[40%] w-full h-[200px] md:h-full bg-gradient-to-b from-[#282f63]/30 to-[#ec6531]/60 flex items-center justify-center p-6 text-white">
          <Logo2 className="w-full h-full object-contain" />
        </div>

        {/* الفورم */}
        <div className="md:w-[60%] w-full p-6 md:p-12 flex flex-col justify-center items-center text-right">
          <div className="flex flex-col gap-4 bg-white rounded-lg w-full max-w-md">
            <div className="space-y-2 text-center">
              <h2 className="text-3xl font-bold text-[#0f1728]">إنشاء حساب جديد</h2>
              <p className="text-[#667084] text-base font-medium">يرجى تعبئة البيانات التالية</p>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 w-full">
              <input
                type="text"
                {...register("username", { required: "الاسم مطلوب" })}
                placeholder="الاسم الكامل"
                className="w-full h-10 bg-[#f2f3f6] text-black rounded-lg px-3 text-sm placeholder-gray-500"
              />
              {errors.username && <p className="text-red-500 text-sm">{errors.username.message}</p>}

              <input
                type="email"
                {...register("email", {
                  required: "البريد الإلكتروني مطلوب",
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: "صيغة البريد غير صحيحة",
                  },
                })}
                placeholder="البريد الإلكتروني"
                className="w-full h-10 bg-[#f2f3f6] text-black rounded-lg px-3 text-sm placeholder-gray-500"
              />
              {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}

              <input
                type="password"
                {...register("password1", {
                  required: "كلمة المرور مطلوبة",
                  minLength: { value: 6, message: "يجب أن تكون 6 أحرف على الأقل" },
                })}
                placeholder="كلمة المرور"
                className="w-full h-10 bg-[#f2f3f6] text-black rounded-lg px-3 text-sm placeholder-gray-500"
              />
              {errors.password1 && <p className="text-red-500 text-sm">{errors.password1.message}</p>}

              <input
                type="password"
                {...register("password2", { required: "تأكيد كلمة المرور مطلوب" })}
                placeholder="تأكيد كلمة المرور"
                className="w-full h-10 bg-[#f2f3f6] text-black rounded-lg px-3 text-sm placeholder-gray-500"
              />
              {errors.password2 && <p className="text-red-500 text-sm">{errors.password2.message}</p>}

              <button
                type="submit"
                className="w-full py-3 bg-[#ec6531] rounded-lg shadow text-white text-base font-medium cursor-pointer hover:bg-[#d95b2a] transition duration-200"
              >
                إنشاء الحساب
              </button>
            </form>

            <div className="pt-4 border-t border-[#cfd4dc] flex flex-col md:flex-row justify-between items-center text-center gap-2">
              <span className="text-[#475466] text-sm font-medium">لديك حساب بالفعل؟</span>
              <Link to="/login">
                <span className="text-[#2e90fa] text-sm font-semibold cursor-pointer">تسجيل الدخول</span>
              </Link>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
}
