import { useLikeCounter } from "../hooks/LikeCounter";

const LikeCounter = () => {
  const {
    likeCount,
    dislikeCount,
    handleDislike,
    handleLike,
    handleResetLike,
  } = useLikeCounter();

  return (
    <div className="counter">
      <button onClick={handleLike}>Like</button>
      <p>{likeCount}</p>
      <button onClick={handleDislike}>Dislike</button>
      <p>{dislikeCount}</p>
      <button onClick={handleResetLike}>Reset</button>
    </div>
  );
};

export default LikeCounter;
