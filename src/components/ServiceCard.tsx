import React from "react";

type ServiceCardProps = {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt?: string;
};

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  imageSrc,
  imageAlt,
}) => {
  return (
    <div className="group rounded-card border border-border bg-surface p-8 text-center shadow-card transition duration-300 hover:shadow-hover">
      <div className="mx-auto mb-5 flex h-36 w-36 items-center justify-center rounded-full border border-border bg-white">
        <img
          src={imageSrc}
          alt={imageAlt ?? title}
          className="h-25 w-25 object-contain"
          loading="lazy"
        />
      </div>

      <h3 className="text-lg font-semibold text-heading mb-3 transition-colors group-hover:text-brand">
        {title}
      </h3>

      <p className="text-sm leading-relaxed text-body">{description}</p>
    </div>
  );
};

export default ServiceCard;
