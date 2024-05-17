import React from 'react';
import image from "../Assets/Image/hand.avif"

const Enquery = () => {
  // Sample course options
  const courseOptions = [
    { value: 'bams', label: 'Bachelor of Ayurvedic Medicine and Surgery (BAMS)' },
    { value: 'md', label: 'Doctor of Medicine (MD) in Ayurveda' },
    { value: 'ms', label: 'Master of Surgery (MS) in Ayurveda' },
    { value: 'diploma', label: 'Diploma in Ayurvedic Medicine' },
  ];

  return (
    <div className="container">



      <div className=''>
        <h2 className=' text-center'>Admission Enquiry Form</h2>
        <hr className="beautiful-hr" />
        <div className=' col-md-12 d-flex'  >
        <div className="col-md-6">
          <img src={image} alt="" srcset=""style={{width:"100%" }}/>
          </div>
          <div className='col-md-6 ' >
            <form>
              <div className="">
                <label htmlFor="name" className="form-label ">Name</label>
                <input type="text" className="form-control border-2 border-black" id="name" placeholder="Enter your name" required />
              </div>
              <div className='col-md-12 d-flex gap-1'>
                <div className="col-md-6">
                  <label htmlFor="email" className="form-label ">Email</label>
                  <input type="email" className="form-control border-2 border-black" id="email" placeholder="Enter your email" required />
                </div>
                <div className="col-md-6">
                  <label htmlFor="Phone" className="form-label ">Phone</label>
                  <input type="number" className="form-control border-2 border-black" id="Phone" placeholder="Enter your Phone no" required />
                </div>
              </div>

              <div className="">
                <label htmlFor="course" className="form-label ">Select Course</label>
                <select className="form-select border-2 border-black" id="course" required>
                  <option value="" className='border-2 border-black'>Choose...</option>
                  {courseOptions.map((option, index) => (
                    <option key={index} value={option.value}>{option.label}</option>
                  ))}
                </select>
              </div>
              <div className="">
                <label htmlFor="comment" className="form-label "> write your comment</label>
                <textarea name=" write your comment" className="form-control border-2 border-black" id="comment"></textarea>
              </div>
              <button type="submit" className="btn btn-primary my-2" style={{ marginLeft: "40%" }}>Submit</button>
            </form>
          </div>
          
        </div>

      </div>

    </div>
  );
};




export default Enquery