import { useEffect, useState } from "react";
import { YT_VIDEOS_API } from "../utils/constants";
import VideoCard from "./VideoCard";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);

  const getVideos = async () => {
    const response = await fetch(YT_VIDEOS_API);
    const data = await response.json();

    // console.log(data.items);
    setVideos(data.items);
  };

  useEffect(() => {
    getVideos();
  }, []);

  let content =
    videos.length > 0 ? (
      videos.map((video) => <VideoCard key={video.id} info={video} />)
    ) : (
      <p>Loading...</p>
    );

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-x-2 gap-y-3 px-2">
      {content}
    </div>
  );
};
export default VideoContainer;
