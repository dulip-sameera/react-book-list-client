import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./layout/NavBar";
import Home from "./pages/Home";
import AddBook from "./book/AddBook";
import ViewBook from "./book/ViewBook";
import EditBook from "./book/EditBook";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <div className="App bg-dark bg-gradient">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/add-book" element={<AddBook />} />
          <Route exact path="/view-book/:id" element={<ViewBook />} />
          <Route exact path="/edit-book/:id" element={<EditBook />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
