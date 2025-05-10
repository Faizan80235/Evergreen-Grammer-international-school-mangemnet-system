import React from 'react';
import { FaLocationArrow, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';

const ContactAddress = () => {
  return (
    <div className="address">
        <div className="add">
          <div className="icon">
            <FaMapMarkerAlt />
          </div>
          <p>Johar Town, Lahore, <br />Punjab, Pakistan</p>
        </div>
        <div className="add">
          <div className="icon">
            <FaPhone />
          </div>
          <p>+92 316 1435800</p>
        </div>
        <div className="add">
          <div className="icon">
            <FaLocationArrow />
          </div>
          <p>school-coe@edu.ng</p>
        </div>
    </div>
  )
}

export default ContactAddress;
