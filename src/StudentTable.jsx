import {Link} from "react-router"
const StudentTable = () => {
  
  return(
    <>
     <h2>Student Records</h2>
     <div className="table-conatiner">
      <Link to="/student/create" className="btn btn-add">Add new Student</Link>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Place</th>
            <th>Phone</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Krati</td>
            <td>Indore</td>
            <td>7987525391</td>
            <td>
              <a href="" className="btn btn-info">View</a>
              <a href="" className="btn btn-primary">Edit</a>
              <a href="" className="btn btn-danger">Delete</a>
            </td>
          </tr>
        </tbody>
      </table>
     </div>
    </>
  )
}

export default StudentTable;