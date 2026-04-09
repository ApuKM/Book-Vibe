import React, { useContext, useEffect, useState } from "react";
import { BookContext } from "../../context/BookContext.js";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import TabCard from "../../components/tabCard/TabCard.jsx";
import EmptyCart from "../../components/tabCard/EmptyCard.jsx";
import Dropdown from "../../components/shared/ui/Dropdown.jsx";

const BooksPage = () => {
  const { markAsReadBooks, wishList } = useContext(BookContext);
  // console.log(markAsReadBooks, wishList)
  const [sortingType, setSortingType] = useState("");
  const [filteredReadBooks, setFilteredReadBooks ] = useState(markAsReadBooks);
  const [filteredWishList, setFilteredWishList] = useState(wishList);

  useEffect(() => {
    if(sortingType){
      if(sortingType === "pages"){
        const sortedReadBooks = [...markAsReadBooks].sort((a, b) => a.totalPages - b.totalPages);
        const sortedWishBooks = [...wishList].sort((a, b) => a.totalPages - b.totalPages);
        setFilteredReadBooks(sortedReadBooks);
        setFilteredWishList(sortedWishBooks);
      }
    }
  }, [sortingType, markAsReadBooks, wishList])

  return (
    <div className="mt-12 md:mt-20 container mx-auto">
      <Tabs>
        <TabList>
          <Tab>Read Books</Tab>
          <Tab>Wishlist Books</Tab>
        </TabList>

        <TabPanel>
          {filteredReadBooks.length === 0 && <EmptyCart />}
          <div className="mt-4 md:mt-6 space-y-3">
            <Dropdown setSortingType={setSortingType}/>
            {filteredReadBooks.map((book) => (
              <TabCard key={book.bookId} book={book} />
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          {filteredWishList.length === 0 && <EmptyCart />}
          <Dropdown setSortingType={setSortingType}/>
          <div className="mt-4 md:mt-6 space-y-3">
            {filteredWishList.map((book) => (
              <TabCard key={book.bookId} book={book} />
            ))}
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default BooksPage;
