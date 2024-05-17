import React from 'react'
import c1 from "../Assets/Image/images.jpeg"
import c2 from "../Assets/Image/1697204319422.jpeg"
function Course() {
    return (
        <div className='py-3' style={{ backgroundColor: "#E1F8DC" }}>
            <div className='container'>
                <div className='justify-content-center'>
                    <h2 className=' text-capitalize text-center '>Course Offerd</h2>
                    <hr className="beautiful-hr"/>
                </div>
                <div className='col-md-12 d-flex row py-3 '>
                    <div className="col-md-6 hover" style={{backgroundColor:"#ffff",borderRadius:"30px 0px 30px 0px" ,width:"20rem"}}>
                        <div className="" style={{ width: '20rem' ,borderRadius:"0px 0px 30px 0px"}} >
                            <img src={c1} className="card-img-top  ms-5 py-3" style={{  width: '200px', justifySelf:"center",
      height: '200px',
      objectFit: 'cover'}} alt="..."/>
                            <div className="card-body justify-content-center">
                                <p className="card-text text-nowrap text-center">bachelor degree in Ayurveda (BAMS)</p>
                                <a href="" className='btn btn-primary mb-3 ' style={{marginLeft:"100px"}}>Leran about </a>
                            </div>
                   
                        </div>
                    </div>
                    <div className="col-md-6 hover ms-4" style={{backgroundColor:"#ffff",borderRadius:"30px 0px 30px 0px" ,width:"20rem"}}>
                    <div className="" style={{ width: '20rem' }}>
                            <img src={c2} className="card-img-top  ms-5 py-3 text-center" alt="..."   style={{  width: '200px', justifySelf:"center",
                     height: '200px',
                      objectFit: 'cover'}}/>
                            <div className="card-body">
                                <p className="card-text text-nowrap text-center"> Post Graduation (MD)</p>
                                <a href="" className='btn btn-primary mb-3 ' style={{marginLeft:"100px"}}>Leran about </a>
                            </div>
                        </div>
                    </div>
                  
                </div>
            </div>
        </div>
    )
}

export default Course
