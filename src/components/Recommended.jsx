import { DotSvg, MovieSvg, TvSeriesSvg } from "../Svg";
import { useContext } from "react";
import { BookMarkedMovies } from "../App";

export default function Recommended({ trailer, image, release_date, type, age_rating, title }) {

  const { bookmarks, setBookmarks } = useContext(BookMarkedMovies);

  function handleBookmarks() {
    if (bookmarks.includes(title)) {
      setBookmarks(bookmarks.filter(item => item !== title));
    } else {
      setBookmarks([...bookmarks, title]);
    }
  }

  return (
    <>
      <div className="recommended-content">
        <button onClick={handleBookmarks}>
          <img src={bookmarks.find((item) => item === title) ? "/img/bookmarked.svg" : "/img/not-bookmarked.svg"} alt="bookmarked" />
        </button>
        <div className="reco-card" onClick={() => window.open(trailer, "_blank ")}>
          <img src={image} />
          <div className="reco-text">
            <div className="reco-info">
              <span>{new Date(release_date).getFullYear()}</span>
              <DotSvg />
              <span>
                {type === "movie" ? <MovieSvg /> : <TvSeriesSvg />}
                {type}</span>
              <DotSvg />
              <span>{age_rating}</span>
            </div>
            <h3>{title}</h3>
          </div>
        </div>
      </div>
    </>
  );
}