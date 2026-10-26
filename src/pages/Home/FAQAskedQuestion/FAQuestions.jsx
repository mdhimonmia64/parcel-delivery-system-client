import React from "react";
import FAQuestion from "./FAQuestion";
import { GoArrowUpRight } from "react-icons/go";


const questions = [
  {
    id: 1,
    title: "How does this posture corrector work?",
    description:
      "A posture corrector works by providing support and gentle alignment to your shoulders, back, and spine, encouraging you to maintain proper posture throughout the day. Here’s how it typically functions: A posture corrector works by providing support and gentle alignment to your shoulders.",
  },
  {
    id: 2,
    title: "Is it suitable for all ages and body types?",
    description:
      "Yes, this posture corrector is designed to be adjustable and comfortable, making it suitable for people of all ages and body types. Its flexible straps and ergonomic design ensure proper fit and support for everyone.",
  },
  {
    id: 3,
    title: "Does it really help with back pain and posture improvement?",
    description:
      "Yes, this posture corrector can help relieve back pain and improve posture when used consistently. By supporting the shoulders and spine, it encourages proper alignment and reduces strain on muscles, promoting a healthier posture over time.",
  },
  {
    id: 4,
    title: "Does it have smart features like vibration alerts?",
    description:
      "Yes, some models of this posture corrector come with smart features like vibration alerts. These alerts gently remind you to straighten your back and maintain proper posture throughout the day, helping you build healthy habits.",
  },
  {
    id: 5,
    title: "How will I be notified when the product is back in stock?",
    description:
      "You will be notified via email or mobile notification when the product is back in stock. Simply sign up for alerts on the product page, and you’ll receive a prompt update as soon as it becomes available.",
  },
];

const FAQuestions = () => {
  return (
    <div className="my-10 ">
      <h1 className="text-4xl font-extrabold text-center">
        Frequently Asked Question (FAQ)
      </h1>
      <p className="text-center pt-3">
        Enhance posture, mobility, and well-being effortlessly with Posture Pro.
        Achieve proper alignment, reduce <br /> pain, and strengthen your body
        with ease!
      </p>
      <div className="max-w-5xl mx-auto flex flex-col gap-4 mt-12 ">
        {questions.map((question) => (
          <FAQuestion question={question} key={question.id}></FAQuestion>
        ))}
      </div>
      <div className="text-center mt-5">
        <button className="btn bg-[#CAEB66] text-black rounded">
          See More FAQ’s
        </button>
        <button className="btn px-2 bg-black text-[#CAEB66] rounded-full">
          <GoArrowUpRight size={22}/>
        </button>
      </div>
    </div>
  );
};

export default FAQuestions;