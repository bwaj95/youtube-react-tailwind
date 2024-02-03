import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Body from "./components/Body";
import MainContainer from "./components/MainContainer";
import WatchPage from "./components/WatchPage";
import SearchResultsContainer from "./components/SearchResultsContainer";

/**
 * Header
 *
 * Body
 *  - Sidebar
 *    - MenuItems
 *
 *  - MainContainer
 *    - TagsList
 *    - VideosContainer
 *      - VideoCard
 *
 */

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: <MainContainer />,
      },
      {
        path: "watch",
        element: <WatchPage />,
      },
      {
        path: "results",
        element: <SearchResultsContainer />,
      },
    ],
  },
]);

function App() {
  return (
    <div className=" w-screen h-screen overflow-x-hidden  ">
      <div className=" w-full absolute  z-0 overflow-hidden ">
        <RouterProvider router={appRouter} />
      </div>
    </div>
  );
}

export default App;
