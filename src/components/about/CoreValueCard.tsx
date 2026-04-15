import React from "react";

interface CoreValueCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  bgColor: string;
}

const CoreValueCard: React.FC<CoreValueCardProps> = ({
  icon,
  title,
  description,
  bgColor,
}) => {
  return (
    <div className="bg-white border border-gray-200 rounded-xl px-6 py-8 text-center shadow-sm">
      <div
        className={`w-12 h-12 mx-auto mb-5 flex items-center justify-center rounded-full ${bgColor}`}
      >
        {icon}
      </div>

      <h3 className="text-lg font-semibold text-gray-900 mb-3">
        {title}
      </h3>

      <p className="text-sm text-gray-600 leading-relaxed">
        {description}
      </p>
    </div>
  );
};

export default CoreValueCard;