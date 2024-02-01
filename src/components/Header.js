/**
 * Left Part
 *  - Hamburger Menu Icon
 *  - YouTube Logo
 *
 * Middle Part
 *  - Search Bar Form
 *
 * Right Part
 *  - User profile icon
 *
 */

import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { useEffect, useState } from "react";
import { YT_SEARCH_SUGGEST_API } from "../utils/constants";
import { cacheSuggestion } from "../utils/searchSlice";
import {
  Link,
  useNavigate,
  useParams,
  useSearchParams,
} from "react-router-dom";

const Header = () => {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const searchCache = useSelector((state) => state.search);
  const navigate = useNavigate();

  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const fetchSearchSuggestions = async () => {
    if (searchQuery === "") return;

    try {
      console.log("API call - " + searchQuery);
      const response = await fetch(`${YT_SEARCH_SUGGEST_API}${searchQuery}`, {
        method: "GET",
      });

      const data = await response.json();

      if (data) {
        console.log(data);
        setSuggestions(data[1]);

        dispatch(
          cacheSuggestion({
            [searchQuery]: data[1],
          })
        );
      } else console.log("empty data");
    } catch (error) {
      console.log(error);
    }
  };

  const getSuggestionsFromCache = () => {
    setSuggestions(searchCache[searchQuery]);
    return;
  };

  useEffect(() => {
    // set timer when component mounts. this calls fetchSearchSuggestions after timeout
    const timer = setTimeout(() => {
      if (searchQuery in searchCache) {
        getSuggestionsFromCache();
      } else {
        fetchSearchSuggestions();
      }
    }, 200);

    // return a clearup that clears timer as the component unmounts
    return () => {
      clearTimeout(timer);
    };

    // TIMER NOT GOOD. DO SELF IMPLEMENTATION.
  }, [searchQuery, dispatch]);

  function toggleMenuHandler() {
    dispatch(toggleMenu());
  }

  function searchSuggestionClickHandler(e) {
    e.preventDefault();

    // searchParams.set("search_query", encodeURIComponent(searchQuery));

    navigate(`results?search_query=${encodeURIComponent(searchQuery)}`);
  }

  return (
    <div
      className=" w-full h-16 my-1 px-2 mx-auto z-10 bg-opacity-100
    flex justify-between items-center  shadow-lg    "
    >
      <section className="flex items-center h-full w-48 gap-x-2 ">
        <img
          src="https://cdn.iconscout.com/icon/free/png-256/free-hamburger-menu-462145.png?f=webp"
          alt="menu"
          className=" h-10 cursor-pointer "
          onClick={toggleMenuHandler}
        />

        <Link to="/" className="overflow-y-hidden">
          <img
            src="https://www.edigitalagency.com.au/wp-content/uploads/Youtube-logo-png.png"
            alt="logo"
            className=" h-[98%] cursor-pointer py-2 "
          />
        </Link>
      </section>

      <section className=" w-6/12 relative ">
        <form className=" h-full flex items-center ">
          <input
            type="text"
            placeholder="Search"
            className=" w-8/12 h-full py-2 pl-4 my-1 border border-gray-400 rounded-l-full focus:border-blue-100  "
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setShowSuggestions(false)}
          />
          <button
            className=" bg-gray-50 w-1/12 h-full py-2 my-1 border border-gray-400 rounded-r-full "
            onClick={searchSuggestionClickHandler}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              enableBackground="new 0 0 24 24"
              height="24"
              viewBox="0 0 24 24"
              width="24"
              focusable="false"
              className=" mx-auto "
            >
              <path d="m20.87 20.17-5.59-5.59C16.35 13.35 17 11.75 17 10c0-3.87-3.13-7-7-7s-7 3.13-7 7 3.13 7 7 7c1.75 0 3.35-.65 4.58-1.71l5.59 5.59.7-.71zM10 16c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6z"></path>
            </svg>
          </button>

          {showSuggestions && suggestions.length > 0 && (
            <div className=" bg-white w-8/12 absolute left-0 right-0 top-11 rounded-lg overflow-hidden drop-shadow-lg py-4 z-[100] border border-slate-200 z-20  ">
              <ul>
                {suggestions.map((item) => (
                  <li
                    key={item}
                    className=" flex items-center px-2 py-1  hover:bg-gray-100 cursor-pointer "
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      enableBackground="new 0 0 24 24"
                      height="24"
                      viewBox="0 0 24 24"
                      width="24"
                      focusable="false"
                      className=" m-1 mr-3 "
                    >
                      <path d="m20.87 20.17-5.59-5.59C16.35 13.35 17 11.75 17 10c0-3.87-3.13-7-7-7s-7 3.13-7 7 3.13 7 7 7c1.75 0 3.35-.65 4.58-1.71l5.59 5.59.7-.71zM10 16c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6z"></path>
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </form>
      </section>

      <section className=" h-full flex justify-center items-center ">
        <img
          src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
          alt="user"
          className=" h-12 "
        />
      </section>
    </div>
  );
};
export default Header;
