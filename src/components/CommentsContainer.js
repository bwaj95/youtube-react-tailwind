import { useEffect, useState } from "react";
import { YT_COMMENT_THREADS_API } from "../utils/constants";
import Comment from "./Comment";

// const commentsData = [
//   {
//     name: "Akshay",
//     text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae, repellendus.",
//     replies: [],
//   },
//   {
//     name: "Akshay",
//     text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae, repellendus.",
//     replies: [
//       {
//         name: "Akshay",
//         text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae, repellendus.",
//         replies: [
//           {
//             name: "Akshay",
//             text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae, repellendus.",
//             replies: [
//               {
//                 name: "Akshay",
//                 text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae, repellendus.",
//                 replies: [
//                   {
//                     name: "Akshay",
//                     text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae, repellendus.",
//                     replies: [],
//                   },
//                   {
//                     name: "Akshay",
//                     text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae, repellendus.",
//                     replies: [],
//                   },
//                 ],
//               },
//               {
//                 name: "Akshay",
//                 text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae, repellendus.",
//                 replies: [],
//               },
//             ],
//           },
//           {
//             name: "Akshay",
//             text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae, repellendus.",
//             replies: [],
//           },
//           {
//             name: "Akshay",
//             text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae, repellendus.",
//             replies: [
//               {
//                 name: "Akshay",
//                 text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae, repellendus.",
//                 replies: [],
//               },
//             ],
//           },
//         ],
//       },
//       {
//         name: "Akshay",
//         text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae, repellendus.",
//         replies: [],
//       },
//     ],
//   },
//   {
//     name: "Akshay",
//     text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae, repellendus.",
//     replies: [],
//   },
//   {
//     name: "Akshay",
//     text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae, repellendus.",
//     replies: [],
//   },
// ];

/**
 * Renders first comment and recursively calls the its replies.
 */
const CommentsList = ({ comments }) => {
  return comments.map((comment, index) => (
    <div key={index} className="">
      <Comment data={comment} />
    </div>
  ));
};

const CommentsContainer = ({ videoId }) => {
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [errorData, setErrorData] = useState(null);

  const getCommentsThread = async () => {
    try {
      const response = await fetch(
        `${YT_COMMENT_THREADS_API}&videoId=${videoId}`
      );
      const data = await response.json();

      console.log(data.items);

      setComments(data.items);
    } catch (error) {
      console.log("Error fetching comments.");
      console.error(error);
    }
  };
  useEffect(() => {
    getCommentsThread();
  }, []);

  return (
    <div className=" w-[1200px] m-5 p-2 ">
      <h1 className=" font-bold text-2xl mb-2 ">
        {comments?.length} Comments:
      </h1>
      {!isLoading && comments.length > 0 && (
        <CommentsList comments={comments} />
      )}
    </div>
  );
};
export default CommentsContainer;
