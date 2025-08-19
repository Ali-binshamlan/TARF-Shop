import jaket from "../assets/Jaket.jpeg";
import soar from "../assets/soar.jpg";
import shoz from '../assets/shoz.jpg'

const features = [
  {
    bg: "bg-red-100",
    img: jaket,
    title: "أزياء عصرية",
    description:
      "اكتشف تشكيلتنا الأنيقة من الملابس التي تجمع بين الراحة والأناقة وتناسب جميع الأذواق.",
    isLocal: true,
  },
  {
    bg: "bg-yellow-100",
    img: soar,
    title: "إكسسوارات أنيقة",
    description:
      "أضف لمسة فريدة لإطلالتك مع مجموعتنا المختارة من الإكسسوارات الراقية والعصرية.",
    isLocal: true,
  },
  {
    bg: "bg-blue-100",
    img: shoz,
    title: "أحذية مريحة",
    description:
      "احصل على أفضل تصاميم الأحذية التي توفر لك الراحة والأناقة طوال اليوم.",
    isLocal: true,
  },
];

const FeatureCards = () => {
  return (
    <div className="w-full px-4 md:px-16 lg:px-[200px] py-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {features.map((item, index) => (
        <div
          key={index}
          className={`w-full px-6 py-8 ${item.bg} rounded-sm flex flex-col justify-start items-center gap-6`}
        >
          {item.isLocal ? (
            <img
              src={item.img}
              alt={item.title}
              width={278}
              height={264}
              className="rounded object-cover"
                loading="lazy"

            />
          ) : (
            <img
              src={item.img}
              alt={item.title}
                className="w-[278px] h-[264px] rounded object-cover"
                  loading="eager"

            />
          )}
          <div className="w-full flex flex-col items-center gap-4">
            <div className="text-center">
              <h3 className="text-gray-700 text-lg font-bold font-[DIN_Next_LT_Arabic] mb-1">
                {item.title}
              </h3>
              <p className="text-gray-500 text-sm font-normal font-[DIN_Next_LT_Arabic]">
                {item.description}
              </p>
            </div>
            <button className="w-full px-4 py-2 rounded-sm text-gray-700 text-base font-[DIN_Next_LT_Arabic] font-bold hover:text-blue-600 transition">
              تسوق الآن
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FeatureCards;
