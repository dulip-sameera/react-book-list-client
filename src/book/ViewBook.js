import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Card from "../components/Card";

const ViewBook = () => {
  const [book, setBook] = useState({
    id: "",
    name: "",
    author: "",
    readStatus: "",
  });

  const { id } = useParams();

  useEffect(() => {
    loadData(id);
  }, []);

  const loadData = async (id) => {
    const result = await axios.get(`http://localhost:8080/api/books/${id}`);
    setBook(result.data);
  };

  return book && <Card book={book} />;
};

export default ViewBook;
