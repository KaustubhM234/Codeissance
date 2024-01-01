import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import Contact from "../Pages/Contact";
import Doctors from "../Pages/Doctors/Doctors";
import Login from "../Pages/Login";
import Signup from "../Pages/Signup";
import Services from "../Pages/Services";
import DoctorsDetails from "../Pages/Doctors/DoctorsDetails";
import Details from "../Components/details";
import Quiz from "../Components/quiz";
import MapComponent from "../Pages/Map";
import CertificateScan from "../Pages/CertificateScan";
import StudentDash from "../Dashboard/dashboardstud";
import Career from "../Pages/Career";
import Knowledge from "../Pages/Resources";
import TableWeb from "../Pages/Schemes";
import TeacherDash from "../Dashboard/teacherDash";
import Roomfront from "../Pages/Room/room_front";
import Room from "../Pages/Room/Room";
import AdminDash from "../Dashboard/admindash";
import CalendarDash from "../Pages/Calendar";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/doctors" element={<Doctors />} />
      <Route path="/doctors/:id" element={<DoctorsDetails />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/services" element={<Services />} />
      <Route path="/details" element={<Details />} />
      <Route path="/quiz" element={<Quiz />} />
      <Route path="/room_front" element={<Roomfront />} />
      <Route path="/maps" element={<MapComponent />} />
      <Route path="/reportscan" element={<CertificateScan />} />
      <Route path="/studentdash" element={<StudentDash />} />
      <Route path="/careers" element={<Career />} />
      <Route path="/schemes" element={<TableWeb />} />
      <Route path="/knowledge" element={<Knowledge />} />
      <Route path="/teacherdash" element={<TeacherDash />} />
      <Route path='/room/:roomID' element={<Room/>}></Route>
      <Route path='/admindash' element={<AdminDash/>}></Route>
      <Route path='/calendar' element={<CalendarDash/>}/>

    </Routes>
  );
};

export default Routers;
