import React from "react";
import "./dashboard.css";
import { Link } from "react-router-dom";
// import BarChart from './BarChart';
// import Chart2 from './Chart2';
// import PieChart from './PieChart';

export default function teacherdash() {
  // Quiz data for Grade 1
  const grade1Quiz = {
    quizName: "Grade 1 Math Quiz",
    questions: [
      {
        question: "What is 2 + 3?",
        options: ["4", "5", "6", "7"],
        correctAnswer: "5",
      },
      // Add more questions for Grade 1
    ],
  };

  

  return (
    <div className="dash-body">
      <div className="flex flex-col md:flex-row">
        <div className="bg-gray-800 h-screen w-64 flex flex-col items-center py-6 text-white">
          <div className="text-2xl font-semibold mb-8">Teacher</div>
          <ul className="flex flex-col items-start space-y-4">
            <li className="hover:text-gray-300 transition duration-300">
              <Link href="#">
                <i className="zmdi zmdi-widgets mr-2"></i>View Students
              </Link>
            </li>
            <li className="hover:text-gray-300 transition duration-300">
              <Link to="/room_front">
                <i className="zmdi zmdi-widgets mr-2"></i>Create meet
              </Link>
            </li>
            <li className="hover:text-gray-300 transition duration-300">
              <Link href="#">
                <i className="zmdi zmdi-file-text mr-2"></i>Report
              </Link>
            </li>
            <li className="hover:text-gray-300 transition duration-300">
              <Link href="#">
                <i className="zmdi zmdi-shopping-cart mr-2"></i>Training
                Material
              </Link>
            </li>
            <li className="hover:text-gray-300 transition duration-300">
              <Link href="#">
                <i className="zmdi zmdi-accounts mr-2"></i>Quiz
              </Link>
            </li>
          </ul>
        </div>

        <div className="flex-1 p-6" style={{ backgroundColor: "#d6e6f4" }}>
          {/* <div className="card-list" style={{marginBottom:"8px"}}>
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-4">
    <div className="bg-blue-500 text-white p-4 rounded-lg">
        <div className="font-semibold text-lg">Overall Users</div>
        <i className="zmdi zmdi-upload text-2xl"></i>
        <div className="text-3xl font-bold mb-2">139</div>
        <div className="font-bold">13% increase</div>
    </div>
    <div className="bg-green-500 text-white p-4 rounded-lg">
        <div className="font-semibold text-lg">Doctors</div>
        <i className="zmdi zmdi-upload text-2xl"></i>
        <div className="text-3xl font-bold mb-2">59</div>
        <div className="font-bold">4% increase</div>
    </div>
    <div className="bg-orange-500 text-white p-4 rounded-lg">
        <div className="font-semibold text-lg">Patients</div>
        <i className="zmdi zmdi-download text-2xl"></i>
        <div className="text-3xl font-bold mb-2">80</div>
        <div className="font-bold">13% decrease</div>
    </div>
    <div className="bg-red-500 text-white p-4 rounded-lg">
        <div className="font-semibold text-lg">New Patients</div>
        <i className="zmdi zmdi-download text-2xl"></i>
        <div className="text-3xl font-bold mb-2">3</div>
        <div className="font-bold">13% decrease</div>
    </div>
</div>

		</div> */}
          <div
            className="projects mb-4"
            style={{
              borderRadius: "10px",
              boxShadow: "rgb(0 0 0 / 77%) 0px 4px 8px",
            }}
          >
            <div className="projects-inner">
              <header className="projects-header">
                <div className="title">Quiz :</div>
                <div className="count"> Students</div>
                <i className="zmdi zmdi-download"></i>
              </header>
              <div className="py-4"  style={{backgroundColor: "#e7d8c44a"}}>
    <form >
      <div className="space-y-12">
       


        <div className="border-b border-gray-900/10 pb-12 max-w-screen-sm mx-auto p-4 rounded overflow-hidden shadow-lg" style={{backgroundColor:"#fff"}}>
          <h2 className="text-base font-semibold leading-7 text-gray-900">Class 8</h2>
          <p className="mt-1 text-sm leading-6 text-gray-600">
            Use Correct Homophone
          </p>

          <div className="mt-10 space-y-10">
            <fieldset>
              <legend className="text-sm font-semibold leading-6 text-gray-900">______ over this fence and you will be surprised by how well tended the garden on the other side is.
</legend>
              <div className="mt-6 space-y-6">
              <div className="mt-6 space-y-6">
                <div className="flex items-center gap-x-3">
                  <input
                    id="push-everything"
                    name="push-notifications"
                    type="radio"
                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  />
                  <label htmlFor="push-everything" className="block text-sm font-medium leading-6 text-gray-900">
                    Peek
                  </label>
                </div>
                <div className="flex items-center gap-x-3">
                  <input
                    id="push-email"
                    name="push-notifications"
                    type="radio"
                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  />
                  <label htmlFor="push-email" className="block text-sm font-medium leading-6 text-gray-900">
                    Peak
                  </label>
                </div>
                {/* <div className="flex items-center gap-x-3">
                  <input
                    id="push-nothing"
                    name="push-notifications"
                    type="radio"
                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  />
                  <label htmlFor="push-nothing" className="block text-sm font-medium leading-6 text-gray-900">
                    No push notifications
                  </label>
                </div> */}
              </div>
          </div>
            </fieldset>
            <fieldset>
              <legend className="text-sm font-semibold leading-6 text-gray-900">Is it a phrase or a clause</legend>
              <p className="mt-1 text-sm leading-6 text-gray-600">Inspirational leader Mohandas Gandhi, commonly known as Mahatma Gandhi, directed India's fight for independence against British rule.
.</p>
              <div className="mt-6 space-y-6">
                <div className="flex items-center gap-x-3">
                  <input
                    id="push-everything"
                    name="push-notifications"
                    type="radio"
                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  />
                  <label htmlFor="push-everything" className="block text-sm font-medium leading-6 text-gray-900">
                    phrase
                  </label>
                </div>
                <div className="flex items-center gap-x-3">
                  <input
                    id="push-email"
                    name="push-notifications"
                    type="radio"
                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  />
                  <label htmlFor="push-email" className="block text-sm font-medium leading-6 text-gray-900">
                    clause
                  </label>
                </div>
                {/* <div className="flex items-center gap-x-3">
                  <input
                    id="push-nothing"
                    name="push-notifications"
                    type="radio"
                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  />
                  <label htmlFor="push-nothing" className="block text-sm font-medium leading-6 text-gray-900">
                    No push notifications
                  </label>
                </div> */}
              </div>
            </fieldset>
            <fieldset>
              <legend className="text-sm font-semibold leading-6 text-gray-900">By Percent of Change</legend>
              <div className="mt-6 space-y-6">
                <div className="relative flex gap-x-3">
                  <div className="flex h-6 items-center">
                    <input
                      id="comments"
                      name="comments"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    />
                  </div>
                  <div className="text-sm leading-6">
                    <label htmlFor="comments" className="font-medium text-gray-900">
                      40% decrease
                    </label>
                    
                  </div>
                </div>
                <div className="relative flex gap-x-3">
                  <div className="flex h-6 items-center">
                    <input
                      id="candidates"
                      name="candidates"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    />
                  </div>
                  <div className="text-sm leading-6">
                    <label htmlFor="candidates" className="font-medium text-gray-900">
                      40%increase
                    </label>
                   
                  </div>
                </div>
                <div className="relative flex gap-x-3">
                  <div className="flex h-6 items-center">
                    <input
                      id="offers"
                      name="offers"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    />
                  </div>
                  <div className="text-sm leading-6">
                    <label htmlFor="offers" className="font-medium text-gray-900">
                      2%decrease
                    </label>
                   
                  </div>
                </div>
              </div>
            </fieldset>
            <fieldset>
              <legend className="text-sm font-semibold leading-6 text-gray-900">Sum and difference</legend>
              <p className="mt-1 text-sm leading-6 text-gray-600">In this problem, what is 56?

52 + 4 = 56</p>
              <div className="mt-6 space-y-6">
                <div className="flex items-center gap-x-3">
                  <input
                    id="push-everything"
                    name="push-notifications"
                    type="radio"
                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  />
                  <label htmlFor="push-everything" className="block text-sm font-medium leading-6 text-gray-900">
                    difference
                  </label>
                </div>
                <div className="flex items-center gap-x-3">
                  <input
                    id="push-email"
                    name="push-notifications"
                    type="radio"
                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  />
                  <label htmlFor="push-email" className="block text-sm font-medium leading-6 text-gray-900">
                    sum
                  </label>
                </div>
                
                <div className="flex items-center gap-x-3">
                 
                </div>
              </div>

              
            </fieldset>
            <h2 className="text-base font-semibold leading-7 text-gray-900">Class 2</h2>
            <fieldset>
              
              <legend className="text-sm font-semibold leading-6 text-gray-900">Guess-and-check word problems</legend>
              <p className="mt-1 text-sm leading-6 text-gray-600">A gym owner has some blue weights and some green weights. The blue weights are 7 kilograms each, and the green weights are 5 kilograms each. The owner has 6 weights, and they weigh 40 kilograms in all. How many of each colour weight does he have?.</p>
              <div className="mt-6 space-y-6">
                <div className="flex items-center gap-x-3">
                  <input
                    id="push-everything"
                    name="push-notifications"
                    type="radio"
                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  />
                  <label htmlFor="push-everything" className="block text-sm font-medium leading-6 text-gray-900">
                  blue weights

                  </label>
                </div>
                <div className="flex items-center gap-x-3">
                  <input
                    id="push-email"
                    name="push-notifications"
                    type="radio"
                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  />
                  <label htmlFor="push-email" className="block text-sm font-medium leading-6 text-gray-900">
                  green weights
                  </label>
                </div>
              </div>
            </fieldset>
            <fieldset>
              <legend className="text-sm font-semibold leading-6 text-gray-900"> Addition word problems - one digit</legend>
              <p className="mt-1 text-sm leading-6 text-gray-600">Simon made a gingerbread house with 2 jelly beans and 4 gum drops. How many pieces of candy did Simon use in his gingerbread house?</p>
              <div className="mt-6 space-y-6">
                <div className="flex items-center gap-x-3">
                  <input
                    id="push-everything"
                    name="push-notifications"
                    type="radio"
                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  />
                  <label htmlFor="push-everything" className="block text-sm font-medium leading-6 text-gray-900">
                    4
                  </label>
                </div>
                <div className="flex items-center gap-x-3">
                  <input
                    id="push-email"
                    name="push-notifications"
                    type="radio"
                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  />
                  <label htmlFor="push-email" className="block text-sm font-medium leading-6 text-gray-900">
                    5
                  </label>
                </div>
                <div className="flex items-center gap-x-3">
                  <input
                    id="push-nothing"
                    name="push-notifications"
                    type="radio"
                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  />
                  <label htmlFor="push-nothing" className="block text-sm font-medium leading-6 text-gray-900">
                    6
                  </label>
                </div>
              </div>
            </fieldset>
          </div>
          <div className="mt-6 flex items-center justify-end gap-x-6 ">
        <button type="button" className="text-sm font-semibold leading-6 text-gray-900">
          Cancel
        </button>
        <button
          type="submit"
          className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Save
        </button>
      </div>
        </div>
        
      </div>

     
    </form>
    </div>
            </div>
          </div>
          <div
            className="projects mb-4"
            style={{
              borderRadius: "10px",
              boxShadow: "rgb(0 0 0 / 77%) 0px 4px 8px",
            }}
          >
            <div className="projects-inner">
              <header className="projects-header">
                <div className="title">Student's Data:</div>
                <div className="count">4 Students</div>
                <i className="zmdi zmdi-download"></i>
              </header>
              <table className="projects-table">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Year Of Education</th>
                    <th>Experience</th>
                    <th>Approval status</th>
                    <th>Contact</th>
                  </tr>
                </thead>
                <tr>
                  <td className="member">
                    <figure>
                      <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/584938/people_8.png" />
                    </figure>
                    <div className="member-info">
                      <p>Neha Mhatre</p>
                    </div>
                  </td>
                  <td>
                    <p>4th Grade</p>
                    <p className="text-danger">School of Hope, New Delhi</p>
                  </td>
                  <td>
                    <p>10 yrs</p>
                  </td>
                  <td>
                    <button className="btn btn-outline-success">Approve</button>
                  </td>
                  <td>
                    <p>+91-8240495160</p>
                  </td>
                </tr>

                <tr>
                  <td className="member">
                    <figure>
                      <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/584938/people_8.png" />
                    </figure>
                    <div className="member-info">
                      <p>Tanisha Agrawal</p>
                    </div>
                  </td>
                  <td>
                    <p>2nd Grade</p>
                    <p className="text-danger">Umang, Rajasthan</p>
                  </td>
                  <td>
                    <p>10 yrs</p>
                  </td>
                  <td>
                    <button className="btn btn-outline-success">Approve</button>
                  </td>
                  <td>
                    <p>+91-8240495160</p>
                  </td>
                </tr>

                
                <tr>
                  <td className="member">
                    <figure>
                      <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/584938/people_8.png" />
                    </figure>
                    <div className="member-info">
                      <p>Rohan Kini</p>
                    </div>
                  </td>
                  <td>
                    <p>2nd Grade</p>
                    <p className="text-danger">P.J Sadhana, Mumbai</p>
                  </td>
                  <td>
                    <p>10 yrs</p>
                  </td>
                  <td>
                    <button className="btn btn-outline-success">Approve</button>
                  </td>
                  <td>
                    <p>+91-7240495160</p>
                  </td>
                </tr>

                
                <tr>
                  <td className="member">
                    <figure>
                      <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/584938/people_8.png" />
                    </figure>
                    <div className="member-info">
                      <p>Mehan Agrawal</p>
                    </div>
                  </td>
                  <td>
                    <p>2nd Grade</p>
                    <p className="text-danger">Umang, Rajasthan</p>
                  </td>
                  <td>
                    <p>10 yrs</p>
                  </td>
                  <td>
                    <button className="btn btn-outline-success">Approve</button>
                  </td>
                  <td>
                    <p>+91-8740495160</p>
                  </td>
                </tr>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
