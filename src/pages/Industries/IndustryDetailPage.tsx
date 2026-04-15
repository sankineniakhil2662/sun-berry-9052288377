// const IndustryDetailPage = () => {
//   return (
//     <section className="bg-surface py-24">
//       <div className="mx-auto max-w-[1400px] px-4 text-center sm:px-6 lg:px-8">
//         <h1 className="text-3xl font-semibold text-heading sm:text-4xl">Industry Details</h1>
//         <p className="mt-3 text-base text-body">
//           Industry-specific solutions and case studies will appear here soon.
//         </p>
//       </div>
//     </section>
//   );
// };

// export default IndustryDetailPage;
import { useParams } from "react-router-dom";
import AgricultureFarming from "./industry-pages/AgricultureFarming/AgricultureFarming";
// import AgricultureFarming from "./industry-pages/AgricultureFarming";

const IndustryDetailPage = () => {
  const { slug } = useParams();

  switch (slug) {
    case "agriculture-farming":
      return <AgricultureFarming />;

    default:
      return (
        <section className="py-24 text-center">
          <h1 className="text-3xl font-semibold">Industry Not Found</h1>
        </section>
      );
  }
};

export default IndustryDetailPage;
