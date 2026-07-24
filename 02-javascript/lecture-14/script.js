const profiles = [
  {
    fullname: "Sophia Carter",
    image: "https://source.unsplash.com/300x300/?woman,portrait",
    profession: "UI/UX Designer",
    description: "Designs beautiful, user-friendly interfaces with a focus on accessibility and usability.",
    tags: ["Figma", "UI Design", "UX Research", "Prototyping"]
  },
  {
    fullname: "James Wilson",
    image: "https://source.unsplash.com/300x300/?man,developer",
    profession: "Full Stack Developer",
    description: "Builds scalable web applications using modern JavaScript frameworks.",
    tags: ["React", "Node.js", "MongoDB", "TypeScript"]
  },
  {
    fullname: "Emma Johnson",
    image: "https://source.unsplash.com/300x300/?female,photographer",
    profession: "Photographer",
    description: "Captures authentic portraits and breathtaking travel photography.",
    tags: ["Portrait", "Travel", "Lightroom", "Canon"]
  }
];

let info = ""
profiles.forEach((elem)=>{
    info = info + `<div class="card">
        <img ${elem.image} alt="img">
        <h3>${elem.fullname}</h3>
        <h4>${elem.profession}</h4>
        <p>${elem.description}</p>
       </div>`
})

let main = document.querySelector('main')
main.innerHTML = info;




