import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const EditBook = () => {
  const [book, setBook] = useState({
    name: "",
    author: "",
    noOfPages: "",
    readStatus: "",
  });

  const navigate = useNavigate();

  const { id } = useParams();

  useEffect(() => {
    loadData(id);
  }, []);

  const { name, author, noOfPages, readStatus } = book;

  const loadData = async (id) => {
    const result = await axios.get(`http://localhost:8080/api/books/${id}`);
    setBook({
      name: result.data.name,
      author: result.data.author,
      noOfPages: result.data.noOfPages,
      readStatus: result.data.readStatus.id.toString(),
    });
  };

  const onChange = (e) => {
    setBook({ ...book, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:8080/api/books/${id}`, book);
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
              value={name}
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
              value={author}
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
              value={noOfPages}
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
              checked={readStatus === "1" ? "checked" : ""}
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
              checked={readStatus === "2" ? "checked" : ""}
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

export default EditBook;
