import React, { useEffect, useState } from "react";
import { getData, deleteData } from "../services/ApiCalls";
import { Link } from "react-router-dom";

function StudentList() {
  const [students, setStudents] = useState([]);

  const loadStudents = async () => {
    const res = await getData();
    setStudents(res.data);
  };

  useEffect(() => {
    loadStudents();
  }, []);

  const handleDelete = async (id) => {
    await deleteData(id);
    loadStudents();
  };

  return (
    <div className="container mt-4">
      <h2 className="text-center text-danger">Student Management App</h2>
      <Link to="/add" className="btn btn-primary mb-3">Add Student</Link>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Course</th>
            <th>Grade</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.id}>
              <td>{student.id}</td>
              <td>{student.name}</td>
              <td>{student.course}</td>
              <td>{student.grade}</td>
              <td>
                <Link to={`/edit/${student.id}`} className="btn btn-warning btn-sm">Edit</Link>{" "}
                <button onClick={() => handleDelete(student.id)} className="btn btn-danger btn-sm">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default StudentList;
