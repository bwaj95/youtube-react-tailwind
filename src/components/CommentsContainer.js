import { useEffect, useState } from "react";
import { YT_COMMENT_THREADS_API } from "../utils/constants";
import Comment from "./Comment";
import Spinner from "./Spinner";

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
      setIsLoading(true);
      const response = await fetch(
        `${YT_COMMENT_THREADS_API}&videoId=${videoId}`
      );
      const data = await response.json();

      // console.log(data.items);

      setComments(data.items);

      setIsError(false);
      setErrorData(null);
    } catch (error) {
      // console.log("Error fetching comments.");
      // console.error(error);

      setIsError(true);
      setErrorData(error);
    }

    setIsLoading(false);
  };

  useEffect(() => {
    getCommentsThread();
  }, []);

  let content;

  if (isLoading) {
    content = (
      <div className=" w-full min-h-screen flex items-center justify-center ">
        <Spinner />
      </div>
    );
  } else if (isError) {
    content = (
      <div className="w-full h-fit bg-red-500 text-white flex flex-wrap ">
        <p>{errorData.message}</p>
      </div>
    );
  } else {
    content = (
      <>
        <h1 className=" font-bold text-2xl mb-2 ">
          {comments?.length} Comments:
        </h1>
        {!isLoading && comments.length > 0 && (
          <CommentsList comments={comments} />
        )}
      </>
    );
  }

  return (
    <div className="w-[90%] mx-auto xl:mx-0 xl:w-[1200px] m-5 p-2 ">
      {content}
    </div>
  );
};
export default CommentsContainer;
