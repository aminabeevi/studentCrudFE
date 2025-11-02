import React, { useState } from "react";
import { postData } from "../services/ApiCalls";
import { useNavigate } from "react-router-dom";

function AddStudent() {
  const [formData, setFormData] = useState({ name: "", course: "", grade: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await postData(formData);
    navigate("/");
  };

  return (
    <div className="container mt-4">
      <h2>Add New Student</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Name" onChange={handleChange} className="form-control mb-2" />
        <input type="text" name="course" placeholder="Course" onChange={handleChange} className="form-control mb-2" />
        <input type="text" name="grade" placeholder="Grade" onChange={handleChange} className="form-control mb-2" />
        <button type="submit" className="btn btn-success">Add Student</button>
      </form>
    </div>
  );
}

export default AddStudent;
