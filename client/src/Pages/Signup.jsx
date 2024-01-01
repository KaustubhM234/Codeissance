import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
import signupImg from "../assets/images/signup.gif";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("student");
  const [gender, setGender] = useState("male");
  const navigate = useNavigate();

  // Function to convert text to speech
  const speak = (text) => {
    const synth = window.speechSynthesis;
    const utterance = new SpeechSynthesisUtterance(text);
    synth.speak(utterance);
  };

  useEffect(() => {
    // Speak welcome message when the component loads
    speak("Welcome to the signup page. Please fill in your details to create an account. Enter your full name. Enter your email. Enter your password ");
  }, []);

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8000/api/auth/signup",
        { name, email, password, role, gender }
      );

      navigate("/login");
      toast.success("Sign up successful");

      // Speak a success message after submitting the form
      speak("Sign-up successful. You will now be redirected to the login page.");
    } catch (error) {
      console.error("Sign-up failed:", error);

      // Speak an error message if signup fails
      speak("Sign-up failed. Please try again.");
    }
  };

  return (
    <section className="px-5 xl:px-0">
      <div className="max-w-[1170px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="hidden lg:block bg-primaryColor rounded-l-lg">
            <figure className="rounded-l-lg">
              <img src={signupImg} alt="" className="w-full rounded-l-lg" />
            </figure>
          </div>

          {/* Sign up form  */}
          <div className="rounded-l-lg lg:pl-16 py-10">
            <h3 className="text-headingColor text-[22px] leading-9 font-bold mb-10">
              Create a <span className="text-primaryColor">account</span>
              
            </h3>
            <form onSubmit={handleSignUp}>
              <div className="mb-5">
                <input
                  type="text"
                  placeholder="Full Name"
                  name="name"
                  value={name}
                  onChange={(e)=> setName(e.target.value)}
                  className="w-full py-4 border-b border-solid  border-[#006ff61] focus:outline-none focus:border-b-primaryColor text-[22px] leading-7 text-headingColor placeholder:text-textColor rounded-md cursor-pointer"
                  required
                />
              </div>
              <div className="mb-5">
                <input
                  type="email"
                  placeholder="Enter Your Email"
                  name="email"
                  value={email}
                  onChange={(e)=> setEmail(e.target.value)}
                  className="w-full py-4 border-b border-solid  border-[#006ff61] focus:outline-none focus:border-b-primaryColor text-[22px] leading-7 text-headingColor placeholder:text-textColor rounded-md cursor-pointer"
                  required
                />
              </div>
              <div className="mb-5">
                <input
                  type="password"
                  placeholder="Password"
                  name="password"
                  value={password}
                  onChange={(e)=> setPassword(e.target.value)}
                  className="w-full py-4 border-b border-solid  border-[#006ff61] focus:outline-none focus:border-b-primaryColor text-[22px] leading-7 text-headingColor placeholder:text-textColor rounded-md cursor-pointer"
                  required
                />
              </div>
              <div className="mb-5 flex items-center justify-between">
                <label
                  htmlFor=""
                  className="text-headingColor font-bold text-[16px] leading-7"
                >
                  Are you a:
                  <select
                    name="role"
                    value={role}
                    onChange={(e)=> setRole(e.target.value)}
                    className="text-textColor font-semibold text-[15px] leading-7 px-4 py-3 focus:outline-none"
                  >
                    <option value="student">Student</option>
                    <option value="doctor">Doctor</option>
                    <option value="teacher">Teacher</option>
                  </select>
                </label>
                <label
                  htmlFor=""
                  className="text-headingColor font-bold text-[16px] leading-7"
                >
                  Gender:
                  <select
                    name="gender"
                    value={gender}
                    onChange={(e)=> setGender(e.target.value)}
                    className="text-textColor font-semibold text-[15px] leading-7 px-4 py-3 focus:outline-none"
                  >
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                </label>
              </div>
              {/* <div className="mb-5 flex items-center gap-3">
                <figure className="w-[60px] h-[60px] rounded-full border-2 border-solid border-primaryColor flex items-center justify-center">
                  <img src={avatar} alt="" className="w-full rounded-full" />
                </figure>

                <div className="relative w-[130px] h-[50px]">
                  <input
                    type="file"
                    name="photo"
                    //onChange={handleFileInputChange}
                    id="customFile"
                    accept=".jpg, .png"
                    className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer "
                  />
                  <label
                    htmlFor="customFile"
                    className="absolute top-0 left-0 w-full h-full flex items-center cursor-pointer px-[0.75rem] py-[0.375rem] text-[15px] leading-6 overflow-hidden bg-[#0066ff46] text-headingColor font-semibold rounded-lg truncate "
                  >
                    Upload Photo
                  </label>
                </div>
              </div> */}

              <div className="mt-7">
                <button
                  type="submit"
                  className="w-full bg-primaryColor text-white text-[18px] leading-[30px] rounded-lg py-3"
                >
                  Signup
                </button>
              </div>
            </form>
            <p className="mt-5 text-textColor text-center">
              Already have an account?
              <Link to="/login" className="text-primaryColor font-medium ">
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Signup;