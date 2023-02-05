import axios from "axios";
import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Card = ({ book }) => {
  const navigate = useNavigate();
  const deleteBook = async (id) => {
    await axios.delete(`http://localhost:8080/api/books/${id}`);
    navigate("/");
  };

  return (
    <div className="container">
      <div className="my-4 d-flex justify-content-center">
        <div className="card text-bg-dark mb-3" style={{ minWidth: "50vw" }}>
          <div className="card-header border-secondary">ID: #{book.id}</div>
          <div className="card-body">
            <h5 className="card-title">{book.name}</h5>
            <ul class="list-group list-group-flush border-secondary">
              <li class="list-group-item bg-transparent text-light border-secondary">
                Author: {book.author}
              </li>
              <li class="list-group-item bg-transparent text-light border-secondary">
                Number of Pages# : {book.noOfPages}
              </li>
              <li class="list-group-item bg-transparent text-light border-secondary">
                Read Status:{" "}
                {book.readStatus.name === "true" ? (
                  <span
                    className="text-success
                "
                  >
                    Yes
                  </span>
                ) : (
                  <span className="text-danger">No</span>
                )}
              </li>
              <li class="list-group-item bg-transparent text-light border-secondary">
                <div className="d-flex justify-content-center">
                  <Link to={"/"} className="btn btn-primary mr-2">
                    Back
                  </Link>
                  <Link
                    to={`/edit-book/${book.id}`}
                    className="btn btn-outline-light mx-4"
                  >
                    Edit
                  </Link>
                  <button
                    className="btn btn-danger ml-2"
                    onClick={() => deleteBook(book.id)}
                  >
                    Delete
                  </button>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
