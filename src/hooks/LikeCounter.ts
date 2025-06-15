import { useState } from "react";

export const useLikeCounter = () => {
  const [likeCount, setLikeCount] = useState(0);
  const [dislikeCount, setDislikeCount] = useState(0);

  const handleLike = () => {
    setLikeCount(likeCount + 1);
  };
  const handleDislike = () => {
    setDislikeCount(dislikeCount + 1);
  };
  const handleResetLike = () => {
    setLikeCount(0);
    setDislikeCount(0);
  };

  return {
    likeCount,
    dislikeCount,
    handleLike,
    handleDislike,
    handleResetLike,
  };
};
