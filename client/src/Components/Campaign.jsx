;
import React , { useEffect, useState }  from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Campaign() {

    useEffect(() => {
        AOS.init({
            offset:300,
            duration:900
        }); // Initialize AOS
      }, []);
      

  return (
    <div style={{backgroundColor:"#e7d8c44a"}} >
       <div className="p-3 rounded-lg shadow-md bg-blue-100 text-center">
  <h2 className="text-2xl font-semibold mb-4 text-blue-800">
    Sugamya Bharat Abhiyan - Accessible India Campaign
  </h2>
  <h4 className="text-xl font-semibold mb-4 text-blue-600">
    Accessible India - Empowered India
  </h4>
</div>

        
 <div class="grid grid-cols-1 md:grid-cols-3 gap-4 justify-center items-center ml-10">

 <div data-aos="fade-left">
  <div class="max-w-sm rounded overflow-hidden shadow-lg m-3 bg-white">
    <img class="w-full" src="https://pushliving.com/wp-content/uploads/2021/07/rise-of-disability-featured-750x420.jpg" alt="Sunset in the mountains"/>
    <div class="px-6 py-4">
      <div class="font-bold text-xl mb-2">Enhancing the proportion of accessible government buildings</div>
      <p class="text-gray-700 text-base">Standards of accessibility should be as consistent as possible with international standards, such as those of the ISO, taking into account the local context. Building Construction - Accessibility and Usability of the Built Environment, delineates a set of requirements and recommendations concerning construction, assembly, components and fittings.
      </p>
    </div>
  </div>
  </div>

  <div data-aos="fade-left">
  <div class="max-w-sm rounded overflow-hidden shadow-lg  m-3 bg-white">
    <img class="w-full" src="https://i0.wp.com/havewheelchairwilltravel.net/wp-content/uploads/2017/08/Air-train-9.jpg?resize=1024%2C768&ssl=1" alt="Sunset in the mountains"/>
        <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2">Enhancing proportion of accessible airports</div>
        <p class="text-gray-700 text-base">
        An airport is accessible, if a person with a disability has no barrier in entering it, using all the facilities, and boarding and disembarking from airplanes        </p>
        </div>
  </div>
  </div>

<div data-aos="fade-left">
  <div class="max-w-sm rounded overflow-hidden shadow-lg  m-3 bg-white">
    <img class="w-full" src="https://thumbs.dreamstime.com/b/wheelchair-space-wheel-chair-accessible-train-subway-public-transportation-universal-design-182017374.jpg" alt="Sunset in the mountains"/>
        <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2">Enhancing the proportion of accessible railway stations</div>
        <p class="text-gray-700 text-base">
        A railway station is accessible, if a person with a disability has no barrier in entering it, using all the facilities, and boarding and de-boarding from trains.
</p>
        </div>
  </div>
  </div>

<div data-aos="fade-right">
  <div class="max-w-sm rounded overflow-hidden shadow-lg  m-3 bg-white">
    <img class="w-full" src="https://wheelchairtravel.org/wp-content/uploads/2018/03/london-transport-overground-wheelchair-ramp.jpg" alt="Sunset in the mountains"/>
        <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2">Enhancing the proportion of accessible Public Transport</div>
        <p class="text-gray-700 text-base">
        Public Transport is accessible, if persons with disabilities get an equal opportunity to travel and use public and private transportation infrastructure independently.
        Indian Roads Congress code 103:2012 Guidelines for Pedestrian Facilities provides inclusive roads and street design standards.</p>
        </div>
  </div>
  </div>

  <div data-aos="fade-right">
  <div class="max-w-sm rounded overflow-hidden shadow-lg  m-3 bg-white">
  <img class="w-full" src="http://cgcompetitionpoint.in/wp-content/uploads/2019/07/Sugamya-Bharat-Abhiyan.jpg" alt="Sunset in the mountains"/>
    <div class="px-6 py-4">
      <div class="font-bold text-xl mb-2">Enhancing proportion of accessible and usable public documents and websites that meet internationally recognized accessibility standards</div>
      <p class="text-gray-700 text-base">
      The Public documents should be available in accessible formats to obtain and utilize information in daily life & refer to all documents issued by the national government as well as all sub national documents.  </p>
    </div>
  </div>
  </div>

<div data-aos="fade-right">
  <div class="max-w-sm rounded overflow-hidden shadow-lg  m-3 bg-white">
  <img class="w-full" src="https://images.hindustantimes.com/rf/image_size_960x540/HT/p2/2019/08/26/Pictures/noida-deaf-society_d1fb67a0-c7c2-11e9-9a71-0afbe126130e.jpg" alt="Sunset in the mountains"/>
    <div class="px-6 py-4">
      <div class="font-bold text-xl mb-2">Enhancing the pool of sign language interpreters</div>
      <p class="text-gray-700 text-base">
      A sign language interpreter is one, who meets professional standards in the official sign language. The proportion of public television news programmes that meet agreed upon standards of daily captioning and sign-language interpretation. Public television refers to programmes that are produced, funded or subsidized by the government.   </p>
    </div> 
  </div>
</div>
</div>

    </div>
  )
}

export default Campaign;