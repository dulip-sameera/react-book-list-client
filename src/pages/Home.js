import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    const result = await axios.get("http://localhost:8080/api/books");
    setBooks(result.data);
  };

  const deleteBook = async (id) => {
    await axios.delete(`http://localhost:8080/api/books/${id}`);
    loadData();
  };

  return (
    <div className="container">
      <div className="my-4">
        <table className="table shadow text-light">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Author</th>
              <th scope="col">Number of Pages</th>
              <th scope="col">Read Status</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {/* incase loaddata function took time to populate the state */}
            {books &&
              books.map((book, index) => {
                return (
                  <tr key={index + 1}>
                    <th scope="row">{index + 1}</th>
                    <td>{book.name}</td>
                    <td>{book.author}</td>
                    <td>{book.noOfPages}</td>
                    <td>
                      {book.readStatus.name === "true" ? (
                        <span className="text-success">Yes</span>
                      ) : (
                        <span className="text-danger">No</span>
                      )}
                    </td>
                    <td>
                      <div>
                        <Link
                          to={"/view-book"}
                          className="btn btn-primary mx-2"
                        >
                          View
                        </Link>
                        <Link
                          to={"/edit-book"}
                          className="btn btn-outline-light mx-2"
                        >
                          Edit
                        </Link>
                        <button
                          className="btn btn-danger mx-2"
                          onClick={() => deleteBook(book.id)}
                        >
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;
