import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu, openMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import CommentsContainer from "./CommentsContainer";
import LiveChat from "./LiveChat";

const WatchPage = () => {
  const [searchParams] = useSearchParams();

  const dispatch = useDispatch();

  const videoId = searchParams.get("v");

  useEffect(() => {
    dispatch(closeMenu());

    return () => dispatch(openMenu());
  }, [dispatch]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className=" w-[90%] flex mx-auto my-2 p-2 gap-x-4">
      <div className=" w-[1300px] flex flex-col items-start  ">
        <iframe
          src={`https://www.youtube.com/embed/${videoId}`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className=" w-full h-fit aspect-video rounded-lg "
        ></iframe>
        <CommentsContainer videoId={videoId} />
      </div>
      <div className="w-[23%]  ">
        <LiveChat videoId={videoId} />
      </div>
    </div>
  );
};
export default WatchPage;
