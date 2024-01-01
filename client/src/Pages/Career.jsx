import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Career() {

  useEffect(() => {
    AOS.init({
      offset: 300,
      duration: 1000
    }); // Initialize AOS
  }, []);


  return (
    <div style={{ backgroundColor: "#e7d8c44a" }}>
      <div className="p-7  rounded-lg shadow-md">
        <div className='row'>
          <div className='col-9'>
            <h3 className="text-xl font-semibold mb-4">Inclusive Strategies for a Disability-Friendly Workplace:</h3>
            <ul className="list-disc pl-6">
              <li className="mb-2">Tailored Support: Offer customized help like tech tools, flexible schedules, or workspace tweaks to empower employees with disabilities.</li>
              <li className="mb-2">Awareness Boost: Foster a friendly office vibe by educating everyone about disabilities, creating an inclusive atmosphere.</li>
              <li className="mb-2">Accessibility Excellence: Ensure top-notch access in physical spaces and online platforms, leaving no one behind.</li>
              <li className="mb-2">Strong Connections: Build mentorship circles and support groups for employees with disabilities to thrive.</li>
              <li className="mb-2">Advocate for Change: Be a workplace champion for inclusive policies and disability rights, driving positive transformation.</li>
            </ul>
          </div>
          <div className='col-3' data-aos="zoom-in-up">
            <img src="https://www.thrivebhri.org/media/dei-word-art.png" />
          </div>
        </div>
      </div>



      <div className='flex items-center justify-center'>
        <div className="lg:grid lg:grid-cols-3 md:grid md:grid-cols-2 gap-4 items-center justify-center">

          <div data-aos="fade-left">
            <div class="max-w-sm rounded overflow-hidden shadow-lg m-3 bg-white">
              <img class="w-full p-2" src="https://myvision.org/wp-content/uploads/2022/06/jobs-for-visually-impaired-and-blind-768x512.jpg" alt="" />
              <div class="px-6 py-4">
                <div class="font-bold text-xl mb-2">Job Opportunities for the Visually Impaired</div>
                <p class="text-gray-700 text-base">
                  Discover fulfilling career options for individuals who are blind or visually impaired:
                </p>
                <ul className="list-disc ml-5 mt-2 text-sm md:text-base">
                  <li>Voiceover Artist: Provide voice narration for audiobooks, documentaries, and commercials.</li>
                  <li>Accessibility Consultant: Ensure digital content and websites are accessible to individuals with visual impairments.</li>
                  <li>Massage Therapist: Offer massage therapy services, focusing on tactile skills and client communication through touch and verbal cues.</li>
                </ul>
              </div>
            </div>
          </div>


          <div data-aos="fade-left">
            <div class="max-w-sm rounded overflow-hidden shadow-lg m-3 bg-white">
              <img class="w-full p-2" src="https://eachother.org.uk/wp-content/uploads/2021/07/Deaf_or_HoH_person_at_her_workplace_using_a_Video_Relay_Service_to_communicate_with_a_hearing_person_via_a_video_interpreter_and_sign_language_IMG_2954-768x463.jpeg" alt="" />
              <div class="px-6 py-4">
                <div class="font-bold text-xl mb-2">Career Paths for the Deaf and Hard of Hearing</div>
                <p class="text-gray-700 text-base">
                  Discover fulfilling career options for individuals who are blind or visually impaired:
                </p>
                <ul className="list-disc ml-5 mt-2 text-sm md:text-base">
                  <li>Sign Language Interpreter: Facilitate communication between deaf individuals and those who don't know sign language.</li>
                  <li>Graphic Designer: Create visual content, including graphics, illustrations, and design layouts.</li>
                  <li>Data Analyst: Analyze data, generate reports, and communicate findings through written reports and presentations.</li>
                </ul>
              </div>
            </div>
          </div>
          {/* <div data-aos="fade-left">
<div class="max-w-sm rounded overflow-hidden shadow-lg m-3 bg-white">
  <img class="w-full p-2" src="https://eachother.org.uk/wp-content/uploads/2021/07/Deaf_or_HoH_person_at_her_workplace_using_a_Video_Relay_Service_to_communicate_with_a_hearing_person_via_a_video_interpreter_and_sign_language_IMG_2954-768x463.jpeg" alt="Sunset in the mountains"/>
  <div class="px-6 py-4">
    <div class="font-bold text-xl mb-2">Career Paths for the Deaf and Hard of Hearing</div>
    <p class="text-gray-700 text-base">
      Explore job opportunities tailored for the deaf and hard of hearing:
      </p>
      <ul className="list-disc ml-5 mt-2 text-sm md:text-base">
        <li>Sign Language Interpreter: Facilitate communication between deaf individuals and those who don't know sign language.</li>
        <li>Graphic Designer: Create visual content, including graphics, illustrations, and design layouts.</li>
        <li>Data Analyst: Analyze data, generate reports, and communicate findings through written reports and presentations.</li>
      </ul>
  </div>
</div>
</div> */}

          <div data-aos="fade-left">
            <div class="max-w-sm rounded overflow-hidden shadow-lg m-3 bg-white">
              <img class="w-full p-2" src="https://img.freepik.com/free-photo/front-view-adult-women-browsing-tablet_23-2148461505.jpg?w=1060&t=st=1696414073~exp=1696414673~hmac=0039d69cfc39502bc3063fd5eeeef121ff1fa2960732b685501be4c68fa63ff7" alt="i2" />
              <div class="px-6 py-4">
                <div class="font-bold text-xl mb-2">Unlocking Potential for Individuals with Speech Disabilities</div>
                <p class="text-gray-700 text-base">
                  Discover job paths suitable for individuals with speech and communication disabilities:
                </p>
                <ul className="list-disc ml-5 mt-2 text-sm md:text-base">
                  <li>Writer or Blogger: Create written content, including articles, blog posts, and written communication.</li>
                  <li> Graphic Designer: Design visual content using graphic design software, conveying ideas through visuals.</li>
                  <li>Data Entry Specialist: Input data into computer systems accurately and efficiently using keyboard input.</li>
                </ul>
              </div>
            </div>
          </div>


          <div data-aos="fade-right">
            <div class="max-w-sm rounded overflow-hidden shadow-lg m-3 bg-white">
              <img class="w-full p-2" src="https://img.freepik.com/free-photo/woman-boy-with-down-syndrome-posing_23-2148464667.jpg?w=900&t=st=1696414828~exp=1696415428~hmac=78770e47cc23873d1c11ca7778a581b41172509d97d7ebf65bcaa765bc0354c8" alt="" />
              <div class="px-6 py-4">
                <div class="font-bold text-xl mb-2">Empowering Those with Intellectual Disabilities</div>
                <p class="text-gray-700 text-base">
                  Find meaningful employment opportunities for individuals with intellectual disabilities:
                </p>
                <ul className="list-disc ml-5 mt-2 text-sm md:text-base">
                  <li>Office Clerk: Perform administrative tasks such as filing, data entry, and organizing office materials.</li>
                  <li>Food Service Worker: Work in kitchens or cafeterias, assisting with food preparation and service.</li>
                  <li>Janitorial Staff: Perform cleaning and maintenance duties in various settings, maintaining cleanliness and order.</li>
                </ul>
              </div>
            </div>
          </div>

          <div data-aos="fade-right">
            <div class="max-w-sm rounded overflow-hidden shadow-lg m-3 bg-white">
              <img class="w-full p-2" src="https://img.freepik.com/free-photo/smiley-colleagues-discussing_23-2148476599.jpg?w=1060&t=st=1696414725~exp=1696415325~hmac=9e6106d3e3603be9bc0dcf2307a769f016a023ca9c308fee161303c0bd683a34" alt="" />
              <div class="px-6 py-4">
                <div class="font-bold text-xl mb-2">Breaking Barriers for Individuals with Physical Disabilities</div>
                <p class="text-gray-700 text-base">
                  Explore diverse job opportunities for individuals with physical disabilities:
                </p>
                <ul className="list-disc ml-5 mt-2 text-sm md:text-base">
                  <li>VVirtual Assistant: Provide remote administrative support, managing tasks, and communications online.</li>
                  <li>Software Developer: Develop software and applications, focusing on programming and coding tasks.</li>
                  <li>Financial Analyst: Analyze financial data, generate insights, and present findings through written and digital reports.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Career;