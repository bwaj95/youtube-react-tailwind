import { Link } from "react-router-dom";
import { formatTimeAgo } from "../helpers/timeago";

const VideoCardSearchResult = ({ info }) => {
  const { id, snippet } = info;
  const { title, description, channelTitle, thumbnails, publishedAt } = snippet;

  return (
    <div className=" py-2 px-3 w-[95%] lg:w-[80%]  mx-auto  flex gap-x-4 relative ">
      <Link
        to={`/watch?v=${id.videoId}`}
        className=" absolute top-0 bottom-0 right-0 left-0 "
      ></Link>

      {/* Image */}
      <div className=" w-3/5  lg:w-1/4 rounded-lg overflow-hidden">
        <img
          src={thumbnails.medium.url}
          alt={title}
          className=" w-full h-full "
        />
      </div>

      {/* Details */}
      <div className="w-3/4 max-h-[60%] ">
        <div className="mt-1 mb-2 ">
          <p className=" font-normal text-xl ">{title}</p>
          <p className=" text-sm ">{formatTimeAgo(publishedAt)}</p>
        </div>

        {/* Channel details */}
        <div className="flex gap-x-2 items-center my-1">
          <div className="w-6 h-6 rounded-full overflow-hidden">
            <img
              src="https://yt3.googleusercontent.com/584JjRp5QMuKbyduM_2k5RlXFqHJtQ0qLIPZpwbUjMJmgzZngHcam5JMuZQxyzGMV5ljwJRl0Q=s176-c-k-c0x00ffffff-no-rj"
              alt="channel logo"
              className="w-full h-full"
            />
          </div>
          <div className=" text-sm  opacity-80 ">{channelTitle}</div>
          <div className="w-4 h-4 text-xs text-white flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24"
              viewBox="0 0 24 24"
              width="24"
              focusable="false"
              className=""
            >
              <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zM9.8 17.3l-4.2-4.1L7 11.8l2.8 2.7L17 7.4l1.4 1.4-8.6 8.5z"></path>
            </svg>
          </div>
        </div>

        {/* Description */}
        <div className="my-2">
          <p className="text-sm ">{description.substring(0, 100) + "..."}</p>
        </div>
      </div>
    </div>
  );
};
export default VideoCardSearchResult;
