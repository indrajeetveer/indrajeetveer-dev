import React from 'react'

const App = () => {
const users = [
  {
    id: 1,
    name: "Wade Wilson",
    role: "UI/UX Designer",
    type: "Epic Coder",
    expert: "UI/UX & Graphic Design",
    age: 32,
    price: "$55/hr",
    status: "available",
    skills: ["UI", "UX", "Photoshop"],
    extraSkills: 4,
    description:
      "Wade is a 32 year old UI/UX designer, with an impressive portfolio behind him.",
    buttonText: "VIEW PROFILE",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e"
  },

  {
    id: 2,
    name: "Peter Parker",
    role: "Frontend Developer",
    type: "Freelancer",
    expert: "Frontend Development",
    age: 25,
    price: "$50/hr",
    status: "available",
    skills: ["HTML", "CSS", "React"],
    extraSkills: 3,
    description:
      "Peter is a creative frontend developer who loves building modern websites.",
    buttonText: "VIEW PROFILE",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d"
  },

  {
    id: 3,
    name: "Tony Stark",
    role: "Full Stack Developer",
    type: "Epic Coder",
    expert: "Full Stack Development",
    age: 38,
    price: "$80/hr",
    status: "available",
    skills: ["React", "Node", "MongoDB"],
    extraSkills: 5,
    description:
      "Tony is an experienced full stack developer focused on scalable applications.",
    buttonText: "VIEW PROFILE",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d"
  },

  {
    id: 4,
    name: "Bruce Wayne",
    role: "Product Designer",
    type: "Freelancer",
    expert: "Product & UX Design",
    age: 35,
    price: "$70/hr",
    status: "available",
    skills: ["Figma", "UI", "UX"],
    extraSkills: 4,
    description:
      "Bruce is a product designer who creates clean and user-friendly experiences.",
    buttonText: "VIEW PROFILE",
    image: "https://images.unsplash.com/photo-1507591064344-4c6ce005b128"
  },

  {
    id: 5,
    name: "Clark Kent",
    role: "Web Developer",
    type: "Epic Coder",
    expert: "Web Development",
    age: 30,
    price: "$60/hr",
    status: "available",
    skills: ["JavaScript", "React", "CSS"],
    extraSkills: 4,
    description:
      "Clark is a passionate web developer who builds responsive web applications.",
    buttonText: "VIEW PROFILE",
    image: "https://images.unsplash.com/photo-1501196354995-cbb51c65aaea"
  },

  {
    id: 6,
    name: "Natasha Romanoff",
    role: "UI Designer",
    type: "Freelancer",
    expert: "UI & Visual Design",
    age: 29,
    price: "$65/hr",
    status: "available",
    skills: ["Figma", "Photoshop", "UI"],
    extraSkills: 3,
    description:
      "Natasha is a talented UI designer specializing in modern digital interfaces.",
    buttonText: "VIEW PROFILE",
    image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce"
  },

  {
    id: 7,
    name: "Steve Rogers",
    role: "Backend Developer",
    type: "Epic Coder",
    expert: "Backend & Server Development",
    age: 34,
    price: "$75/hr",
    status: "available",
    skills: ["Node.js", "Python", "SQL"],
    extraSkills: 5,
    description:
      "Steve is a backend developer experienced in building secure server systems.",
    buttonText: "VIEW PROFILE",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d"
  },

  {
    id: 8,
    name: "Diana Prince",
    role: "UX Researcher",
    type: "Freelancer",
    expert: "UX Research & Design",
    age: 31,
    price: "$58/hr",
    status: "available",
    skills: ["UX", "Research", "Figma"],
    extraSkills: 3,
    description:
      "Diana helps teams understand users and create better digital experiences.",
    buttonText: "VIEW PROFILE",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2"
  },

  {
    id: 9,
    name: "Barry Allen",
    role: "React Developer",
    type: "Epic Coder",
    expert: "React & Frontend Development",
    age: 27,
    price: "$52/hr",
    status: "available",
    skills: ["React", "JavaScript", "Tailwind"],
    extraSkills: 4,
    description:
      "Barry is a React developer who enjoys creating fast and interactive interfaces.",
    buttonText: "VIEW PROFILE",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e"
  },

  {
    id: 10,
    name: "Arthur Curry",
    role: "Mobile Developer",
    type: "Freelancer",
    expert: "Mobile App Development",
    age: 33,
    price: "$68/hr",
    status: "available",
    skills: ["Flutter", "Dart", "Firebase"],
    extraSkills: 4,
    description:
      "Arthur develops cross-platform mobile applications with modern technologies.",
    buttonText: "VIEW PROFILE",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7"
  },

  {
    id: 11,
    name: "Wanda Maximoff",
    role: "Graphic Designer",
    type: "Epic Coder",
    expert: "Graphic & Visual Design",
    age: 28,
    price: "$48/hr",
    status: "available",
    skills: ["Photoshop", "Illustrator", "Figma"],
    extraSkills: 5,
    description:
      "Wanda is a creative graphic designer with a strong eye for visual details.",
    buttonText: "VIEW PROFILE",
    image: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df"
  },

  {
    id: 12,
    name: "Scott Lang",
    role: "JavaScript Developer",
    type: "Freelancer",
    expert: "JavaScript Development",
    age: 30,
    price: "$55/hr",
    status: "available",
    skills: ["JavaScript", "React", "Git"],
    extraSkills: 3,
    description:
      "Scott is a JavaScript developer who builds simple and efficient web solutions.",
    buttonText: "VIEW PROFILE",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d"
  }
];

  return (
      <div className='flex flex-wrap'>
          {users.map((elem)=>{
              return (
        <div className=' bg-white border-[0.6px] rounded-[7px] w-100 h-123 m-10 shadow-2xl'>
        <div className='flex items-center justify-between mx-4 mt-4'>
           <button className='border-2 px-4 py-1 bg-green-700 font-bold text-white rounded-3xl'>{elem.status}</button>
           <h1 className='text-2xl font-bold'>{elem.price}</h1>
        </div>

        <div className='flex items-center justify-center'>
          <img className='h-[130px] w-[130px] border-1 rounded-[50%]  bg-cover bg-center bg-no-repeat border-none shadow-2xl ' src={elem.image} alt="img" />
        </div>

        <div className='text-center mt-5'>
          <h1 className='font-bold text-2xl'>{elem.name}</h1>
          <p className='font-medium text-shadow-mauve-300'>{elem.expert}</p>
          <h3 className='text-sky-400 font-medium'>{elem.type}</h3>
        </div>

        <div className='flex items-center justify-center gap-3 mt-3'>
             <h1 className='border-[1px] px-4 py-1 rounded-[18px] font-bold'>{elem.skills[0]}</h1>
             <h1 className='border-[1px] px-4 py-1 rounded-[18px] font-bold'>{elem.skills[1]}</h1>
             <h1 className='border-[1px] px-4 py-1 rounded-[18px] font-bold'>{elem.skills[2]}</h1>
             <h1 className='border-[1px] px-4 py-1 rounded-[18px] text-white font-bold bg-sky-500'>+{elem.extraSkills}</h1>
        </div>

        <div className='text-center mt-6 text-shadow-mauve-100'>
          <p className='textfa-medium px-3'>{elem.description}</p>
        </div>

        <div className='flex items-center justify-center mt-5'>
          <h1 className='bg-black h-[0.5px] w-30'></h1>
        </div>

        <div className='text-center mt-6'>
          <h1 className='text-medium font-bold'>{elem.buttonText}</h1>
        </div>
    </div>
              )
          })}
      </div>
  )
}

export default App
