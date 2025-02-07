import HomePage from "./components/HomePage";
import Movies from "./components/Movies";
import TvSeries from "./components/TvSeries";
import BookmarkedMovies from "./components/BookmarkedMovies";

const routes = [
  {
    url: "/",
    component: <HomePage />,
  },
  {
    url: "/movies",
    component: <Movies />,
  },
  {
    url: "/series",
    component: <TvSeries />,
  },
  {
    url: "/bookmarks",
    component: <BookmarkedMovies />,
  },
];

export function getPage(url) {
  return routes.findLast(x => url.startsWith(x.url)) ?? routes[0]; // Eğer eşleşme yoksa Trending'e git
}