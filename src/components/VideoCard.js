import { Link } from "react-router-dom";
import { formatNumeral } from "../helpers/numeral";

const VideoCard = (props) => {
  const { info } = props;

  const { snippet, statistics } = info;

  const { channelTitle, title, thumbnails } = snippet;
  const { viewCount } = statistics;

  return (
    <div className=" w-full py-1 px-2 mx-1 my-2  relative cursor-pointer  ">
      <Link
        to={`/watch?v=${info.id}`}
        className=" absolute top-0 bottom-0 left-0 right-0 "
      ></Link>
      <img
        className=" rounded-xl w-full "
        src={thumbnails.medium.url}
        alt="thumbnail"
      />
      <ul>
        <li className=" flex items-start py-2 w-full h-14 overflow-hidden ">
          <div className="w-1/12 py-2 ">
            <div className=" w-6 h-6 rounded-full bg-gray-400 "></div>
          </div>
          <p className=" w-11/12 font-bold flex my-auto ">
            {title.substring(0, 60) + "..."}
          </p>
        </li>
        {/* Channel details */}
        <div className="flex gap-x-2 items-center my-1 ml-8">
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
        <li className="ml-8">{formatNumeral(viewCount)} views</li>
      </ul>
    </div>
  );
};
export default VideoCard;
