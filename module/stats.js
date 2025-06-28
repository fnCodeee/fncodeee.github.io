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
  const iconUrl = `https://cdn.simpleicons.org/${values[i].icon}/gray`;
  div.className = "flex flex-col py-8 items-center gap-2 bg-zinc-800 p-4 rounded-2xl shadow-xl shadow-black/30";
  div.innerHTML = `
    <img class="w-12 h-12" src="${iconUrl}" alt="${values[i].title}">
    <span class="text-2xl mt-3 font-bold text-stone-100">${values[i].title}</span>
    <span class="text-3xl text-green-600 font-semibold">${values[i].value}</span>
  `;
  stats.appendChild(div);
}
