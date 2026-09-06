import React, { createContext } from "react";

export const postContext = createContext();

const PostContext = (props) => {
  const posts = [
    {
      id: 1,
      username: "rahul_dev",
      title: "Learning React",
      content: "Today I started learning React.",
    },
    {
      id: 2,
      username: "priya_code",
      title: "My First Project",
      content: "I built my first React project.",
    },
  ];

  return (
    <postContext.Provider value={posts}>{props.children}</postContext.Provider>
  );
};

export default PostContext;
