import axios from 'axios';
import {useEffect, useState } from "react";
 
function Registation()
{
    const [studentid, setId] = useState('');
  const [studentname, setName] = useState("");
  const [status, setstatus] = useState("");
  const [cgpa, setcgpa] = useState("");
  const [students, setUsers] = useState([]);


 
useEffect(() => {
  (async () => await Load())();
  }, []);
 
 
  async function  Load()
  {
     const result = await axios.get(
         "https://backend-o77z.onrender.com/api/v1/student/getall");
         setUsers(result.data);
         console.log(result.data);
  }
 

  
     async function save(event)
    {
        event.preventDefault();
    try
        {
         await axios.post("https://backend-o77z.onrender.com/api/v1/student/save",
        {
        studentname: studentname,
        status: status,
          cgpa: cgpa
        });
          alert("Student Registation Successfully");
          setId("");
          setName("");
          setstatus("");
          setcgpa("");
          Load();
        }
    catch(err)
        {
          alert("User Registation Failed");
        }
   }

 
   async function editStudent(students)
   {
    setName(students.studentname);
    setstatus(students.status);
    setcgpa(students.cgpa); 
    setId(students._id);
   }
 
   async function DeleteStudent(studentid)
   {
        await axios.delete("https://backend-o77z.onrender.com/api/v1/student/delete/" + studentid); 
        alert("Student deleted Successfully");
        Load();
   }
 
   async function update(event)
   {
    event.preventDefault();
 
   try
       {
        await axios.put("https://backend-o77z.onrender.com/api/v1/student/edit/" + studentid ,
       {

        studentname: studentname,
        status: status,
         cgpa: cgpa
       
       });
         alert("Registation Updateddddd");
         setId("");
         setName("");
         setstatus("");
         setcgpa("");
         Load();
       }
   catch(err)
       {
         alert("Student Updateddd Failed");
       }
  }

  //Design 

  return (
    <div>
      <h2 align="center">Sejal Lambat CA2 PROJECT</h2>
      <h3 align="center">PRN No. 2146491245029</h3>
      
       <h1 align="center">Student Registration</h1>
       <div class="container mt-4" >
          <form>
             
              <div class="form-group">
                <label>Student Name</label>
                <input  type="text" class="form-control" id="studentname"
                value={studentname}
                onChange={(event) =>
                  {
                    setName(event.target.value);      
                  }}
                />
              </div>


              <div class="form-group">
                <label>Student status</label>
                <input  type="text" class="form-control" id="status" 
                 value={status}
                  onChange={(event) =>
                    {
                      setstatus(event.target.value);      
                    }}
                />
              </div>

              <div class="form-group">
                <label>cgpa</label>
                <input type="text" class="form-control" id="cgpa" 
                  value={cgpa}
                onChange={(event) =>
                  {
                    setcgpa(event.target.value);      
                  }}
                />


              </div>
              <div>
              <button   class="btn btn-primary mt-4"  onClick={save}>Register</button>

              <button   class="btn btn-warning mt-4"  onClick={update}>Update</button>
              </div>   
            </form>
          </div>
                <br/>
<table class="table table-dark" align="center">
  <thead>
    <tr>
      <th scope="col">Student Name</th>
      <th scope="col">Student status</th>
      <th scope="col">Student cgpa</th>
      
      <th scope="col">Option</th>
    </tr>
  </thead>
       {students.map(function fn(student)
       {
            return(
            <tbody>
                <tr>
                <td>{student.studentname}</td>
                <td>{student.status}</td>
                <td>{student.cgpa}</td>        
                <td>
                    <button type="button" class="btn btn-warning"  onClick={() => editStudent(student)} >Edit</button>  
                    <button type="button" class="btn btn-danger" onClick={() => DeleteStudent(student._id)}>Delete</button>
                </td>
                </tr>
            </tbody>
            );
            })}
            </table>
       </div>
            );
        }
  
  export default Registation;
