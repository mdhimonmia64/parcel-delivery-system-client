import React, { useState } from "react";

const testimonials = [
  {
    id: 1,
    quote: "A posture corrector works by providing support and gentle alignment to your shoulders, back, and spine, encouraging you to maintain proper posture throughout the day.",
    name: "Awlad Hossin",
    designation: "Senior Product Designer"
  },
  {
    id: 2,
    quote: "Good posture helps improve breathing, reduces back pain, and boosts your confidence in daily activities.",
    name: "Nadia Rahman",
    designation: "UX/UI Designer"
  },
  {
    id: 3,
    quote: "Using a posture corrector regularly can help you develop muscle memory for maintaining better posture naturally.",
    name: "Sajid Hasan",
    designation: "Frontend Developer"
  },
  {
    id: 4,
    quote: "Proper posture alignment not only protects your spine but also enhances overall body balance and flexibility.",
    name: "Fahima Akter",
    designation: "Product Manager"
  },
  {
    id: 5,
    quote: "Maintaining a straight spine and balanced shoulders can prevent long-term joint pain and spinal issues.",
    name: "Rafiul Islam",
    designation: "Software Engineer"
  },
  {
    id: 6,
    quote: "A correct posture improves blood circulation, which is vital for keeping your muscles healthy and active.",
    name: "Mahia Chowdhury",
    designation: "Content Strategist"
  },
  {
    id: 7,
    quote: "Bad posture can lead to headaches, fatigue, and reduced productivity, so posture correction is essential.",
    name: "Shafiqul Alam",
    designation: "Digital Marketer"
  },
  {
    id: 8,
    quote: "Wearing a posture corrector for just 30 minutes daily can gradually improve your spine alignment.",
    name: "Anika Rahman",
    designation: "Creative Designer"
  },
  {
    id: 9,
    quote: "Proper posture enhances lung capacity, allowing your body to intake more oxygen and stay energized.",
    name: "Tanvir Ahmed",
    designation: "Business Analyst"
  },
  {
    id: 10,
    quote: "Posture correction is a small daily habit that can lead to big health improvements over time.",
    name: "Sumaiya Khatun",
    designation: "HR Specialist"
  }
]



const SliderCard = () => {

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  return (
    <div className="flex flex-col items-center justify-center w-full max-w-lg mx-auto mt-8 ">
      <div className=" hover:aura aura-rainbow duration-2000 rounded-2xl">
      <div className="rounded-2xl shadow-lg p-6 w-full bg-white ">
        <div className="text-center">
          <span className="text-4xl text-teal-500">“</span>
          <p className="text-gray-700 text-lg leading-relaxed">
            {testimonials[currentIndex].quote}
          </p>
          <hr className="my-4 border-dashed" />
          <div className="flex items-center justify-center gap-3">
            <div className="w-10 h-10 rounded-full bg-teal-700"></div>
            <div className="text-left">
              <h3 className="text-lg font-bold text-teal-900">
                {testimonials[currentIndex].name}
              </h3>
              <p className="text-sm text-gray-500">
                {testimonials[currentIndex].designation}
              </p>
            </div>
          </div>
        </div>
      </div>
      </div>

      <div className="flex gap-2 mt-4 ">
        {testimonials.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex ? "bg-teal-600 w-5" : "bg-gray-300"
            }`}
          ></div>
        ))}
      </div>

      <div className="flex items-center gap-6 mt-4">
        <button
          className="rounded-full p-2 border border-gray-300 hover:bg-gray-100"
          onClick={prevSlide}
        >
          ◀
        </button>
        <button
          className="rounded-full p-2 bg-lime-400 hover:bg-lime-500 text-white"
          onClick={nextSlide}
        >
          ▶
        </button>
      </div>
    </div>
  );
};

export default SliderCard;