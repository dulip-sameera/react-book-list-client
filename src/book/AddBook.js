import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const AddBook = () => {
  const [book, setBook] = useState({
    name: "",
    author: "",
    noOfPages: "",
    readStatus: "",
  });

  const navigate = useNavigate();

  const onChange = (e) => {
    setBook({ ...book, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:8080/api/books", book);
    navigate("/");
  };

  return (
    <div className="container">
      <div className="my-4 px-4 shadow p-2 rounded border border-secondary">
        <form onSubmit={(e) => onSubmit(e)}>
          <h1 className="text-center text-light">New Book</h1>
          {/* Book Name */}
          <div className="mb-3 text-light">
            <label htmlFor="name" className="form-label">
              Book Name:
            </label>
            <input
              type="text"
              className="form-control"
              name="name"
              id="name"
              aria-describedby="book name"
              onChange={onChange}
            />
          </div>

          {/* Book Author */}
          <div className="mb-3 text-light">
            <label htmlFor="Author" className="form-label">
              Author:
            </label>
            <input
              type="text"
              className="form-control"
              name="author"
              id="author"
              aria-describedby="book author"
              onChange={onChange}
            />
          </div>

          {/* Book No Of Pages */}
          <div className="mb-3 text-light">
            <label htmlFor="noOfPages" className="form-label">
              No of Pages# :
            </label>
            <input
              type="number"
              className="form-control"
              name="noOfPages"
              id="noOfPages"
              aria-describedby="book number of pages"
              onChange={onChange}
            />
          </div>

          {/* Book Read Status */}
          <div className="mb-3 text-light">
            <label htmlFor="readStatus" className="form-label">
              Have read the book?
            </label>
            <br />
            <input
              type="radio"
              className="btn-check"
              name="readStatus"
              id="readStatusYes"
              autoComplete="off"
              value="1"
              onChange={onChange}
            />
            <label
              className="btn btn-outline-success mx-2"
              htmlFor="readStatusYes"
            >
              Yes
            </label>

            <input
              type="radio"
              className="btn-check"
              name="readStatus"
              id="readStatusNo"
              autoComplete="off"
              value="2"
              onChange={onChange}
            />
            <label
              className="btn btn-outline-danger mx-2"
              htmlFor="readStatusNo"
            >
              No
            </label>
          </div>

          <div className="d-flex justify-content-center mb-2">
            <button type="submit" className="btn btn-primary mr-2">
              Submit
            </button>
            <Link to={"/"} className="btn btn-danger mx-4">
              Cancel
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddBook;
