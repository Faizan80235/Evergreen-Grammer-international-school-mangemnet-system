import React from 'react';
import { useForm } from 'react-hook-form';
import { footerContact, footerContactNum, navLinks } from '../constants';
import { FaAngleRight, FaArrowRight, FaEnvelope, FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

const Footer = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    mode: 'all',
  });

  return (
    <footer>
      <div className="col first-col">
        <h2>EVER<span style={{ color: '#003e07' }}>GREEN</span></h2>
        <p>
          EVERGREEN is a modern, forward-thinking institution based in Johar Town, Lahore. 
          We blend tradition with innovation to nurture future leaders through quality education, 
          practical skills, and strong moral values.
        </p>
      </div>

      <div className="col second-col">
        <h2>Links</h2>
        {navLinks.map((link) => (
          <ul key={link.id}>
            <li><FaAngleRight /> {link.id}</li>
          </ul>
        ))}
      </div>

      <div className="col third-col">
        <h2>Contact us</h2>
        <ul>
          <li>Johar Town, Lahore, Punjab, Pakistan</li>
        </ul>
        <div className="contNum">
          <ul>
            <li><div className="icon">📞</div>+92 316 1435800</li>
          </ul>
        </div>
      </div>

      <div className="col fourth-col">
        <h2>Get Informed</h2>
        <p>Subscribe to our newsletter</p>
        <form onSubmit={handleSubmit((data) => console.log(data))}>
          <FaEnvelope />
          <input
            type="email"
            placeholder="Enter your email address"
            {...register('email', {
              required: 'Email is required',
              pattern: {
                value:
                  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                message: 'Email must be valid',
              },
            })}
          />
          <button
            type="submit"
            style={{
              background: 'transparent',
              border: 'none',
              color: 'white',
              cursor: 'pointer',
            }}
          >
            <FaArrowRight />
          </button>
        </form>
        <p style={{ color: 'red' }}>{errors.email?.message}</p>
        <div className="icons">
          <NavLink to="https://www.facebook.com/profile.php?id=100073669704664" style={{ color: '#fff' }}><FaFacebook /></NavLink>
          <NavLink to="https://www.youtube.com/channel/UCMlYP5e33T_sZhaBNc-s0iQ" style={{ color: '#fff' }}><FaYoutube /></NavLink>
          <NavLink to="https://www.instagram.com/timothyolude/" style={{ color: '#fff' }}><FaInstagram /></NavLink>
          <NavLink to="/twitter" style={{ color: '#fff' }}><FaTwitter /></NavLink>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
