import React from 'react';


const Facilities = () => {
  // Sample facilities data
  const facilitiesData = [
    { name: 'Herbal Garden', description: 'A collection of various medicinal plants used in Ayurvedic treatments.' },
    { name: 'Well-equipped Labs', description: 'State-of-the-art laboratories for practical learning and research.' },
    { name: 'Library', description: 'A vast repository of Ayurveda literature and modern medical texts.' },
    { name: 'Yoga Center', description: 'Facilities for yoga and meditation sessions to promote holistic wellness.' },
    { name: 'Treatment Center', description: 'Clinic offering Ayurvedic treatments and therapies.' },
  ];

  return (
    <div className='container'>
     
     <h2 className=' text-center'> Facilities</h2>
      <hr className="beautiful-hr"/>
      <div className="facilities-container ">
   
        {facilitiesData.map((facility, index) => (
          <div key={index} className="facility-card">
            <h3>{facility.name}</h3>
            <p>{facility.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Facilities;
