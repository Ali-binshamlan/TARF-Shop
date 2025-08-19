
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";


const categories = [
  "ملابس",
  "أساور",
  "حقائب",
  "أحذية",
  "إكسسوارات",
  "نظارات شمسية",
  "ساعات يد",
  "ملابس رياضية",
  "كل المنتجات",
];

function CategoryLink({ category, isActive }) {
  return (
    <Link
      href={`/category/${encodeURIComponent(category)}`}
      className={`
        flex justify-end items-center gap-2 text-sm sm:text-base
        font-normal font-['DIN_Next_LT_Arabic'] leading-[22px] sm:leading-[25px]
        transition-colors
        ${isActive ? 'text-yellow-400 font-semibold' : 'text-white hover:text-gray-300'}
      `}
      aria-current={isActive ? 'page' : undefined}
    >
      <div className="text-right">
        {category}
      </div>
    </Link>
  );
}

export default function HeaderCategories() {
  const navigate = useNavigate();

  return (
    <nav
      role="navigation"
      aria-label="تصنيفات المنتجات"
      className="w-full px-4 sm:px-6 lg:px-20 xl:px-32 bg-[#1F2937] flex flex-wrap justify-center lg:justify-between items-center gap-2 sm:gap-4 md:gap-6 py-3"
    >
      {categories.map((category) => {
        const isActive = navigate === `/category/${encodeURIComponent(category)}`;

        return (
          <CategoryLink key={category} category={category} isActive={isActive} />
        );
      })}
    </nav>
  );
}
