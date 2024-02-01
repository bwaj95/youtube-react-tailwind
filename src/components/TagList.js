import TagButton from "./TagButton";

const TagList = () => {
  const tagsList = [
    "All",
    "Movies",
    "Songs",
    "National",
    "State",
    "Cricket",
    "Cooking",
    "Serial",
  ];

  return (
    <div className="flex my-1">
      {tagsList.map((tag, index) => (
        <TagButton key={index} name={tag} />
      ))}
    </div>
  );
};
export default TagList;
