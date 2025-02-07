import { createContext, useEffect, useState } from "react";
import Header from "./components/Header";
import { getPage } from "./helper";

export const PageContext = createContext(null);
export const DataContext = createContext(null);
export const BookMarkedMovies = createContext(null);

export function getUrlParam() {
  const parts = location.hash.substring(1).split('/');
  return parts.length > 1 ? parts[1] : null;  // id varsa al yoksa null dön
}

function App() {
  const [url, setUrl] = useState(location.hash.substring(1) || "/");
  const [activeLink, setActiveLink] = useState(url);
  const [data, setData] = useState([]);
  const [bookmarks, setBookmarks] = useState(localStorage.bookmarks ? JSON.parse(localStorage.bookmarks) : [])

  useEffect(() => {
    window.addEventListener("hashchange", () => {
      setUrl(location.hash.substring(1));
      setActiveLink(location.hash.substring(1));
    });
  }, []);

  useEffect(() => {
    fetch("/data/data.json")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  useEffect(() => {
    localStorage.bookmarks = JSON.stringify(bookmarks);
  }, [bookmarks])

  const page = getPage(url);

  return (
    <PageContext.Provider value={page}>
      <DataContext.Provider value={data}>
        <Header activeLink={activeLink} />
        <BookMarkedMovies.Provider value={{ bookmarks, setBookmarks }}>
          <div className="container">
            <div className="page-component">{page.component}</div>
          </div>
        </BookMarkedMovies.Provider>
      </DataContext.Provider>
    </PageContext.Provider>
  );
}

export default App;
