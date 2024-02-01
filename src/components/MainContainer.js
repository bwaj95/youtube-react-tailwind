import TagList from "./TagList";
import VideoContainer from "./VideoContainer";

const MainContainer = () => {
  return (
    <div className="flex flex-col ">
      <TagList />
      <VideoContainer />
    </div>
  );
};
export default MainContainer;
