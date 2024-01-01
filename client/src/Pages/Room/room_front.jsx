import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// // import Doctor from "./img/doctor.jpg"
// // import "../Styles/vc.css";

function Home() {
     

//     return (
//         <div className="flex h-screen justify-center items-center">
//             <div className="w-full max-w-screen-lg mx-auto flex">
//                 {/* Left Div */}
//                 <div className="w-1/2 flex justify-center items-center">
//                     <img className="hero-image1" src="https://img.freepik.com/free-vector/online-meetup-abstract-concept-vector-illustration-conference-call-join-meetup-group-video-call-online-service-distance-communication-informal-meeting-members-networking-abstract-metaphor_335657-2920.jpg?w=740&t=st=1696415451~exp=1696416051~hmac=1e54c249f8b7a4a25b0ec44600267ab83cce50ec5a2b29183df1df179200b093"
//                      alt="Doctor" />
//                 </div>

//                 {/* Right Div */}
//                 <div className="w-1/2 flex flex-col items-center">
//                     <div className='text-center'>
//                         <h1>One on One Consultation</h1>
//                         <h2 className="text-title">Free first appointment</h2>
//                         </div>

//                     <div className="input mt-4">
//                         <input
//                             placeholder="Enter Meet Name"
//                             type="text"
//                             value={roomID}
//                             onChange={(e) => setRoomID(e.target.value)}
//                             className="border p-2 rounded w-64"
//                         />
//                         <button
//                             className="text-appointment-btn bg-blue-500 text-white px-4 py-2 rounded-full mt-2 hover:bg-blue-700"
//                             type="button"
//                             onClick={handleJoin}
//                         >
//                             Join
//                         </button>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default function Example() {
  return (
    <div className="relative overflow-hidden bg-white">
      <div className="pb-80 pt-16 sm:pb-40 sm:pt-24 lg:pb-48 lg:pt-40">
        <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
          <div className="sm:max-w-lg">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            One on One Consultation
            </h1>
            <p className="mt-4 text-xl text-gray-500">
            It fosters a supportive environment where individuals can openly share concerns, receive expert guidance, and gain valuable insights, enhancing their overall well-being and decision-making processes.
            </p>
          
            <input placeholder="Enter Meet Name"
                            type="text"
                            value={roomID}
                            onChange={(e) => setRoomID(e.target.value)}
                            className="border p-2 mx-2 rounded w-64 my-2"
                      />
           
           <button  onClick={handleJoin} className="inline-block rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-center font-medium text-white hover:bg-indigo-700">
              Join
            </button>
          </div>
          <div>
            <div className="mt-10">
              {/* Decorative image grid */}
              <div
                aria-hidden="true"
                className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
              >
                <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                  <div className="flex items-center space-x-6 lg:space-x-8">
                    <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div className="h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100">
                        <img
                          src="https://img.freepik.com/free-vector/virtual-graduation-ceremony-illustration_23-2148572904.jpg?w=1060&t=st=1696415727~exp=1696416327~hmac=3066ccffc4ba23ba739c31c69bc83c777627b5a5cedc78092fa0d8581393e0ec"
                          alt=""
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          src="https://img.freepik.com/free-vector/flat-online-medical-conference-illustration_23-2148890146.jpg?w=740&t=st=1696415777~exp=1696416377~hmac=d7ad87e8639fb6cffacf3b517ac72af7e7762de94078527596c0693fe3b141df"
                          alt=""
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                    </div>
                    <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          src="https://img.freepik.com/free-vector/flat-online-medical-conference_23-2148881567.jpg?w=1060&t=st=1696415820~exp=1696416420~hmac=bff2f340e8dd6b627386d26a43fa92fd8373871926afa6ca833fa18a99f54a2c"
                          alt=""
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          src="https://img.freepik.com/free-vector/online-meetup-abstract-concept-vector-illustration-conference-call-join-meetup-group-video-call-online-service-distance-communication-informal-meeting-members-networking-abstract-metaphor_335657-2920.jpg?w=740&t=st=1696415915~exp=1696416515~hmac=b068cad8fea3c17f98dc7e7a8e61491974abfe2f2cfacc981b09d8f9e7cb82ee"
                          alt=""
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          src="https://img.freepik.com/free-vector/flat-man-work-from-home-have-online-videoconference_88138-814.jpg?w=1060&t=st=1696415986~exp=1696416586~hmac=9157b041f2049a705c9ec267bd52aa9666c76fe66aca98cdff9b79f638ece077"
                          alt=""
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                    </div>
                    <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          src="https://img.freepik.com/premium-vector/remote-negotiations-business-team-communication_241107-1076.jpg?w=996"
                          alt=""
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          src="https://img.freepik.com/free-vector/group-video-concept-illustration_114360-4952.jpg?w=740&t=st=1696416050~exp=1696416650~hmac=4f649b5d99a548d366f59fde5a20add5ae43dc44c044a39141b507dee6efc11d"
                          alt=""
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
             
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Home;
