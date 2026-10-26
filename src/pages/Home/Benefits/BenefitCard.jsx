// import React from "react";

// const BenefitCard = ({ benefit }) => {
//   const { title, description, image } = benefit || {};
//   return (
//     <div className="card lg:card-side bg-base-100 border shadow-sm">
//       <figure>
//         <img className="lg:p-6"
//           src={image}
//           alt="Album"
//         />
//       </figure>
//       <div className="md:px-6 lg:py-4 divider lg:divider-horizontal hidden sm:flex "></div>
//       <div className="card-body">
//         <h2 className="card-title text-2xl">{title}</h2>
//         <p>{description}</p>
//       </div>
//     </div>
//   );
// };

// export default BenefitCard;

import React from "react";
import {  CheckCircle2 } from "lucide-react";

const BenefitCard = ({ benefit }) => {
  const { title, description, image } = benefit || {};

  return (
    <div className="aura aura-dual">
    <article
      className="group relative flex flex-col overflow-hidden rounded-2xl
      border border-base-300/70 bg-base-100 shadow-sm
      transition-all duration-500 ease-out
      hover:-translate-y-2 hover:border-primary/40
      hover:shadow-xl hover:shadow-primary/10
      sm:flex-row "
    >
      {" "}
      <div
        className="absolute left-0 top-0 h-1 w-0 bg-primary
        transition-all duration-500 group-hover:w-full"
      />
      <div
        className="relative flex shrink-0 items-center justify-center
        overflow-hidden bg-base-200/50 p-6 sm:w-2/5 lg:w-1/3"
      >
        <div
          className="absolute h-32 w-32 rounded-full bg-primary/10
          blur-2xl transition-transform duration-700
          group-hover:scale-150"
        />

        {image ? (
          <img
            src={image}
            alt={title || "Benefit"}
            loading="lazy"
            className="relative z-10 h-32 w-full object-contain
              transition-transform duration-500 ease-out
              group-hover:scale-110 sm:h-36 lg:h-40"
          />
        ) : (
          <div
            className="relative z-10 flex h-32 items-center
            justify-center text-primary"
          >
            <CheckCircle2 size={56} strokeWidth={1.5} />
          </div>
        )}
      </div>
      <div className="flex flex-1 flex-col justify-center p-6 sm:p-7">
        <h2
          className="text-xl font-extrabold leading-snug
          text-base-content transition-colors duration-300
          group-hover:text-primary sm:text-2xl"
        >
          {title}
        </h2>

        <p className="mt-3 text-sm leading-7 text-base-content/70 sm:text-base">
          {description}
        </p>
      </div>
    </article>
    </div>
  );
};

export default BenefitCard;
