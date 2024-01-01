// import React from 'react'
// import './calendar.css';

// export default function calendar() {
//   return (
//     <div className='cal-body'>
//         <div class="container">
//       <div class="calendar">
//         <div class="front">
//           <div class="current-date">
//             <h1>Friday 15th</h1>
//             <h1>January 2016</h1>	
//           </div>

//           <div class="current-month">
//             <ul class="week-days">
//               <li>MON</li>
//               <li>TUE</li>
//               <li>WED</li>
//               <li>THU</li>
//               <li>FRI</li>
//               <li>SAT</li>
//               <li>SUN</li>
//             </ul>

//             <div class="weeks">
//               <div class="first">
//                 <span class="last-month">28</span>
//                 <span class="last-month">29</span>
//                 <span class="last-month">30</span>
//                 <span class="last-month">31</span>
//                 <span>01</span>
//                 <span>02</span>
//                 <span>03</span>
//               </div>

//               <div class="second">
//                 <span>04</span>
//                 <span>05</span>
//                 <span class="event">06</span>
//                 <span>07</span>
//                 <span>08</span>
//                 <span>09</span>
//                 <span>10</span>
//               </div>

//               <div class="third">
//                 <span>11</span>
//                 <span>12</span>
//                 <span>13</span>
//                 <span>14</span>
//                 <span class="active">15</span>
//                 <span>16</span>
//                 <span>17</span>
//               </div>

//               <div class="fourth">
//                 <span>18</span>
//                 <span>19</span>
//                 <span>20</span>
//                 <span>21</span>
//                 <span>22</span>
//                 <span>23</span>
//                 <span>24</span>
//               </div>

//               <div class="fifth">
//                 <span>25</span>
//                 <span>26</span>
//                 <span>27</span>
//                 <span>28</span>
//                 <span>29</span>
//                 <span>30</span>
//                 <span>31</span>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div class="back">
//           <input placeholder="What's the event?"/>
//           <div class="info">
//             <div class="date">
//               <p class="info-date">
//               Date: <span>Jan 15th, 2016</span>
//               </p>
//               <p class="info-time">
//                 Time: <span>6:35 PM</span>
//               </p>
//             </div>
//             <div class="address">
//               <p>
//                 Address: <span>129 W 81st St, New York, NY</span>
//               </p>
//             </div>
//             <div class="observations">
//               <p>
//                 Observations: <span>Be there 15 minutes earlier</span>
//               </p>
//             </div>
//           </div>

//           <div class="actions">
//             <button class="save">
//               Save <i class="ion-checkmark"></i>
//             </button>
//             <button class="dismiss">
//               Dismiss <i class="ion-android-close"></i>
//             </button>
//           </div>
//         </div>

//       </div>
//     </div>
//     </div>
//   )
// }
import React from 'react';
import './calendar.css';

export default function Calendar() {
  const sampleEvents = [
    {
      date: '2023-10-07',
      title: 'Special Sunday Event',
      time: '10:00 AM',
      address: '123 Main St, New York, NY',
      observations: 'Please bring your ID',
    },
    {
      date: '2023-10-15',
      title: 'Parent Meetiing',
      time: '2:30 PM',
      address: '456 Elm St, Los Angeles, CA',
      observations: 'Free refreshments provided',
    },
    {
      date: '2023-10-25',
      title: 'Tour',
      time: '2:30 PM',
      address: '456 Elm St, Los Angeles, CA',
      observations: 'Free refreshments provided',
    },
    {
      date: '2023-10-30',
      title: 'Parent Meetiing2',
      time: '2:30 PM',
      address: '456 Elm St, Los Angeles, CA',
      observations: 'Free refreshments provided',
    },
    // Add more sample events here
  ];

  return (
    <div className="calendar-container">
      <div className="cal-body">
        {/* Your existing calendar component */}
        {/* ... (Code for the calendar component you provided) */}
        <div className='cal-body'>
        <div class="container">
      <div class="calendar">
        <div class="front">
          <div class="current-date">
            <h1>Friday 15th</h1>
            <h1>January 2016</h1>	
          </div>

          <div class="current-month">
            <ul class="week-days">
              <li>MON</li>
              <li>TUE</li>
              <li>WED</li>
              <li>THU</li>
              <li>FRI</li>
              <li>SAT</li>
              <li>SUN</li>
            </ul>

            <div class="weeks">
              <div class="first">
                <span class="last-month">28</span>
                <span class="last-month">29</span>
                <span class="last-month">30</span>
                <span class="last-month">31</span>
                <span>01</span>
                <span>02</span>
                <span>03</span>
              </div>

              <div class="second">
                <span>04</span>
                <span>05</span>
                <span class="event">06</span>
                <span>07</span>
                <span>08</span>
                <span>09</span>
                <span>10</span>
              </div>

              <div class="third">
                <span>11</span>
                <span>12</span>
                <span>13</span>
                <span>14</span>
                <span class="active">15</span>
                <span>16</span>
                <span>17</span>
              </div>

              <div class="fourth">
                <span>18</span>
                <span>19</span>
                <span>20</span>
                <span>21</span>
                <span>22</span>
                <span>23</span>
                <span>24</span>
              </div>

              <div class="fifth">
                <span>25</span>
                <span>26</span>
                <span>27</span>
                <span>28</span>
                <span>29</span>
                <span>30</span>
                <span>31</span>
              </div>
            </div>
          </div>
        </div>

        <div class="back">
          <input placeholder="What's the event?"/>
          <div class="info">
            <div class="date">
              <p class="info-date">
              Date: <span>Jan 15th, 2016</span>
              </p>
              <p class="info-time">
                Time: <span>6:35 PM</span>
              </p>
            </div>
            <div class="address">
              <p>
                Address: <span>129 W 81st St, New York, NY</span>
              </p>
            </div>
            <div class="observations">
              <p>
                Observations: <span>Be there 15 minutes earlier</span>
              </p>
            </div>
          </div>

          <div class="actions">
            <button class="save">
              Save <i class="ion-checkmark"></i>
            </button>
            <button class="dismiss">
              Dismiss <i class="ion-android-close"></i>
            </button>
          </div>
        </div>

      </div>
    </div>
    </div>
      </div>
      <div className="event-list mx-3" style={{    backgroundColor: "aquamarine"}}
      >
        <h2>Upcoming Events</h2>
        <ul>
          {sampleEvents.map((event, index) => (
            <li key={index}>
              <strong>{event.date}</strong>: {event.title}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
