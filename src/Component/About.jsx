import React from 'react'
import Abouts from '../Assets/Image/kvg_ayurved_medical_college_&_hospital_building.jpg'
function About() {
  return (
  <>
  <section style={{backgroundColor:"#E1F8DC"}} className='py-3' >
    <div className='container '>
    <h2 className='text-center '>About us</h2>
    <hr className="beautiful-hr"/>

    <div className='col-md-12 row d-flex '>

    <div className='col-md-6  '>
     <img src={Abouts} alt="" srcset=""  style={{borderRadius:"30px 0px 0px 0px"}} />
    </div>
    <div className='col-md-6 hover rounded-right shadow' style={{backgroundColor:"#ffff",borderRadius:"0px 0px 30px 0px"}}>
<p className='text-wrap mt-3  text-justify' >
K.V.G. Ayurveda Medical College & Hospital is located in Sullia Taluk, Dakshina Kannada, and Karnataka, sponsored by the Academy of Liberal Education (Reg.) Sullia, was established in the year 1996 under the able and dynamic leadership of its Founder President Sri. Kurunji Venkatramana Gowda. K.V.G. Ayurveda Medical College has highly qualified teaching and non-teaching staff. The institution provides Ayurveda education at the graduate and post graduate levels, regulated by the statutory apex body- the National Commission for Indian Systems of Medicine (N.C.I.S.M.), Delhi -and affiliated to the Rajiv Gandhi University of Health Science, Bangalore, Karnataka. All rules and regulations regarding eligibility for admission, Curriculum, Terms and Conditions, Attendance, fees payable for registration , migration of eligibility certificate, university and Medical examination, etc. are as prescribed by the Rajiv Gandhi University of Health Science, Karnataka, Bangalore.
</p>
    </div>
</div>
    </div>

</section>
  </>
  )
}

export default About
