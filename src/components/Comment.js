import { useState } from "react";
import { formatTimeAgo } from "../helpers/timeago";

import {
  VscThumbsup,
  VscThumbsupFilled,
  VscThumbsdown,
  VscThumbsdownFilled,
} from "react-icons/vsc";
import { formatNumeral } from "../helpers/numeral";

const Comment = ({ data }) => {
  const { id, snippet } = data;

  const { topLevelComment, totalReplyCount } = snippet;

  const {
    textDisplay,
    textOriginal,
    authorDisplayName,
    authorProfileImageUrl,
    likeCount,
    publishedAt,
    updatedAt,
  } = topLevelComment.snippet;

  const [commentLiked, setCommentLiked] = useState(null);

  const commentLikeHandler = () => {
    if (commentLiked) {
      setCommentLiked(null);
    } else {
      setCommentLiked(true);
    }
  };

  const commentUnlikeHandler = () => {
    if (commentLiked === false) {
      setCommentLiked(null);
    } else {
      setCommentLiked(false);
    }
  };

  return (
    <div className=" flex shadow-sm p-2 rounded-lg my-1 ">
      <div className=" w-min flex items-start  ">
        <div className=" w-10 h-10 rounded-full overflow-hidden ">
          <img
            src={authorProfileImageUrl}
            alt={authorDisplayName}
            className=" w-full h-full "
          />
        </div>
      </div>

      <div className="ml-2 flex flex-col gap-y-2">
        <div className=" flex gap-x-2 text-sm ">
          {/* Author Name */}
          <p className="font-semibold text-black">{authorDisplayName}</p>
          {/* Comment creation date */}
          <p className=" opacity-80  ">{formatTimeAgo(publishedAt)}</p>
          {/* Edited or no */}
          {publishedAt !== updatedAt && <p>(edited)</p>}
        </div>

        {/* Comment content */}
        <div>
          <p className="  ">{textOriginal}</p>
        </div>

        {/* User interaction buttons div */}
        <div className="flex h-8 gap-x-6 ">
          {/* Like button */}
          <div className="h-full flex items-center gap-x-2 ">
            <div
              className="h-full w-2 mx-1 cursor-pointer"
              onClick={commentLikeHandler}
            >
              {commentLiked !== null && commentLiked === true ? (
                <VscThumbsupFilled className="h-full" />
              ) : (
                <VscThumbsup className="h-full " />
              )}
            </div>
            {likeCount > 0 && (
              <div className="h-full w-2 flex items-center ">
                <p className="mx-auto text-sm ">{formatNumeral(likeCount)}</p>
              </div>
            )}
          </div>

          {/* Unlike button */}
          <div className="h-full flex items-center gap-x-2 ">
            <div
              className="h-full w-2 mx-1 cursor-pointer"
              onClick={commentUnlikeHandler}
            >
              {commentLiked !== null && commentLiked === false ? (
                <VscThumbsdownFilled className="h-full" />
              ) : (
                <VscThumbsdown className="h-full" />
              )}
            </div>
            <div className="h-full w-2 flex items-center">
              <p className="mx-auto text-sm"></p>
            </div>
          </div>

          <div className=" mx-1 flex items-center ">
            <p className=" font-semibold text-gray-700 text-xs ">Reply</p>
          </div>
        </div>

        {/* Replies div */}
        <div>
          {/* Icon */}
          <div></div>

          <div className=" text-blue-700 font-semibold ">
            {totalReplyCount > 0 && <p>{totalReplyCount} replies</p>}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Comment;
