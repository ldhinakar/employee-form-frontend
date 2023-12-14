import React from "react";
import { useState } from "react";
import "./Forms.css";
import axios from 'axios';

function Forms() {
  const [inputarr, SetInputarr] = useState([]);

  const [inputdata, SetInputdata] = useState({
    name: "",
    id: "",
    dob: "",
    age: "",
    city: "",
    salary: "",
    contact: ""
  });

  function changehandle(e) {
    SetInputdata({ ...inputdata, [e.target.name]: e.target.value });
  }

  let { name, id, dob, age, city, salary, contact } = inputdata;
  function changhandle() {
    SetInputarr([...inputarr, { name, id, dob, age, city, salary, contact }]);
    console.log(inputarr);
    console.log(inputdata);
    SetInputdata({
      name: "",
      id: "",
      dob: "",
      age: "",
      city: "",
      salary: "",
      contact: ""
    });
  }

  const [setdata] = useState({
    name:"",
    id:"",
    dob:"",
    age:"",
    city:"",
    salary:"",
    contact:""
  })

  const handleSubmit = (event) =>{
    event.preventDefault();
    axios.post('http://localhost:3001/add', setdata)
    .then(res => console.log("Registered Successfully"))
    .catch(err => console.log(err));
 }

  return (
    <form className="Forms" onSubmit={handleSubmit}>
      <div className="Textbox">
        <div>
          <input
            type="text"
            autoComplete="off"
            name="name"
            value={inputdata.name}
            onChange={changehandle}
            placeholder="Enter name"
          />
        </div>
        <div>
          <input
            type="text"
            autoComplete="off"
            name="id"
            value={inputdata.id}
            onChange={changehandle}
            placeholder="Enter ID"
          />
        </div>
        <div>
          <input
            type="date"
            autoComplete="off"
            name="dob"
            value={inputdata.dob}
            onChange={changehandle}
            placeholder="Enter DOB"
          />
        </div>
        <div>
          <input
            type="number"
            autoComplete="off"
            name="age"
            value={inputdata.age}
            onChange={changehandle}
            placeholder="Enter Age"
          />
        </div>
        <div>
          <input
            type="text"
            autoComplete="off"
            name="city"
            value={inputdata.city}
            onChange={changehandle}
            placeholder="Enter City"
          />
        </div>
        <div>
          <input
            type="text"
            autoComplete="off"
            name="salary"
            value={inputdata.salary}
            onChange={changehandle}
            placeholder="Enter Salary"
          />
        </div>
        <div>
          <input
            type="tel"
            autoComplete="off"
            name="contact"
            value={inputdata.contact}
            onChange={changehandle}
            placeholder="Enter Contact"
          />
        </div>
        <button onClick={changhandle}>Submit</button>
      </div>
      <table border={10} width="30%" cellPadding={20}>
        <tbody>
          <tr>
            <td>NAME</td>
            <td>ID</td>
            <td>DOB</td>
            <td>AGE</td>
            <td>CITY</td>
            <td>SALARY</td>
            <td>CONTACT</td>
          </tr>
          {inputarr.map((info, ind) => {
            return (
              <tr key={ind}>
                <td>{info.name}</td>
                <td>{info.id}</td>
                <td>{info.dob}</td>
                <td>{info.age}</td>
                <td>{info.city}</td>
                <td>{info.salary}</td>
                <td>{info.contact}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </form>
  );
}

export default Forms;
