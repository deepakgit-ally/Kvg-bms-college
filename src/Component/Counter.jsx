
import React, { useState, useEffect } from 'react';
import {faServer}from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
function Counter() {
  const [studentsCount, setStudentsCount] = useState(0);
  const [coursesCount, setCoursesCount] = useState(0);
  const [eventsCount, setEventsCount] = useState(0);
  const [trainersCount, setTrainersCount] = useState(0);

  useEffect(() => {
    const maxCounts = {
      students: 1000,
      courses: 32,
      events: 42,
      trainers: 24
    };

    const incrementCounts = () => {
      let step = 1;
      const interval = 100 / Object.keys(maxCounts).length; // 5000ms = 5 seconds

      const intervalId = setInterval(() => {
        setStudentsCount((prevCount) =>
          prevCount < maxCounts.students ? prevCount + step : maxCounts.students
        );
        setCoursesCount((prevCount) =>
          prevCount < maxCounts.courses ? prevCount + step : maxCounts.courses
        );
        setEventsCount((prevCount) =>
          prevCount < maxCounts.events ? prevCount + step : maxCounts.events
        );
        setTrainersCount((prevCount) =>
          prevCount < maxCounts.trainers ? prevCount + step : maxCounts.trainers
        );
      }, interval);

      // Clear interval after 5 seconds
      setTimeout(() => {
        clearInterval(intervalId);
      }, 100000);
    };

    incrementCounts();

    // Clean up function to remove event listeners or clear timeouts/intervals if necessary
    return () => {
      // Clean up logic if needed
    };
  }, []); // Empty dependency array ensures this effect runs only once on mount

  return (
    <div>
      <section id="counts" className="section counts mt-4">
        <div className="container" data-aos="fade-up" data-aos-delay="100">
          <div className="row gy-4">
            <div className="col-lg-3 col-md-6">
              <div className="stats-item text-center w-100 h-100">
              <p className="">Students</p>
                <span className="purecounter ">{studentsCount}</span>
              
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="stats-item text-center w-100 h-100">
              <p className="">Courses</p>
                <span className="purecounter ">{coursesCount}</span>
             
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="stats-item text-center w-100 h-100">
              <p className="">Events</p>
                <span className="purecounter ">{eventsCount}</span>
             
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="stats-item text-center w-100 h-100">
              <p className="">Trainers</p>
                <span className="purecounter ">{trainersCount}</span>
               
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="why-us" className="section why-us">

<div className="container">

  <div className="row gy-4">

    <div className="col-lg-4" data-aos="fade-up" data-aos-delay="100">
      <div className="why-box">
        <h3>Why Choose K.V.G. Ayurveda Medical College ?</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit
          Asperiores dolores sed et. Tenetur quia eos. Autem tempore quibusdam vel necessitatibus optio ad corporis.
        </p>
        <div className="text-center">
          <a href="#" className="more-btn"><span>Learn More</span> <i className="bi bi-chevron-right"></i></a>
        </div>
      </div>
    </div>

    <div className="col-lg-8 d-flex align-items-stretch">
      <div className="row gy-4" data-aos="fade-up" data-aos-delay="200">

        <div className="col-xl-4">
          <div className="icon-box d-flex flex-column justify-content-center align-items-center">
            <FontAwesomeIcon icon={faServer} className='icons'/>
            <h4>Corporis voluptates officia eiusmod</h4>
            <p>Consequuntur sunt aut quasi enim aliquam quae harum pariatur laboris nisi ut aliquip</p>
          </div>
        </div>

        <div className="col-xl-4" data-aos="fade-up" data-aos-delay="300">
          <div className="icon-box d-flex flex-column justify-content-center align-items-center">
            <i className="bi bi-gem icons"></i>
            <h4>Ullamco laboris ladore pan</h4>
            <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt</p>
          </div>
        </div>

        <div className="col-xl-4" data-aos="fade-up" data-aos-delay="400">
          <div className="icon-box d-flex flex-column justify-content-center align-items-center">
            <i className="bi bi-inboxes icons"></i>
            <h4>Labore consequatur incidid dolore</h4>
            <p>Aut suscipit aut cum nemo deleniti aut omnis. Doloribus ut maiores omnis facere</p>
          </div>
        </div>

      </div>
    </div>

  </div>

</div>

</section>
    </div>
  );
}

export default Counter;
