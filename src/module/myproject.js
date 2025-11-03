import myProjectDatas from "../api/myProjectDatas.js";

const project_container = document.getElementById("myprojects__container");

const container = document.createElement("div");
container.className = "w-full grid grid-cols-1 gap-4 lg:grid-cols-3"; 

for (let i = 0; i < myProjectDatas.length; i++) {
  const projectDiv = document.createElement("div");
  projectDiv.className = "w-full h-full rounded-2xl overflow-hidden  shadow-xl shadow-black/40";
  projectDiv.setAttribute("key", myProjectDatas[i].id);

  const a = document.createElement("a");
  a.href = myProjectDatas[i].href;
  a.target = "_blank";

  const img = document.createElement("img");
  img.src = myProjectDatas[i].image;
  img.alt = "images";
  img.className = "w-full";

  a.appendChild(img);
  projectDiv.appendChild(a);
  container.appendChild(projectDiv);
}

// ➡️ Setelah semua project sudah dibuat, baru append sekali
project_container.appendChild(container);
