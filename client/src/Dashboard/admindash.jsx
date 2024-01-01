import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function AdminDashboard() {
    const [teachers, setTeachers] = useState([]);

    useEffect(() => {
        // Fetch the list of teachers when the component mounts
        async function fetchTeachers() {
            try {
                const response = await axios.get('http://localhost:8000/api/teachers');
                setTeachers(response.data.data);
            } catch (error) {
                console.error('Error fetching teachers:', error);
            }
        }

        fetchTeachers();
    }, []);

    const [students, setStudents] = useState([]);

  useEffect(() => {
    // Fetch student details when the component mounts
    async function fetchStudents() {
      try {
        const response = await axios.get("http://localhost:8000/api/students");
        setStudents(response.data.data);
      } catch (error) {
        console.error("Error fetching students:", error);
      }
    }

    fetchStudents();
  }, []);

    const handleApproveClick = async (teacherId) => {
        try {
            // Update the approval status of the teacher
            await axios.put(`/api/teachers/${teacherId}`, { isApproved: true });

            // Update the approval status of the teacher in the state
            setTeachers((prevTeachers) =>
                prevTeachers.map((teacher) =>
                    teacher._id === teacherId ? { ...teacher, isApproved: true } : teacher
                )
            );
        } catch (error) {
            console.error('Error approving teacher:', error);
        }
    };

    return (
        <div className="flex flex-col md:flex-row">
            <div className="bg-gray-800 h-screen w-64 flex flex-col items-center py-6 text-white">
                <div className="text-2xl font-semibold mb-8">SAKSHAM</div>
                <ul className="flex flex-col items-start space-y-4">
                    <li className="hover:text-gray-300 transition duration-300">
                        <a href="/admindash">
                            <i className="zmdi zmdi-widgets mr-2"></i>Dashboard
                        </a>
                    </li>
                    <li className="hover:text-gray-300 transition duration-300">
                        <a href="/calendar">
                            <i className="zmdi zmdi-widgets mr-2"></i>Calendar
                        </a>
                    </li>
                    {/* Add other menu items as needed */}
                </ul>
            </div>

            <div className="flex-1 p-6" style={{ backgroundColor: "#d6e6f4" }}>
                {/* Add your dashboard content here */}
                <div className="card-list" style={{ marginBottom: "8px" }}>
                    {/* Display overall user statistics */}
                </div>
                <div className="projects mb-4" style={{ borderRadius: "10px", boxShadow: "rgb(0 0 0 / 77%) 0px 4px 8px" }}>
                    <div className="projects-inner">
                        <header className="projects-header">
                            <div className="title">Teacher's Data:</div>
                            <div className="count">{teachers.length} teachers</div>
                            <i className="zmdi zmdi-download"></i>
                        </header>
                        <table className="projects-table">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Specialization</th>
                                    <th>Experience</th>
                                    <th>Approval status</th>
                                    <th>Contact</th>
                                </tr>
                            </thead>
                            <tbody>
                                {teachers.map((teacher) => (
                                    <tr key={teacher._id}>
                                        <td className="member">
                                            <figure>
                                                <img src={teacher.profileImageUrl} alt={teacher.name} />
                                            </figure>
                                            <div className="member-info">

                                            </div>
                                        </td>
                                        <td>
                                            <p>{teacher.specialization}</p>
                                            <p className="text-danger">{teacher.institution}</p>
                                        </td>
                                        <td>
                                            <p>{teacher.experience} yrs</p>
                                        </td>
                                        <td>
                                            {teacher.isApproved ? (
                                                <span>Approved</span>
                                            ) : (
                                                <button
                                                    className="btn btn-outline-success"
                                                    onClick={() => handleApproveClick(teacher._id)}
                                                >
                                                    Approve
                                                </button>
                                            )}
                                        </td>
                                        <td>
                                            <p>{teacher.contact}</p>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        <header className="projects-header">
                            <div className="title">Student's Data:</div>
                            <div className="count">{students.length} students</div>
                            <i className="zmdi zmdi-download"></i>
                        </header>
                        <table className="projects-table">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Disability Type</th>
                                    <th>Age</th>
                                    <th>Approval status</th>
                                    <th>Contact</th>
                                </tr>
                            </thead>
                            <tbody>
                                {students.map((students) => (
                                    <tr key={students._id}>
                                        <td className="member">
                                            <figure>
                                                <img src={students.profileImageUrl} alt={students.name} />
                                            </figure>
                                            <div className="member-info">
                                                
                                            </div>
                                        </td>
                                        <td>
                                            <p>{students.disabilityType}</p>
                                            <p className="text-danger">{students.age}</p>
                                        </td>
                                        <td>
                                            <p>{students.certificate_number} yrs</p>
                                        </td>
                                        <td>
                                            {students.isApproved ? (
                                                <span>Approved</span>
                                            ) : (
                                                <button
                                                    className="btn btn-outline-success"
                                                    onClick={() => handleApproveClick(students._id)}
                                                >
                                                    Approve
                                                </button>
                                            )}
                                        </td>
                                        <td>
                                            <p>{students.contact}</p>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}
