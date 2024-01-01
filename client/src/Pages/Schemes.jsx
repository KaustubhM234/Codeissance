import React from 'react';
// import jsonData from './your-json-file.json'; // Adjust the path to your JSON file

const jsonData =[
    {
      "State ": {
         " UTs Name": "All State / UTs"
      },
      "Disability Type": "Hearing Impairment",
      "Scheme Name": "Chochlear Implant Surgery  under ADIP",
      "Disability Benefits Criteria": "40% Disability",
      "Type of Benefits": "Misc  Benefits",
      "Document Link": "https://www.swavlambancard.gov.in/schemes/viewscheme/scheme_document_1465124571_69952757"
   },
    {
      "State ": {
         " UTs Name": "Chhattisgarh"
      },
      "Disability Type": "Locomotor Disability",
      "Scheme Name": "Age Relaxation for Motorized Tricycle  ADIP Scheme",
      "Disability Benefits Criteria": "40% Disability",
      "Type of Benefits": "Misc  Benefits",
      "Document Link": "https://www.swavlambancard.gov.in/schemes/viewscheme/scheme_document_1465123117_1943412336"
   },
    {
      "State ": {
         " UTs Name": "Kerala"
      },
      "Disability Type": "Intellectual Disability",
      "Scheme Name": "Niramaya",
      "Disability Benefits Criteria": "40% Disability",
      "Type of Benefits": "Financial Assistance",
      "Document Link": "https://www.swavlambancard.gov.in/schemes/viewscheme/scheme_document_1474885393_1581060153"
   },
    {
      "State ": {
         " UTs Name": "Madhya Pradesh"
      },
      "Disability Type": "Blindness",
      "Scheme Name": "Nishashkt Vivah",
      "Disability Benefits Criteria": "60% Disability",
      "Type of Benefits": "Allowances",
      "Document Link": "https://www.swavlambancard.gov.in/schemes/viewscheme/scheme_document_1467626615_1090976529"
   },
    {
      "State ": {
         " UTs Name": "Puducherry"
      },
      "Disability Type": "Blindness,Cerebral Palsy,Chronic Neurological Conditions,Hearing Impairment,Hemophilia,Leprosy cured,Locomotor Disability,Low Vision,,,Multiple Sclerosis,Muscular Dystrophy,Parkinson's Disease,Short Stature/Dwarfism,Sickle Cell Disease,Specific Learning Disabilities,Speech and Language Disability",
      "Scheme Name": "ANNUAL TOUR FOR DIFFERENTLY ABLED PERSONS",
      "Disability Benefits Criteria": "40% Disability",
      "Type of Benefits": "Misc  Benefits",
      "Document Link": "https://www.swavlambancard.gov.in/schemes/viewscheme/scheme_document_1607428274_1622707927"
   },
    {
      "State ": {
         " UTs Name": "Puducherry"
      },
      "Disability Type": "Autism Spectrum Disorder,Blindness,Cerebral Palsy,Chronic Neurological Conditions,Hearing Impairment,Hemophilia,Intellectual Disability,Leprosy cured,Locomotor Disability,Low Vision,Mental Illness,,,Multiple Sclerosis,Muscular Dystrophy,Parkinson's Disease,Short Stature/Dwarfism,Sickle Cell Disease,Specific Learning Disabilities,Speech and Language Disability,Thalassemia",
      "Scheme Name": "FINANCIAL ASSISTANCE TO DIFFERENTLY ABLED PERSON",
      "Disability Benefits Criteria": "40% Disability",
      "Type of Benefits": "Financial Assistance",
      "Document Link": "https://www.swavlambancard.gov.in/schemes/viewscheme/scheme_document_1605781924_261174167"
   },
    {
      "State ": {
         " UTs Name": "Puducherry"
      },
      "Disability Type": "Acid Attack Victim,Autism Spectrum Disorder,Blindness,Cerebral Palsy,Chronic Neurological Conditions,Hearing Impairment,Hemophilia,Intellectual Disability,Leprosy cured,Locomotor Disability,Low Vision,Mental Illness,,,Multiple Sclerosis,Muscular Dystrophy,Parkinson's Disease,Short Stature/Dwarfism,Sickle Cell Disease,Specific Learning Disabilities,Speech and Language Disability,Thalassemia",
      "Scheme Name": "GRANT OF SCHOLARSHIP TO DIFFERENTLY ABLED STUDENTS",
      "Disability Benefits Criteria": "40% Disability",
      "Type of Benefits": "Education Benefit",
      "Document Link": "https://www.swavlambancard.gov.in/schemes/viewscheme/scheme_document_1607426200_642086272"
   },
    {
      "State ": {
         " UTs Name": "Puducherry"
      },
      "Disability Type": "Locomotor Disability",
      "Scheme Name": "FUEL SUBSIDY TO DIFFERENTLY ABLED PERSONS",
      "Disability Benefits Criteria": "40% Disability",
      "Type of Benefits": "Subsidy",
      "Document Link": "https://www.swavlambancard.gov.in/schemes/viewscheme/scheme_document_1607426600_215102293"
   },
    {
      "State ": {
         " UTs Name": "Puducherry"
      },
      "Disability Type": "Acid Attack Victim,Autism Spectrum Disorder,Blindness,Cerebral Palsy,Chronic Neurological Conditions,Hearing Impairment,Hemophilia,Intellectual Disability,Leprosy cured,Locomotor Disability,Low Vision,Mental Illness,,,Multiple Sclerosis,Muscular Dystrophy,Parkinson's Disease,Short Stature/Dwarfism,Sickle Cell Disease,Specific Learning Disabilities,Speech and Language Disability,Thalassemia",
      "Scheme Name": "FREE SUPPLY OF CLOTHING ITEMS",
      "Disability Benefits Criteria": "40% Disability",
      "Type of Benefits": "Financial Assistance",
      "Document Link": "https://www.swavlambancard.gov.in/schemes/viewscheme/scheme_document_1607427422_368612587"
   },
    {
      "State ": {
         " UTs Name": "Puducherry"
      },
      "Disability Type": "Blindness,Cerebral Palsy,Chronic Neurological Conditions,Hearing Impairment,Locomotor Disability,Low Vision,,",
      "Scheme Name": "SUPPLY OF PROSTHETIC APPLIANCES TO PwD",
      "Disability Benefits Criteria": "40% Disability",
      "Type of Benefits": "Misc  Benefits",
      "Document Link": "https://www.swavlambancard.gov.in/schemes/viewscheme/scheme_document_1607427862_1041368959"
   }
   ]

   const TableWeb = () => {
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-semibold mb-4">Schemes for Differently Abled Persons</h1>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-300">
            <thead>
              <tr className="bg-gray-200">
                <th className="px-6 py-3 text-left font-medium">State/UTs Name</th>
                <th className="px-6 py-3 text-left font-medium">Disability Type</th>
                <th className="px-6 py-3 text-left font-medium">Scheme Name</th>
                <th className="px-6 py-3 text-left font-medium">Disability Benefits Criteria</th>
                <th className="px-6 py-3 text-left font-medium">Type of Benefits</th>
                <th className="px-6 py-3 text-left font-medium">Document Link</th>
              </tr>
            </thead>
            <tbody>
              {jsonData.map((item, index) => (
                <tr key={index} className={index % 2 === 0 ? 'bg-gray-100' : ''}>
                  <td className="px-6 py-3">{item['State '][' UTs Name']}</td>
                  <td className="px-6 py-3">{item['Disability Type']}</td>
                  <td className="px-6 py-3">{item['Scheme Name']}</td>
                  <td className="px-6 py-3">{item['Disability Benefits Criteria']}</td>
                  <td className="px-6 py-3">{item['Type of Benefits']}</td>
                  <td className="px-6 py-3">
                    <a
                      href={item['Document Link']}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline"
                    >
                      View Document
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  };
  
  export default TableWeb;