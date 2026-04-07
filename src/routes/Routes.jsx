import { createBrowserRouter } from "react-router";
import HomePage from "../pages/homePage/HomePage";
import BooksPage from "../pages/booksPage/BooksPage";
import MainLayout from "../layout/MainLayout";
import ErrorPage from "../pages/Error/ErrorPage";

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
    ],
    errorElement: <ErrorPage />,
  },
]);
