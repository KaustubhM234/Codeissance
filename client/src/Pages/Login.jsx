// import { useState } from "react";
// import { Link,useNavigate } from "react-router-dom";
// import { toast } from "react-toastify";
// import {useCookies} from "react-cookie";
// import axios from "axios";

// const Login = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');
//   const navigate = useNavigate();
//   // State variable for cookies
//   const [cookies, setCookie] = useCookies(['authToken']);

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     console.log("hi")
//     try {
//       // setError('');
//       // Send login request to the server
//       const response = await axios.post(
//         'http://localhost:8000/api/auth/login', // Replace with your server login endpoint
//         { email, password }
//       );       
//        console.log(response.data)

//       // Extract the token from the response
//       const { token } = response.data;
        
//       // Store the token in cookies
//       setCookie('authToken', token, { path: '/' });
//       toast.success('Sign up successful');
//       navigate('/');
//     } catch (error) {
//       // Handle login errors
//       setError('Invalid credentials. Please try again.');
//     }
//   };

//   return (
//     <section className="px-5 lg:px-0">
//       <div className="w-full max-w-[570px] mx-auto rounded-lg shadow-md p-5 md:p-10">
//         <h3 className="text-headingColor text-[22px] leading-9 font-bold mb-10">
//           Hello! <span className="text-primaryColor">Welcome</span> Back 🎉
//         </h3>
//         <form className="py-4 md:py-0" >
//           <div className="mb-5">
//             <input
//               type="email"
//               placeholder="Enter Your Email"
//               name="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               className="w-full  py-4 border-b border-solid  border-[#006ff61] focus:outline-none focus:border-b-primaryColor text-[22px] leading-7 text-headingColor placeholder:text-textColor rounded-md cursor-pointer"
//               required
//             />
//           </div>
//           <div className="mb-5">
//             <input
//               type="password"
//               placeholder="Password"
//               name="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               className="w-full py-4 border-b border-solid  border-[#006ff61] focus:outline-none focus:border-b-primaryColor text-[22px] leading-7 text-headingColor placeholder:text-textColor rounded-md cursor-pointer"
//               required
//             />
//           </div>
//           <div className="mt-7">
//             <button
//               type="submit" onClick={handleLogin}
//               className="w-full bg-primaryColor text-white text-[18px] leading-[30px] rounded-lg py-3"
//             >
//               Login
//             </button>
//           </div>
//         </form>
//         <p className="mt-5 text-textColor text-center">
//           Don&apos;t have an account{" "}
//           <Link to="/signup" className="text-primaryColor font-medium ">
//             Register
//           </Link>
//         </p>
//       </div>
//     </section>
//   );
// };

// export default Login;

import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useCookies } from "react-cookie";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const [cookies, setCookie] = useCookies(["authToken"]);

  // Function to convert text to speech
  const speak = (text) => {
    const synth = window.speechSynthesis;
    const utterance = new SpeechSynthesisUtterance(text);
    synth.speak(utterance);
  };

  useEffect(() => {
    // Speak welcome message when the component mounts
    speak("Hello! Welcome Back. Please enter your email and password to login.");
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8000/api/auth/login",
        { email, password }
      );
      const { token } = response.data;

      setCookie("authToken", token, { path: "/" });
      toast.success("Login successful");
      navigate("/");

      // Speak a success message after submitting the form
      speak("Login successful. Redirecting to the homepage.");
    } catch (error) {
      setError("Invalid credentials. Please try again.");
    }
  };

  return (
    <section className="px-5 lg:px-0">
      <div className="w-full max-w-[570px] mx-auto rounded-lg shadow-md p-5 md:p-10">
        <h3 className="text-headingColor text-[22px] leading-9 font-bold mb-10">
          Hello! <span className="text-primaryColor">Welcome</span> Back 🎉
        </h3>
        <form className="py-4 md:py-0" >
          <div className="mb-5">
            <input
              type="email"
              placeholder="Enter Your Email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full  py-4 border-b border-solid  border-[#006ff61] focus:outline-none focus:border-b-primaryColor text-[22px] leading-7 text-headingColor placeholder:text-textColor rounded-md cursor-pointer"
              required
            />
          </div>
          <div className="mb-5">
            <input
              type="password"
              placeholder="Password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full py-4 border-b border-solid  border-[#006ff61] focus:outline-none focus:border-b-primaryColor text-[22px] leading-7 text-headingColor placeholder:text-textColor rounded-md cursor-pointer"
              required
            />
          </div>
          <div className="mt-7">
            <button
              type="submit" onClick={handleLogin}
              className="w-full bg-primaryColor text-white text-[18px] leading-[30px] rounded-lg py-3"
            >
              Login
            </button>
          </div>
        </form>
        <p className="mt-5 text-textColor text-center">
          Don't have an account{" "}
          <Link to="/signup" className="text-primaryColor font-medium">
            Register
          </Link>
        </p>
      </div>
    </section>
  );
};

export default Login;
Login