import React from 'react';
import welcome from "../Assets/Image/welcome-word.avif"
const GetAddmission = () => {
  // Sample course options
  const courseOptions = [
    { value: 'bams', label: 'Bachelor of Ayurvedic Medicine and Surgery (BAMS)' },
    { value: 'md', label: 'Doctor of Medicine (MD) in Ayurveda' },
    { value: 'ms', label: 'Master of Surgery (MS) in Ayurveda' },
    { value: 'diploma', label: 'Diploma in Ayurvedic Medicine' },
  ];

  return (
    <div className="">
    

    
      <div className='container'>
      <h2 className=' text-center'> Book Your Sets</h2>
      <hr className="beautiful-hr"/>
      <div className=' w-50'  style={{marginLeft:"30%"}}>
        <div className='' >
        <form>

        <div className="">
          <label htmlFor="name" className="form-label ">Name</label>
          <input type="text" className="form-control border-2  border-black" id="name" placeholder="Enter your name" required />
        </div>
        <div className='col-md-12 d-flex'>
        <div className=" col-md-6">
          <label htmlFor="email" className="form-label ">Email</label>
          <input type="email" className=" form-control border-2 border-black" id="email" placeholder="Enter your email" required />
        </div>
        <div className=" col-md-6">
          <label htmlFor="Phone" className="form-label ">Phone</label>
          <input type="number" className=" form-control border-2 border-black" id="email" placeholder="Enter your Phone number" required />
        </div>
        </div>
         <div className='col-md-12 d-flex'>
            <div className="col-md-6"> 
           
          <label htmlFor="Addrese" className="form-label ">Addrese</label>
          <input type="text" className=" form-control border-2 border-black" id="email" placeholder="Enter your Addrese" required />
        
            </div>
            <div className="col-md-6">
            <label htmlFor="course" className="form-label ">Select Course</label>
          <select className="form-select border-2 border-black" id="course" required>
            <option value="">Choose...</option>
            {courseOptions.map((option, index) => (
              <option key={index} value={option.value}>{option.label}</option>
            ))}
          </select>
              
            </div>
         </div>
        <div className="">
        <label htmlFor="Massege" className="form-label ">Massege</label>
                <textarea name="" id="Massege" className='form-control border-2 border-black'></textarea>
        </div>
        <button type="submit" className="btn btn-primary my-2" style={{marginLeft:"40%"}}>Submit</button>
      </form>
</div>
{/* <div className='col-md-6'>
  <img src={welcome} alt=""width={"500vw"} />
</div> */}
        </div>
        
      </div>
      <div className="stars"></div> {/* Animation: Stars */}
    </div>
  );
};






export default GetAddmission