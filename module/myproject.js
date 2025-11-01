const array = [
  {
    id: 1,
    image: "./assets/project_media/rog.png",
    href: "https://rog-theme-site.netlify.app/",
  },
  {
    id: 2,
    image: "./assets/project_media/todo.png",
    href: "https://todolistapp-adb06.web.app/",
  },
  {
    id: 3,
    image: "./assets/project_media/rpl.png",
    href: "https://rpl-landingpage.netlify.app/",
  },
];
const project_container = document.getElementById("myprojects__container");

const container = document.createElement("div");
container.className = "w-full grid grid-cols-1 gap-4 lg:grid-cols-3 shadow-xl shadow-black/40"; 

for (let i = 0; i < array.length; i++) {
  const projectDiv = document.createElement("div");
  projectDiv.className = "w-full h-full rounded-2xl overflow-hidden";
  projectDiv.setAttribute("key", array[i].id);

  const a = document.createElement("a");
  a.href = array[i].href;
  a.target = "_blank";

  const img = document.createElement("img");
  img.src = array[i].image;
  img.alt = "images";
  img.className = "w-full";

  a.appendChild(img);
  projectDiv.appendChild(a);
  container.appendChild(projectDiv);
}

// ➡️ Setelah semua project sudah dibuat, baru append sekali
project_container.appendChild(container);
