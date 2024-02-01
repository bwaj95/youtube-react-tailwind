import { useEffect, useRef, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatsSlice";
import { generateChat } from "../helpers/commentGenerator";

const LiveChat = ({ videoId }) => {
  const dispatch = useDispatch();
  const chatMessages = useSelector((state) => state.chats[videoId]?.messages);
  // const scrollToBottomRef = useRef();
  const [userChatText, setUserChatText] = useState("");

  useEffect(() => {
    const intervalApiPolling = setInterval(() => {
      // API Polling
      console.log("API Polling");

      dispatch(addMessage({ videoId, message: generateChat(20) }));
    }, 3000);

    return () => clearInterval(intervalApiPolling);
  }, []);

  // useEffect(() => {
  //   if (scrollToBottomRef) scrollToBottomRef.current.scrollIntoView();
  // }, [chatMessages]);

  const sendUserChat = () => {
    if (userChatText.length === 0 || userChatText.length > 200) return;

    dispatch(
      addMessage({
        videoId,
        message: {
          id: crypto.randomUUID(),
          name: "You",
          text: userChatText,
        },
      })
    );

    setUserChatText("");
  };

  return (
    <div className=" w-[600px] h-[600px] ml-2 p-2 border border-black bg-slate-100 rounded-lg    ">
      <div className=" w-full h-[8%] font-bold ml-2 mb-2 py-2 shadow-sm ">
        Live Chat
      </div>

      <div className=" w-full h-[80%]  flex flex-col-reverse my-3 py-3 overflow-y-scroll ">
        {chatMessages?.length > 0 &&
          chatMessages.map((chatMessage) => (
            <ChatMessage
              key={chatMessage.id}
              name={chatMessage.name}
              message={chatMessage.text}
            />
          ))}

        {/* ref to scroll when new messages appear */}
        {/* <div ref={scrollToBottomRef}></div> */}
      </div>

      <div className=" w-full h-[8%] flex items-center  ">
        <input
          type="text"
          placeholder="Say something..."
          value={userChatText}
          onChange={(e) => setUserChatText(e.target.value)}
          className=" w-4/5 py-2 px-2 "
        />

        <div className=" flex-col justify-center  items-center ml-8  ">
          <div className=" text-sm ">{userChatText.length}/200</div>
          <button
            disabled={userChatText.length === 0 || userChatText.length > 200}
            className=" text-sm rounded-lg bg-gray-100 "
            onClick={sendUserChat}
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};
export default LiveChat;
