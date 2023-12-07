import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import { Books, BookItem } from "./pages/Books";
export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books" element={<Books />} />
        <Route path="/book/:title" element={<BookItem />} />
      </Routes>
    </BrowserRouter>
  );
};
