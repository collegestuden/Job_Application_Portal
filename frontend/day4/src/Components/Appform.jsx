// AppForm.jsx

import { useState } from 'react';
import '../style/AppForm.css'; // Import the CSS file

const AppForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    address: '',
    employmentType: 'full-time',
    resume: '',
    education: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({
      firstName: '',
    
      email: '',
      phoneNumber: '',
      address: '',
      employmentType: 'full-time',
      resume: '',
      education: '',
    });
  };

  return (
    <div className="app-form-container">
      <div className="app-form">
        <h1 className="juiop">Job Application Form</h1>
        <form onSubmit={handleSubmit}>
          <label className="form-label">
            First Name:
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
              className="form-input"
            />
          </label>

          

          <label className="form-label">
            Email:
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="form-input"
            />
          </label>

          <label className="form-label">
            Phone Number:
            <input
              type="tel"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              required
              className="form-input"
            />
          </label>

          <label className="form-label">
            Address:
            <textarea
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
              className="form-input"
            ></textarea>
          </label>

          <label className="form-label">
            Employment Type:
            <select
              name="employmentType"
              value={formData.employmentType}
              onChange={handleChange}
              className="form-input"
            >
              <option value="full-time">Full Time</option>
              <option value="part-time">Part Time</option>
              <option value="seasonal">Seasonal</option>
            </select>
          </label>

          <label className="form-label">
            Resume (PDF):
            <input
              type="file"
              accept=".pdf"
              name="resume"
              onChange={handleChange}
              required
              className="form-input"
            />
          </label>

          <label className="form-label">
            Education Details:
            <textarea
              name="education"
              value={formData.education}
              onChange={handleChange}
              required
              className="form-input"
            ></textarea>
          </label> 

         <center><button className="add-btn" type="submit" > 
            Submit
          </button>
          </center>
        </form>
        <div className="homy">
          <img src="https://s30876.pcdn.co/wp-content/uploads/Top-Tips-for-Job-Application-Forms-1170x630.jpg.optimal.jpg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default AppForm;
