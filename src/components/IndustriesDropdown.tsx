// import { Link } from "react-router-dom";
// import { industries } from "../data/industries";

// const IndustriesDropdown = () => {
//   return (
//     <div className="relative group">
//       {/* Trigger */}
//       <button className="flex items-center gap-1 text-sm font-medium text-heading hover:text-brand">
//         Industries
//         <svg
//           className="h-4 w-4"
//           viewBox="0 0 20 20"
//           fill="currentColor"
//         >
//           <path
//             fillRule="evenodd"
//             d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.27a.75.75 0 01.02-1.06z"
//             clipRule="evenodd"
//           />
//         </svg>
//       </button>

//       {/* Mega menu */}
//       <div className="absolute left-1/2 top-full z-[9999] hidden w-[900px] -translate-x-1/2 rounded-xl bg-white shadow-2xl ring-1 ring-black/5 group-hover:block">
//         <div className="grid grid-cols-3 gap-x-8 gap-y-3 p-8">
//           {industries.map((industry) => (
//             <Link
//               key={industry.id}
//               to={`/industries?name=${encodeURIComponent(industry.title)}`}
//               className="text-sm text-gray-700 hover:text-brand"
//             >
//               {industry.title}
//             </Link>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default IndustriesDropdown;

import { Link } from "react-router-dom";
import { industries } from "../data/industries";

const IndustriesDropdown = () => {
  return (
    <div className="relative group">
      <button className="flex items-center gap-1 text-sm font-medium text-heading">
        Industries
      </button>

      <div className="absolute left-1/2 top-full z-[9999] hidden w-[900px]
        -translate-x-1/2 rounded-xl bg-white shadow-2xl group-hover:block">

        <div className="grid grid-cols-3 gap-6 p-8">
          {industries.map((industry) => (
            <Link
              key={industry.id}
              to={`/industries/${industry.slug}`}
              className="text-sm text-gray-700 hover:text-brand"
            >
              {industry.title}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default IndustriesDropdown;
