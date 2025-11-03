import profile from "../api/profileDatas.js";


const profile_list = document.getElementById("profile_list");

for (let i = 0; i < profile.length; i++) {
  const li = document.createElement("li");
  li.className = "col-span-1 flex items-start gap-x-2";
  li.innerHTML = `
  ${profile[i].logo}
  <span class="text-xs font-bold text-white sm:text-sm">${profile[i].label}:</span>
  <span class="text-xs text-gray-200 sm:text-sm">${profile[i].value}</span>
  `;

  profile_list.appendChild(li);
}