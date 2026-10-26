import React from "react";

const FAQuestion = ({ question }) => {
    const{title,description} = question || { };
  return (
    <div className="aura aura-rainbow duration-6000">
    <div className="collapse collapse-arrow bg-base-100 border border-base-300 ">
      <input type="radio" name="my-accordion-2" defaultChecked />
      <div className="collapse-title font-bold">
        {title}
      </div>
      <div className="collapse-content text-sm">
        {description}
      </div>
    </div>
    </div>
  );
};

export default FAQuestion;