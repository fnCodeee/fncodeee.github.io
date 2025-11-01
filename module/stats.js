const values = [
  {
    id: 1,
    icon: "theconversation",
    title: "Connections",
    value: "6",
  },
  {
    id: 2,
    icon: "googlecalendar",
    title: "Years of Experience",
    value: "2",
  },
  {
    id: 3,
    icon: "espressif",
    title: "IoT Prototypes",
    value: "4",
  },
  {
    id: 4,
    icon: "createreactapp",
    title: "Web Apps",
    value: "5+",
  },
];

const stats = document.getElementById("stats__container");

for (let i = 0; i < values.length; i++) {
  const div = document.createElement("div");
  const iconUrl = `https://cdn.simpleicons.org/${values[i].icon}/ffffff`;   
  div.className = "flex flex-col gap-2 items-center justify-center space-y-2 rounded-xl border-none border-green-900 bg-zinc-800 px-2 py-4 shadow-xl shadow-black/30 sm:p-6";
  div.innerHTML = `
    <img class="w-8 h-8 lg:w-10 lg:h-10" src="${iconUrl}" alt="${values[i].title}">
    <span class="text-sm lg:text-2xl lg:mt-3 font-bold text-white">${values[i].title}</span>
    <span class="text-2xl lg:text-3xl text-green-600 font-semibold">${values[i].value}</span>
  `;
  stats.appendChild(div);
}
