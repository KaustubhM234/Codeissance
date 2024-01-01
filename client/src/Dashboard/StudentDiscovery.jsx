// Quiz.jsx
import { useState } from "react";
import "./StudentDiscovery.css";
// import { FaArrowRight } from "react-icons/fa";

function StudentDiscovery() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [marks, setMarks] = useState(0);
  const questions = [
    // {
    //   question:
    //   "What is the core idea or concept behind this project?",
    //   input: true, // This indicates that it's a text input question
    // },{
    //   question:
    //   "What unique perspective or approach do you bring to this project that sets it apart from others?",
    //   input: true, // This indicates that it's a text input question
    // },
    {
      question:
        "______ over this fence and you will be surprised by how well tended the garden on the other side is.",
      options: ["Peek", "Peak"],
      correct:"Peek"
    },
    {
      question:
        "Inspirational leader Mohandas Gandhi, commonly known as Mahatma Gandhi, directed India's fight for independence against British rule. .",
      options: ["phrase", "clause"],
      correct:"clause"
    },
    {
      question: "In this problem, what is 56? 52 + 4 = 56",
      options: ["difference", "sum"],
      correct:"sum"
    },
    {
      question:
        "A gym owner has some blue weights and some green weights. The blue weights are 7 kilograms each, and the green weights are 5 kilograms each. The owner has 6 weights, and they weigh 40 kilograms in all. How many of each colour weight does he have?.",
      options: ["blue weights", "green weights"],
      correct:"blue weights"
    },
  ];
  // const progress = (currentQuestion / (questions.length - 1)) * 100;
  const handleNext = () => {
    if (answers[currentQuestion] !== undefined) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  // const handleAnswer = (answer) => {
  //   const updatedAnswers = [...answers];
  //   updatedAnswers[currentQuestion] = answer;
  //   setAnswers(updatedAnswers);

  //   const answeredQuestions = updatedAnswers.filter((ans) => ans !== undefined);
  //   const progress = (answeredQuestions.length / questions.length) * 100;
  //   setProgress(progress);
  // };
  // const handleAnswer = (answer) => {
  //   const updatedAnswers = [...answers];
  //   updatedAnswers[currentQuestion] = answer;
  //   setAnswers(updatedAnswers);
  
  //   const answeredQuestions = updatedAnswers.filter((ans) => ans !== undefined);
  //   const progress = (answeredQuestions.length / questions.length) * 100;
  //   setProgress(progress);
  
  //   // Check if the user's answer is correct and assign marks
  //   if (answer === questions[currentQuestion].correct) {
  //     // Assuming each correct answer earns 1 mark
  //     setMarks((prevMarks) => prevMarks + 1);
  //   }
  // };
  const handleAnswer = (answer) => {
    const updatedAnswers = [...answers];
    updatedAnswers[currentQuestion] = answer;
    setAnswers(updatedAnswers);
  
    const answeredQuestions = updatedAnswers.filter((ans) => ans !== undefined);
    const progress = (answeredQuestions.length / questions.length) * 100;
    setProgress(progress);
  
    // Check if the user's answer is correct and assign marks
    if (answer === questions[currentQuestion].correct) {
      // Assuming each correct answer earns 1 mark
      setMarks((prevMarks) => prevMarks + 1);
    }
  
    // Move to the next question
    setCurrentQuestion(currentQuestion + 1);
  };
  
  // const handleAnswer = (answer) => {
  //   const updatedAnswers = [...answers];
  //   updatedAnswers[currentQuestion] = answer;
  //   setAnswers(updatedAnswers);
  
  //   const answeredQuestions = updatedAnswers.filter((ans) => ans !== undefined);
  //   const progress = (answeredQuestions.length / questions.length) * 100;
  //   setProgress(progress);
  
  //   // Check if the user's answer is correct and assign marks
  //   if (answer === questions[currentQuestion].correct) {
  //     // Assuming each correct answer earns 1 mark
  //     setMarks((prevMarks) => prevMarks + 1);
  //   }
  // };
  
  
  const renderOptions = () => {
    if (questions[currentQuestion].input) {
      return (
        <div className="text-area-container">
          <textarea
            className="centered-textarea"
            placeholder="Tell us about it in detail..."
            onChange={(e) => handleAnswer(e.target.value)}
            value={answers[currentQuestion] || ""}
          />
        </div>
      );
    } else {
      return questions[currentQuestion].options.map((option, index) => (
        <button
          key={index}
          onClick={() => handleAnswer(option)}
          className={
            answers[currentQuestion] === option ? "option selected" : "option"
          }
        >
          {option}
        </button>
      ));
    }
  };

  const renderResults = () => {
    if (answers.length === questions.length) {
      // Logic for generating project suggestions based on answers
      const projectSuggestions = [
        {
          title: "Language Mastery Quiz",
          description:
            "Test your language skills with this quiz. From homophones to grammar, challenge yourself to see how well you know the nuances of language.",
            link:'https://testyourlanguage.com/',
            
        },
        {
          title: "History and Leaders Quiz",
          description:
            "Explore historical figures like Mahatma Gandhi and test your knowledge of their impact on the world. Dive into the history of India's fight for independence in this informative quiz.",
        },
        {
          title: "Math Problem Solving Challenge",
          description:
            "Sharpen your math skills with this problem-solving quiz. Calculate the difference or sum in various equations and see how well you can solve them.",
        },
        {
          title: "Weight Puzzle: Blue vs. Green",
          description:
            "Solve the weight puzzle! Help the gym owner figure out how many blue and green weights he has. This quiz will test your problem-solving abilities.",
        },
      ];

      return (
        <div>
          <main>
            <div className="head-title">
              <div className="left">{/* <h1>Project References</h1> */}</div>
            </div>
            <div className="user-score">
            Your Score: {marks} out of {questions.length}
          </div>
            <ul className="box-info-projRev">
              {projectSuggestions.map((project, index) => (
                <li key={index}>
                  <div className="card-fac">
                    <div className="card__wrapper">
                      <div className="card___wrapper-acounts">
                        <div className="card__score">+2</div>
                        <div className="card__acounts">
                          <svg
                            viewBox="0 0 128 128"
                            xmlns="http://www.w3.org/2000/svg"
                          ></svg>
                        </div>
                        <div className="card__acounts">
                          <svg
                            viewBox="0 0 128 128"
                            xmlns="http://www.w3.org/2000/svg"
                          ></svg>
                        </div>
                      </div>
                      <div className="card__menu">
                        <svg
                          fill="none"
                          height="20"
                          viewBox="0 0 4 20"
                          width="4"
                          xmlns="http://www.w3.org/2000/svg"
                        ></svg>
                      </div>
                    </div>
                    <div className="card__title">{project.title}</div>
                    <div className="card__subtitle">{project.description}</div>
                    {/* <div className="card__subtitle">a{project.link}</div> */}
                    <div className="card__indicator">
                      {/* <span className="card__indicator-amount"></span> Read |{" "} */}
                      {""}
                      <span className="card__indicator-percentage"></span>
                    </div>
                    {/* <div className="card__progress">
                    <progress value="75" max="100"></progress>
                  </div> */}
                  </div>
                </li>
              ))}
            </ul>
          </main>
        </div>
      );
    }
  };

  const [progress, setProgress] = useState(0);

  return (
    <>
      {currentQuestion < questions.length ? (
        <div className="px-4" style={{ backgroundColor: "#e7d8c44a" }}>
          <div
            className="quiz-container max-w-screen-lg mx-auto p-4 rounded overflow-hidden shadow-lg "
            style={{ backgroundColor: "#fff" }}
          >
            <div className="progress-bar">
              <div className="progress" style={{ width: `${progress}%` }}></div>
            </div>
            <div className="question">
              <h2>{questions[currentQuestion].question}</h2>
            </div>
            <div className="options">{renderOptions()}</div>
            <button
              className="next-button"
              onClick={() => {
                handleAnswer(answers[currentQuestion]);
                handleNext();
              }}
              disabled={!answers[currentQuestion]}
            >
              <div className="button-content">
                {/* <button className="border border-green-500 text-green-500 rounded-full px-4 py-2 hover:bg-green-500 hover:text-white hover:border-transparent focus:outline-none focus:ring focus:border-green-700">
                  Next
                </button> */}
              </div>
            </button>
          </div>
        </div>
      ) : (
        renderResults()
      )}
    </>
  );
}

export default StudentDiscovery;
