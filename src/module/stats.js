import statsValues from "../api/statsDatas.js";

const stats = document.getElementById("stats__container");

for (let i = 0; i < statsValues.length; i++) {
  const div = document.createElement("div");
  const iconUrl = `https://cdn.simpleicons.org/${statsValues[i].icon}/ffffff`;   
  div.className = "flex flex-col gap-2 items-center justify-center space-y-2 rounded-xl border-none border-green-900 bg-zinc-800 px-2 py-4 shadow-xl shadow-black/30 sm:p-6";
  div.innerHTML = `
    <img class="w-8 h-8 lg:w-10 lg:h-10" src="${iconUrl}" alt="${statsValues[i].title}">
    <span class="text-sm lg:text-2xl lg:mt-3 font-bold text-white">${statsValues[i].title}</span>
    <span class="text-2xl lg:text-3xl text-green-600 font-semibold">${statsValues[i].value}</span>
  `;
  stats.appendChild(div);
}
