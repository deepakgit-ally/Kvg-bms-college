import React from 'react'
import { useState } from 'react';
import l1 from '../Assets/Gallery/library1.jpg' 
import l2 from '../Assets/Gallery/library2.jpg'
import l3 from '../Assets/Gallery/library3.jpg'
import l4 from '../Assets/Gallery/library4.jpg'
import l5 from '../Assets/Gallery/library5.jpg'
import l6 from '../Assets/Gallery/library6.jpg'
import l7 from '../Assets/Gallery/library7.jpg'
import l8 from '../Assets/Gallery/library8.jpg'
import l9 from '../Assets/Gallery/library9.jpg'
import l10 from '../Assets/Gallery/library10.jpg'
import l11 from '../Assets/Gallery/library11.jpg'
import c1 from '../Assets/Gallery/college1.png'
import c2 from '../Assets/Gallery/college2.png'
import c3 from '../Assets/Gallery/college3.png'
import c4 from '../Assets/Gallery/college4.png'
import c5 from '../Assets/Gallery/college5.png'
import c6 from '../Assets/Gallery/college6.jpg'
import p1 from '../Assets/Gallery/placemnt1.jpg'
import p2 from '../Assets/Gallery/placement2.jpeg'
import p3 from '../Assets/Gallery/placemt5.png'
import p4 from '../Assets/Gallery/placement 3.jpeg'

function Gallery() {
    const [selectedSection, setSelectedSection] = useState('events');

    const sections = {
      events: [
     c3 ,l4 ,l6,p3,
      ],
      colleges: [
       c1,
       c2,
       c3,c4,c5,c6
      ],
      placements: [
       p1,p2,p3,p4
      ],
      library: [
       l1,
       l2,
       l3,
       l4,
       l5,
       l6,
       l7,
       l8,
       l9,
       l10,
       l11
      ]
    };
  
    const handleSectionClick = (section) => {
      setSelectedSection(section);
    };
  
    return (
        <div style={{background:"#FFFFFF" }}>
      <div style={styles.container} className='container mt-5'>
        <h2 style={styles.header} className=' text-center'>Our Gallery</h2>
        <hr className='beautiful-hr'/>
        <div style={styles.subNav}>
          {Object.keys(sections).map((section) => (
            <button
              key={section}
              style={styles.button}
              onClick={() => handleSectionClick(section)}
              className='btn btn-primary'
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </button>
          ))}
        </div>
        <div style={styles.gallery}>
          {sections[selectedSection].map((url, index) => (
            <img key={index} src={url} alt={selectedSection} style={styles.image} />
          ))}
        </div>
      </div>
      </div>
    );
  };
  
  const styles = {
    container: {
      fontFamily: 'Arial, sans-serif',
    
    },
    header: {
      fontSize: '2em',
      marginBottom: '2px'
    },
    subNav: {
      marginBottom: '20px',
      marginLeft:"28%"
    },
    button: {
      margin: '0 10px',
      padding: '10px 20px',
      fontSize: '1em',
      cursor: 'pointer'
    },
    gallery: {
      display: 'flex',
        
      flexWrap: 'wrap',
      gap: '10px'
    },
    image: {
      width: '200px',
      height: '200px',
      objectFit: 'cover'
    }
  };


export default Gallery