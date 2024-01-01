import { useState, useEffect } from 'react';
import axios from 'axios';
import { useCookies } from 'react-cookie';
import { toast } from 'react-toastify';
import { Link, useNavigate } from "react-router-dom";

const CertificateScan = () => {
  const [image, setImage] = useState(null);
  const [result, setResult] = useState('');
  const [extractedData, setExtractedData] = useState(null); // State to store extracted data
  const [cookies] = useCookies(['authToken']);
  const [percentage, setPercentage] = useState('50%');
  const navigate = useNavigate();

  useEffect(() => {
    if (!cookies.authToken) {
      // Handle the case when the user is not authenticated
      // You can redirect the user to the login page or display a message
      console.log('User is not authenticated.');
    }
  }, [cookies.authToken]);

  const handleReportUpload = async (e) => {
    const authToken = cookies.authToken;
    const formData = new FormData();
    formData.append('image', e.target.files[0]);

    try {
      const response = await axios.post(
        'http://localhost:5000/api/Scan-repo',
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
            Authorization: authToken, // Include the auth token in the request header
          },
        }
      );

      if (response.status === 200) {
        console.log(response.data);

        // Assuming the response contains the extracted data
        const { name, gender, age, certificate_number, disability_type } = response.data;

        // Set the extracted data to display below the form
        setExtractedData({
          name,
          gender,
          age,
          certificate_number,
          disability_type,
        });

        // Create a new StudentProfile document
        const studentProfileData = {
          user: cookies.authToken.userId, // Use the user id from cookies
          age,
          certificate_number,
          disability_type,
          percentage,
        };

        // Send a POST request to create the StudentProfile
        const headers = { Authorization: `Bearer ${cookies.authToken}` };
        const studentProfileResponse = await axios.post(
          'http://localhost:8000/api/student-profile', // Replace with your API endpoint
          studentProfileData,
          { headers }
        );

        if (studentProfileResponse.status === 201) {
          console.log('StudentProfile created successfully.');
          toast.success("Profile Updated");
          // Navigate to the student dashboard upon successful upload
         } else {
          console.error('Error creating StudentProfile.');
          // Handle the error, display a message, or redirect as needed
        }
      } else {
        console.error('Error uploading Report:', response.data);
        // Handle the error, display a message, or redirect as needed
      }
    } catch (error) {
      console.error('Error uploading Report:', error);
      // Handle the error, display a message, or redirect as needed
    }
  };

  return (
    <div>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100" style={{ backgroundColor: "antiquewhite" }}>
        <div className="bg-white p-8 rounded shadow-lg">
          <h1 className="text-3xl font-semibold mb-4 text-center">PWD Certificate Uploader</h1>

          <div className="mb-6">
            <input
              type="file"
              accept="image/*"
              onChange={handleReportUpload}
              className="border p-3 rounded w-full"
            />
          </div>

          {result && (
            <div className="mt-4 text-center">
              <h2 className="text-xl font-semibold mb-2">Selected File:</h2>
              <p className="text-gray-700">{result.name}</p>
            </div>
          )}

          {/* Display the extracted data */}
          {extractedData && (
            <div className="mt-4">
              <h2 className="text-xl font-semibold mb-2">Extracted Data:</h2>
              <p>Name: {extractedData.name}</p>
              <p>Gender: {extractedData.gender}</p>
              <p>Age: {extractedData.age}</p>
              <p>Certificate Number: {extractedData.certificate_number}</p>
              <p>Disability Type: {extractedData.disability_type}</p>
            </div>
          )}
          <button
          onClick={() => navigate('/studentdash')} // Corrected the navigation code
          className="bg-primaryColor py-2 px-6 text-white font-[600] h-[44px] flex items-center justify-center rounded-[50px] md:ml-4"
        >
          Go to Dashboard
        </button>
        </div>
        
      </div>
    </div>
  );
};

export default CertificateScan;
