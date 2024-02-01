const TagButton = ({ name }) => {
  return (
    <div>
      <button className=" m-2 px-4 py-1 bg-gray-200 hover:bg-gray-300 cursor-pointer rounded-md ">
        {name}
      </button>
    </div>
  );
};
export default TagButton;
