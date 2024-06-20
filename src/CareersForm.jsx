import React, { useState } from "react";

const CareersForm = () => {
  const [addForm, setAddForm] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    gender: "",
    phone: "",
    address: "",
    applyingFor: "",
    resume: null,
    coverLetter: "",
    githubLink: "",
    linkedinProfile: "",
    website: "",
    experience: "",
    currctc: "",
    exctc: "",
    noticeperiod: "",
    additionalInfo: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData({
      ...formData,
      resume: file,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setFormData({
      fullName: "",
      email: "",
      password: "",
      gender: "",
      phone: "",
      address: "",
      applyingFor: "",
      resume: null,
      coverLetter: "",
      githubLink: "",
      linkedinProfile: "",
      website: "",
      experience: "",
      currctc: "",
      exctc: "",
      noticeperiod: "",
      additionalInfo: "",
    });
  };

  return (
    <div className="careers-form-container">
      <button className="btn" onClick={() => setAddForm(!addForm)}>
        Sign Up
      </button>
      {addForm && (
        <>
          <div className="container">
            <h1 style={{ textAlign: "center" }}>Apply for a Position</h1>
            <form onSubmit={handleSubmit} className="careers-form">
              <div className="form-group">
                <label htmlFor="fullName">Full Name</label>
                <br />
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <br />
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <br />
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="gender">Gender</label>
                <br />
                <select
                  id="gender"
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select</option>
                  <option value="option1">Male</option>
                  <option value="option2">Female</option>
                  <option value="option3">Others</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone</label>
                <br />
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="address">Address</label>
                <br />
                <textarea
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  rows={4}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="applyingFor">Applying For</label>
                <br />
                <select
                  id="applyingFor"
                  name="applyingFor"
                  value={formData.applyingFor}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select a position</option>
                  <option value="position1">Full Stack Developer</option>
                  <option value="position2">Software Developer</option>
                  <option value="position3">Sales Manager</option>
                  <option value="position4">Human Resource</option>
                  <option value="position5">
                    Product Development Engineer
                  </option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="resume">Upload Resume</label>
                <br />
                <input
                  type="file"
                  id="resume"
                  name="resume"
                  accept=".pdf,.doc,.docx"
                  onChange={handleFileChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="githubLink">Github Profile</label>
                <br />
                <input
                  type="url"
                  id="githubLink"
                  name="githubLink"
                  value={formData.githubLink}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="linkedinProfile">Linkedin Profile</label>
                <br />
                <input
                  type="url"
                  id="linkedinProfile"
                  name="linkedinProfile"
                  value={formData.linkedinProfile}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="website">Website</label>
                <br />
                <input
                  type="url"
                  id="website"
                  name="website"
                  value={formData.website}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="coverLetter">Cover Letter</label>
                <br />
                <textarea
                  id="coverLetter"
                  name="coverLetter"
                  value={formData.coverLetter}
                  onChange={handleChange}
                  rows={8}
                />
              </div>
              <div className="form-group">
                <label htmlFor="experience">Experience</label>
                <br />
                <input
                  type="number"
                  id="experience"
                  name="experience"
                  value={formData.experience}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="currctc">Current CTC</label>
                <br />
                <input
                  type="text"
                  id="currctc"
                  name="currctc"
                  value={formData.currctc}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="exctc">Expected CTC</label>
                <br />
                <input
                  type="text"
                  id="exctc"
                  name="exctc"
                  value={formData.exctc}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="noticeperiod">Notice Period</label>
                <br />
                <input
                  type="text"
                  id="noticeperiod"
                  name="noticeperiod"
                  value={formData.noticeperiod}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="additionalInfo">Additional Information</label>
                <br />
                <textarea
                  id="additionalInfo"
                  name="additionalInfo"
                  value={formData.additionalInfo}
                  onChange={handleChange}
                  rows={5}
                />
              </div>
              <button
                type="submit"
                className="submit"
                onClick={() => alert("Successfully Applied")}
              >
                Submit
              </button>
            </form>
          </div>
        </>
      )}
    </div>
  );
};

export default CareersForm;
