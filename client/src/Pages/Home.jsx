import { Link } from "react-router-dom";
import heroImg01 from "../assets/images/hero-img01.png";
import heroImg02 from "../assets/images/hero-img02.png";
import heroImg03 from "../assets/images/hero-img03.png";
import icon01 from "../assets/images/icon01.png";
import icon02 from "../assets/images/icon02.png";
import icon03 from "../assets/images/icon03.png";
import { BsArrowRight } from "react-icons/bs";
import About from "../About/About";
import ServicesList from "../Services/ServicesList";
import featureImg from "../assets/images/feature-img.png";
import videoIcon from "../assets/images/video-icon.png";
import avatarIcon from "../assets/images/avatar-icon.png";
import faqImg from "../assets/images/faq-img.png";
import DoctorsList from "./Doctors/DoctorsList";
import FaqItem from "./Faq/FaqItem";
import Testimonial from "../Components/Testimonial/Testimonial";
// import Slider from "../Components/Slider";
import useTitle from "../Hooks/useTitle";
import Campaign from "../Components/Campaign";
const Home = () => {
  useTitle("Home");
  return (
    <>
      <section className="hero__section pt-[60px] 2xl:h-[800px]">
        <div className="container">
          <div className="flex flex-col lg:flex-row gap-[90px] items-center justify-between">
            <div>
              <div className="lg:w-[570px]">
                <h1 className="text-[36px] leading-[46px] text-headingColor font-[800] md:text-[60px] md:leading-[70px]">
                  Our aim is to provide you with fun-learning platform
                </h1>
                <p className="text_para">
                   Come experience a new way of learning with quizes and  interactive live seesions and much more...
                </p>
                <button className="btn" style={{paddingBottom:"-30px"}}> <a href="#ahead">Get Started</a></button>
              </div>
              <div className="mt-[30px] lg:mt-[70px] flex flex-col lg:flex-row lg:items-center gap-5 lg:gap-[30px]">
                <div className="justify-center">
                  <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor" id="ahead">
                    3+
                  </h2>
                  <span className="w-[100px] h-2 bg-yellowColor rounded-full block mt-[-14px]"></span>
                  <p className="text_para">Year of Experience</p>
                </div>
                <div>
                  <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor">
                    250+
                  </h2>
                  <span className="w-[100px] h-2 bg-purpleColor rounded-full block mt-[-14px]"></span>
                  <p className="text_para">Daily Users</p>
                </div>
                <div>
                  <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor">
                    100%
                  </h2>
                  <span className="w-[100px] h-2 bg-yellowColor rounded-full block mt-[-14px]"></span>
                  <p className="text_para">Student Satisfaction</p>
                </div>
              </div>
            </div>
            <div className="flex gap-[30px] justify-end">
              <div>
                <img src="https://i.dailymail.co.uk/i/pix/2017/01/10/19/3BCF68EF00000578-4081556-image-m-42_1484077732182.jpg" alt=" " className="w-full" />
              </div>
              <div className="mt-[30px]">
                <img src="https://files.globalgiving.org/pfil/23787/ph_23787_103291.jpg?m=1497425525000" alt=" " className="w-full mb-[30px]" />
                <img src="https://chicagolighthouse.org/wp-content/uploads/2015/10/Deaf-Blind-2-1024x683.jpg" alt=" " className="w-full " />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="lg:[4709x] mx-auto">
            <h2 className="heading text-center">
              Providing the best medical Services
            </h2>
            <p className="text_para text-center">
              world-class care for everyone. Our healthy Sysytem offers
              unmatched, expert health care.
            </p>
          </div>
          {/* <div className="flex flex-wrap items-center flex-col md:flex-row gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]"></div> */}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]">
            <div className="py-[30px] px-5">
              <div className="flex items-center justify-center">
                <img src={icon01} alt="" />
              </div>
              <div className="mt-[30px]">
                <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">
                  Find a Doctor
                </h2>
                <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-center">
                  World-class care for everyone.We offer 
                  unmatched, expert health care and thearpy.
                </p>
                <Link
                  to="/doctors"
                  className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none "
                >
                  <BsArrowRight className="group-hover:text-white w-6 h-5" />
                </Link>
              </div>
            </div>
            <div className="py-[30px] px-5">
              <div className="flex items-center justify-center">
                <img src={icon02} alt="" />
              </div>
              <div className="mt-[30px]">
                <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">
                  Find a location
                </h2>
                <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-center">
                  Find your nearest hospitals, clinics, gardens, shools for differently abled.
                </p>
                <Link
                  to="/maps"
                  className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none "
                >
                  <BsArrowRight className="group-hover:text-white w-6 h-5" />
                </Link>
              </div>
            </div>
            <div className="py-[30px] px-5">
              <div className="flex items-center justify-center">
                <img src={icon03} alt="" />
              </div>
              <div className="mt-[30px]">
                <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">
                  Join meet
                </h2>
                <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-center">
                  World-class care for everyone.Our health system offers
                  unmatched, expert health care. from the lab to the clinic.
                </p>
                <Link
                  to="/doctors"
                  className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none "
                >
                  <BsArrowRight className="group-hover:text-white w-6 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <Campaign/>
      <section>
        <div className="container">
          <div className="flex justify-between gap-[50px] lg:gap-0">
            <div className="w-1/2 hidden md:block">
              <img src="https://i.pinimg.com/564x/9c/fb/f1/9cfbf13aeeb1ed2727f3d14a962353b9.jpg" alt="" />
            </div>
            <div className="w-full md:w-1/2">
              <h2 className="heading">Most Question by our beloved students</h2>
              <FaqItem />
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="xl:w-[470px] mx-auto">
            <h2 className="heading text-center">What our students say</h2>
            <p className="text_para text-center">
              World-class teaching facility for everyone. Our teaching System offers <br />{" "}
              unmatched, expert mentorship with guidance  
            </p>
          </div>
          <Testimonial />
        </div>
      </section>
      {/* <Slider/> */}
    </>
  );
};

export default Home;
