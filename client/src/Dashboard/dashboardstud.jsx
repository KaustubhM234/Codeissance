

import './dashboard.css';
import BarChart from './BarChart';
import Chart2 from './Chart2';
import QuizDis from './StudentDiscovery';
import PieChart from './PieChart';
import { useEffect, useState } from 'react';
export default function dashboardstud() {

  // Function to convert text to speech
  const speak = (text) => {
    const synth = window.speechSynthesis;
    const utterance = new SpeechSynthesisUtterance(text);
    synth.speak(utterance);
  };

  useEffect(() => {
    // Speak welcome message when the component mounts
    speak("Welcome to the personalised student dashboard");
  }, []);


  return (

    <div className='dash-body'>
      <div className="flex flex-col md:flex-row">
        <div className="bg-gray-800 h-screen w-64 flex flex-col items-center py-6 text-white">
          <div className="text-2xl font-semibold mb-8">SAKSHAM</div>
          <ul className="flex flex-col items-start space-y-4">
            <li className="hover:text-gray-300 transition duration-300">
              <a href="#">
                <i className="zmdi zmdi-widgets mr-2"></i>Profile
              </a>
            </li>
            <li className="hover:text-gray-300 transition duration-300">
              <a href="#">
                <i className="zmdi zmdi-file-text mr-2"></i>Quiz
              </a>
            </li>
            <li className="hover:text-gray-300 transition duration-300">
              <a href="/careers">
                <i className="zmdi zmdi-file-text mr-2"></i>Career
              </a>
            </li>
            <li className="hover:text-gray-300 transition duration-300">
              <a href="/contact">
                <i className="zmdi zmdi-shopping-cart mr-2"></i>Contact us
              </a>
            </li>

          </ul>
        </div>

        <div className="flex-1 p-6" style={{ backgroundColor: "#d6e6f4" }}>

          <div className="card-list" style={{ marginBottom: "8px" }}>

            <div className="grid grid-cols-1 my-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-4">
              <div className="bg-blue-500 text-white p-4 rounded-lg">
                <div className="font-semibold text-lg">Shri Shivgir Daulatgir Giri</div>
                <i className="zmdi zmdi-upload text-2xl"></i>
                <div className="text-3xl font-bold mb-2">52</div>
                <div className="font-bold">Locomotor disease</div>
              </div>
              <div className="bg-green-500 text-white p-4 rounded-lg">
                <div className="font-semibold text-lg">Lecture Attended</div>
                <i className="zmdi zmdi-upload text-2xl"></i>
                <div className="text-3xl font-bold mb-2">59</div>
                <div className="font-bold">This week</div>
              </div>
              <div className="bg-orange-500 text-white p-4 rounded-lg">
                <div className="font-semibold text-lg">Quizes Attempted</div>
                <i className="zmdi zmdi-download text-2xl"></i>.
                <div className="text-3xl font-bold mb-2">20</div>
                <div className="font-bold">This Month</div>
              </div>
              <div className="bg-red-500 text-white p-4 rounded-lg">
                <div className="font-semibold text-lg">Your Ranking</div>
                <i className="zmdi zmdi-download text-2xl"></i>
                <div className="text-3xl font-bold mb-2">A+</div>
                <div className="font-bold">Excellent</div>
              </div>
            </div>

          </div>
          <div className="projects mb-4" style={{ borderRadius: "10px", boxShadow: "rgb(0 0 0 / 77%) 0px 4px 8px" }}>
            <div className="projects-inner">
              <QuizDis />

            </div>
          </div>
          <div className="projects mb-4" style={{ borderRadius: "10px", boxShadow: "rgb(0 0 0 / 77%) 0px 4px 8px" }}>
            <div className="projects-inner">
              <BarChart />

            </div>
          </div>
          <div className="projects mb-4" style={{ borderRadius: "10px", boxShadow: "rgb(0 0 0 / 77%) 0px 4px 8px" }}>
            <div className="projects-inner">
              <PieChart />
            </div>
          </div>

        </div>
      </div>

    </div>

  )
}
