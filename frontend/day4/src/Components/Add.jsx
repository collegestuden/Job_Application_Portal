// // JobApplicationForm.jsx

// import { useState } from 'react';
// import '../style/Add.css'; // Import the CSS file

// const JobApplicationForm = () => {
//   const [jobName, setJobName] = useState('');
//   const [jobLocation, setJobLocation] = useState('');
//   const [applyStartDate, setApplyStartDate] = useState('');
//   const [applyEndDate, setApplyEndDate] = useState('');
//   const [salaryExpectation, setSalaryExpectation] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log('Form submitted:', {
//       jobName,
//       jobLocation,
//       applyStartDate,
//       applyEndDate,
//       salaryExpectation,
//     });
//     // Add logic to send data to the server or perform any other actions
//   };

//   return (
//     <div className="job-application-form-container">
//       <h2>Add a Jobs</h2>
//       <form onSubmit={handleSubmit}>
//         <label>
//           Job Name:
//           <input
//             type="text"
//             value={jobName}
//             onChange={(e) => setJobName(e.target.value)}
//             required
//           />
//         </label>
//         <br />

//         <label>
//           Job Location:
//           <input
//             type="text"
//             value={jobLocation}
//             onChange={(e) => setJobLocation(e.target.value)}
//             required
//           />
//         </label>
//         <br />

//         <label>
//           Job Apply Start Date:
//           <input
//             type="date"
//             value={applyStartDate}
//             onChange={(e) => setApplyStartDate(e.target.value)}
//             required
//           />
//         </label>
//         <br />

//         <label>
//           Job Apply End Date:
//           <input
//             type="date"
//             value={applyEndDate}
//             onChange={(e) => setApplyEndDate(e.target.value)}
//             required
//           />
//         </label>
//         <br />

//         <label>
//           Salary Expectation:
//           <input
//             type="text"
//             value={salaryExpectation}
//             onChange={(e) => setSalaryExpectation(e.target.value)}
//             required
//           />
//         </label>
//         <br />

//         <button className="plm"type="submit">Submit</button>
//       </form>
//     </div>
//   );
// };

// export default JobApplicationForm;


import { useState } from 'react';
import '../style/Add.css'; // Import your CSS file
import Nav from './Nav';

const AdminJob = () => {
  const initialJobs = [
    { id: 1, name: 'Job A', location: 'City A', salary: '$80,000' },
    { id: 2, name: 'Job B', location: 'City B', salary: '$70,000' },
    { id: 3, name: 'Job C', location: 'City C', salary: '$60,000' },
  ];

  const [jobs, setJobs] = useState(initialJobs);
  const [newJob, setNewJob] = useState({ name: '', location: '', salary: '' });
  const [editingJobId, setEditingJobId] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewJob((prevJob) => ({ ...prevJob, [name]: value }));
  };

  const addJob = () => {
    setJobs((prevJobs) => [...prevJobs, { ...newJob, id: prevJobs.length + 1 }]);
    setNewJob({ name: '', location: '', salary: '' });
  };

  const editJob = (id) => {
    setEditingJobId(id);
    const jobToEdit = jobs.find((job) => job.id === id);
    setNewJob(jobToEdit);
  };

  const updateJob = () => {
    setJobs((prevJobs) =>
      prevJobs.map((job) => (job.id === editingJobId ? newJob : job))
    );
    setEditingJobId(null);
    setNewJob({ name: '', location: '', salary: '' });
  };

  const deleteJob = (id) => {
    setJobs((prevJobs) => prevJobs.filter((job) => job.id !== id));
  };

  return (
    <div className="admin-job-container">
      <Nav/>
      <center>
        <h2 className='pinn'>Job Management</h2>
      </center>
      <br></br>
      <br></br>
      <br></br>
      <table className="job-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Location</th>
            <th>Salary</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {jobs.map((job) => (
            <tr key={job.id}>
              <td>{job.id}</td>
              <td>{job.name}</td>
              <td>{job.location}</td>
              <td>{job.salary}</td>
              <td>
                <button className="erf" onClick={() => editJob(job.id)}>Edit</button>
                <button className="ern" onClick={() => deleteJob(job.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="add-job-form">
        <input
          type="text"
          placeholder="Name"
          name="name"
          value={newJob.name}
          onChange={handleInputChange}
        />
        <input
          type="text"
          placeholder="Location"
          name="location"
          value={newJob.location}
          onChange={handleInputChange}
        />
        <input
          type="text"
          placeholder="Salary"
          name="salary"
          value={newJob.salary}
          onChange={handleInputChange}
        />
        {editingJobId ? (
          <button className="update-btn" onClick={updateJob}>
            Update Job
          </button>
        ) : (
          <button className="add-btn" onClick={addJob}>
            Add Job
          </button>
        )}
      </div>
    </div>
  );
};

export default AdminJob;
