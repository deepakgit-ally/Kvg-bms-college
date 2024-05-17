// GetInTouchForm.js
import React from 'react';
import { Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import image from "../Assets/Image/WhatsApp Image 2024-05-14 at 16.08.00_32655242.jpg"
const GetInTouch = () => {
  return (
    <div style={{ backgroundColor: "#F5D4B9" }}>
      <div className=" container " >
        <h2 className="text-center">Get in Touch</h2>
        <hr className="beautiful-hr" />
        <div className="col-md-12 d-flex">
          <div className="form-container col-md-6">
            <h3 className='text-center'>Fill The from for callBack</h3>
            <Form className='ms-3'>
              <Form.Group className="mb-3" controlId="name">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Enter your name"  className='border-2 border-black'/>
              </Form.Group>

              <Form.Group className="mb-3" controlId="email">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="name@example.com"  className='border-2 border-black' />
              </Form.Group>

              <Form.Group className="mb-3" controlId="contact">
                <Form.Label>Contact Number</Form.Label>
                <Form.Control type="tel" placeholder="Enter your contact number"  className='border-2 border-black' />
              </Form.Group>
              <Form.Group className="mb-3" controlId="contact">
                <Form.Label>Loction</Form.Label>
                <Form.Control type="text" placeholder="Enter your contact number"   className='border-2 border-black'/>
              </Form.Group>


              <Form.Group className="mb-3" controlId="contact">
                <Form.Label>Write your Message</Form.Label>
                <Form.Control as="textarea" rows={3} placeholder="Enter your message"   className='border-2 border-black'/>
              </Form.Group>

            </Form>
            <Button variant="primary" type="submit" style={{ marginLeft: "40%" }}>
              Submit
            </Button>
          </div>
          <div className="col-md-6">
            <img src={image} alt="" width={"100%"} />
          </div>
        </div>
      </div>
    </div>




  );
};

export default GetInTouch;
