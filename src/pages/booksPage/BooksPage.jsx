import React, { useContext, useMemo, useState } from "react";
import { BookContext } from "../../context/BookContext.js";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import TabCard from "../../components/tabCard/TabCard.jsx";
import EmptyCart from "../../components/tabCard/EmptyCard.jsx";
import Dropdown from "../../components/shared/ui/Dropdown.jsx";

const BooksPage = () => {
  const { markAsReadBooks, wishList } = useContext(BookContext);
  const [sortingType, setSortingType] = useState("");

  const sortBooks = (books, type) => {
    if (!type) return books;
    return [...books].sort((a, b) => {
      if (type === "pages") return a.totalPages - b.totalPages;
      if (type === "rating") return a.rating - b.rating;
      return 0;
    });
  };

  const sortedReadBooks = useMemo(
    () => sortBooks(markAsReadBooks, sortingType),
    [markAsReadBooks, sortingType],
  );
  const sortedWishList = useMemo(
    () => sortBooks(wishList, sortingType),
    [wishList, sortingType],
  );

  return (
    <div className="mt-12 md:mt-20 container mx-auto">
      <Tabs>
        <TabList>
          <Tab>Read Books</Tab>
          <Tab>Wishlist Books</Tab>
        </TabList>

        <TabPanel>
          {sortedReadBooks.length === 0 ? (
            <EmptyCart />
          ) : (
            <div className="mt-4 md:mt-6 space-y-3">
              <Dropdown setSortingType={setSortingType} />
              {sortedReadBooks.map((book) => (
                <TabCard key={book.bookId} book={book} />
              ))}
            </div>
          )}
        </TabPanel>
        <TabPanel>
          {sortedWishList.length === 0 ? (<EmptyCart />) : (

          <div className="mt-4 md:mt-6 space-y-3">
            <Dropdown setSortingType={setSortingType} />
            {sortedWishList.map((book) => (
              <TabCard key={book.bookId} book={book} />
            ))}
          </div>
          )}
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default BooksPage;
