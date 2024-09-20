'use client';
import React, { useState } from "react";
import { AiFillLike, AiOutlineLike } from "react-icons/ai";

const Page = () => {
  const [liked, setLiked] = useState(false);
  const [counter, setCounter] = useState(0);

  const handleLike = () => {
    if (liked) {
      setCounter(0); // Reset to 0 when unliking
    } else {
      setCounter(1); // Set to 1 when liking // like is false at first so onclick it set to 1
    }
    setLiked((prev)=>!prev); // Toggle like state
  };

  return (
    <div className="flex p-4 gap-x-4 text-sm items-center justify-center ">
      <p>Like this post:</p>
      <button
        onClick={handleLike}
        className="transition flex items-center justify-center"
      >
        {liked ? (
          <AiFillLike className="text-green-500 w-5 h-5" />
        ) : (
          <AiOutlineLike className="w-5 h-5" />
        )}
      </button>
      {counter}
    </div>
  );
};

export default Page;
