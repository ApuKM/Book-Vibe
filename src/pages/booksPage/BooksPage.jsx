import React, { useContext } from "react";
import { BookContext } from "../../context/BookContext.js";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import TabCard from "../../components/tabCard/TabCard.jsx";
import EmptyCart from "../../components/tabCard/EmptyCard.jsx";

const BooksPage = () => {
  const { markAsReadBooks, wishList } = useContext(BookContext);
  // console.log(markAsReadBooks, wishList)
  return (
    <div className="mt-12 md:mt-20 container mx-auto">
      <Tabs>
        <TabList>
          <Tab>Read Books</Tab>
          <Tab>Wishlist Books</Tab>
        </TabList>

        <TabPanel>
          {markAsReadBooks.length === 0 && <EmptyCart />}
          <div className="mt-4 md:mt-6 space-y-3">
            {markAsReadBooks.map((book) => (
              <TabCard key={book.bookId} book={book} />
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          {wishList.length === 0 && <EmptyCart />}
           <div className="mt-4 md:mt-6 space-y-3">
            {wishList.map((book) => (
              <TabCard key={book.bookId} book={book} />
            ))}
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default BooksPage;
