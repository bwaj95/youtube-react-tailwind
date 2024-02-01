import { useCallback, useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { YT_KEYWORD_SEARCH_API } from "../utils/constants";
import VideoCard from "./VideoCard";
import VideoCardSearchResult from "./VideoCardSearchResult";
import Spinner from "./Spinner";

const SearchResultsContainer = () => {
  const [searchParams] = useSearchParams();
  const [videos, setVideos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [errorData, setErrorData] = useState(null);

  const getSearchVideos = async () => {
    try {
      setIsLoading(true);

      const query = searchParams.get("search_query");
      const response = await fetch(`${YT_KEYWORD_SEARCH_API}&q=${query}`);

      const data = await response.json();

      console.log("Search query data..." + query);
      console.log(data);

      setVideos(data.items);

      setIsError(false);
      setErrorData(null);
    } catch (error) {
      setIsError(true);
      setErrorData(error);
    }

    setIsLoading(false);
  };

  useEffect(() => {
    getSearchVideos();
  }, [searchParams]);

  let content;

  if (isLoading) {
    content = (
      <div className=" w-full min-h-screen flex items-center justify-center ">
        <Spinner />
      </div>
    );
  } else if (isError) {
    content = (
      <div className="w-full h-fit bg-red-500 text-white flex flex-wrap ">
        <p>{errorData.message}</p>
      </div>
    );
  } else {
    content =
      videos?.length > 0 &&
      videos.map((video) => (
        <VideoCardSearchResult key={video.id.videoId} info={video} />
      ));
  }

  return (
    <div className=" w-full h-max  mt-2 ml-1 flex flex-col gap-y-2">
      {content}
    </div>
  );
};
export default SearchResultsContainer;
