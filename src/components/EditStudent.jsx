// import React, { useEffect, useState } from "react";
// import { editData, getData } from "../services/ApiCalls";
// import { useNavigate, useParams } from "react-router-dom";
// import axios from "axios";

// function EditStudent() {
//   const { id } = useParams();
//   const [formData, setFormData] = useState({ name: "", course: "", grade: "" });
//   const navigate = useNavigate();

//   useEffect(() => {
//     axios.get(`http://localhost:3001/studentDetails/${id}`).then((res) => {
//       setFormData(res.data);
//     });
//   }, [id]);

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     await editData(id, formData);
//     navigate("/");
//   };

//   return (
//     <div className="container mt-4">
//       <h2>Edit Student</h2>
//       <form onSubmit={handleSubmit}>
//         <input type="text" name="name" value={formData.name} onChange={handleChange} className="form-control mb-2" />
//         <input type="text" name="course" value={formData.course} onChange={handleChange} className="form-control mb-2" />
//         <input type="text" name="grade" value={formData.grade} onChange={handleChange} className="form-control mb-2" />
//         <button type="submit" className="btn btn-primary">Update</button>
//       </form>
//     </div>
//   );
// }

// export default EditStudent;
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

function EditStudent() {
  const { id } = useParams(); // get ID from URL
  const navigate = useNavigate();

  // Form data state
  const [formData, setFormData] = useState({
    name: "",
    course: "",
    grade: "",
  });

  // Fetch data from server for this ID
  useEffect(() => {
    axios
      .get(`http://localhost:3000/studentDetails/${id}`)
      .then((res) => {
        setFormData(res.data); // ✅ set form data once fetched
      })
      .catch((err) => console.error("Error loading student:", err));
  }, [id]);

  // Handle input changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:3000/studentDetails/${id}`, formData);
      navigate("/"); // redirect to home
    } catch (err) {
      console.error("Error updating student:", err);
    }
  };

  return (
    <div className="container mt-4">
      <h2>Edit Student</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="form-control mb-2"
          placeholder="Enter name"
        />
        <input
          type="text"
          name="course"
          value={formData.course}
          onChange={handleChange}
          className="form-control mb-2"
          placeholder="Enter course"
        />
        <input
          type="text"
          name="grade"
          value={formData.grade}
          onChange={handleChange}
          className="form-control mb-2"
          placeholder="Enter grade"
        />
        <button type="submit" className="btn btn-primary">
          Update
        </button>
      </form>
    </div>
  );
}

export default EditStudent;
