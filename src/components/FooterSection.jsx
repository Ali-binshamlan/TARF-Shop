import { FaApple, FaGooglePlay, FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom";
const FooterSection = () => {
  return (
    <div dir="ltr" className="pt-14 flex flex-col">
      {/* القسم الأول */}
      <div className="w-full max-w-[1600px] px-6 md:px-20 py-6 bg-gray-50 rounded flex flex-col md:flex-row gap-6 items-center justify-between">
        <div className="flex flex-col items-center md:items-end gap-4">
          <div className="text-center md:text-right text-gray-600 text-base font-medium font-['DIN_Next_LT_Arabic']">
            تطبيقات الجوال
          </div>
          <div className="h-auto flex flex-col sm:flex-row gap-2">
            {/* أيقونات تطبيقات الجوال */}
            <button className="w-[160px] h-[42px] bg-black text-white flex items-center justify-center gap-2 rounded">
              <FaApple size={20} />
              <span className="text-sm">App Store</span>
            </button>
            <Link href="https://play.google.com/store/apps/details?id=com.app.store_app&hl=ar" target="_blank" rel="noopener noreferrer">
              <button className="w-[160px] h-[42px] bg-green-600 text-white flex items-center justify-center gap-2 rounded cursor-pointer">
                <FaGooglePlay size={20} />
                <span className="text-sm">Google Play</span>
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* القسم الثاني */}
      <div className="w-full max-w-[1600px] px-6 md:px-20 py-12 bg-white flex flex-col-reverse lg:flex-row justify-center items-start gap-20 flex-wrap">
  {/* تابعنا على */}
  <div className="w-full sm:w-auto flex flex-col items-center lg:items-end gap-4 text-center lg:text-right">
    <div className="text-gray-600 text-lg font-medium font-['DIN_Next_LT_Arabic']">
      تابعنا على
    </div>
    <div className="flex justify-center lg:justify-end items-center gap-2">
      <div className="w-[34px] h-[34px] rounded-full border border-primary flex items-center justify-center text-gray-600 hover:text-blue-600 transition">
        <FaFacebookF size={16} />
      </div>
      <div className="w-[34px] h-[34px] rounded-full border border-primary flex items-center justify-center text-gray-600 hover:text-sky-500 transition">
        <FaTwitter size={16} />
      </div>
      <div className="w-[34px] h-[34px] rounded-full border border-primary flex items-center justify-center text-primary hover:text-pink-500 transition">
        <FaInstagram size={16} />
      </div>
      <div className="w-[34px] h-[34px] rounded-full border border-primary flex items-center justify-center text-gray-600 hover:text-blue-700 transition">
        <FaLinkedinIn size={16} />
      </div>
    </div>
  </div>

  {/* روابط مهمة */}
  <div className="w-full sm:w-auto flex flex-col items-center lg:items-end gap-4 text-center lg:text-right">
    <div className="text-gray-600 text-lg font-medium font-['DIN_Next_LT_Arabic']">
      روابط مهمة
    </div>
    <div className="flex flex-col gap-2 text-gray-400 text-base font-normal font-['DIN_Next_LT_Arabic']">
      <div className="cursor-pointer">من نحن</div>
      <div className="cursor-pointer">اتصل بنا</div>
      <div className="cursor-pointer">سياسة الخصوصية</div>
      <div className="cursor-pointer">الاسئلة الشائعة</div>
    </div>
  </div>

  {/* اشترك معنا */}
  <div className="w-full sm:w-auto flex flex-col items-center lg:items-end gap-4 text-center lg:text-right">
    <div className="text-gray-600 text-lg font-medium font-['DIN_Next_LT_Arabic']">
      اشترك معنا
    </div>
    <div className="flex flex-col gap-2 text-gray-400 text-base font-normal font-['DIN_Next_LT_Arabic']">
      <div className="cursor-pointer">المدونة</div>
      <div className="cursor-pointer">انضم إلى الفريق</div>
      <div className="cursor-pointer">الأخبار</div>
      <div className="cursor-pointer">المزايا</div>
    </div>
  </div>

  {/* روابط سريعة */}
  <div className="w-full sm:w-auto flex flex-col items-center lg:items-end gap-4 text-center lg:text-right">
    <div className="text-gray-600 text-lg font-medium font-['DIN_Next_LT_Arabic']">
      روابط سريعة
    </div>
    <div className="flex flex-col gap-2 text-gray-400 text-base font-normal font-['DIN_Next_LT_Arabic']">
      <div className="cursor-pointer">متجر ترف</div>
      <div className="cursor-pointer">مركز الدعم</div>
    </div>
  </div>

  {/* عن ترف */}
  <div className="w-full sm:w-auto flex flex-col items-center lg:items-end gap-4 text-center lg:text-right">
    <div className="text-gray-600 text-lg font-medium font-['DIN_Next_LT_Arabic']">
      عن ترف
    </div>
    <div className="text-gray-400 text-base font-normal font-['DIN_Next_LT_Arabic'] leading-[25px] max-w-[350px]">
      تــرف | TARF هو متجر إلكتروني متميز يقدم مجموعة واسعة من مستلزمات الجوال، الشنط النسائية، والإكسسوارات بأعلى جودة وأحدث التصاميم. سواء كنت تبحث عن أدوات لجهازك الجوال، حقيبة عصرية، أو لمسة من الأناقة مع الإكسسوارات، ستجد كل ما تحتاجه في تطبيق "تــرف | TARF". استمتع بتجربة تسوق سلسة وآمنة مع خيارات دفع متنوعة وتوصيل سريع.
    </div>
  </div>
</div>

    </div>
  );
};

export default FooterSection;
