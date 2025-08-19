import { FaLock, FaTruck, FaCheckCircle } from 'react-icons/fa';

const FeaturesSection = () => {
  return (
    <div dir="rtl" className="w-full px-4 md:px-20 py-14 flex flex-col items-center gap-6">
      <div className="w-full max-w-6xl bg-white rounded-md border border-gray-200 flex flex-col md:flex-row items-stretch text-right">
        {/* ميزة: مدفوعات آمنة */}
        <div className="flex-1 p-6 flex items-center gap-4 border-b md:border-b-0 md:border-l border-gray-200">
          <FaLock className="text-[#ec6531] text-3xl" />
          <div>
            <h3 className="text-xl font-semibold text-gray-700">مدفوعات آمنة</h3>
            <p className="text-gray-500 text-sm">مدفوعات آمنة أقساط تصل إلى 12 شهرًا</p>
          </div>
        </div>

        {/* ميزة: شحن مجاني */}
        <div className="flex-1 p-6 flex items-center gap-4 border-b md:border-b-0 md:border-l border-gray-200">
          <FaTruck className="text-[#ec6531] text-3xl" />
          <div>
            <h3 className="text-xl font-semibold text-gray-700">شحن مجاني</h3>
            <p className="text-gray-500 text-sm">لكل الطلبات التي تتجاوز 200 ريال</p>
          </div>
        </div>

        {/* ميزة: منتجات مضمونة */}
        <div className="flex-1 p-6 flex items-center gap-4">
          <FaCheckCircle className="text-[#ec6531] text-3xl" />
          <div>
            <h3 className="text-xl font-semibold text-gray-700">منتجات مضمونة</h3>
            <p className="text-gray-500 text-sm">جودة عالية وضمان استرجاع</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;
