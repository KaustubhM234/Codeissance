// import { faqs } from "../../../data/faqs";
import FaqList from "./FaqList";

const faqs = [
  {
    question: "What is the legal framework for disability inclusivity in education and work?",
    content:
      " The Americans with Disabilities Act (ADA) and Individuals with Disabilities Education Act (IDEA) are key laws in the US.",
  },
  {
    question: "How can educational institutions promote inclusivity for disabled students?",
    content:
      "Provide accessible facilities, offer reasonable accommodations, and foster an inclusive learning environment.",
  },
  {
    question: "Are there financial incentives for businesses that hire disabled employees?",
    content:
      "Yes, in some countries, tax incentives and grants are available to encourage inclusive hiring practices.",
  },
  {
    question: "What role do advocacy groups play in promoting disability inclusivity?",
    content:
      "They raise awareness, advocate for policy changes, and provide support and resources for disabled individuals.",
  },
  {
    question: "What are some common workplace accommodations for disabled employees?",
    content:
      "Flexible work hours, assistive technology, and physical workplace modifications.",
  },
];

const FaqItem = () => {
  return (
    <div className="mt-5 lg:mt-7">
      {faqs.map((faq, index) => (
        <FaqList faq={faq} key={index} />
      ))}
    </div>
  );
};

export default FaqItem;
