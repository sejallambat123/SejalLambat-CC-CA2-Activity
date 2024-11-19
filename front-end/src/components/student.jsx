import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Student() {
  const [studentid, setId] = useState('');
  const [studentname, setName] = useState('');
  const [studentaddress, setAddress] = useState('');
  const [mobile, setmobile] = useState('');
  const [students, setUsers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    (async () => await Load())();
  }, []);

  async function Load() {
    const result = await axios.get(
      'https://studentdetails-1-29rc.onrender.com/api/v1/student/getall'
    );
    setUsers(result.data);
    console.log(result.data);
  }

  async function save(event) {
    event.preventDefault();
    try {
      await axios.post('https://studentdetails-1-29rc.onrender.com/api/v1/student/save', {
        studentname: studentname,
        studentaddress: studentaddress,
        mobile: mobile,
      });
      alert('Student Registration Successfully');
      setId('');
      setName('');
      setAddress('');
      setmobile('');
      Load();
    } catch (err) {
      alert('User Registration Failed');
    }
  }

  async function editStudent(student) {
    setName(student.studentname);
    setAddress(student.studentaddress);
    setmobile(student.mobile);
    setId(student._id);
  }

  async function DeleteStudent(studentid) {
    await axios.delete('https://studentdetails-1-29rc.onrender.com/api/v1/student/delete/' + studentid);
    alert('Student deleted Successfully');
    Load();
  }

  async function update(event) {
    event.preventDefault();
    try {
      await axios.put(
        'https://studentdetails-1-29rc.onrender.com/api/v1/student/edit/' + studentid,
        {
          studentname: studentname,
          studentaddress: studentaddress,
          mobile: mobile,
        }
      );
      alert('Registration Updated');
      setId('');
      setName('');
      setAddress('');
      setmobile('');
      Load();
    } catch (err) {
      alert('Student Update Failed');
    }
  }

  return (
    <div>
     <h2 align="center">Sejal Lambat CA2 PROJECT</h2>
     <h3 align="center">PRN No. 2146491245029</h3>
      <h1 align="center">Student Details</h1>
      
      {/* Container for navigation buttons */}
      <div className="mb-3">
        <button className="btn btn-secondary" onClick={() => navigate('/student-registration')}>
          Go to Student Registration
        </button>
        
        
      </div>
      

      <div className="container mt-4">
        <form>
          <div className="form-group">
            <label>Student Name</label>
            <input
              type="text"
              className="form-control"
              id="studentname"
              value={studentname}
              onChange={(event) => setName(event.target.value)}
            />
          </div>

          <div className="form-group">
            <label>Student Address</label>
            <input
              type="text"
              className="form-control"
              id="studentaddress"
              value={studentaddress}
              onChange={(event) => setAddress(event.target.value)}
            />
          </div>

          <div className="form-group">
            <label>Mobile</label>
            <input
              type="text"
              className="form-control"
              id="mobile"
              value={mobile}
              onChange={(event) => setmobile(event.target.value)}
            />
          </div>
          <div>
            <button className="btn btn-primary mt-4" onClick={save}>
              Register
            </button>

            <button className="btn btn-warning mt-4" onClick={update}>
              Update
            </button>
          </div>
        </form>
      </div>
      <br />
      <table className="table table-dark" align="center">
        <thead>
          <tr>
            <th scope="col">Student Name</th>
            <th scope="col">Student Address</th>
            <th scope="col">Student Mobile</th>
            <th scope="col">Option</th>
          </tr>
        </thead>
        {students.map(function (student) {
          return (
            <tbody key={student._id}>
              <tr>
                <td>{student.studentname}</td>
                <td>{student.studentaddress}</td>
                <td>{student.mobile}</td>
                <td>
                  <button
                    type="button"
                    className="btn btn-warning"
                    onClick={() => editStudent(student)}
                  >
                    Edit
                  </button>
                  <button
                    type="button"
                    className="btn btn-danger"
                    onClick={() => DeleteStudent(student._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            </tbody>
          );
        })}
      </table>
    </div>
  );
}

export default Student;
