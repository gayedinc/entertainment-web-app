import { useContext, useState } from "react";
import { DataContext, BookMarkedMovies } from "../App";

import Recommended from "./Recommended";

export default function BookmarkedMovies() {

  const data = useContext(DataContext);
  const { bookmarks } = useContext(BookMarkedMovies);

  const [searchText, setSearchText] = useState("");

  const filteredData = data?.filter(item => bookmarks.includes(item.title));

  return (
    <>
      <div className="search-input">
        <input
          type="text"
          placeholder="Search for bookmarked shows"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
      </div>
      <div className="bookmarked-content">
        <div className="bookmarked-movies">
          <h2>Bookmarked Movies</h2>
          <div className="bookmarked-data">
            {filteredData && filteredData.filter(item => item.type === 'movie').length > 0 ? (
              filteredData
                .filter(item => item.type === 'movie')
                .filter((item) => item.title.toLowerCase().includes(searchText.toLowerCase()))
                .map((item, i) => (
                  <Recommended key={i} {...item} />
                ))
            ) : (
              <p>No bookmarked movies yet.</p>
            )}
          </div>
        </div>
        <div className="bookmarked-series">
          <h2>Bookmarked Series</h2>
          <div className="bookmarked-data">
            {filteredData && filteredData.filter(item => item.type === 'series').length > 0 ? (
              filteredData
                .filter(item => item.type === 'series')
                .filter(item => item.title.toLowerCase().includes(searchText.toLowerCase()))
                .map((item, i) => (
                  <Recommended key={i} {...item} />
                ))
            ) : (
              <p>No bookmarked series yet.</p>
            )}
          </div>
        </div>
      </div>
    </>
  )
}