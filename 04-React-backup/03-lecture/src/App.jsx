import React, { useState } from "react";
import Card from "./components/Card";

const App = () => {
  const [card, setcard] = useState([
    {
      id: 1,
      name: "Aarav Sharma",
      img: "https://i.pravatar.cc/300?img=11",
      description:
        "Frontend developer who loves building clean React interfaces.",
      like: 0,
      dislike: 0,
    },
    {
      id: 2,
      name: "Priya Patil",
      img: "https://i.pravatar.cc/300?img=47",
      description:
        "UI/UX designer focused on simple and user friendly layouts.",
      like: 0,
      dislike: 0,
    },
    {
      id: 3,
      name: "Rohan Deshmukh",
      img: "https://i.pravatar.cc/300?img=12",
      description:
        "Backend developer working with Node.js, Express and MongoDB.",
      like: 0,
      dislike: 0,
    },
    {
      id: 4,
      name: "Sneha Kulkarni",
      img: "https://i.pravatar.cc/300?img=45",
      description:
        "Full stack developer who enjoys solving real world problems.",
      like: 0,
      dislike: 0,
    },
    {
      id: 5,
      name: "Vikram Singh",
      img: "https://i.pravatar.cc/300?img=15",
      description: "Open source contributor and JavaScript enthusiast.",
      like: 0,
      dislike: 0,
    },
    {
      id: 6,
      name: "Neha Joshi",
      img: "https://i.pravatar.cc/300?img=32",
      description: "Data analyst who turns numbers into useful dashboards.",
      like: 0,
      dislike: 0,
    },
    {
      id: 7,
      name: "Karan Mehta",
      img: "https://i.pravatar.cc/300?img=33",
      description: "DevOps learner exploring Docker, CI/CD and cloud hosting.",
      like: 0,
      dislike: 0,
    },
    {
      id: 8,
      name: "Anjali Nair",
      img: "https://i.pravatar.cc/300?img=44",
      description: "Mobile app developer building apps with React Native.",
      like: 0,
      dislike: 0,
    },
    {
      id: 9,
      name: "Rahul Verma",
      img: "https://i.pravatar.cc/300?img=52",
      description:
        "Problem solver who practices DSA and competitive coding daily.",
      like: 0,
      dislike: 0,
    },
    {
      id: 10,
      name: "Pooja Iyer",
      img: "https://i.pravatar.cc/300?img=49",
      description: "Cybersecurity student interested in ethical hacking.",
      like: 0,
      dislike: 0,
    },
  ]);

  localStorage.setItem("emoInfo", JSON.stringify(card));

  const handleLike = (id) => {
    // console.log("clicked id:", id);  the id arrives here
    setcard((prev) =>
      prev.map((items) =>
        items.id === id ? { ...items, like: items.like + 1 } : items,
      ),
    );

    localStorage.setItem("emoInfo", JSON.stringify(card));
  };

  const handleDisLike = (id) => {
    // console.log("Dislike id ", id);

    setcard((prev) =>
      prev.map((items) =>
        items.id === id && items.dislike >= 0
          ? { ...items, dislike: items.dislike + 1 }
          : items,
      ),
    );
    localStorage.setItem("emoInfo", JSON.stringify(card));
  };
  return (
    <div className="flex flex-wrap gap-10 mt-4 mx-10">
      {card.map((elem) => {
        return (
          <Card
            data={elem}
            key={elem.id}
            handleLike={handleLike}
            handleDisLike={handleDisLike}
          />
        );
      })}
    </div>
  );
};

export default App;
