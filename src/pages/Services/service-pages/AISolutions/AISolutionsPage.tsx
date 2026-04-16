import AISolutionsIntro from "./sections/AISolutionsIntro";
import AISolutionsAbout from "./sections/AISolutionsAbout";
import AISolutionsWhatWeDo from "./sections/AISolutionsWhatWeDo";
import AISolutionsProcess from "./sections/AISolutionsProcess";
import AISolutionsWhyChoose from "./sections/AISolutionsWhyChoose";
import AISolutionsCurriculum from "./sections/AISolutionsCurriculum";
import AISolutionsTools from "./sections/AISolutionsTools";
import AISolutionsCareers from "./sections/AISolutionsCareers";
import AISolutionsCta from "./sections/AISolutionsCta";

import {
  AI_SOLUTIONS_HERO,
  AI_SOLUTIONS_ABOUT,
  AI_SOLUTIONS_SERVICES,
  AI_SOLUTIONS_PROCESS,
  AI_SOLUTIONS_WHY,
  AI_SOLUTIONS_CURRICULUM,
  AI_SOLUTIONS_TOOLS,
  AI_SOLUTIONS_CAREERS,
  AI_SOLUTIONS_CTA,
} from "./ai-solutions.data";

export default function AISolutionsPage() {
  return (
    <main className="bg-bg">
      <AISolutionsIntro data={AI_SOLUTIONS_HERO} />
      <AISolutionsAbout data={AI_SOLUTIONS_ABOUT} />
      <AISolutionsWhatWeDo data={AI_SOLUTIONS_SERVICES} />
      <AISolutionsProcess data={AI_SOLUTIONS_PROCESS} />
      <AISolutionsWhyChoose data={AI_SOLUTIONS_WHY} />
      <AISolutionsCurriculum data={AI_SOLUTIONS_CURRICULUM} />
      <AISolutionsTools data={AI_SOLUTIONS_TOOLS} />
      <AISolutionsCareers data={AI_SOLUTIONS_CAREERS} />
      <AISolutionsCta data={AI_SOLUTIONS_CTA} />
    </main>
  );
}
