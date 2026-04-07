import { createBrowserRouter } from "react-router";
import HomePage from "../pages/homePage/HomePage";
import BooksPage from "../pages/booksPage/BooksPage";
import MainLayout from "../layouts/MainLayout";
import ErrorPage from "../pages/Error/ErrorPage";
import BookDetails from "../pages/bookDetails/BookDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "books",
        element: <BooksPage />,
      },
      {
        path: "bookDetails/:bookId",
        loader: () => fetch("/booksData.json"),
        element: <BookDetails />,
      }
    ],
    errorElement: <ErrorPage />,
  },
]);
