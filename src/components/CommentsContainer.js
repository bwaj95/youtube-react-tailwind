const commentsData = [
  {
    name: "Akshay",
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae, repellendus.",
    replies: [],
  },
  {
    name: "Akshay",
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae, repellendus.",
    replies: [
      {
        name: "Akshay",
        text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae, repellendus.",
        replies: [
          {
            name: "Akshay",
            text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae, repellendus.",
            replies: [
              {
                name: "Akshay",
                text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae, repellendus.",
                replies: [
                  {
                    name: "Akshay",
                    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae, repellendus.",
                    replies: [],
                  },
                  {
                    name: "Akshay",
                    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae, repellendus.",
                    replies: [],
                  },
                ],
              },
              {
                name: "Akshay",
                text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae, repellendus.",
                replies: [],
              },
            ],
          },
          {
            name: "Akshay",
            text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae, repellendus.",
            replies: [],
          },
          {
            name: "Akshay",
            text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae, repellendus.",
            replies: [
              {
                name: "Akshay",
                text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae, repellendus.",
                replies: [],
              },
            ],
          },
        ],
      },
      {
        name: "Akshay",
        text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae, repellendus.",
        replies: [],
      },
    ],
  },
  {
    name: "Akshay",
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae, repellendus.",
    replies: [],
  },
  {
    name: "Akshay",
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae, repellendus.",
    replies: [],
  },
];

const Comment = ({ data }) => {
  const { name, text, replies } = data;

  return (
    <div className=" flex shadow-sm bg-gray-100 p-2 rounded-lg my-8 ">
      <img
        src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
        alt="user"
        className=" h-8 "
      />
      <div className=" px-3 ">
        <p className=" font-bold ">{name}</p>
        <p>{text}</p>
      </div>
    </div>
  );
};

/**
 * Renders first comment and recursively calls the its replies.
 */
const CommentsList = ({ comments }) => {
  return comments.map((comment, index) => (
    <div key={index} className="">
      <Comment data={comment} />

      {comment.replies.length > 0 && (
        <div className=" pl-5 border border-l-slate-700 ml-5 ">
          <CommentsList comments={comment.replies} />
        </div>
      )}
    </div>
  ));
};

const CommentsContainer = () => {
  return (
    <div className=" w-[1200px] m-5 p-2 ">
      <h1 className=" font-bold text-2xl mb-2 ">Comments:</h1>
      <CommentsList comments={commentsData} />
    </div>
  );
};
export default CommentsContainer;
