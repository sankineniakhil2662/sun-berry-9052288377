import React from "react";

// UX icons
import AnalysisIcon from "../../../../../assets/services/uiux/Analysis.png";
import InterfaceArchitectureIcon from "../../../../../assets/services/uiux/InterfaceArchitecture.png";
import SketchingWireframesIcon from "../../../../../assets/services/uiux/Sketching&Wireframes.png";
import DynamicPrototypeIcon from "../../../../../assets/services/uiux/DynamicPrototype.png";
import EditingIcon from "../../../../../assets/services/uiux/Editing.png";
import UserTestingFeedbackIcon from "../../../../../assets/services/uiux/UserTesting&Feedback.png";

// UI icons
import DesignReferencesIcon from "../../../../../assets/services/uiux/DesignReferences.png";
import GraphicInterfaceIcon from "../../../../../assets/services/uiux/GraphicInterface.png";
import AnimationPrototypesIcon from "../../../../../assets/services/uiux/AnimationPrototypes.png";
import UIGuidelinesKitIcon from "../../../../../assets/services/uiux/UIGuidelinesandkit.png";
import DesignReviewIcon from "../../../../../assets/services/uiux/DesignReview.png";
import AccessibilityIntegrationIcon from "../../../../../assets/services/uiux/AccessibilityIntegration.png";

// Images (named by position)
import UXDesign1stRight from "../../../../../assets/services/uiux/UXDesign1stRight.png";
import UxDesidn2ndleft from "../../../../../assets/services/uiux/UxDesidn2ndleft.png";
import UIDesign3rdright from "../../../../../assets/services/uiux/UIDesign3rdright.png";
import UIDesign4thleft from "../../../../../assets/services/uiux/UIDesign4thleft.png";

type Variant = "ux" | "ui" | "both";
type Props = { variant?: Variant };

type Item = { icon: string; title: string; desc: string };

const UX_LEFT: Item[] = [
  { icon: AnalysisIcon, title: "Analysis", desc: "Comprehensive exploration of user needs and project goals." },
  { icon: InterfaceArchitectureIcon, title: "Interface Architecture", desc: "Crafting a solid foundation for intuitive user navigation." },
  { icon: SketchingWireframesIcon, title: "Sketching & Wireframes", desc: "Translating concepts into visual representations." },
];

const UX_RIGHT: Item[] = [
  { icon: DynamicPrototypeIcon, title: "Dynamic Prototypes", desc: "Bringing designs to life with interactive prototypes." },
  { icon: EditingIcon, title: "Editing", desc: "Iterative refinement to enhance usability and functionality." },
  { icon: UserTestingFeedbackIcon, title: "User Testing & Feedback", desc: "Gathering insights from user testing and integrating feedback for continuous improvement." },
];

const UI_LEFT: Item[] = [
  { icon: DesignReferencesIcon, title: "Design References", desc: "Drawing inspiration from various sources to inform design direction." },
  { icon: GraphicInterfaceIcon, title: "Graphic Interface", desc: "Visual design elements. Custom icons and illustrations." },
  { icon: AnimationPrototypesIcon, title: "Animation Prototypes", desc: "Adding motion and interactivity to enhance user engagement." },
];

const UI_RIGHT: Item[] = [
  { icon: UIGuidelinesKitIcon, title: "UI Guidelines and Kit", desc: "Establishing standards to maintain consistency across interfaces." },
  { icon: DesignReviewIcon, title: "Design Review", desc: "Collaborative review sessions to ensure alignment with project objectives." },
  { icon: AccessibilityIntegrationIcon, title: "Accessibility Integration", desc: "Implementing accessibility features to ensure inclusivity and compliance with industry standards." },
];

const StepRow = ({ item }: { item: Item }) => {
  return (
    <div className="flex items-start gap-6">
      <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-[rgb(var(--color-brand))] shadow-[0_18px_40px_rgba(0,0,0,0.28)] ring-1 ring-white/10">
        <img src={item.icon} alt={item.title} className="h-8 w-8 object-contain" draggable={false} loading="lazy" />
      </div>

      <div className="min-w-0">
        <p className="text-xl font-semibold leading-tight text-white">{item.title}</p>
        <p className="mt-1 text-base leading-relaxed text-white/80">{item.desc}</p>
      </div>
    </div>
  );
};

const CurvedUnderline = () => {
  return (
    <svg
      className="mt-3 block"
      width="420"
      height="18"
      viewBox="0 0 420 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4 10C110 2 220 2 416 10"
        stroke={`rgb(var(--color-accent-cyan))`}
        strokeWidth="4"
        strokeLinecap="round"
        opacity="0.75"
      />
    </svg>
  );
};

const UIUXProcessBlock = ({ variant = "both" }: Props) => {
  const showUX = variant === "ux" || variant === "both";
  const showUI = variant === "ui" || variant === "both";

  return (
    <section className="relative overflow-hidden bg-[#062a64]">
      {/* soft glows */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-52 -top-52 h-155 w-155 rounded-full bg-[rgb(var(--color-accent-cyan)/0.10)] blur-3xl" />
        <div className="absolute right-10 -top-60 h-155 w-155 rounded-full bg-[rgb(var(--color-accent-purple)/0.10)] blur-3xl" />
      </div>

      
      <div className="relative mx-auto max-w-295 px-6 py-18 lg:px-10">
        {/* Top block */}
        <div className="max-w-245">
          <h2 className="text-4xl font-semibold tracking-[-0.02em] text-white sm:text-3xl">
            Our Approach When it Comes to UI/UX Solutions
          </h2>
          <p className="mt-5 text-md leading-relaxed text-white">
            Our UX and UI design services company is committed to delivering nothing short of perfection. Our seasoned designers adhere meticulously to
            established standards, workflows, and guidelines, ensuring each deliverable aligns seamlessly with your requirements and timeline. Equipped
            with a diverse suite of tools, cutting-edge technologies, and deep domain expertise, we bring innovation to the forefront, blending quality,
            precision, and efficiency into every project.
          </p>
        </div>

        {/* ===================== UX ===================== */}
        {showUX && (
          <div className="mt-16">
            <h3 className="text-4xl font-bold tracking-[-0.02em] text-white sm:text-5xl">
              UX Design Process
            </h3>
            <CurvedUnderline />

            {/* ✅ KEY FIX: smaller right column + centered visuals */}
            <div className="mt-14 grid items-center gap-14 lg:grid-cols-[1fr_420px]">
              <div className="space-y-12">
                {UX_LEFT.map((it) => (
                  <StepRow key={it.title} item={it} />
                ))}
              </div>

              <div className="flex justify-center lg:justify-end">
                <img
                  src={UXDesign1stRight}
                  alt="UX design illustration"
                  className="w-full max-w-105 object-contain drop-shadow-[0_28px_70px_rgba(0,0,0,0.35)]"
                  draggable={false}
                  loading="lazy"
                />
              </div>
            </div>

            <div className="mt-16 grid items-center gap-14 lg:grid-cols-[420px_1fr]">
              <div className="flex justify-center lg:justify-start">
                <img
                  src={UxDesidn2ndleft}
                  alt="UX supporting illustration"
                  className="w-full max-w-105 object-contain drop-shadow-[0_28px_70px_rgba(0,0,0,0.35)]"
                  draggable={false}
                  loading="lazy"
                />
              </div>

              <div className="space-y-12">
                {UX_RIGHT.map((it) => (
                  <StepRow key={it.title} item={it} />
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ===================== UI ===================== */}
        {showUI && (
          <div className="mt-20">
            <h3 className="text-4xl font-bold tracking-[-0.02em] text-white sm:text-5xl">
              UI Design Process
            </h3>
            <CurvedUnderline />

            <div className="mt-14 grid items-center gap-14 lg:grid-cols-[1fr_420px]">
              <div className="space-y-12">
                {UI_LEFT.map((it) => (
                  <StepRow key={it.title} item={it} />
                ))}
              </div>

              <div className="flex justify-center lg:justify-end">
                <img
                  src={UIDesign3rdright}
                  alt="UI design illustration"
                  className="w-full max-w-105 object-contain drop-shadow-[0_28px_70px_rgba(0,0,0,0.35)]"
                  draggable={false}
                  loading="lazy"
                />
              </div>
            </div>

            <div className="mt-16 grid items-center gap-14 lg:grid-cols-[420px_1fr]">
              <div className="flex justify-center lg:justify-start">
                <img
                  src={UIDesign4thleft}
                  alt="UI supporting illustration"
                  className="w-full max-w-105 object-contain drop-shadow-[0_28px_70px_rgba(0,0,0,0.35)]"
                  draggable={false}
                  loading="lazy"
                />
              </div>

              <div className="space-y-12">
                {UI_RIGHT.map((it) => (
                  <StepRow key={it.title} item={it} />
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default UIUXProcessBlock;
