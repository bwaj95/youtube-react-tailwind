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
    <div className=" w-full m-5 p-2">
      <div className=" flex w-full ">
        <iframe
          width="1200px"
          height="600px"
          src={`https://www.youtube.com/embed/${videoId}`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
        <LiveChat videoId={videoId} />
      </div>
      <CommentsContainer />
    </div>
  );
};
export default WatchPage;
