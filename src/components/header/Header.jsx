import "./styles_header.scss"

import { useState, useEffect } from "react"
import { useLocation, useNavigate } from "react-router-dom";

import { HiOutlineSearch } from "react-icons/hi";
import { SlMenu } from "react-icons/sl";
import { VscChromeClose } from "react-icons/vsc";

import ContentWrapper from "../contentWrapper/contentWrapper";
import logo from "../../assets/movix-logo.svg";

const Header = () => {

  const [show, setShow] = useState("top");
  const [lastScrollY, setLastScrollY] = useState(0);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [query, setQuery] = useState("");
  const [showSearch, setShowSearch] = useState("");

  const navigate = useNavigate();
  const location = useLocation();

  const openSearch = () => {
    setMobileMenu(false);
    setShowSearch(true);
  };

  const openMobileMenu = () => {
    setMobileMenu(true);
    setShowSearch(false)
  };

  const searchQueryHandler = () => {
    if (query.length > 0) {
      navigate(`/search/${query}`);
      setTimeout(() => {
        setShowSearch(false);
      }, 1000);
    }
  };


  const navigationHandler = (type) => {
    if (type == "movie") {
      navigate("/explore/movie")
    } else if (type == "tv") {
      navigate("/explore/tv")
    }
    setMobileMenu(false);
  };



  return (
    <header className={`header ${mobileMenu ? "mobileView" : ""} ${show}`}>
      <ContentWrapper>
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        <ul className="menuItems">
          <li
            className="menuItem"
            onClick={() => navigationHandler("movies")}
          >
            Movies
          </li>
          <li
            className="menuItem"
            onClick={() => navigationHandler("tv")}
          >
            TV Shows
          </li>
          <li className="menuItem">
            <HiOutlineSearch onClick={openSearch}/>
          </li>
        </ul>

        <div className="mobileMenuItems">
          <HiOutlineSearch onClick={openSearch} />
          {
            mobileMenu ?
              <VscChromeClose onClick={() => setMobileMenu(false)} /> :
              <SlMenu onClick={openMobileMenu} />
          }
        </div>
      </ContentWrapper>

      {
        showSearch &&

        <div className="searchBar">
          <ContentWrapper>
            <div className="searchInput">
              <input
                src=""
                type="text"
                placeholder="Search for a movie or a TV show..."
                onChange={(e) => setQuery(e.target.value)}
                onKeyUp={(e) => e.key === "Enter" && searchQueryHandler()}
              />

              <VscChromeClose onClick={() => setShowSearch(false)} />

            </div>
          </ContentWrapper>
        </div>
      }
    </header>
  )
}

export default Header