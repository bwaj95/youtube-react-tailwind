const ChatMessage = ({ name, message }) => {
  return (
    <div className="flex items-center gap-x-2 shadow-sm px-2 ">
      <img
        src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
        alt="user"
        className=" h-12 "
      />
      <p className=" font-bold ">{name}</p>
      <p>{message}</p>
    </div>
  );
};
export default ChatMessage;
