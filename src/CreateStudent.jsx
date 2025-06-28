import { Link } from "react-router";

const CreateStudent = () => {
  return (
    <>
      <div className="container">
        <h2>Add New Student</h2>
        <form>
          <label htmlFor="id">ID:</label>
          <input type="text" id="id" name="id" />
          <br />
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" />
          <br />
          <label htmlFor="place">Place:</label>
          <input type="text" id="place" name="place" />
          <br />
          <label htmlFor="phone">Phone:</label>
          <input type="text" id="phone" name="phone" />
          <br />
          <div>
            <button className="btn btn-save">Save</button>
            <Link to="/" class="btn btn-back">
              Back
            </Link>
          </div>
        </form>
      </div>
    </>
  );
};

export default CreateStudent;
