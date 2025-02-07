import { BookmarkSvg, TrendingSvg, MovieSvg, TvSeriesSvg } from "../Svg";

export default function Header({ activeLink }) {

  return (
    <header>
      <figure>
        <img src="/img/header-icon.svg" alt="Header Icon" />
      </figure>
      <nav>
        <ul>
          <li className={activeLink === "/" ? "active" : ""}>
            <a href="#/">
              <TrendingSvg />
            </a>
          </li>
          <li className={activeLink === "/movies" ? "active" : ""}>
            <a href="#/movies">
              <MovieSvg />
            </a>
          </li>
          <li className={activeLink === "/series" ? "active" : ""}>
            <a href="#/series">
              <TvSeriesSvg />
            </a>
          </li>
          <li className={activeLink === "/bookmarks" ? "active" : ""}>
            <a href="#/bookmarks">
              <BookmarkSvg />
            </a>
          </li>
        </ul>
      </nav>
      <div className="avatar-img">
        <img src="/img/avatar.svg" alt="Avatar" />
      </div>
    </header>
  )
}